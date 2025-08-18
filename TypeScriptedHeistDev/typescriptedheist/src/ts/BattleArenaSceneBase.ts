import { BattleArenaDataType } from "./DataTypes/BattleArenaDataType";
import { MenuItemBase } from "./MenuItemBase";
import { SceneObjectBase } from "./SceneObjectBase";
import { placeholderBattleArenaData, placeholderScene } from "./Scenes/Placeholders";

export abstract class BattleArenaScene extends SceneObjectBase{
 
    public VictoryNextScene: SceneObjectBase;
    protected battleArenaData:BattleArenaDataType = placeholderBattleArenaData;
    protected previousScene: SceneObjectBase = placeholderScene;

   
    public abstract SceneSpsificStartUp(): void;
    public abstract SceneSpesificMain(): void;
    public abstract BuildMenuItems(): MenuItemBase[];
    public abstract BeginBattleScene(prevScene:SceneObjectBase):void;
    public abstract OnBattleEnd(): void;
}