import { MenuItemBase } from "../MenuItemBase";

import { MansionApproachMenuItemData01, MansionApproachMenuItemData02, MansionApproachMenuItemData03 } from "../MenuData/MansionApproachData";
import { SceneObjectBase } from "../SceneObjectBase";

export class MansionApproachScene extends SceneObjectBase {
   
    SceneSpsificStartUp(): void {
      this.SceneName = "MansionApproachScene";
    }

    async SceneSpesificMain() {
        console.log("The target is in sight");
        this.DrawThings();
    }

    BuildMenuItems(): MenuItemBase[] {

        const FenceMenuItem1 = this.BuildMenuItem(MansionApproachMenuItemData01);

        const FenceMenuItem2 = this.BuildMenuItem(MansionApproachMenuItemData02);

        const FenceMenuItem3 = this.BuildMenuItem(MansionApproachMenuItemData03);

        return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3];

    }

    DrawThings() {
        const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');

        if (ctx) {

            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas each frame

            // Drawing a simple rectangle (you can replace this with sprites later)
            ctx.fillStyle = 'red';
            ctx.fillRect(100, 100, 200, 150);
        }
        else
        console.log("no canvas");
    }
}

