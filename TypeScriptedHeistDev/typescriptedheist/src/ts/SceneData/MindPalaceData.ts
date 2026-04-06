import { FunctionalityComponentsHandmade } from "../../Assets/FunctionalityComponentsEnumHandmade";
import { ItemsEnumHandmade } from "../../Assets/ItemsEnumHandmade";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { ExplorationSceneData, InteractionSceneData } from "../DataTypes/SceneDataType";
import { ItemBase } from "../Items/ItemBase";
import { FragileGlassItem, WallArtBayek, WallArtAltGramp } from "../Items/ItemData/ItemDatasHandmade";
import { Color } from "../Tools/Color";

export const MindPalaceScenData: ExplorationSceneData = {
    SceneName: "Mindpalace",
    SceneType: SceneTypesEnumHandmade.ExplorationScene.toString(),
    SceneBackgroundColor: new Color(179, 76, 202, 1),
    SceneItems: [ItemsEnumHandmade.WallArtBayek, ItemsEnumHandmade.WallArtAltGramp, ItemsEnumHandmade.FragileGlassItem, ItemsEnumHandmade.Character_Amalia], //WallArtItem01, WallArtItem02, FragileGlassItem
    MenuItems: [
        {
            MenuItemName: "Paint ",
            MenuItemText: "Paint ",
            MenuItemSelectionDescription: "You paint",
            NextScene: "",
            ItemSelectionEffects: [],
            ItemSelectionFunctionalityComponents: [FunctionalityComponentsHandmade.ChangeCanvasBGColor.toString(), FunctionalityComponentsHandmade.ChangeCanvasBGColor.toString(), FunctionalityComponentsHandmade.ChangeCanvasBGColor.toString()],
            ItemSelectionFunctionalityComponentDatas: [["200", "20", "20", "1"], ["20", "200", "20", "1"], ["20", "20", "200", "1"],],
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
        {
            MenuItemName: "ListenVoiceMail",
            MenuItemText: "Listen to voice mail",
            MenuItemSelectionDescription: "You listen to your voice mail:",
            NextScene: "",
            ItemSelectionEffects: [],
            ItemSelectionFunctionalityComponents: [FunctionalityComponentsHandmade.ShowDialog],
            ItemSelectionFunctionalityComponentDatas: [["VoiceMail",
                "Hi,",
                "payment came though, here's the deets for the case.",
                "Hope you find what you're looking for, don't care to know the details.",
                "I trust we never had this conversation.",
                "Good luck, and good bye.",
                "Click"]],
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
        {
            MenuItemName: "Return to Approach",
            MenuItemText: "Return to the true world",
            MenuItemSelectionDescription: "You leave the peace of your mind palace, returning to the true world",
            NextScene: ScenesEnumHandmade.First.toString(),
            ItemSelectionEffects: [],
            ItemSelectionFunctionalityComponents: [],
            ItemSelectionFunctionalityComponentDatas: [],
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
    ],
}

// export const PaintItBlackSceneData: InteractionSceneData = {
//     SceneName: "PaintItBlack",
//     SceneType: SceneTypesEnumHandmade.InteractionScene.toString(),
//     SceneBackgroundColor: new Color(-1,-1,-1,1),
//     SceneItems: []

// }