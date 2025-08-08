
import { BeginBattleEngine } from "../BattleSystem/BattleArena";
import { WriteAlert } from "../IOMethods";
import { MenuItemBase } from "../MenuItemBase";
import { SceneObjectBase } from "../SceneObjectBase";
import { BattleArenaScene } from "../BattleArenaSceneBase";
import { TestBattleData } from "../BattleData/TestBattleData";

//The Scene which contains the battle ()
export class BattleArenaTestScene extends BattleArenaScene {
    public SceneSpsificStartUp(): void {
        this.SceneName = "Beast Battling Bitches";
        this.battleArenaData = TestBattleData;
    }
    public SceneSpesificMain(): void {
        WriteAlert("Battle Commences");
    }

    public BuildMenuItems(): MenuItemBase[] {
        return [];
    }
    public BeginBattleScene(prevScene:SceneObjectBase){
        this.previousScene = prevScene;
        this.SceneSpesificMain();
        BeginBattleEngine(this.battleArenaData,this);
    }

    public OnBattleEnd(): void {
        
    }
}