import { SceneObjectBase } from "../SceneObjectBase";
import { MenuItemBase } from "../MenuItemBase";
import { WriteAlert } from "../IOMethods";
import { CharacterSheet } from "../Character/CharacterSheet";
import { CharacterSheetDataType } from "../DataTypes/CharacterSheetDataType";
import { WeaponItem } from "../Items/BattleItems/WeaponItem";
import { DaggerItemData } from "../Items/ItemData/BattleItems/DaggerData";
import { BattleArenaDataType } from "../DataTypes/BattleArenaDataType";
import { CharacterDataType } from "../DataTypes/CharacterData";
import { CharacterBase } from "../Character/CharacterBase";


export class PlaceholderScene extends SceneObjectBase {
    
    SceneSpsificStartUp(): void {
        this.SceneName = "PlaceholderScene";
    }
    
    async SceneSpesificMain() {
        WriteAlert("PLACEHOLDER SCENE, SHOULD NOT BE RUN");
        // await this.DoTheMenu();
        
    }
    
    BuildMenuItems(): MenuItemBase[] {
        
        return [];
        
    }
}
export const placeholderScene: PlaceholderScene = new PlaceholderScene();

const placeholderCharacterSheetData: CharacterSheetDataType = {

    Name: "Boby Neybean",
    Faction: 0,

    //Attributes
    Strenght: 3,
    Dexterity: 3,
    Perception: 4,

    //Skills
    WeaponSkill: 15,
    Dodge: 20,

    BaseSpeed: 10,

    //Gear
    ArmourRating: 22,
    CurrentWeapon: new WeaponItem(DaggerItemData),
}
const placeholderCharacterData:CharacterDataType = {
    CharacterSheet: placeholderCharacterSheetData,
    CharacterImageString: "src/Assets/PictoBun.png",
}
export const PlaceholderCharacterSheet: CharacterSheet = new CharacterSheet(placeholderCharacterSheetData);
export const PlaceholderCharacter: CharacterBase = new CharacterBase(placeholderCharacterData);

export const placeholderBattleArenaData:BattleArenaDataType  = {
        BattleName: "Computer Combat",
        PlayerCharacter: PlaceholderCharacterSheet,
        EnemyCharacterDatas:[],
        NextScene: placeholderScene,
}
