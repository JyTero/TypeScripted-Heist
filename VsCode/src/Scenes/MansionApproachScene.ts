import { MenuObjectBase } from "../MenuObjectBase";
import { MenuItemBase } from "../MenuItemBase";

import { MansionApproachMenuItemData01, MansionApproachMenuItemData02, MansionApproachMenuItemData03 } from "../MenuData/MansionApproachData";
import { SceneObjectBase } from "../SceneObjectBase";

export class MansionApproachScene extends SceneObjectBase {



    SceneOnStartUp() {

        this.sceneMenuItems = this.BuildMenuItems();
        this.sceneMenu = new MenuObjectBase(this.sceneMenuItems);
        this.SceneName = "MansionApproach";
    }

    async SceneMain() {
        console.log("The target is in sight");
        await this.DoTheMenu();

    }

    BuildMenuItems(): MenuItemBase[] {

        const FenceMenuItem1 = this.BuildMenuItem(MansionApproachMenuItemData01);

        const FenceMenuItem2 = this.BuildMenuItem(MansionApproachMenuItemData02);

        const FenceMenuItem3 = this.BuildMenuItem(MansionApproachMenuItemData03);

        return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];

    }
}
// function BuildFenceMenuItems():MenuItemBase[]
// {

//     const FenceMenuItem1 = BuildMenuItem(MansionApproachMenuItem01);

//     // FenceMenuItem1.MenuItemName =  "Lockpick Gate";
//     // FenceMenuItem1.MenuItemNumber = 1;
//     // FenceMenuItem1.MenuItemText = "Lockpick the front gate.";
//     // FenceMenuItem1.MenuItemSelectionDescription = "You easily pick the broken lock on the gate and sneak in.";
//    // let FrontGatePicked = true;
//     //enceMenuItem1.MenuItemSetFlags.push(FrontGatePicked);

//     const FenceMenuItem2 = BuildMenuItem(MansionApproachMenuItem02);

//     // const FenceMenuItem2 = new MenuItem();
//     // FenceMenuItem2.MenuItemName =  "Climb Fence";
//     // FenceMenuItem2.MenuItemNumber = 2;
//     // FenceMenuItem2.MenuItemText = "Climb over the tall fence.";
//     // FenceMenuItem2.MenuItemSelectionDescription = "You manage to climb over the brick fence.";

//     const FenceMenuItem3 = BuildMenuItem(MansionApproachMenuItem03);

//     // const FenceMenuItem3 = new MenuItem();
//     // FenceMenuItem3.MenuItemName =  "Circle around";
//     // FenceMenuItem3.MenuItemNumber = 3;
//     // FenceMenuItem3.MenuItemText = "Walk around the property, looking for a easier way over the fence.";
//     // FenceMenuItem3.MenuItemSelectionDescription = "You walk along the fence and find a collapsed section on the far end of the back garden.";


//     return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];

// }


