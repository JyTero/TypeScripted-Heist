import { CharacterSheet } from "./CharacterSheet";

export class CharacterBase{
    public CharacterSheet: CharacterSheet;

    constructor(characterSheet:CharacterSheet)
    {
        this.CharacterSheet = characterSheet;
    }
}