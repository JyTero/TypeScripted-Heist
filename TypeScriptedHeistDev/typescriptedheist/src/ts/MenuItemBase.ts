import { ExplorationMenuItemDataType } from "./DataTypes/MenuItemDataType";
import { FlagName, FlagType } from "./flags";
import { SceneBase } from "./Scenes/SceneBase";
import { ScenesEnumHandmade } from "../Assets/ScenesEnumHandMade";
import { FunctionalityComponentsHandmade } from "../Assets/FunctionalityComponentsEnumHandmade";


export class MenuItemBase {
  MenuItemName: string = "";
  MenuItemNumber: number = -1;
  MenuItemText: string = "";
  MenuItemSelectionDescription: string = "";
  ItemSelectionFunctionalityComponents: FunctionalityComponentsHandmade[] = [];
  ItemSelectionFunctionalityComponentData: string[][] = [];

  MenuItemRequireAllFlags: FlagName[] = [];
  MenuItemRequireAnyFlags: FlagName[] = [];
  MenuItemForbiddenAllFlags: FlagName[] = [];
  MenuItemForbiddenAnyFlags: FlagName[] = [];
  MenuItemFlagsToChange: FlagType[] = [];
  NextSceneDataReference: ScenesEnumHandmade;

  constructor(menuItemData: ExplorationMenuItemDataType) {
    this.MenuItemName = menuItemData.MenuItemName;
    //this.MenuItemNumber = menuItemData.MenuItemNumber;
    this.MenuItemText = menuItemData.MenuItemText;
    this.MenuItemSelectionDescription = menuItemData.MenuItemSelectionDescription;
    this.NextSceneDataReference = menuItemData.NextScene as ScenesEnumHandmade;
    this.ValidateFunctionalityComponents(menuItemData);
    this.ItemSelectionFunctionalityComponentData = menuItemData.ItemSelectionFunctionalityComponentDatas;
    this.MenuItemRequireAllFlags = menuItemData.MenuItemRequireAllFlags;
    this.MenuItemRequireAnyFlags = menuItemData.MenuItemRequireAnyFlags;
    this.MenuItemForbiddenAllFlags = menuItemData.MenuItemForbiddenAllFlags;
    this.MenuItemForbiddenAnyFlags = menuItemData.MenuItemForbiddenAnyFlags;
    this.MenuItemFlagsToChange = menuItemData.MenuItemFlagsToChange;
  }

  NumberMenuItem(i: number) {
    this.MenuItemNumber = i;
  }


  private ValidateFunctionalityComponents(menuItemData: ExplorationMenuItemDataType) {
    if(!menuItemData.ItemSelectionFunctionalityComponents){
      return;
    }
    for (var v of menuItemData.ItemSelectionFunctionalityComponents) {
      if (Object.values(FunctionalityComponentsHandmade).includes(v as FunctionalityComponentsHandmade)) {
        var e = v as FunctionalityComponentsHandmade;
        this.ItemSelectionFunctionalityComponents.push(e);
      }
      else {
        throw console.error(`MenuItem ${this.MenuItemName} (${this.MenuItemText}) contains unknown FunctionalityComponent: ${v}`);

      }
    }
  }

}