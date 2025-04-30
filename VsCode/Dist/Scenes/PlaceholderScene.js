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
exports.PlaceholderScene = void 0;
const SceneObjectBase_1 = require("../SceneObjectBase");
const MenuObjectBase_1 = require("../MenuObjectBase");
class PlaceholderScene extends SceneObjectBase_1.SceneObjectBase {
    SceneOnStartUp() {
        this.sceneMenuItems = this.BuildMenuItems();
        this.sceneMenu = new MenuObjectBase_1.MenuObjectBase(this.sceneMenuItems);
        this.SceneName = "PlaceholderScene";
    }
    SceneMain() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("PLACEHOLDER SCENE, SHOULD NOT BE RUN");
        });
    }
    BuildMenuItems() {
        return [];
    }
}
exports.PlaceholderScene = PlaceholderScene;
//# sourceMappingURL=PlaceholderScene.js.map