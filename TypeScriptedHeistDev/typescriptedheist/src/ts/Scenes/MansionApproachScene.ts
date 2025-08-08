import { MenuItemBase } from "../MenuItemBase";

import { MansionApproachMenuItemData01, MansionApproachMenuItemData02, MansionApproachMenuItemData03, MansionApproachMenuItemData04 } from "../MenuData/MansionApproachData";
import { SceneObjectBase } from "../SceneObjectBase";
import { WriteAlert } from "../IOMethods";

export class MansionApproachScene extends SceneObjectBase {
    
   public SceneSpsificStartUp(): void {
        this.SceneName = "MansionApproachScene";
    }

   public async SceneSpesificMain() {
        WriteAlert("The target is in sight");

    }

   public BuildMenuItems(): MenuItemBase[] {

        const FenceMenuItem1 = this.BuildMenuItem(MansionApproachMenuItemData01);
        const FenceMenuItem2 = this.BuildMenuItem(MansionApproachMenuItemData02);
        const FenceMenuItem3 = this.BuildMenuItem(MansionApproachMenuItemData03);
        const FenceMenuItem4 = this.BuildMenuItem(MansionApproachMenuItemData04);

        return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3, FenceMenuItem4];

    }
}


