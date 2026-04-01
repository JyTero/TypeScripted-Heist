import { MenuItemBase } from "../MenuItemBase";
import { FrontDoorData01, FrontDoorData02 } from "../SceneData/FrontDoorData";
import { SceneBase } from "../Scenes/SceneBase";


export class FrontDoorScene extends SceneBase {

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