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
exports.FrontDoorScene = void 0;
const MenuObjectBase_1 = require("../MenuObjectBase");
const SceneObjectBase_1 = require("../SceneObjectBase");
const FrontDoorData_1 = require("../MenuData/FrontDoorData");
class FrontDoorScene extends SceneObjectBase_1.SceneObjectBase {
    SceneOnStartUp() {
        this.sceneMenuItems = this.BuildMenuItems();
        this.sceneMenu = new MenuObjectBase_1.MenuObjectBase(this.sceneMenuItems);
        this.SceneName = "MansionApproach";
    }
    SceneMain() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Closing in on the door");
            yield this.DoTheMenu();
        });
    }
    BuildMenuItems() {
        const menuItem01 = this.BuildMenuItem(FrontDoorData_1.FrontDoorData01);
        const menuItem02 = this.BuildMenuItem(FrontDoorData_1.FrontDoorData02);
        return [menuItem01, menuItem02];
    }
}
exports.FrontDoorScene = FrontDoorScene;
//# sourceMappingURL=FrontDoorScene.js.map