import { SceneObjectBase } from "../SceneObjectBase";
import { MenuItemBase } from "../MenuItemBase";
import { WriteToGame } from "../IOMethods";
export class PlaceholderScene extends SceneObjectBase {
    
    SceneSpsificStartUp(): void {
        this.SceneName = "PlaceholderScene";
    }
    
    async SceneSpesificMain() {
        WriteToGame("PLACEHOLDER SCENE, SHOULD NOT BE RUN");
        // await this.DoTheMenu();
        
    }
    
    BuildMenuItems(): MenuItemBase[] {
        
        return [];
        
    }
}
export const placeholderScene: PlaceholderScene = new PlaceholderScene();