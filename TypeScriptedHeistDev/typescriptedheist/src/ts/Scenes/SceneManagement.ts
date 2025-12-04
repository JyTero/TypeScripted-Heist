import { SceneBase } from "../SceneBase";
import { BattleArenaScene } from "../BattleArenaSceneBase";
import { CanvasGraphicsInstance } from "../initialisation";
export class SceneManagement {

    public BeginFirstScene(scene:SceneBase){
        this.ClearOldData();
        this.DrawSceneGraphics(scene);
    }
    public HandleNextScene(currentScene: SceneBase, nextScene: SceneBase) {
        this.ClearOldData();

        this.DrawSceneGraphics(nextScene);
        if (nextScene instanceof BattleArenaScene) {
            const battleScene: BattleArenaScene = nextScene;
            battleScene.BeginBattleScene(currentScene);
        }
        else
            this.BeginNextScene(nextScene)
    }


    public BeginNextScene(sceneObjectBase: SceneBase) {
        sceneObjectBase.SceneMain();
    }

    private DrawSceneGraphics(nextScene:SceneBase){
        CanvasGraphicsInstance.ChangeBackgroundColor(nextScene.BackgroundColor);        
        nextScene.SceneSprites.forEach(sprite => {
            CanvasGraphicsInstance.AddSpriteToListPreComp(sprite);
        });
    }

    private ClearOldData(){
        CanvasGraphicsInstance.ClearSpriteList();
    }
}