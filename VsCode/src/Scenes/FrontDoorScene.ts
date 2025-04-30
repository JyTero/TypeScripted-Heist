import { MenuItemBase } from "../MenuItemBase";
import { MenuObjectBase } from "../MenuObjectBase";
import { SceneObjectBase } from "../SceneObjectBase";
import { FrontDoorData01, FrontDoorData02 } from "../MenuData/FrontDoorData";

export class FrontDoorScene extends SceneObjectBase {

    SceneOnStartUp(): void {
        this.sceneMenuItems = this.BuildMenuItems();
        this.sceneMenu = new MenuObjectBase(this.sceneMenuItems);
        this.SceneName = "MansionApproach";
    }

    async SceneMain() {
        console.log("Closing in on the door");
        await this.DoTheMenu();
    }

    BuildMenuItems(): MenuItemBase[] {
        const menuItem01 = this.BuildMenuItem(FrontDoorData01);
        const menuItem02 = this.BuildMenuItem(FrontDoorData02);

        return [menuItem01, menuItem02];
    }
}