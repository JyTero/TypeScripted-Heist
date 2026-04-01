import { CharacterBase } from "../Items/Character/CharacterBase";
import { Color } from "../Tools/Color";
import { BattleArenaDataType } from "./BattleArenaDataType";
import { ExplorationMenuItemDataType} from "./MenuItemDataType";

export interface SceneBaseData {
    SceneName: string,
    SceneType: string, //SceneTypesEnum
    SceneBackgroundColor: Color;


}

export interface ExplorationSceneData extends SceneBaseData {
    MenuItems: ExplorationMenuItemDataType[];

}

export interface CombatSceneData extends SceneBaseData {
    battleArenaData: BattleArenaDataType,
}

