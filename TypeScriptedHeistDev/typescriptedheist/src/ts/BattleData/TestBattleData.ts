import { CharacterEnum } from "../../Assets/DataJsons/CharacterEnum";
import { BattleArenaDataType } from "../DataTypes/BattleArenaDataType";
import { CombatSceneData } from "../DataTypes/SceneDataType";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { placeholderScene } from "../ScenesLegacy/Placeholders";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { Color } from "../Tools/Color";
import { ItemsEnumHandmade } from "../../Assets/ItemsEnumHandmade";



export const TestBattleData: BattleArenaDataType = {
    BattleName: "Computer Combat",
    //PlayerCharacter: PlaceholderCharacterSheet,
    EnemyCharacterDatas: [CharacterEnum.Character_Amalia, CharacterEnum.Character_Henrique],
    //NextSceneOnVictory: ScenesEnumHandmade.Placeholder,
}
export const BattleArenaTestSceneData: CombatSceneData = {
    SceneName: TestBattleData.BattleName + "Scene",
    SceneType: SceneTypesEnumHandmade.CombatScene.toString(),
    SceneBackgroundColor: new Color(16, 255, 16, 1),
    battleArenaData: TestBattleData,
    SceneItems: [],
    SceneItemLocationDatas: [],
    combatVictoryNextScene: ScenesEnumHandmade.First,
    combatVictoryFlagsToChange: [],
    combatLossNextScene: ScenesEnumHandmade.MindPalace,
    combatLossFlagsToChange: [],
}

export const BobBattleArenaData: BattleArenaDataType = {
    BattleName: "Purse acquisition",
    EnemyCharacterDatas: [CharacterEnum.Character_Bob],
}
export const BobBattleSceneData: CombatSceneData = {
    battleArenaData: BobBattleArenaData,
    combatVictoryNextScene: ScenesEnumHandmade.MindPalaceNeighbor,
    combatVictoryFlagsToChange: [{FlagToChange: "MindPalaceMichelleChat03", FlagValue: true}],
    combatLossNextScene: ScenesEnumHandmade.MindPalace,
    combatLossFlagsToChange: [],
    SceneName: `${BobBattleArenaData.BattleName}Scene`,
    SceneType: SceneTypesEnumHandmade.CombatScene,
    SceneBackgroundColor: new Color(7,39,101,1),
    SceneItems: [],
    SceneItemLocationDatas: [],
}

