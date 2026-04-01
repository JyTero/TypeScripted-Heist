
import { BeginBattleEngine } from "../BattleSystem/BattleEngine";
import { MenuItemBase } from "../MenuItemBase";
import { SceneBase } from "../Scenes/SceneBase";
import { BattleArenaSceneOLD } from "../BattleArenaSceneBase";
import { BattleArenaTestSceneData, TestBattleData } from "../BattleData/TestBattleData";
import { AlertManager } from "../AlertManager";

// export class BattleArenaTestScene extends BattleArenaSceneOLD {
//     public SceneSpsificStartUp(): void {
//         this.SceneName = BattleArenaTestSceneData.SceneName;
//         this.battleArenaData = TestBattleData;
//         this.PrepareGraphics(BattleArenaTestSceneData);
//     }
//     public SceneSpesificMain(): void {
//         AlertManager.Instance.WriteAlertStorePrevious("Battle Commences");
//     }

//     public BuildMenuItems(): MenuItemBase[] {
//         return [];
//     }
//     public BeginBattleScene(prevScene:SceneBase){
//         this.previousScene = prevScene;
//         this.SceneSpesificMain();
//         BeginBattleEngine(this.battleArenaData,this);
//     }

//     public OnBattleEnd(): void {
        
//     }
// }

