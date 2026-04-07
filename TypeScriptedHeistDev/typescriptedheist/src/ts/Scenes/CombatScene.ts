import { BeginBattleEngine } from "../BattleSystem/BattleEngine";
import { BattleArenaDataType } from "../DataTypes/BattleArenaDataType";
import { CombatSceneData } from "../DataTypes/SceneDataType";
import { SceneManagerInstance } from "../MainPageInitialisation";
import { MenuItemBase } from "../MenuItemBase";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { SceneBase } from "./SceneBase";

export class CombatScene extends SceneBase {

        protected battleArenaData: BattleArenaDataType;
        protected previousScene: SceneBase;

        private sceneData: CombatSceneData;
        constructor(data: CombatSceneData) {
                super(data);
                this.battleArenaData = data.battleArenaData;
                this.sceneData = data;
        }

        public SceneSpsificStartUp() { }
        public SceneSpesificMain() { }
        protected SceneSpesificExit(): void {

        }
        public BeginBattleScene(prevScene: SceneBase) {
                this.previousScene = prevScene;
                this.SceneSpesificMain();
                BeginBattleEngine(this.sceneData, this);
        }
        public ReturnToPreviousScene() {
                SceneManagerInstance.ReturnToPreviousScene();
        }
        public OnBattleEnd() { }
}