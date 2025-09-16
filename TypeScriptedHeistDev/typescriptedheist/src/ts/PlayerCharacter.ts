import { CharacterBase } from "./Character/CharacterBase";
import { CharacterDataType } from "./DataTypes/CharacterData";
import { CharacterSheetDataType as CharacterSheetDataType } from "./DataTypes/CharacterSheetDataType";
import { DaggerItemData } from "./Items/ItemDatas/WeaponItemData/DaggerData";
import { WeaponItem } from "./Items/WeaponItem/WeaponItem";


const PlayerCharacterSheetData: CharacterSheetDataType = {

    Name: "Coppenberg",
    Faction: 1,

    //Attributes
    Strength: 3,
    Dexterity: 2,
    Perception: 4,

    //Skills
    WeaponSkill: 95,
    Dodge: 10,

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
