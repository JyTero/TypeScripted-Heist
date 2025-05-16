import { MenuItemBase } from "../MenuItemBase";
import { SceneObjectBase } from "../SceneObjectBase";
import { BackdoorData01, BackdoorData02, BackdoorData03, BackdoorData04 } from "../MenuData/BackdoorData";
import { WriteAlert } from "../IOMethods";

export class BackdoorScene extends SceneObjectBase{
    
    SceneSpsificStartUp(): void {
        this.SceneName = "BackdoorScene";
    }
    BuildMenuItems(): MenuItemBase[] {
        
        const menuItem01 = this. BuildMenuItem(BackdoorData01);
        const menuItem02 = this. BuildMenuItem(BackdoorData02);
        const menuItem03 = this. BuildMenuItem(BackdoorData03);
        const menuItem04 = this. BuildMenuItem(BackdoorData04);

        return [menuItem01, menuItem02, menuItem03, menuItem04];
}
    
    SceneSpesificMain(): void {
        WriteAlert("You approach the back porch");
    }

}
