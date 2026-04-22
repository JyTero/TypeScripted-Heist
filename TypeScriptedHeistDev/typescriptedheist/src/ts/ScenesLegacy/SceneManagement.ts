import { SceneBase } from "../Scenes/SceneBase";
import { CanvasGraphicsInstance, FrameTimeMS } from "../MainPageInitialisation";
import { CombatSceneData, ExplorationSceneData, SceneBaseData } from "../DataTypes/SceneDataType";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { MansionApproachSceneData } from "../SceneData/MansionApproachData";
import { BackdoorSceneData } from "../SceneData/BackdoorData";
import { FrontDoorSceneData } from "../SceneData/FrontDoorData";
import { BattleArenaTestSceneData, BobBattleSceneData } from "../BattleData/TestBattleData";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { ExplorationScene } from "../Scenes/ExplorationScene";
import { CombatScene } from "../Scenes/CombatScene";
import { placeholderScene } from "./Placeholders";
import { MindPalaceScenData } from "../SceneData/MindPalaceData";
import { Delay } from "../../Tools";
import { ExplorationMenuItemData, SceneSpesificItemSceneMenuItemDataType } from "../DataTypes/MenuItemDataType";
import { BobMindPalaceNeighborSpesificMenuItem01, MichelleMindPalaceSpesificMenuItem01, MichelleMindPalaceSpesificMenuItem02, MichelleMindPalaceSpesificMenuItem03, MichelleMindPalaceSpesificMenuItem04 } from "../Items/ItemData/ItemDatasHandmade";
import { ItemBase } from "../Items/ItemBase";
import { MindPalaceNeighborData } from "../SceneData/MindPalaceNeighborData";
import { DemoIntroSceneData } from "../SceneData/DemoProto/DemoIntroData";
import { HookingAlleySceneData } from "../SceneData/DemoProto/HookingAlleyData";
import { LadyOfNightMenuItem } from "../Items/ItemData/DemoProtoItemDatas";
export class SceneManagement {

    private allSceneDatas: Partial<Record<ScenesEnumHandmade, SceneBaseData>> = {};

    private currentScene: SceneBase;
    private previousScene: SceneBase;

    constructor() {
        this.allSceneDatas[ScenesEnumHandmade.First] = DemoIntroSceneData;
        this.allSceneDatas[ScenesEnumHandmade.HookingAlley] = HookingAlleySceneData;

        //OLD
        this.allSceneDatas[ScenesEnumHandmade.OFirst] = MansionApproachSceneData;
        this.allSceneDatas[ScenesEnumHandmade.Backdoor] = BackdoorSceneData;
        this.allSceneDatas[ScenesEnumHandmade.Frontdoor] = FrontDoorSceneData;
        this.allSceneDatas[ScenesEnumHandmade.CombatTest] = BattleArenaTestSceneData;
        this.allSceneDatas[ScenesEnumHandmade.MindPalace] = MindPalaceScenData;
        this.allSceneDatas[ScenesEnumHandmade.MindPalaceNeighbor] = MindPalaceNeighborData;
        this.allSceneDatas[ScenesEnumHandmade.BobCombat] = BobBattleSceneData;
        this.GetAllSSMI();
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
            // default: {
            //     console.log(`Unknown scene type in data! Scene name: ${sceneData?.SceneName} (Type: ${sceneData?.SceneType})`);
            // }
        }
        return scene;
    }


    public BeginFirstScene() {
        this.ClearOldData();
        const scene = this.BuildScene(ScenesEnumHandmade.First);
        if (scene) {
            //this.DrawSceneGraphics(scene);
            this.currentScene = scene;
            this.BeginNextScene(scene);
        }
    }
    public async HandleNextScene(currentScene: SceneBase, nextSceneE: ScenesEnumHandmade) {

        //If true, next scene is to be the current scene
        if (nextSceneE.toString() == "") {
            this.ReturnToCurrentScene();
            return;
        }
        this.ClearOldData();
        if (nextSceneE == ScenesEnumHandmade.Placeholder) {
            this.BeginNextScene(placeholderScene);
            return;
        }

        else {
            const nextScene = this.BuildScene(nextSceneE);
            if (nextScene) {
                while (!nextScene.IsSceneLoadingReady()) {
                    await Delay(FrameTimeMS);
                }
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

    public ReturnToPreviousScene() {
        this.BeginNextScene(this.previousScene);

    }
    public ReturnToCurrentScene() {
        CanvasGraphicsInstance.RefreshGraphicsData(this.currentScene.SceneSprites);
        this.currentScene.SceneMain();
    }
    private BeginNextScene(nextScene: SceneBase) {
        this.currentScene.OnSceneEnd();

        nextScene.SceneOnStartUp();
        this.DrawSceneGraphics(nextScene);
        this.previousScene = this.currentScene;
        this.currentScene = nextScene;
        nextScene.SceneMain();
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

    //DEBUG
    private allSceneSpesificMenuItems: SceneSpesificItemSceneMenuItemDataType[] = [];

    private GetAllSSMI() {
        this.allSceneSpesificMenuItems.push(MichelleMindPalaceSpesificMenuItem01);
        this.allSceneSpesificMenuItems.push(MichelleMindPalaceSpesificMenuItem02);
        this.allSceneSpesificMenuItems.push(MichelleMindPalaceSpesificMenuItem03);
        this.allSceneSpesificMenuItems.push(MichelleMindPalaceSpesificMenuItem04);
        this.allSceneSpesificMenuItems.push(BobMindPalaceNeighborSpesificMenuItem01);
        this.allSceneSpesificMenuItems.push(LadyOfNightMenuItem);
    }

    public GetSpesificMenuItems(sceneItems: ItemBase[], scene: SceneBase):ExplorationMenuItemData[] {
        var retList:ExplorationMenuItemData[] = [];
        for (var SSMI of this.allSceneSpesificMenuItems) {
            if (SSMI.TargetScene == scene.SceneName) {
                for (var sceneItem of sceneItems) {
                    if(SSMI.SourceItem == sceneItem.DevName){
                        retList.push(SSMI);
                    }
                }

            }
        }
        return retList;
    }
}