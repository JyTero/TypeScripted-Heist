import { WriteAlert } from "../IOMethods";
import { MenuItemBase } from "../MenuItemBase";
import { GroundLevelWindowData01, GroundLevelWindowData02, GroundLevelWindowData03 } from "../SceneData/GroundLevelWindowData";
import { SceneObjectBase } from "../SceneObjectBase";


export class GroundLevelWindowScene extends SceneObjectBase {
    SceneSpsificStartUp(): void {
        this.SceneName = "GroundLevelWindowScene";
    }

    BuildMenuItems(): MenuItemBase[] {
        const menuItem01 = this.BuildMenuItem(GroundLevelWindowData01);
        const menuItem02 = this.BuildMenuItem(GroundLevelWindowData02);
        const menuItem03 = this.BuildMenuItem(GroundLevelWindowData03);
        return [menuItem01, menuItem02, menuItem03];
    }

    SceneSpesificMain(): void {
        WriteAlert("You approach a window");

    }

}
