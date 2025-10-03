
import { ImagescharacterEnum } from "../../Assets/DataJsons/ImagescharacterEnum";
import { Sprite } from "../Canvas/Sprite";
import { CharacterDataType } from "../DataTypes/CharacterData";
import { IsDebug } from "../initialisation";
import { CharacterJson } from "../JsonInput/CharacterJson";
import { CharacterSheet } from "./CharacterSheet";

export class CharacterBase {
    public CharacterSheet: CharacterSheet;
    //public CharacterImage: HTMLImageElement;
    public CharacterSprite: Sprite;
    public CharacterLoadingReady: boolean = false;




    constructor(characterJson: CharacterJson) {
        this.LoadCharacterImage(characterJson.CharacterImagePath);
        this.CharacterSheet = new CharacterSheet(characterJson);
    }

    private LoadCharacterImage(imgName:string){
        const image = new Image();
        const imgPath = `./src/Assets/Img/character/${imgName}`;
        image.src =  imgPath;

        this.CharacterSprite = new Sprite();
        image.onload = () => {
            this.CharacterSprite.SetSpriteImage(image);
            if (IsDebug)
                console.log("Loaded " + this.CharacterSheet.CharacterName + "'s image");

            //this.CharacterSprite.SetSpritePosScaleDataValues(characterData.SpriteDefaultXpos, characterData.SpriteDefaulyYpos, characterData.SpriteDefaultXScale, characterData.SpriteDefaultYScale);
            this.CharacterLoadingReady = true;

        }
        image.onerror = () => {
            console.error("Failed to load " + this.CharacterSheet.CharacterName + "'s image!", {
                src: image.src,
            });
        };
    }
}