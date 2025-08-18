import { CharacterBase } from "./Character/CharacterBase";
import { CharacterDataType } from "./DataTypes/CharacterData";
import { CharacterSheetDataType as CharacterSheetDataType } from "./DataTypes/CharacterSheetDataType";
import { WeaponItem } from "./Items/BattleItems/WeaponItem";
import { DaggerItemData } from "./Items/ItemData/BattleItems/DaggerData";

const PlayerCharacterSheetData: CharacterSheetDataType = {

    Name: "Coppenberg",
    Faction: 1,

    //Attributes
    Strenght: 3,
    Dexterity: 20,
    Perception: 4,

    //Skills
    WeaponSkill: 95,
    Dodge: 20,

    BaseSpeed: 10,

    //Gear
    ArmourRating: 22,
    CurrentWeapon: new WeaponItem(DaggerItemData),
}
const platyerCharacterData: CharacterDataType ={
    CharacterSheet: PlayerCharacterSheetData,
    CharacterImageString:  "src/Assets/img/character/casper.png",
}

export const PlayerCharacter = new CharacterBase(platyerCharacterData);
