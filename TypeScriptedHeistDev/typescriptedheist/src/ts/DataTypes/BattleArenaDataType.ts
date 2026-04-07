import { CharacterEnum } from "../../Assets/DataJsons/CharacterEnum";
import { CharacterSheet } from "../Items/Character/CharacterSheet";
import { SceneBase } from "../Scenes/SceneBase";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { CharacterDataType } from "./CharacterData";

export type BattleArenaDataType={
    BattleName: string;
    //Player related stuff filled on runtime
    //PlayerCharacter: CharacterSheet;
    EnemyCharacterDatas: CharacterEnum[];
    
    //NextSceneOnVictory:ScenesEnumHandmade;
    //Enemy Distance, equipment, 
    //Art
}