import { BattleArenaDataType } from "./DataTypes/BattleArenaDataType";
import { MenuItemBase } from "./MenuItemBase";
import { SceneBase } from "./SceneBase";
import { placeholderBattleArenaData, placeholderScene } from "./Scenes/Placeholders";

export abstract class BattleArenaScene extends SceneBase{
 
    public VictoryNextScene: SceneBase;
    protected battleArenaData:BattleArenaDataType = placeholderBattleArenaData;
    protected previousScene: SceneBase = placeholderScene;

   
    public abstract SceneSpsificStartUp(): void;
    public abstract SceneSpesificMain(): void;
    public abstract BuildMenuItems(): MenuItemBase[];
    public abstract BeginBattleScene(prevScene:SceneBase):void;
    public abstract OnBattleEnd(): void;
}