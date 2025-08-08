import { CharacterBase } from "./Character/CharacterBase";
import { CharacterSheet } from "./Character/CharacterSheet";
import { CharacterDataType } from "./CharacterDataType";
import { WeaponItem } from "./Items/BattleItems/WeaponItem";
import { DaggerItemData } from "./Items/ItemData/BattleItems/DaggerData";

const PlayerCharacterData: CharacterDataType = {

    Name: "Coppenberg",
    Faction: 1,

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

export const PlayerCharacter = new CharacterBase(new CharacterSheet(PlayerCharacterData));