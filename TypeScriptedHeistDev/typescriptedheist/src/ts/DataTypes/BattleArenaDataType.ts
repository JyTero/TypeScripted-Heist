import { CharacterSheet } from "../Character/CharacterSheet";
import { SceneObjectBase } from "../SceneObjectBase";
import { CharacterDataType } from "./CharacterData";

export type BattleArenaDataType={
    BattleName: string;
    //Player related stuff filled on runtime
    PlayerCharacter: CharacterSheet;
    EnemyCharacterDatas: CharacterDataType[];
    
    NextScene:SceneObjectBase;
    //Enemy Distance, equipment, 
    //Art
}