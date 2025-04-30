import { SceneObjectBase } from "../SceneObjectBase";
import { MenuObjectBase } from "../MenuObjectBase";
import { MenuItemBase } from "../MenuItemBase";
export class PlaceholderScene extends SceneObjectBase{
    
        SceneOnStartUp() {
    
            this.sceneMenuItems = this.BuildMenuItems();
            this.sceneMenu = new MenuObjectBase(this.sceneMenuItems);
            this.SceneName = "PlaceholderScene";
        }
    
        async SceneMain() {
            console.log("PLACEHOLDER SCENE, SHOULD NOT BE RUN");
           // await this.DoTheMenu();
    
        }
    
        BuildMenuItems(): MenuItemBase[] {
    
            return [];
    
        }
}