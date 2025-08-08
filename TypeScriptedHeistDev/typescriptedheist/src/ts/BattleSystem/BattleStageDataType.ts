import { CharacterSheet } from "../Character/CharacterSheet";
import { CharacterDataType } from "../CharacterDataType";
import { SceneObjectBase } from "../SceneObjectBase";

export type BattleArenaData={
    BattleName: string;
    //Player related stuff filled on runtime
    PlayerCharacter: CharacterSheet;
    EnemyCharacterDatas: CharacterDataType[];
    
    NextScene:SceneObjectBase;
    //Enemy Distance, equipment, 
    //Art
}