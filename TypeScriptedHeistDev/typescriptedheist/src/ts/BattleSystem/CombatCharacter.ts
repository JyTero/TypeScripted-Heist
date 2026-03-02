import { CharacterBase } from "../Items/Character/CharacterBase";

export class CombatCharacter{
    private character:CharacterBase;
    public get Character(){
        return this.character;
    }

    public hasBeenTargetedByMeleeThisTurn:boolean = false;

    constructor(character:CharacterBase){
        this.character = character;
    }
}