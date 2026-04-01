import { ExplorationMenuItemDataType } from "../DataTypes/MenuItemDataType";
import { ExplorationSceneData, SceneBaseData } from "../DataTypes/SceneDataType";
import { SceneTypesEnumHandmade } from "../Scenes/SceneTypesEnumHandmade";
import { placeholderScene } from "../ScenesLegacy/Placeholders";
import { ScenesEnumHandmade } from "../ScenesLegacy/ScenesEnumHandMade";
import { Color } from "../Tools/Color";



export const MansionApproachSceneData: ExplorationSceneData = {
    SceneName: "First",
    SceneType: SceneTypesEnumHandmade.ExplorationScene.toString(),
    SceneBackgroundColor: new Color(57, 47, 87, 1),
    MenuItems: [
        {
            MenuItemName: "Lockpick Gate",
            MenuItemNumber: 1,
            MenuItemText: "Lockpick the front gate",
            MenuItemSelectionDescription: "You easily pick the broken lock on the gate and sneak in.",
            NextSceneObject: ScenesEnumHandmade.Frontdoor.toString(), //FrontDoorScene
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
        {
            MenuItemName: "Climb Fence",
            MenuItemNumber: 2,
            MenuItemText: "Climb over the tall fence",
            MenuItemSelectionDescription: "You manage to climb over the brick fence.",
            NextSceneObject: ScenesEnumHandmade.GroundWindow.toString(),
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
        {
            MenuItemName: "Circle around",
            MenuItemNumber: 3,
            MenuItemText: "Walk around the property, looking for a easier way over the fence.",
            MenuItemSelectionDescription: "You walk along the fence and find a collapsed section on the far end of the back garden.",
            NextSceneObject: ScenesEnumHandmade.Backdoor.toString(),
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
        {
            MenuItemName: "Violence",
            MenuItemNumber: 4,
            MenuItemText: "Attack a random citizen on the other side of the road.",
            MenuItemSelectionDescription: "You run up to a citizen minding their own business and kick them.",
            NextSceneObject: ScenesEnumHandmade.CombatTest.toString(),
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },

    ]
}
//LEGACY
// export const MansionApproachMenuItemData01: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Lockpick Gate",
//     MenuItemNumber: 1,
//     MenuItemText: "Lockpick the front gate",
//     MenuItemSelectionDescription: "You easily pick the broken lock on the gate and sneak in.",
//     NextSceneObject: placeholderScene, //FrontDoorScene
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// }

// export const MansionApproachMenuItemData02: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Climb Fence",
//     MenuItemNumber: 2,
//     MenuItemText: "Climb over the tall fence",
//     MenuItemSelectionDescription: "You manage to climb over the brick fence.",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// }

// export const MansionApproachMenuItemData03: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Circle around",
//     MenuItemNumber: 3,
//     MenuItemText: "Walk around the property, looking for a easier way over the fence.",
//     MenuItemSelectionDescription: "You walk along the fence and find a collapsed section on the far end of the back garden.",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// }
// export const MansionApproachMenuItemData04: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Violence",
//     MenuItemNumber: 4,
//     MenuItemText: "Attack a random citizen on the other side of the road.",
//     MenuItemSelectionDescription: "You run up to a citizen minding their own business and kick them.",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// }