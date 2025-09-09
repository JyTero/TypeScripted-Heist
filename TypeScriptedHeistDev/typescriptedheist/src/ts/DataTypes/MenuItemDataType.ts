import { FlagName, MenuItemFlagChange } from "../flags";
import { SceneObjectBase } from "../SceneObjectBase";


export type MenuItemDataType = 
{
    MenuItemName: string;
    MenuItemNumber: number;
    MenuItemText: string;
    MenuItemSelectionDescription: string;
    NextSceneObject: SceneObjectBase;
    MenuItemRequireAllFlags: FlagName[];
    MenuItemRequireAnyFlags: FlagName[];
    MenuItemForbiddenAllFlags: FlagName[]; 
    MenuItemForbiddenAnyFlags: FlagName[];
    MenuItemFlagsToChange: MenuItemFlagChange[];
}
