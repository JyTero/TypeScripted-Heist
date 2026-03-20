export function IsHTMLElement(obj: any): obj is HTMLElement {
    return (
        obj &&
        typeof obj === "object" &&
        obj.nodeType === Node.ELEMENT_NODE // Check if it's an element node
    );
}

export function GetHTMLElementChildren(htmlElement:HTMLElement): HTMLElement[]{
    //const appChildren: HTMLElement[] = Array.from(htmlElement.children);
    //.filter((el): el is HTMLElement => el instanceof HTMLElement);
    return Array.from(htmlElement.children) as HTMLElement[];
}