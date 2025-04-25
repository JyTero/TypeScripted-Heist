import { MenuObject } from "./MenuObject";
import { MenuItem } from "./MenuItem";

export async function MansionApproachMain(){

    const GateMenuItems : MenuItem[] = BuildFenceMenuItems();
    const GateMenu:MenuObject = new MenuObject(GateMenuItems);

        console.log("The target is in sight");
        await DoTheMenu();



    async function DoTheMenu() {
        await GateMenu.HandleMenu();
    }
}


function BuildFenceMenuItems():MenuItem[]
{
    const FenceMenuItem1 = new MenuItem();

    FenceMenuItem1.MenuItemName =  "Lockpick Gate";
    FenceMenuItem1.MenuItemNumber = 1;
    FenceMenuItem1.MenuItemText = "Lockpick the front gate.";
    FenceMenuItem1.MenuItemSelectionDescription = "You easily pick the broken lock on the gate and sneak in.";
    let FrontGatePicked = true;
    FenceMenuItem1.MenuItemSetFlags.push(FrontGatePicked);

    const FenceMenuItem2 = new MenuItem();
    FenceMenuItem2.MenuItemName =  "Climb Fence";
    FenceMenuItem2.MenuItemNumber = 2;
    FenceMenuItem2.MenuItemText = "Climb over the tall fence.";
    FenceMenuItem2.MenuItemSelectionDescription = "You manage to climb over the brick fence.";


    const FenceMenuItem3 = new MenuItem();
    FenceMenuItem3.MenuItemName =  "Circle around";
    FenceMenuItem3.MenuItemNumber = 3;
    FenceMenuItem3.MenuItemText = "Walk around the properly, looking for a easier way over the fence.";
    FenceMenuItem3.MenuItemSelectionDescription = "You walk along the fence and find a collapsed section on the far end of the back garden.";


    return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];

}