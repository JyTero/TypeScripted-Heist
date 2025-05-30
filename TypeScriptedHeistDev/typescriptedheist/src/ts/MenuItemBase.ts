import { FlagName, MenuItemFlagChange } from "./flags";
import { MenuItemDataType } from "./MenuItemDataType";
import { SceneObjectBase } from "./SceneObjectBase";
import { placeholderScene } from "./Scenes/PlaceholderScene";


export class MenuItemBase {
  MenuItemName: string = "";
  MenuItemNumber: number = -1;
  MenuItemText: string = "";
  MenuItemSelectionDescription: string = "";
  MenuItemRequireAllFlags: FlagName[] = [];
  MenuItemRequireAnyFlags: FlagName[] = [];
  MenuItemForbiddenAllFlags: FlagName[] = [];
  MenuItemForbiddenAnyFlags: FlagName[] = [];
  MenuItemFlagsToChange: MenuItemFlagChange[] = [];


  NextSceneObject: SceneObjectBase = placeholderScene;

  constructor(menuItemData: MenuItemDataType) {
    this.MenuItemName = menuItemData.MenuItemName;
    //this.MenuItemNumber = menuItemData.MenuItemNumber;
    this.MenuItemText = menuItemData.MenuItemText;
    this.MenuItemSelectionDescription = menuItemData.MenuItemSelectionDescription;
    this.NextSceneObject = menuItemData.NextSceneObject;
    this.MenuItemRequireAllFlags = menuItemData.MenuItemRequireAllFlags;
    this.MenuItemRequireAnyFlags = menuItemData.MenuItemRequireAnyFlags;
    this.MenuItemForbiddenAllFlags = menuItemData.MenuItemForbiddenAllFlags;
    this.MenuItemForbiddenAnyFlags = menuItemData.MenuItemForbiddenAnyFlags;
    this.MenuItemFlagsToChange = menuItemData.MenuItemFlagsToChange;
  }

  NumberMenuItem(i:number)
  {
    this.MenuItemNumber = i;
  }
}