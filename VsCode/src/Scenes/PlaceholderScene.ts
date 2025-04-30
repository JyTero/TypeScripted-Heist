import { SceneObjectBase } from "../SceneObjectBase";
import { MenuItemBase } from "../MenuItemBase";
export class PlaceholderScene extends SceneObjectBase {

    SceneSpsificStartUp(): void {
        this.SceneName = "PlaceholderScene";
    }
    
    async SceneSpesificMain() {
        console.log("PLACEHOLDER SCENE, SHOULD NOT BE RUN");
        // await this.DoTheMenu();

    }

    BuildMenuItems(): MenuItemBase[] {

        return [];

    }
}