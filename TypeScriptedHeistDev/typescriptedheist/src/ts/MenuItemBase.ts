import { SceneObjectBase } from "./SceneObjectBase";
import { placeholderScene } from "./Scenes/PlaceholderScene";


export class MenuItemBase {
    MenuItemName: string ="";
    MenuItemNumber: number =-1;
    MenuItemText: string ="";
    MenuItemSelectionDescription: string ="";
    MenuItemReadFlags: boolean[]=[];
    MenuItemWriteFlags: boolean[]=[]; //Flags this many item changes

    NextSceneObject: SceneObjectBase = placeholderScene;
    
    constructor(MenuItemName:string, MenuItemNumber:number, MenuItemText:string, MenuItemSelectionDescription:string, MenuItemReadFlags:boolean[], MenuItemWriteFlags:boolean[] )
    {
        this.MenuItemName = MenuItemName;
        this.MenuItemNumber = MenuItemNumber;
        this.MenuItemText = MenuItemText;
        this.MenuItemSelectionDescription = MenuItemSelectionDescription;
        this.MenuItemReadFlags = MenuItemReadFlags;
        this.MenuItemWriteFlags = MenuItemWriteFlags;
    }

  // Get Menu Data from seperate object, gathered beforehand elsewhere, build menu objects with data, give out complete menu item

}
// export function BuildMenuItem(MenuItemData: MenuItemDataType): MenuItemBase {
//     const newMenuItem: MenuItemBase = new MenuItemBase(MenuItemData.MenuItemName, MenuItemData.MenuItemNumber, MenuItemData.MenuItemText, MenuItemData.MenuItemSelectionDescription, MenuItemData.MenuItemReadFlags, MenuItemData.MenuItemWriteFlags); 
//     return newMenuItem;

// }