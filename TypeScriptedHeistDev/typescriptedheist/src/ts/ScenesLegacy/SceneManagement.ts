import { SceneBase } from "../Scenes/SceneBase";
import { BattleArenaSceneOLD } from "../BattleArenaSceneBase";
import { CanvasGraphicsInstance } from "../MainPageInitialisation";
import { CombatSceneData, ExplorationSceneData, SceneBaseData } from "../DataTypes/SceneDataType";
import { ScenesEnumHandmade } from "./ScenesEnumHandMade";
import { MansionApproachSceneData } from "../SceneData/MansionApproachData";
import { BackdoorSceneData } from "../SceneData/BackdoorData";
import { FrontDoorSceneData } from "../SceneData/FrontDoorData";
import { GroundLevelWindowSceneData } from "../SceneData/GroundLevelWindowData";
import { BattleArenaTestSceneData } from "../BattleData/TestBattleData";
import { SceneTypesEnumHandmade } from "../Scenes/SceneTypesEnumHandmade";
import { ExplorationScene } from "../Scenes/ExplorationScene";
import { CombatScene } from "../Scenes/CombatScene";
import { placeholderScene } from "./Placeholders";
export class SceneManagement {

    private allSceneDatas: Partial<Record<ScenesEnumHandmade, SceneBaseData>> = {};

    constructor() {
        this.allSceneDatas[ScenesEnumHandmade.First] = MansionApproachSceneData;
        this.allSceneDatas[ScenesEnumHandmade.Backdoor] = BackdoorSceneData;
        this.allSceneDatas[ScenesEnumHandmade.Frontdoor] = FrontDoorSceneData;
        this.allSceneDatas[ScenesEnumHandmade.GroundWindow] = GroundLevelWindowSceneData;
        this.allSceneDatas[ScenesEnumHandmade.CombatTest] = BattleArenaTestSceneData;
    }

    public BuildScene(s: ScenesEnumHandmade): SceneBase | null {
        //Eventually: Find scene with name "First" and begin from that

        var sceneData = this.allSceneDatas[s];
        var scene = null;
        switch (sceneData?.SceneType) {
            case SceneTypesEnumHandmade.ExplorationScene: {
                const explorationData = sceneData as ExplorationSceneData;
                scene = new ExplorationScene(explorationData);
                return scene;
            }
            case SceneTypesEnumHandmade.CombatScene: {
                const combatData = sceneData as CombatSceneData
                scene = new CombatScene(combatData);
                return scene;
            }
            default: {
                console.log(`Unknown scene type in data! Scene name: ${sceneData?.SceneName} (Type: ${sceneData?.SceneType})`);
            }
        }
        return scene;
    }


    public BeginFirstScene() {
        this.ClearOldData();
        const scene = this.BuildScene(ScenesEnumHandmade.First);
        if (scene) {
            //this.DrawSceneGraphics(scene);
            this.BeginNextScene(scene);
        }
    }
    public HandleNextScene(currentScene: SceneBase, nextSceneE: ScenesEnumHandmade) {
        this.ClearOldData();

        if (nextSceneE == ScenesEnumHandmade.Placeholder){
            this.BeginNextScene(placeholderScene);
            return;
        }

        //If true, next scene is to be the current scene
        if (nextSceneE.toString() == "") {
            this.BeginNextScene(currentScene);
        }
        else {

            const nextScene = this.BuildScene(nextSceneE);
            if (nextScene) {
                //this.DrawSceneGraphics(nextScene);
                if (nextScene.SceneType == SceneTypesEnumHandmade.CombatScene) {
                    const battleScene: CombatScene = nextScene as CombatScene;
                    this.DrawSceneGraphics(battleScene);
                    battleScene.BeginBattleScene(battleScene);
                }
                else
                    this.BeginNextScene(nextScene)
            }
        }
    }

    public ReturnToPreviousScene(prevScene:SceneBase) {
        this.BeginNextScene(prevScene);
    }

    private BeginNextScene(sceneObjectBase: SceneBase) {
        this.DrawSceneGraphics(sceneObjectBase);
        sceneObjectBase.SceneMain();
    }

    private DrawSceneGraphics(nextScene: SceneBase) {
        CanvasGraphicsInstance.ChangeBackgroundColor(nextScene.BackgroundColor);
        CanvasGraphicsInstance.ClearSpriteList();
        nextScene.SceneSprites.forEach(sprite => {
            CanvasGraphicsInstance.AddSpriteToListPreComp(sprite);
        });
    }

    private ClearOldData() {
        CanvasGraphicsInstance.ClearSpriteList();
    }
}