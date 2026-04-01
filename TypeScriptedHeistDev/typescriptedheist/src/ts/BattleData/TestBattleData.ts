import { CharacterEnum } from "../../Assets/DataJsons/CharacterEnum";
import { BattleArenaDataType } from "../DataTypes/BattleArenaDataType";
import { CombatSceneData } from "../DataTypes/SceneDataType";
import { SceneTypesEnumHandmade } from "../Scenes/SceneTypesEnumHandmade";
import { placeholderScene } from "../ScenesLegacy/Placeholders";
import { ScenesEnumHandmade } from "../ScenesLegacy/ScenesEnumHandMade";
import { Color } from "../Tools/Color";



export const TestBattleData: BattleArenaDataType = {
    BattleName: "Computer Combat",
    //PlayerCharacter: PlaceholderCharacterSheet,
    EnemyCharacterDatas: [CharacterEnum.Character_Amalia, CharacterEnum.Character_Henrique],
    NextSceneOnVictory: ScenesEnumHandmade.Placeholder,
}
export const BattleArenaTestSceneData: CombatSceneData = {
    SceneName: TestBattleData.BattleName + "Scene",
    SceneType: SceneTypesEnumHandmade.CombatScene.toString(),
    SceneBackgroundColor: new Color(16, 255, 16, 1),
    battleArenaData: TestBattleData
}
