import { MetaData } from "../DataTypes/MetaData";

export interface CharacterJson extends MetaData {
    CharacterName:string;
    CharacterFaction:number;
     CharacterStrength:number;
     CharacterDexterity:number;
     CharacterPerception:number;
     CharacterWeaponSkill:number;
     CharacterDodge:number;
     CharacterBaseSpeed:number;
     CharacterArmour:number;
     CharaterEquipedWeapon:string;
     CharacterImagePath:string;
}