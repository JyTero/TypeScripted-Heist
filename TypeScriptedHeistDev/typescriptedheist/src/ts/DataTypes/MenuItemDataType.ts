import { FlagName, MenuItemFlagChange } from "../flags";
import { SceneBase } from "../Scenes/SceneBase";
import { ScenesEnumHandmade } from "../ScenesLegacy/ScenesEnumHandMade";


export type ExplorationMenuItemDataType = 
{
    MenuItemName: string;
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
