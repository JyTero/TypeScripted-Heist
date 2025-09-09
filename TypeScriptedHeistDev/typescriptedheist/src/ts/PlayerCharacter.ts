import { CharacterBase } from "./Character/CharacterBase";
import { CharacterDataType } from "./DataTypes/CharacterData";
import { CharacterSheetDataType as CharacterSheetDataType } from "./DataTypes/CharacterSheetDataType";
import { WeaponItem } from "./Items/BattleItems/WeaponItem";
import { DaggerItemData } from "./Items/ItemData/BattleItems/DaggerData";

const PlayerCharacterSheetData: CharacterSheetDataType = {

    Name: "Coppenberg",
    Faction: 1,

    //Attributes
    Strength: 3,
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
    SpriteDefaultXpos: 25,
    SpriteDefaulyYpos: 75,
    SpriteDefaultXScale: 10,
    SpriteDefaultYScale: 10,

}

export const PlayerCharacter = new CharacterBase(platyerCharacterData);
