import { PageDisplayManager } from "../PageDisplay";
import { PageElement } from "./PageElement";

export function CreateDIVAndH3headerPageElements(elementName:string, pageManager:PageDisplayManager):PageElement{
    const div = new PageElement("div", elementName, pageManager);
    const header = new PageElement("h3", elementName+"header", pageManager);
    div.AppendChild(header);
    return div;
}