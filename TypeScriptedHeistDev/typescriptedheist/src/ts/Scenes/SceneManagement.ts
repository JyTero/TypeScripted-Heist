import { SceneObjectBase } from "../SceneObjectBase";
import { BattleArenaScene } from "../BattleArenaSceneBase";
import { CanvasGraphics } from "../initialisation";
export class SceneManagement {

    public BeginFirstScene(scene:SceneObjectBase){
        this.ClearOldData();
        this.DrawSceneGraphics(scene);
    }
    public HandleNextScene(currentScene: SceneObjectBase, nextScene: SceneObjectBase) {
        this.ClearOldData();

        this.DrawSceneGraphics(nextScene);
        if (nextScene instanceof BattleArenaScene) {
            const battleScene: BattleArenaScene = nextScene;
            battleScene.BeginBattleScene(currentScene);
        }
        else
            this.BeginNextScene(nextScene)
    }


    public BeginNextScene(sceneObjectBase: SceneObjectBase) {
        sceneObjectBase.SceneMain();
    }

    private DrawSceneGraphics(nextScene:SceneObjectBase){
        CanvasGraphics.ChangeBackgroundColor(nextScene.BackgroundColor);        
        nextScene.SceneSprites.forEach(sprite => {
            CanvasGraphics.AddSpriteToListPreComp(sprite);
        });
    }

    private ClearOldData(){
        CanvasGraphics.ClearSpriteList();
    }
}