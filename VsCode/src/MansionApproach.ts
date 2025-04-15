import { MenuObject } from "./MenuObject";
import { MenuItem } from "./MenuObject";

export function MansionApproachMain(){

    const GateMenuItems : MenuItem[] = BuildFenceMenuItems();
    const GateMenu:MenuObject = new MenuObject(GateMenuItems);
    DoTheGame();

    async function DoTheGame() 
    {
        console.log("The target is in sight");
        await DoTheMenu();
        console.log("GG ez"); 
    }

    async function DoTheMenu() {
        await GateMenu.HandleMenu();
    }
}

function BuildFenceMenuItems():MenuItem[]
{
    const FenceMenuItem1 : MenuItem = 
    {
        MenuItemName: "Lockpick Gate",
        MenuItemNumber: 1,
        MenuItemText: "Lockpick the front gate."
    }
    const FenceMenuItem2 : MenuItem = 
    {
        MenuItemName: "Climb Fence",
        MenuItemNumber: 2,
        MenuItemText: "Climb over the tall fence."
    }
    const FenceMenuItem3 : MenuItem = 
    {
        MenuItemName: "Circle around",
        MenuItemNumber: 3,
        MenuItemText: "Walk around the properly, looking for a easier way over the fence."
    }

    return    [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];

}