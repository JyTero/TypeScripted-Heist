import { ItemsEnumHandmade } from "../../Assets/ItemsEnumHandmade";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { Flag } from "../flags";
import { ItemBase } from "../Items/ItemBase";
import { Color } from "../Tools/Color";
import { BattleArenaDataType } from "./BattleArenaDataType";
import { ItemBaseData } from "./ItemDataTypes";
import { ExplorationMenuItemData } from "./MenuItemDataType";
import { SpriteData, SpriteLocationDataType } from "./SpriteLocationDataType";

export interface SceneBaseData {
    SceneName: string,
    SceneType: string, //SceneTypesEnum
    SceneBackgroundColor: Color;
    SceneItems: ItemsEnumHandmade[],
    SceneItemLocationDatas: SpriteLocationDataType[];



}
export interface ExplorationSceneData extends SceneBaseData {
    MenuItems: ExplorationMenuItemData[];

}
export interface CombatSceneData extends SceneBaseData {
    battleArenaData: BattleArenaDataType,
    combatVictoryNextScene: ScenesEnumHandmade,
    combatVictoryFlagsToChange: Flag[],
    victoryFCs: string[];    //FunctionalityComponentEnum
    vicotryFCData: string[][];
    combatLossNextScene: ScenesEnumHandmade,
    combatLossFlagsToChange: Flag[],
    lossFCs: string[];
    lossFCData: string[][];
}
export interface InteractionSceneData extends SceneBaseData {

}