import { SceneBase } from "../Scenes/SceneBase";
import { MenuItemBase } from "../MenuItemBase";
import { WriteAlert } from "../IOMethods";
import { CharacterSheet } from "../Items/Character/CharacterSheet";
import { CharacterSheetDataType } from "../DataTypes/CharacterSheetDataType";
import { WeaponItem } from "../Items/WeaponItem/WeaponItem";
import { DaggerItemData } from "../Items/ItemDatas/WeaponItemData/DaggerData";
import { BattleArenaDataType } from "../DataTypes/BattleArenaDataType";
import { CharacterDataType } from "../DataTypes/CharacterData";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { SceneBaseData } from "../DataTypes/SceneDataType";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { Color } from "../Tools/Color";
import { AlertManager } from "../AlertManager";

// const placeholderCharacterSheetData: CharacterSheetDataType = {
    
//     Name: "Boby Neybean",
//     Faction: 0,

//     //Attributes
//     Strength: 3,
//     Dexterity: 3,
//     Perception: 4,
    
//     //Skills
//     WeaponSkill: 15,
//     Dodge: 20,
    
//     BaseSpeed: 10,
    
//     //Gear
//     ArmourRating: 22,
//     CurrentWeapon: new WeaponItem(DaggerItemData),
// }
// const placeholderCharacterData:CharacterDataType = {
//     CharacterSheet: placeholderCharacterSheetData,
//     CharacterImageString: "src/Assets/PictoBun.png",
// }
//export const PlaceholderCharacterSheet: CharacterSheet = new CharacterSheet(placeholderCharacterSheetData);
//export const PlaceholderCharacter: CharacterBase = new CharacterBase(placeholderCharacterData);
export class PlaceholderScene extends SceneBase {
    
    SceneSpsificStartUp(): void {
        this.SceneName = "PlaceholderScene";
    }
    
    async SceneSpesificMain() {
        AlertManager.Instance.WriteAlertStorePrevious("PLACEHOLDER SCENE, SHOULD NOT BE RUN\n(Unless you won combat, in which case this should be seen, though it is still placeholder and should be replaced)");
        // await this.DoTheMenu();
        
    }
    
    BuildMenuItems(): MenuItemBase[] {
        
        return [];
        
    }
}
const PlaceholderSceneData:SceneBaseData ={
    SceneName: "Placeholder",
    SceneType: SceneTypesEnumHandmade.ExplorationScene.toString(),
    SceneBackgroundColor: new Color(245, 40, 196, 1),
}
export const placeholderScene: SceneBase = new PlaceholderScene(PlaceholderSceneData);

// export const placeholderBattleArenaData:BattleArenaDataType  = {
//         BattleName: "Computer Combat",
//        // PlayerCharacter: ,
//         EnemyCharacterDatas:[],
//         NextScene: placeholderScene,
// }
