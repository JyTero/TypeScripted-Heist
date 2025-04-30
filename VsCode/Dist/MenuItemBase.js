import { placeholderScene } from "./index";
var MenuItemBase = (function () {
    function MenuItemBase(MenuItemName, MenuItemNumber, MenuItemText, MenuItemSelectionDescription, MenuItemReadFlags, MenuItemWriteFlags) {
        this.MenuItemName = "";
        this.MenuItemNumber = -1;
        this.MenuItemText = "";
        this.MenuItemSelectionDescription = "";
        this.MenuItemReadFlags = [];
        this.MenuItemWriteFlags = [];
        this.NextSceneObject = placeholderScene;
        this.MenuItemName = MenuItemName;
        this.MenuItemNumber = MenuItemNumber;
        this.MenuItemText = MenuItemText;
        this.MenuItemSelectionDescription = MenuItemSelectionDescription;
        this.MenuItemReadFlags = MenuItemReadFlags;
        this.MenuItemWriteFlags = MenuItemWriteFlags;
    }
    return MenuItemBase;
}());
export { MenuItemBase };
//# sourceMappingURL=MenuItemBase.js.map