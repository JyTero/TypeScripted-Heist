import { CharacterFaction } from "../Enums";
import { WeaponItem } from "../Items/WeaponItem/WeaponItem";
export type CharacterSheetDataType = {

    Name:string;
    Faction:CharacterFaction;

    //Attributes
    Strength:number;
    Dexterity:number;
    Perception:number;
    
    //Skills
    WeaponSkill:number;
    Dodge:number;

    BaseSpeed:number;
    
    //Gear
    ArmourRating:number;
    CurrentWeapon: WeaponItem;
}