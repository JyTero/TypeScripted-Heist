import { CharacterEnum } from "../../Assets/DataJsons/CharacterEnum";
import { CharacterSheet } from "../Items/Character/CharacterSheet";
import { SceneBase } from "../SceneBase";
import { CharacterDataType } from "./CharacterData";

export type BattleArenaDataType={
    BattleName: string;
    //Player related stuff filled on runtime
    //PlayerCharacter: CharacterSheet;
    EnemyCharacterDatas: CharacterEnum[];
    
    NextScene:SceneBase;
    //Enemy Distance, equipment, 
    //Art
}