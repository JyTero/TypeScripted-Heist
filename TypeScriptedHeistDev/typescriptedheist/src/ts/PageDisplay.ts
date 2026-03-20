import { Delay } from "../Tools";

import { Sprite } from "./Canvas/Sprite";
import { CanvasGraphicsInstance, FrameTimeMS, IsDebug } from "./MainPageInitialisation";
import { DOMElementType, PageElement } from "./UI/PageElement";


export class PageDisplayManager {

    public ThisPage: string;
    private pageElements: PageElement[] = [];

    public NewPageElement(page: PageElement) {
        this.pageElements.push(page);
    }

    constructor(name: string) {
        this.ThisPage = name;
    }
    // public ExistingPageElement(element: HTMLElement, name: string) {
    //     const pElement = new PageElement(element, name, );
    //     this.pageElements.push(pElement);
    // }

    //Find
    public FindPageElementByHTMLElement(html: HTMLElement): PageElement | null {
        var i = 0;
        this.pageElements.forEach(element => {
            if (element.Element === html) {
                // if (IsDebug)
                //     console.log(`Match by HTMLElement: ${element.Element} is  ${html} | ${element.Element.id} vs ${html.id}`);
                return element;
            }
            // else if (IsDebug)
            //     console.log(`Match by HTMLElement: ${element.Element} is not ${html} | ${element.Element.id} vs ${html.id}`);
        });
        if (IsDebug)
            console.log(`Couldn't find PageElement containing ${html.id}|${html.className}!`);
        return null
    }
    public FindPageElementByElementId(id: string): PageElement | null {
        for (var element of this.pageElements)
            if (element.Id == id) {
                // if (IsDebug)
                //     console.log(`Match by ID: ${element.Id} is  ${id}`);
                return element;
            }
            // else if (IsDebug)
            //     console.log(`No match by ID: ${element.Id} is  ${id}`);

        if (IsDebug)
            console.log(`Couldn't find PageElement with id ${id} `);
        return null;
    }

    public PrintAllElmentsDEBUG() {
        var i = 0;
        this.pageElements.forEach(element => {
            console.log(`${i}.Element: ${element.ElementName},  id: ${element.Id},  classes: ${element.Element.classList} `);
            i++;
        });
    }
}

//OLD stuff
const history = document.getElementById("TextHistory");
const canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

export async function AddNewHistoryDiv(historyText: string) {

    const newEntry = document.createElement("div");
    const p = document.createElement("p");

    newEntry.className = "HistoryEntry";

    p.textContent = historyText;
    newEntry.appendChild(p);

    history?.insertBefore(newEntry, history.firstChild);
    await Delay(FrameTimeMS);
}
TestImage();
function TestImage() {
    // Load image
    const image = new Image();
    image.src = "src/Assets/PictoBun.png";


    image.onload = () => {
        if (ctx != null) {

            ctx.moveTo(0, canvas.height / 2);
            ctx.lineTo(canvas.width, canvas.height / 2);

            ctx.moveTo(0, canvas.height / 4);
            ctx.lineTo(canvas.width, canvas.height / 4);

            ctx.moveTo(0, (canvas.height / 4 * 3));
            ctx.lineTo(canvas.width, (canvas.height / 4 * 3));

            ctx.moveTo(canvas.width / 2, 0);
            ctx.lineTo(canvas.width / 2, canvas.height);

            ctx.moveTo(canvas.width / 4, 0);
            ctx.lineTo(canvas.width / 4, canvas.height);


            ctx.moveTo((canvas.width / 4 * 3), 0);
            ctx.lineTo((canvas.width / 4 * 3), canvas.height);

            ctx.stroke();

            // var sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 0, 0, 10, 10);
            // sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 25, 25, 10, 10);
            // sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 50, 50, 10, 10);
            // sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 75, 75, 10, 10);
            // sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 100, 75, 10, 10);
        }
    };

    image.onerror = () => {
        console.error("Failed to load image.");
    };
}