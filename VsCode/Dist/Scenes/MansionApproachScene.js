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
exports.MansionApproachScene = void 0;
const MenuObjectBase_1 = require("../MenuObjectBase");
const MansionApproachData_1 = require("../MenuData/MansionApproachData");
const SceneObjectBase_1 = require("../SceneObjectBase");
class MansionApproachScene extends SceneObjectBase_1.SceneObjectBase {
    SceneOnStartUp() {
        this.sceneMenuItems = this.BuildMenuItems();
        this.sceneMenu = new MenuObjectBase_1.MenuObjectBase(this.sceneMenuItems);
        this.SceneName = "MansionApproach";
    }
    SceneMain() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("The target is in sight");
            yield this.DoTheMenu();
        });
    }
    BuildMenuItems() {
        const FenceMenuItem1 = this.BuildMenuItem(MansionApproachData_1.MansionApproachMenuItemData01);
        const FenceMenuItem2 = this.BuildMenuItem(MansionApproachData_1.MansionApproachMenuItemData02);
        const FenceMenuItem3 = this.BuildMenuItem(MansionApproachData_1.MansionApproachMenuItemData03);
        return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];
    }
}
exports.MansionApproachScene = MansionApproachScene;
//# sourceMappingURL=MansionApproachScene.js.map