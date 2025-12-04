import { CharacterStatTypes } from "../../Effects/EffectBase";
import { ItemBase } from "../ItemBase";
import { CharacterStat } from "./CharacterStat";

export class CharacterAttribute extends CharacterStat{

    private attributeHardCap:number = 20;   //Arbotary game design cap
    constructor(name: string, initValue:number,  statType:CharacterStatTypes, owner:ItemBase){
        super(name, initValue, 20, statType,owner);
    }
}