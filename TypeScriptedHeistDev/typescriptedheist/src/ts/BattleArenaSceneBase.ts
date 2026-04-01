import { BeginBattleEngine } from "./BattleSystem/BattleEngine";
import { BattleArenaDataType } from "./DataTypes/BattleArenaDataType";
import { MenuItemBase } from "./MenuItemBase";
import { SceneBase } from "./Scenes/SceneBase";
import { placeholderScene } from "./ScenesLegacy/Placeholders";
import { ScenesEnumHandmade } from "./ScenesLegacy/ScenesEnumHandMade";

export class BattleArenaSceneOLD extends SceneBase {

    public VictoryNextScene: ScenesEnumHandmade;
    protected battleArenaData: BattleArenaDataType;
    protected previousScene: SceneBase = placeholderScene;


    public SceneSpsificStartUp(): void { }
    public SceneSpesificMain(): void { }
    public BuildMenuItems(): MenuItemBase[] { return [] }
    public BeginBattleScene(prevScene: SceneBase): void {

    }
    public OnBattleEnd(): void { }
}