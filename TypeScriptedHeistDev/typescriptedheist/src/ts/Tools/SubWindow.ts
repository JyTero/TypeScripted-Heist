import { Delay } from "../../Tools";
import { FrameTimeMS, WindowManagerInstance } from "../MainPageInitialisation";
import { PageDisplayManager } from "../PageDisplay";
import { PageElement } from "../UI/PageElement";

export abstract class SubWindow {
    protected window: Window;
    protected PDM: PageDisplayManager;
    protected windowName: string;
    protected htmlPageName: string;
    protected appRoot: PageElement;

    protected constructor(name: string, html: string) {
        this.windowName = name;
        this.htmlPageName = html;
    }

    private CreateSubWindow() {
        const subWindow = window.open(`${this.htmlPageName}.html`, this.windowName, "width=600,height=400");
        if (subWindow != null) {
            subWindow.addEventListener("DOMContentLoaded", this.OnPageOpen.bind(this));
            this.window = subWindow;
            this.PDM = new PageDisplayManager(`${this.windowName}PDM`, this.window);
            WindowManagerInstance.RegisterWindow(this.window);
        }
        else
            return;
    }

    protected async OpenSubWindow() {
        this.CreateSubWindow();

        if (this.window == undefined) {
            const btn = document.createElement("button");
            btn.textContent = `Open ${this.windowName}`;

            btn.addEventListener("click", () => {
                this.CreateSubWindow();

            });
            await Delay(FrameTimeMS);

            document.body.appendChild(btn);
        }
    }

    protected OnPageOpen() {
        var appHTML: HTMLElement | null = this.window.document.getElementById("App");
        if (appHTML)
            this.appRoot = this.PDM.CreatePageElementFromRoot(appHTML, `${this.windowName}App`);
        this.IndividualOnPageOpen();
    }
    protected abstract IndividualOnPageOpen(): void;

    public AppendToRoot(pe:PageElement){
        this.appRoot.AppendChild(pe);
    }
}