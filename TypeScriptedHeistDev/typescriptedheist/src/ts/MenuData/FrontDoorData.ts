import { MenuItemDataType } from "../MenuItemDataType";
import { placeholderScene } from "../Scenes/PlaceholderScene";

export const FrontDoorData01 : MenuItemDataType=
{
    MenuItemName: "Break the frontdoor lock",
    MenuItemNumber: 1,
    MenuItemText: "Break the lock on the door, forcing the door to open",
    MenuItemSelectionDescription: "With some knowhow and smart applying of force, you manage to break the lock on the door. It's not prety, but the door is now open.",
    NextSceneObject: placeholderScene,
    MenuItemRequireAllFlags: [],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange:[],
}
export const FrontDoorData02 : MenuItemDataType=
{
    MenuItemName: "Lockpick the frontdoor lock",
    MenuItemNumber: 2,
    MenuItemText: "Use your tools, and time, to open the lock on the door",
    MenuItemSelectionDescription: "After some tinkering in the darknes you hear the familiar and ever welcome sound of a lock clicking open",
    NextSceneObject: placeholderScene,
    MenuItemRequireAllFlags: [],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange:[],
}