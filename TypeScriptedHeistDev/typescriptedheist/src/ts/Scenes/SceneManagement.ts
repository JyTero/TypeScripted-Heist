import { SceneObjectBase } from "../SceneObjectBase";
import { BattleArenaScene } from "../BattleArenaSceneBase";
export class SceneManagement {

    public HandleNextScene(currentScene: SceneObjectBase, nextScene: SceneObjectBase) {
        if (nextScene instanceof BattleArenaScene) {
            const battleScene:BattleArenaScene = nextScene;
            battleScene.BeginBattleScene(currentScene);
        }
        else
            this.BeginNextScene(nextScene)
    }

    
        public BeginNextScene(sceneObjectBase: SceneObjectBase){
            sceneObjectBase.SceneMain();
        }
}