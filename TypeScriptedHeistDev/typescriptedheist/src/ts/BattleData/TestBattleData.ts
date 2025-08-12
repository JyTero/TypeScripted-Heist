import { BattleArenaData } from "../BattleSystem/BattleStageDataType";
import { CharacterDataType } from "../CharacterDataType";
import { WeaponItem } from "../Items/BattleItems/WeaponItem";
import { DaggerItemData } from "../Items/ItemData/BattleItems/DaggerData";
import { PlaceholderCharacter, placeholderScene } from "../Scenes/Placeholders";


const Enemy01: CharacterDataType = {

    Name: "Enémy",
    Faction: 2,

    //Attributes
    Strenght: 3,
    Dexterity: 2,
    Perception: 4,

    //Skills
    WeaponSkill: 15,
    Dodge: 2,

    BaseSpeed: 10,

    //Gear
    ArmourRating: 1,
    CurrentWeapon: new WeaponItem(DaggerItemData),
    
}

export const TestBattleData: BattleArenaData = {
    BattleName: "Computer Combat",
    PlayerCharacter: PlaceholderCharacter,
    EnemyCharacterDatas:[Enemy01],
    NextScene: placeholderScene,
}