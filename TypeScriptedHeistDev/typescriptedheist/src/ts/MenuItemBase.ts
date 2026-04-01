import { ExplorationMenuItemDataType } from "./DataTypes/MenuItemDataType";
import { FlagName, MenuItemFlagChange } from "./flags";
import { SceneBase } from "./Scenes/SceneBase";
import { ScenesEnumHandmade } from "./ScenesLegacy/ScenesEnumHandMade";


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


  NextSceneDataReference: ScenesEnumHandmade;

  constructor(menuItemData: ExplorationMenuItemDataType) {
    this.MenuItemName = menuItemData.MenuItemName;
    //this.MenuItemNumber = menuItemData.MenuItemNumber;
    this.MenuItemText = menuItemData.MenuItemText;
    this.MenuItemSelectionDescription = menuItemData.MenuItemSelectionDescription;
    this.NextSceneDataReference = menuItemData.NextSceneObject as ScenesEnumHandmade;
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