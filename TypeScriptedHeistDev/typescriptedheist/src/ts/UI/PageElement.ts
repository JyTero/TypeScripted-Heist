import { Delay } from "../../Tools";
import { FrameTimeMS, IsDebug } from "../MainPageInitialisation";
import { PageDisplayManager } from "../PageDisplay";
import { GetHTMLElementChildren, IsHTMLElement as IsHTMLElement } from "../Tools/HTMLHelpers";

export type DOMElementType = keyof HTMLElementTagNameMap;

// class PageElement<T extends DOMElementType> {
//     public ElementName: string;
//     private element: HTMLElementTagNameMap[T];
//     private elementParent: HTMLElementTagNameMap[T];
//     private childElements: PageElement<any>[] = [];

//     pageElement?:HTMLElementTagNameMap[T]

//     constructor(elementType: T, name: string) {

//         this.element = document.createElement(elementType);
//         this.ElementName = name;

//         this.element.id = name;

//         //this.data = data;
//     }

// }

export class PageElement {
    public ElementName: string;
    private element: HTMLElement;
    public get Element(): HTMLElement {
        return this.element;
    }
    private elementParent: PageElement;
    public get ElementParent(): PageElement {
        return this.elementParent;
    }
    private childElements: PageElement[] = [];

    private id: string;
    public get Id(): string {
        return this.id;
    }

    private PDM:PageDisplayManager;

    //pageElement?:HTMLElementTagNameMap[T]

    // constructor(element: HTMLElement, name: string)
    constructor(arg1: string | HTMLElement, name: string, pageManager: PageDisplayManager) {

        this.ElementName = name;
        this.PDM = pageManager;

        //If blank type, html element already exists, create object with that
        if (IsHTMLElement(arg1)) {
            this.PreExistingElement(arg1, pageManager);
        }
        else {
            this.CreateNewHTMLElement(arg1, name);

        }
        //this.data = data;
    }

    private async CreateNewHTMLElement(htmlElmentType: string, name: string) {
        const n = htmlElmentType as DOMElementType;
        this.element = document.createElement(n);
        if (!this.element) {
            throw console.error("Invalid element type in " + name + "!");
            return;
        }

        this.id = name;
        this.element.id = this.id;
        await Delay(FrameTimeMS);
    }

    private PreExistingElement(htmlElement: HTMLElement, pageManager: PageDisplayManager) {
        this.element = htmlElement;
        this.id = htmlElement.id;

        var v;
        if (htmlElement.id != "App" && this.element.parentElement) {

            //v = pageManager.FindPageElementByHTMLElement(this.element.parentElement);
            v = pageManager.FindPageElementByElementId(this.element.parentElement.id);
            //If parent exists as a pageelment, add it as parent, else turn parent into pageelement
            if (v)
                this.AddParent(v);
            else if (this.element.parentElement.id != "app")
                this.AddParent(pageManager.CreateNewPageElement(this.element.parentElement, this.element.parentElement.id))
            else
                if (IsDebug)
                    console.log(`${this.ElementName} doens't seem to have valid parent`);


            // const children = Array.from(htmlElement.children)
            //     .filter((el): el is HTMLElement => el instanceof HTMLElement);
            // this.DiscoverChildren(pageManager);
            // const children = GetHTMLElementChildren(htmlElement);

            // var i = 0;
            // children.forEach(child => {
            //     const id = child.id;
            //     var newName = "";

            //     newName = this.ElementName + "child" + i;

            //     const c = pageManager.CreateNewPageElement(child, newName)
            //     this.childElements.push(c);
            //     c.AddParent(this);
            // });
        }

    }

    //Children - Add
    public InsertAsFirstChild(newFirst: PageElement) {
        this.element.insertBefore(newFirst.element, this.element.firstChild)
        this.childElements.push(newFirst); //List order, is it relevant?
        newFirst.AddParent(this);
    }
    public AppendChild(child: PageElement) {
        this.element.appendChild(child.element);
        this.childElements.push(child);
        child.AddParent(this);
    }
    public AppendChildFirst(child:PageElement) {
        this.element.insertBefore(child.element, this.element.firstChild);
        this.childElements.push(child);
        child.AddParent(this);
    }

    //Children - Remove
    public DestroyAllChildren() {
        //Requires call on all children the destroy self, make sure children destroy their children
        for(var childElement of this.childElements){
            childElement.DestroyAllChildren();
            childElement.DestroySelf();
        }

    }

    //Children - Misc
    public FindChildByID(id: string) {
        for (var element of this.childElements) {
            if (element.id == id) {
                // if (IsDebug)
                //     console.log(`Match by HTMLElement: ${element.Element} is  ${html} | ${element.Element.id} vs ${html.id}`);
                return element;
            }
            else
                continue;
            // else if (IsDebug)
            //     console.log(`Match by HTMLElement: ${element.Element} is not ${html} | ${element.Element.id} vs ${html.id}`);
        }
        if (IsDebug)
            console.log(`Couldn't find child PageElement containing ${id} on ${this.ElementName}!`);
        return null
    }
    public DiscoverChildren(pageManager: PageDisplayManager) {
        const children = GetHTMLElementChildren(this.element);

        var i = 0;
        for (var child of children) {
            //If its found, its already a PE
            if (pageManager.FindPageElementByElementId(child.id) != null)
                continue;
            const id = child.id;
            var newName = "";

            newName = this.ElementName + "child" + i;

            const c = pageManager.CreateNewPageElement(child, newName)
            pageManager.AddNewPageElement(c);
            this.childElements.push(c);
            c.AddParent(this);
        }
    }
    public AddParent(parent: PageElement) {
        this.elementParent = parent;
    }
    //Element Content
    public SetElementText(text: string) {
        this.element.textContent = text;
    }

    //Styling
    public SetFontWeight(weight: string) {
        this.element.style.fontWeight = weight;
    }

    private DestroySelf(){
        this.element.remove();
        this.PDM.RemovePageElement(this);
    }

}