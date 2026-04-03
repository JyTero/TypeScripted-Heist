import { ExplorationMenuItemDataType } from "../DataTypes/MenuItemDataType";
import { ExplorationSceneData, SceneBaseData } from "../DataTypes/SceneDataType";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { placeholderScene } from "../ScenesLegacy/Placeholders";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { Color } from "../Tools/Color";

export const FrontDoorSceneData: ExplorationSceneData = {
    SceneName: "Front door",
    SceneType: SceneTypesEnumHandmade.ExplorationScene.toString(),
    SceneBackgroundColor: new Color(-1, -1, -1, -1,),
    MenuItems: [
        {
            MenuItemName: "Break the frontdoor lock",
            MenuItemNumber: 1,
            MenuItemText: "Break the lock on the door, forcing the door to open",
            MenuItemSelectionDescription: "With some knowhow and smart applying of force, you manage to break the lock on the door. It's not prety, but the door is now open.",
            NextSceneObject: ScenesEnumHandmade.Placeholder.toString(),
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
        {
            MenuItemName: "Lockpick the frontdoor lock",
            MenuItemNumber: 2,
            MenuItemText: "Use your tools, and time, to open the lock on the door",
            MenuItemSelectionDescription: "After some tinkering in the darknes you hear the familiar and ever welcome sound of a lock clicking open",
            NextSceneObject: ScenesEnumHandmade.Placeholder.toString(),
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
    ]
}
//LEGACY
// export const FrontDoorData01: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Break the frontdoor lock",
//     MenuItemNumber: 1,
//     MenuItemText: "Break the lock on the door, forcing the door to open",
//     MenuItemSelectionDescription: "With some knowhow and smart applying of force, you manage to break the lock on the door. It's not prety, but the door is now open.",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// }
// export const FrontDoorData02: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Lockpick the frontdoor lock",
//     MenuItemNumber: 2,
//     MenuItemText: "Use your tools, and time, to open the lock on the door",
//     MenuItemSelectionDescription: "After some tinkering in the darknes you hear the familiar and ever welcome sound of a lock clicking open",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// }