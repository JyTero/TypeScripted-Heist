import { FlagName, MenuItemFlagChange } from "../flags";
import { SceneBase } from "../Scenes/SceneBase";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";


export type ExplorationMenuItemDataType = 
{
    MenuItemName: string;
   // MenuItemType: string; //MenuItemType, (Portal = Moves to next scene, Interaction = Runs a method and reloads same scene)
    MenuItemNumber: number;
    MenuItemText: string;
    MenuItemSelectionDescription: string;
    NextSceneObject: string; //ScenesEnum, empty = reload current scene
    MenuItemRequireAllFlags: FlagName[];
    MenuItemRequireAnyFlags: FlagName[];
    MenuItemForbiddenAllFlags: FlagName[]; 
    MenuItemForbiddenAnyFlags: FlagName[];
    MenuItemFlagsToChange: MenuItemFlagChange[];
}
