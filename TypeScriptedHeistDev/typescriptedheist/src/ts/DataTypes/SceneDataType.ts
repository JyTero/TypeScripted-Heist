import { ItemsEnumHandmade } from "../../Assets/ItemsEnumHandmade";
import { ItemBase } from "../Items/ItemBase";
import { Color } from "../Tools/Color";
import { BattleArenaDataType } from "./BattleArenaDataType";
import { ItemBaseData } from "./ItemDataTypes";
import { ExplorationMenuItemDataType } from "./MenuItemDataType";
import { SpriteData } from "./SpriteLocationDataType";

export interface SceneBaseData {
    SceneName: string,
    SceneType: string, //SceneTypesEnum
    SceneBackgroundColor: Color;
    SceneItems: ItemsEnumHandmade[],


}
export interface ExplorationSceneData extends SceneBaseData {
    MenuItems: ExplorationMenuItemDataType[];

}
export interface CombatSceneData extends SceneBaseData {
    battleArenaData: BattleArenaDataType,
}
export interface InteractionSceneData extends SceneBaseData{

}