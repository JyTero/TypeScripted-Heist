import { FunctionalityComponentsHandmade } from "../../Assets/FunctionalityComponentsEnumHandmade";
import { ItemsEnumHandmade } from "../../Assets/ItemsEnumHandmade";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { ExplorationSceneData, InteractionSceneData } from "../DataTypes/SceneDataType";
import { ItemBase } from "../Items/ItemBase";
import { FragileGlassItem, WallArtBayek, WallArtAltGramp } from "../Items/ItemData/ItemDatasHandmade";
import { Color } from "../Tools/Color";

export const MindPalaceScenData: ExplorationSceneData = {
    SceneName: "MindPalace",
    SceneType: SceneTypesEnumHandmade.ExplorationScene.toString(),
    SceneBackgroundColor: new Color(179, 76, 202, 1),
    SceneItems: [ItemsEnumHandmade.WallArtBayek, ItemsEnumHandmade.WallArtAltGramp, ItemsEnumHandmade.FragileGlassItem, ItemsEnumHandmade.Character_Michelle], //WallArtItem01, WallArtItem02, FragileGlassItem
    SceneItemLocationDatas: [{ positionX: 75, positionY: 75, scaleX: 5, scaleY: 5 },
    { positionX: 50, positionY: 50, scaleX: 5, scaleY: 5 },
    { positionX: 25, positionY: 25, scaleX: 10, scaleY: 10 },
    { positionX: 75, positionY: 10, scaleX: 80, scaleY: 90 },
    ],
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
            MenuItemName: "GoToNeighbor",
            MenuItemText: "Walk along the alley",
            MenuItemSelectionDescription: "You walk further along",
            NextScene: ScenesEnumHandmade.MindPalaceNeighbor.toString(),
            ItemSelectionEffects: [],
            ItemSelectionFunctionalityComponents: [],
            ItemSelectionFunctionalityComponentDatas: [],
            MenuItemRequireAllFlags: ["MindPalaceMichelleChat01"],
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
