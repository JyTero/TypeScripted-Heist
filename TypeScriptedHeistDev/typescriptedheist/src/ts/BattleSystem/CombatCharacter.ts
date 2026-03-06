import { CharacterBase } from "../Items/Character/CharacterBase";
import { EnemyCombatAI } from "./EnemyCombatAI";

export class CombatCharacter{
    private character:CharacterBase;
    public get Character(){
        return this.character;
    }

    public hasBeenTargetedByMeleeThisTurn:boolean = false;
    public EnemyCombatAI:EnemyCombatAI;

    constructor(character:CharacterBase){
        this.character = character;
    }
}