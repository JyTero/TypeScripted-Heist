import { ModifiersUIElement } from "./ModifierUIElement";

export class ModifierDetailsButton{
    
    private thisButton:HTMLButtonElement;
    private Modifiers:ModifiersUIElement[] = [];
    
    constructor(button:HTMLButtonElement){
        this.thisButton = button;
    }

    public ButtonElement():HTMLButtonElement{
        return this.thisButton;
    }

}