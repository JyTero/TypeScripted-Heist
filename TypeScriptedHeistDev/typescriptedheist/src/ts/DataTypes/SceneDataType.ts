import { ItemsEnumHandmade } from "../../Assets/ItemsEnumHandmade";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { FlagType } from "../flags";
import { ItemBase } from "../Items/ItemBase";
import { Color } from "../Tools/Color";
import { BattleArenaDataType } from "./BattleArenaDataType";
import { ItemBaseData } from "./ItemDataTypes";
import { ExplorationMenuItemDataType } from "./MenuItemDataType";
import { SpriteData, SpriteLocationDataType } from "./SpriteLocationDataType";

export interface SceneBaseData {
    SceneName: string,
    SceneType: string, //SceneTypesEnum
    SceneBackgroundColor: Color;
    SceneItems: ItemsEnumHandmade[],
    SceneItemLocationDatas:SpriteLocationDataType[];



}
export interface ExplorationSceneData extends SceneBaseData {
    MenuItems: ExplorationMenuItemDataType[];

}
export interface CombatSceneData extends SceneBaseData {
    battleArenaData: BattleArenaDataType,
    combatVictoryNextScene:ScenesEnumHandmade,
    combatVictoryFlagsToChange:FlagType[],
    combatLossNextScene:ScenesEnumHandmade,
    combatLossFlagsToChange:FlagType[],
}
export interface InteractionSceneData extends SceneBaseData{

}