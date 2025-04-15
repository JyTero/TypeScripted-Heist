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
exports.MansionApproachMain = MansionApproachMain;
const MenuObject_1 = require("./MenuObject");
function MansionApproachMain() {
    const GateMenuItems = BuildFenceMenuItems();
    const GateMenu = new MenuObject_1.MenuObject(GateMenuItems);
    DoTheGame();
    function DoTheGame() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("The target is in sight");
            yield DoTheMenu();
        });
    }
    function DoTheMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield GateMenu.HandleMenu();
        });
    }
}
function BuildFenceMenuItems() {
    const FenceMenuItem1 = {
        MenuItemName: "Lockpick Gate",
        MenuItemNumber: 1,
        MenuItemText: "Lockpick the front gate."
    };
    const FenceMenuItem2 = {
        MenuItemName: "Climb Fence",
        MenuItemNumber: 2,
        MenuItemText: "Climb over the tall fence."
    };
    const FenceMenuItem3 = {
        MenuItemName: "Circle around",
        MenuItemNumber: 3,
        MenuItemText: "Walk around the properly, looking for a easier way over the fence."
    };
    return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];
}
//# sourceMappingURL=MansionApproach.js.map