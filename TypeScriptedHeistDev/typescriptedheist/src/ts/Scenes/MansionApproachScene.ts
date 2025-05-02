import { MenuItemBase } from "../MenuItemBase";

import { MansionApproachMenuItemData01, MansionApproachMenuItemData02, MansionApproachMenuItemData03 } from "../MenuData/MansionApproachData";
import { SceneObjectBase } from "../SceneObjectBase";
import { WriteToGame } from "../IOMethods";

export class MansionApproachScene extends SceneObjectBase {
    
    SceneSpsificStartUp(): void {
        this.SceneName = "MansionApproachScene";
    }

    async SceneSpesificMain() {
        WriteToGame("The target is in sight");

    }

    BuildMenuItems(): MenuItemBase[] {

        const FenceMenuItem1 = this.BuildMenuItem(MansionApproachMenuItemData01);

        const FenceMenuItem2 = this.BuildMenuItem(MansionApproachMenuItemData02);

        const FenceMenuItem3 = this.BuildMenuItem(MansionApproachMenuItemData03);

        return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];

    }
}


