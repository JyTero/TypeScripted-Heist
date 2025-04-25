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
const MenuItem_1 = require("./MenuItem");
function MansionApproachMain() {
    return __awaiter(this, void 0, void 0, function* () {
        const GateMenuItems = BuildFenceMenuItems();
        const GateMenu = new MenuObject_1.MenuObject(GateMenuItems);
        console.log("The target is in sight");
        yield DoTheMenu();
        function DoTheMenu() {
            return __awaiter(this, void 0, void 0, function* () {
                yield GateMenu.HandleMenu();
            });
        }
    });
}
function BuildFenceMenuItems() {
    const FenceMenuItem1 = new MenuItem_1.MenuItem();
    FenceMenuItem1.MenuItemName = "Lockpick Gate";
    FenceMenuItem1.MenuItemNumber = 1;
    FenceMenuItem1.MenuItemText = "Lockpick the front gate.";
    FenceMenuItem1.MenuItemSelectionDescription = "You easily pick the broken lock on the gate and sneak in.";
    let FrontGatePicked = true;
    FenceMenuItem1.MenuItemSetFlags.push(FrontGatePicked);
    const FenceMenuItem2 = new MenuItem_1.MenuItem();
    FenceMenuItem2.MenuItemName = "Climb Fence";
    FenceMenuItem2.MenuItemNumber = 2;
    FenceMenuItem2.MenuItemText = "Climb over the tall fence.";
    FenceMenuItem2.MenuItemSelectionDescription = "You manage to climb over the brick fence.";
    const FenceMenuItem3 = new MenuItem_1.MenuItem();
    FenceMenuItem3.MenuItemName = "Circle around";
    FenceMenuItem3.MenuItemNumber = 3;
    FenceMenuItem3.MenuItemText = "Walk around the properly, looking for a easier way over the fence.";
    FenceMenuItem3.MenuItemSelectionDescription = "You walk along the fence and find a collapsed section on the far end of the back garden.";
    return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];
}
//# sourceMappingURL=MansionApproach.js.map