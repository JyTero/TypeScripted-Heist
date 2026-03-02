
import { ImagescharacterEnum } from "../../../Assets/DataJsons/ImagescharacterEnum";
import { EnemyCombatAI } from "../../BattleSystem/EnemyCombatAI";
import { Sprite } from "../../Canvas/Sprite";
import { CharacterDataType } from "../../DataTypes/CharacterData";
import { IsDebug } from "../../initialisation";
import { CharacterJson } from "../../JsonInput/CharacterJson";
import { ItemBase } from "../ItemBase";
import { CharacterSheet } from "./CharacterSheet";

export class CharacterBase  extends ItemBase {
    public CharacterSheet: CharacterSheet;
    //public CharacterImage: HTMLImageElement;
    public CharacterSprite: Sprite;
    public CharacterLoadingReady: boolean = false;

    public enemyCombatAI: EnemyCombatAI;


    constructor(characterJson: CharacterJson) {
        super(10);   //Real value will come from data
        this.LoadCharacterImage(characterJson.CharacterImagePath);

        this.ItemName = characterJson.CharacterName;

        this.CharacterSheet = new CharacterSheet(characterJson, this);
    }
    public InitialiseCombatAI(enemyCombatAI:EnemyCombatAI){
        this.enemyCombatAI = enemyCombatAI;
    }
    private LoadCharacterImage(imgName: string) {
        const image = new Image();
        const imgPath = `./src/Assets/Img/character/${imgName}`;
        image.src = imgPath;

        this.CharacterSprite = new Sprite();
        image.onload = () => {
            this.CharacterSprite.SetSpriteImage(image);
            if (IsDebug)
                console.log("Loaded " + this.ItemName + "'s image");

            //this.CharacterSprite.SetSpritePosScaleDataValues(characterData.SpriteDefaultXpos, characterData.SpriteDefaulyYpos, characterData.SpriteDefaultXScale, characterData.SpriteDefaultYScale);
            this.CharacterLoadingReady = true;

        }
        image.onerror = () => {
            console.error("Failed to load " + this.ItemName + "'s image!", {
                src: image.src,
            });
        };
    }
}