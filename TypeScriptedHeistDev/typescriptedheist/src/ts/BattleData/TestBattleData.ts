import { WeaponEnum } from "../../Assets/DataJsons/WeaponEnum";
import { BattleArenaDataType } from "../DataTypes/BattleArenaDataType";
import { CharacterDataType } from "../DataTypes/CharacterData";
import { CharacterSheetDataType } from "../DataTypes/CharacterSheetDataType";
import { DaggerItemData } from "../Items/ItemDatas/WeaponItemData/DaggerData";
import { WeaponItem } from "../Items/WeaponItem/WeaponItem";
import { PlaceholderCharacterSheet, placeholderScene } from "../Scenes/Placeholders";


const Enemy01Sheet: CharacterSheetDataType = {

    Name: "Amalie",
    Faction: 2,

    //Attributes
    Strength: 3,
    Dexterity: 12,
    Perception: 4,

    //Skills
    WeaponSkill: 50,
    Dodge: 2,

    BaseSpeed: 10,

    //Gear
    ArmourRating: 1,
    CurrentWeapon: new WeaponItem(DaggerItemData),
    
}
const Enemy01:CharacterDataType ={
    CharacterSheet: Enemy01Sheet,
    CharacterImageString: "src/Assets/img/character/amalia.png",
    SpriteDefaultXpos: 25,
    SpriteDefaulyYpos: 25,
    SpriteDefaultXScale: 10,
    SpriteDefaultYScale: 10,
}
export const TestBattleData: BattleArenaDataType = {
    BattleName: "Computer Combat",
    PlayerCharacter: PlaceholderCharacterSheet,
    EnemyCharacterDatas:[Enemy01],
    NextScene: placeholderScene,
}