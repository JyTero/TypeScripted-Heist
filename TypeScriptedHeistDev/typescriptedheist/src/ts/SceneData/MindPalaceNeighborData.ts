import { ItemsEnumHandmade } from "../../Assets/ItemsEnumHandmade";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";

import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { ExplorationMenuItemData } from "../DataTypes/MenuItemDataType";
import { ExplorationSceneData } from "../DataTypes/SceneDataType";
import { Color } from "../Tools/Color";



export const MindPalaceNeighborData: ExplorationSceneData = {
    SceneName: "MindPalaceNeighbor",
    SceneType: SceneTypesEnumHandmade.ExplorationScene,
    SceneBackgroundColor: new Color(5, 2, 52, 1),
    SceneItems: [ItemsEnumHandmade.Character_Bob],
    SceneItemLocationDatas: [{ positionX: 25, positionY: 25, scaleX: 80, scaleY: 80 },
    ],
    MenuItems: [
        {
            MenuItemName: "BackToMindPalace",
            MenuItemText: "Go back",
            MenuItemSelectionDescription: "You return to your mind palace",
            NextScene: ScenesEnumHandmade.MindPalace,
            ItemSelectionEffects: [],
            ItemSelectionFunctionalityComponentsEnum: [],
            ItemSelectionFunctionalityComponentDatas: [],
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: []
        },
    ],
}

