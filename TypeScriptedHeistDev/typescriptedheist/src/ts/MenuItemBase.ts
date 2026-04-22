import { CombatMoveMenuItemData, ExplorationMenuItemData, MenuItemData } from "./DataTypes/MenuItemDataType";
import { FlagName, Flag } from "./flags";
import { SceneBase } from "./Scenes/SceneBase";
import { ScenesEnumHandmade } from "../Assets/OldScenesEnumHandMade";
import { FunctionalityComponentsHandmade } from "../Assets/FunctionalityComponentsEnumHandmade";
import { FunctionalityComponent, FunctionalityComponentEngine } from "./FunctionalityComponentEngine";
import { FCE } from "./MainPageInitialisation";


export class MenuItemBase {
  MenuItemName: string = "";
  MenuItemNumber: number = -1;
  MenuItemText: string = "";
  MenuItemSelectionDescription: string = "";
  ItemSelectionFunctionalityComponents: FunctionalityComponent[] = [];
  // ItemSelectionFunctionalityComponentData: string[][] = [];

  MenuItemRequireAllFlags: FlagName[] = [];
  MenuItemRequireAnyFlags: FlagName[] = [];
  MenuItemForbiddenAllFlags: FlagName[] = [];
  MenuItemForbiddenAnyFlags: FlagName[] = [];
  MenuItemFlagsToChange: Flag[] = [];
  NextSceneDataReference: ScenesEnumHandmade;

  constructor(menuItemData: MenuItemData) {
    this.MenuItemName = menuItemData.MenuItemName;
    //this.MenuItemNumber = menuItemData.MenuItemNumber;
    this.MenuItemText = menuItemData.MenuItemText;
    this.MenuItemSelectionDescription = menuItemData.MenuItemSelectionDescription;
    this.ItemSelectionFunctionalityComponents = FCE.BuildFunctionalityComponents(this.MenuItemName, menuItemData.ItemSelectionFunctionalityComponentsEnum, menuItemData.ItemSelectionFunctionalityComponentDatas);
    this.MenuItemRequireAllFlags = menuItemData.MenuItemRequireAllFlags;
    this.MenuItemRequireAnyFlags = menuItemData.MenuItemRequireAnyFlags;
    this.MenuItemForbiddenAllFlags = menuItemData.MenuItemForbiddenAllFlags;
    this.MenuItemForbiddenAnyFlags = menuItemData.MenuItemForbiddenAnyFlags;
    this.MenuItemFlagsToChange = menuItemData.MenuItemFlagsToChange;

    this.ItemTypeSpesifics(menuItemData);
  }
  private ItemTypeSpesifics(menuItemData: MenuItemData) {
    var explorationMI = menuItemData as ExplorationMenuItemData;
    var combatMI = menuItemData as CombatMoveMenuItemData;

    if (explorationMI)
      this.NextSceneDataReference = explorationMI.NextScene as ScenesEnumHandmade;
  }
  NumberMenuItem(i: number) {
    this.MenuItemNumber = i;
  }


  // private ValidateFunctionalityComponents(menuItemData: MenuItemData) {
  //   if (!menuItemData.ItemSelectionFunctionalityComponents) {
  //     return;
  //   }
  //   var i = 0;
  //   for (var componentEnumString of menuItemData.ItemSelectionFunctionalityComponents) {
  //     if (Object.values(FunctionalityComponentsHandmade).includes(componentEnumString as FunctionalityComponentsHandmade)) {
  //       var e = componentEnumString as FunctionalityComponentsHandmade;
  //       FCE.BuildFunctionalityComponents(e,i);
  //       this.ItemSelectionFunctionalityComponents.push(e);
  //       i++;
  //     }
  //     else {
  //       throw console.error(`MenuItem ${this.MenuItemName} (${this.MenuItemText}) contains unknown FunctionalityComponent: ${componentEnumString}`);

  //     }
  //   }
  // }

}