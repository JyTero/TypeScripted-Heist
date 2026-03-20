import { IsDebug } from "../MainPageInitialisation";
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

    //pageElement?:HTMLElementTagNameMap[T]

    // constructor(element: HTMLElement, name: string)
    constructor(arg1: string | HTMLElement, name: string, pageManager: PageDisplayManager) {

        this.ElementName = name;
        pageManager.NewPageElement(this);
        
        //If blank type, html element already exists, create object with that
        if (IsHTMLElement(arg1)) {
            this.PreExistingElement(arg1, pageManager);
        }
        else {
            
            const n = arg1 as DOMElementType;
            this.element = document.createElement(n);
            if (!this.element) {
                throw console.error("Invalid element type in " + name + "!");
                return;
            }

            this.id = name + arg1.toString();
            this.element.id = this.id;
        }
        //this.data = data;
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
                this.AddParent(new PageElement(this.element.parentElement, this.element.parentElement.id, pageManager))
            else
                if (IsDebug)
                    console.log(`${this.ElementName} doens't seem to have valid parent`);
        }


        // const children = Array.from(htmlElement.children)
        //     .filter((el): el is HTMLElement => el instanceof HTMLElement);
        const children = GetHTMLElementChildren(htmlElement);

        var i = 0;
        children.forEach(child => {
            const id = child.id;
            var newName = "";

            newName = this.ElementName + "child" + i;

            const c = new PageElement(child, newName, pageManager)
            this.childElements.push(c);
            c.AddParent(this);
        });

    }

    //Children
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
    public RemoveAllChildren() {
        //Requires call on all children the destroy self, make sure children destroy their children
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

}