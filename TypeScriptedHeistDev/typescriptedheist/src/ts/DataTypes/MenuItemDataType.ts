import { FlagName, FlagType } from "../flags";
import { SceneBase } from "../Scenes/SceneBase";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { Effect } from "../Effects/EffectBase";
import { ItemBase } from "../Items/ItemBase";


export interface ExplorationMenuItemDataType 
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
    MenuItemFlagsToChange: FlagType[];
}
export interface SceneSpesificItemSceneMenuItemDataType extends ExplorationMenuItemDataType{
    SourceItem:string;
    TargetScene:ScenesEnumHandmade;
}