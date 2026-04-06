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

        constructor(data: CombatSceneData) {
                super(data);
                this.battleArenaData = data.battleArenaData;
        }

        public SceneSpsificStartUp() { }
        public SceneSpesificMain() { }
        protected SceneSpesificExit(): void {

        }
        public BeginBattleScene(prevScene: SceneBase) {
                this.previousScene = prevScene;
                this.SceneSpesificMain();
                BeginBattleEngine(this.battleArenaData, this);
        }
        public ReturnToPreviousScene() {
                SceneManagerInstance.ReturnToPreviousScene();
        }
        public OnBattleEnd() { }
}