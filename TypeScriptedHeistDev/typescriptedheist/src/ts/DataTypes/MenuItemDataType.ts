import { FlagName, Flag } from "../flags";
import { SceneBase } from "../Scenes/SceneBase";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { Effect } from "../Effects/EffectBase";


export interface MenuItemData {
    MenuItemName: string;
    MenuItemText: string;
    MenuItemSelectionDescription: string;
    ItemSelectionEffects: Effect[];
    ItemSelectionFunctionalityComponentsEnum: string[];
    ItemSelectionFunctionalityComponentDatas: string[][];
    MenuItemRequireAllFlags: FlagName[];
    MenuItemRequireAnyFlags: FlagName[];
    MenuItemForbiddenAllFlags: FlagName[];
    MenuItemForbiddenAnyFlags: FlagName[];
    MenuItemFlagsToChange: Flag[];
}

export interface ExplorationMenuItemData extends MenuItemData {

    NextScene: string; //ScenesEnum, empty = reload current menu

}
export interface SceneSpesificItemSceneMenuItemDataType extends ExplorationMenuItemData {
    SourceItem: string;
    TargetScene: ScenesEnumHandmade;
}

export interface CombatMoveMenuItemData extends MenuItemData{
    
}