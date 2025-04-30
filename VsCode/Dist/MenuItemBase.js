"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemBase = void 0;
const _1 = require(".");
class MenuItemBase {
    constructor(MenuItemName, MenuItemNumber, MenuItemText, MenuItemSelectionDescription, MenuItemReadFlags, MenuItemWriteFlags) {
        this.MenuItemName = "";
        this.MenuItemNumber = -1;
        this.MenuItemText = "";
        this.MenuItemSelectionDescription = "";
        this.MenuItemReadFlags = [];
        this.MenuItemWriteFlags = [];
        this.NextSceneObject = _1.placeholderScene;
        this.MenuItemName = MenuItemName;
        this.MenuItemNumber = MenuItemNumber;
        this.MenuItemText = MenuItemText;
        this.MenuItemSelectionDescription = MenuItemSelectionDescription;
        this.MenuItemReadFlags = MenuItemReadFlags;
        this.MenuItemWriteFlags = MenuItemWriteFlags;
    }
}
exports.MenuItemBase = MenuItemBase;
//# sourceMappingURL=MenuItemBase.js.map