
import { ImagescharacterEnum } from "../../../Assets/DataJsons/ImagescharacterEnum";
import { EnemyCombatAI } from "../../BattleSystem/EnemyCombatAI";
import { Sprite } from "../../Canvas/Sprite";
import { CharacterDataType } from "../../DataTypes/CharacterData";
import { IsDebug } from "../../MainPageInitialisation";
import { CharacterJson } from "../../JsonInput/CharacterJson";
import { ItemBase } from "../ItemBase";
import { CharacterSheet } from "./CharacterSheet";
import { ItemBaseData } from "../../DataTypes/ItemDataTypes";

export class CharacterBase extends ItemBase {
    public CharacterSheet: CharacterSheet;
    //public CharacterImage: HTMLImageElement;


    public enemyCombatAI: EnemyCombatAI;


    constructor(characterJson: CharacterJson) {

        //TEMP till item construction gets confirmed
        const itemData: ItemBaseData = {
            ItemName: characterJson.CharacterName,
            ItemMaxHP: 10,
            ItemSpriteData: {
                Sprite: characterJson.CharacterImagePath,
                LocationData: {
                    positionX: 0,
                    positionY: 0,
                    scaleX: 25,
                    scaleY: 25
                }
            },
            DataDevName: characterJson.DataDevName,
            DataType: "ItemBase",
            ItemSceneMenuItems: []
        }

        super(itemData);   //Real value will come from data


        this.itemName = characterJson.CharacterName;

        this.CharacterSheet = new CharacterSheet(characterJson, this);
    }
    public InitialiseCombatAI(enemyCombatAI: EnemyCombatAI) {
        this.enemyCombatAI = enemyCombatAI;
    }


}