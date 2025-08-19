import { Sprite } from "../Canvas/Sprite";
import { CharacterDataType } from "../DataTypes/CharacterData";
import { IsDebug } from "../initialisation";
import { CharacterSheet } from "./CharacterSheet";

export class CharacterBase {
    public CharacterSheet: CharacterSheet;
    //public CharacterImage: HTMLImageElement;
    public CharacterSprite: Sprite;
    public CharacterLoadingReady:boolean = false;

    constructor(characterData: CharacterDataType) {
        this.CharacterSheet = new CharacterSheet(characterData.CharacterSheet);
        const image = new Image();
        image.src = characterData.CharacterImageString;
        image.onload = () => {
            this.CharacterSprite = new Sprite(image);
            if(IsDebug)
                console.log("Loaded " + this.CharacterSheet.CharacterName + "'s image");
            
            this.CharacterLoadingReady = true;
        }
        image.onerror = () => {
            //console.log("failed to load image");
            console.error("Failed to load " + this.CharacterSheet.CharacterName + "'s image!");
        };

    }
}