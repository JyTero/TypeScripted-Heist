import { FlagName, MenuItemFlagChange } from "../flags";
import { SceneBase } from "../Scenes/SceneBase";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { Effect } from "../Effects/EffectBase";


export type ExplorationMenuItemDataType = 
{
    MenuItemName: string;
   // MenuItemType: string; //MenuItemType, (Portal = Moves to next scene, Interaction = Runs a method and reloads same scene)
    MenuItemText: string;
    MenuItemSelectionDescription: string;
    NextScene: string; //ScenesEnum, empty = reload current scene
    ItemSelectionEffects: Effect[];
    ItemSelectionFunctionalityComponents: string[];
    ItemSelectionFunctionalityComponentDatas: string[][];
    MenuItemRequireAllFlags: FlagName[];
    MenuItemRequireAnyFlags: FlagName[];
    MenuItemForbiddenAllFlags: FlagName[]; 
    MenuItemForbiddenAnyFlags: FlagName[];
    MenuItemFlagsToChange: MenuItemFlagChange[];
}
