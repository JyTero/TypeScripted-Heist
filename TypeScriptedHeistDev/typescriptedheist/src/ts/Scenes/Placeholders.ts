import { SceneObjectBase } from "../SceneObjectBase";
import { MenuItemBase } from "../MenuItemBase";
import { WriteAlert } from "../IOMethods";
import { CharacterSheet } from "../Character/CharacterSheet";
import { CharacterDataType } from "../CharacterDataType";
import { WeaponItem } from "../Items/BattleItems/WeaponItem";
import { DaggerItemData } from "../Items/ItemData/BattleItems/DaggerData";
import { BattleArenaData } from "../BattleSystem/BattleStageDataType";


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

const placeholderCharacterData: CharacterDataType = {

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
export const PlaceholderCharacter: CharacterSheet = new CharacterSheet(placeholderCharacterData);

export const placeholderBattleArenaData:BattleArenaData  = {
        BattleName: "Computer Combat",
        PlayerCharacter: PlaceholderCharacter,
        EnemyCharacterDatas:[placeholderCharacterData],
        NextScene: placeholderScene,
}
