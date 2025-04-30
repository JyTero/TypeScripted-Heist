import { SceneObjectBase } from "./SceneObjectBase";

export type MenuItemDataType = 
{
    MenuItemName: string;
    MenuItemNumber: number;
    MenuItemText: string;
    MenuItemSelectionDescription: string;
    MenuItemReadFlags: boolean[];
    MenuItemWriteFlags: boolean[]; //Flags this many item changes
    NextMenuObject: SceneObjectBase;
}