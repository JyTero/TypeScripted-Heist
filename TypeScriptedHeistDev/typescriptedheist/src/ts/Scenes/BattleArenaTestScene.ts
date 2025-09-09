
import { BeginBattleEngine } from "../BattleSystem/BattleEngine";
import { WriteAlert } from "../IOMethods";
import { MenuItemBase } from "../MenuItemBase";
import { SceneObjectBase } from "../SceneObjectBase";
import { BattleArenaScene } from "../BattleArenaSceneBase";
import { TestBattleData } from "../BattleData/TestBattleData";
import { SceneDataType } from "../DataTypes/SceneDataType";
import { Color } from "../Tools/Color";

//The Scene which contains the battle ()
export class BattleArenaTestScene extends BattleArenaScene {
    public SceneSpsificStartUp(): void {
        this.SceneName = BattleArenaTestSceneData.SceneName;
        this.battleArenaData = TestBattleData;
        this.PrepareGraphics(BattleArenaTestSceneData);
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
const BattleArenaTestSceneData:SceneDataType ={
    SceneName: "Mansion approach",
    SceneBackgroundColor: new Color(16,255,16,1),
}
