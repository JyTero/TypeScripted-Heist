import { MenuItemBase } from "../MenuItemBase";
import { SceneObjectBase } from "../SceneObjectBase";
import { FrontDoorData01, FrontDoorData02 } from "../MenuData/FrontDoorData";

export class FrontDoorScene extends SceneObjectBase {

    SceneSpsificStartUp(): void {
        this.SceneName = "FrontDoorScene";
    }
    async SceneSpesificMain() {
        console.log("Closing in on the door");
    }

    BuildMenuItems(): MenuItemBase[] {
        const menuItem01 = this.BuildMenuItem(FrontDoorData01);
        const menuItem02 = this.BuildMenuItem(FrontDoorData02);

        return [menuItem01, menuItem02];
    }
}