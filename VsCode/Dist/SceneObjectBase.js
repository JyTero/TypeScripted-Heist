"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneObjectBase = void 0;
const MenuItemBase_1 = require("./MenuItemBase");
class SceneObjectBase {
    constructor() {
        this.SceneName = "";
        this.sceneMenuItems = [];
        this.sceneMenu = null;
    }
    DoTheMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = 0;
            if (this.sceneMenu)
                response = yield this.sceneMenu.RunMenu();
            else
                console.log("NULL MENU: " + this.SceneName + " scene");
            response--;
            this.LoadNextScene(this.sceneMenuItems[response].NextSceneObject);
        });
    }
    BuildMenuItem(MenuItemData) {
        const newMenuItem = new MenuItemBase_1.MenuItemBase(MenuItemData.MenuItemName, MenuItemData.MenuItemNumber, MenuItemData.MenuItemText, MenuItemData.MenuItemSelectionDescription, MenuItemData.MenuItemReadFlags, MenuItemData.MenuItemWriteFlags);
        return newMenuItem;
    }
    TieMenuItemToSceneObject(menuItemIndex, targetScene) {
        this.sceneMenuItems[menuItemIndex].NextSceneObject = targetScene;
    }
    LoadNextScene(sceneObjectBase) {
        sceneObjectBase.SceneMain();
    }
}
exports.SceneObjectBase = SceneObjectBase;
//# sourceMappingURL=SceneObjectBase.js.map