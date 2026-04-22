import { ItemsEnumHandmade } from "../../../Assets/ItemsEnumHandmade";
import { SceneTypesEnumHandmade } from "../../../Assets/SceneTypesEnumHandmade";
import { ExplorationSceneData } from "../../DataTypes/SceneDataType";
import { Color } from "../../Tools/Color";


export const HookingAlleySceneData: ExplorationSceneData = {
    SceneName: "HookingAlley",
    SceneType: SceneTypesEnumHandmade.ExplorationScene,
    SceneBackgroundColor: new Color(155, 11, 6, 1),

    SceneItems: [ItemsEnumHandmade.Character_MichelleHidden, ItemsEnumHandmade.Character_LadyOfNight,ItemsEnumHandmade.Character_LadyOfNight,ItemsEnumHandmade.Character_LadyOfNight],
    SceneItemLocationDatas: [
        { positionX: 75, positionY: 10, scaleX: 100, scaleY: 100 },
        { positionX: 25, positionY: 40, scaleX: 100, scaleY: 100 },
        { positionX: 40, positionY: 90, scaleX: 100, scaleY: 100 },
        { positionX: 65, positionY: 30, scaleX: 100, scaleY: 100 },
    ],
    MenuItems: [

    ],
    DataDevName: "HookingAlleyScene",
    DataType: ""
}
