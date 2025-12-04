import { FlagName, MenuItemFlagChange } from "../flags";
import { SceneBase } from "../SceneBase";


export type MenuItemDataType = 
{
    MenuItemName: string;
    MenuItemNumber: number;
    MenuItemText: string;
    MenuItemSelectionDescription: string;
    NextSceneObject: SceneBase;
    MenuItemRequireAllFlags: FlagName[];
    MenuItemRequireAnyFlags: FlagName[];
    MenuItemForbiddenAllFlags: FlagName[]; 
    MenuItemForbiddenAnyFlags: FlagName[];
    MenuItemFlagsToChange: MenuItemFlagChange[];
}
