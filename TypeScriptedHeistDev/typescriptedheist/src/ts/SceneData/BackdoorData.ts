import { ExplorationMenuItemDataType } from "../DataTypes/MenuItemDataType";
import { ExplorationSceneData } from "../DataTypes/SceneDataType";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { placeholderScene } from "../ScenesLegacy/Placeholders";
import { ScenesEnumHandmade } from "../../Assets/ScenesEnumHandMade";
import { Color } from "../Tools/Color";


export const BackdoorSceneData: ExplorationSceneData = {
    SceneName: "Backdoor",
    SceneType: SceneTypesEnumHandmade.ExplorationScene,
    SceneBackgroundColor: new Color(-1, -1, -1, -1,),
    MenuItems: [
        {
            MenuItemName: "Break the backdoor lock",
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
            MenuItemName: "Lockpick the backdoor lock",
            MenuItemNumber: 2,
            MenuItemText: "Use your tools, and time, to open the lock on the door",
            MenuItemSelectionDescription: "After some tinkering in the darknes you hear the familiar and ever welcome sound of a lock clicking open",
            NextSceneObject: "",
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
        {
            MenuItemName: "Look for the backdoor key",
            MenuItemNumber: 3,
            MenuItemText: "Spend some time, and risk looking silly, by looking for the key to the door by looking through the traditional key hiding locations",
            MenuItemSelectionDescription: "Classics are classics for a reason: You find the key to the back door from under a flover pot next to the door.",
            NextSceneObject: "",
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: ["HasPorchDoorKey"],
            MenuItemFlagsToChange: [
                { FlagToChange: "HasPorchDoorKey", FlagValue: true }
            ],
        },
        {
            MenuItemName: "Open door with the key",
            MenuItemNumber: 4,
            MenuItemText: "You the key to open the door",
            MenuItemSelectionDescription: "You use the back door key to open the back door and enter.",
            NextSceneObject: ScenesEnumHandmade.Placeholder.toString(),
            MenuItemRequireAllFlags: ["HasPorchDoorKey"],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },

    ]
}

//LEGACY
//Menu Items
// export const BackdoorData01: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Break the backdoor lock",
//     MenuItemNumber: 1,
//     MenuItemText: "Break the lock on the door, forcing the door to open",
//     MenuItemSelectionDescription: "With some knowhow and smart applying of force, you manage to break the lock on the door. It's not prety, but the door is now open.",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// };

// export const BackdoorData02: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Lockpick the backdoor lock",
//     MenuItemNumber: 2,
//     MenuItemText: "Use your tools, and time, to open the lock on the door",
//     MenuItemSelectionDescription: "After some tinkering in the darknes you hear the familiar and ever welcome sound of a lock clicking open",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// };

// export const BackdoorData03: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Look for the backdoor key",
//     MenuItemNumber: 3,
//     MenuItemText: "Spend some time, and risk looking silly, by looking for the key to the door by looking through the traditional key hiding locations",
//     MenuItemSelectionDescription: "Classics are classics for a reason: You find the key to the back door from under a flover pot next to the door.",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: [],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: ["HasPorchDoorKey"],
//     MenuItemFlagsToChange: [
//         { FlagToChange: "HasPorchDoorKey", FlagValue: true }
//     ],
// };

// export const BackdoorData04: ExplorationMenuItemDataType =
// {
//     MenuItemName: "Open door with the key",
//     MenuItemNumber: 4,
//     MenuItemText: "You the key to open the door",
//     MenuItemSelectionDescription: "You use the back door key to open the back door and enter.",
//     NextSceneObject: placeholderScene,
//     MenuItemRequireAllFlags: ["HasPorchDoorKey"],
//     MenuItemRequireAnyFlags: [],
//     MenuItemForbiddenAllFlags: [],
//     MenuItemForbiddenAnyFlags: [],
//     MenuItemFlagsToChange: [],
// };