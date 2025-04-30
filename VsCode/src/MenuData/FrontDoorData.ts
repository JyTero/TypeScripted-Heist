import { placeholderScene } from "../index";
import { MenuItemDataType } from "../MenuItemDataType";

export const FrontDoorData01 : MenuItemDataType=
{
    MenuItemName: "Break the lock",
    MenuItemNumber: 1,
    MenuItemText: "Break the lock on the door, forcing the door to open",
    MenuItemSelectionDescription: "With some knowhow and smart applying of force, you manage to break the lock on the door. It's not prety, but the door is now open.",
    NextMenuObject: placeholderScene,
    MenuItemReadFlags:[],
    MenuItemWriteFlags:[],
}
export const FrontDoorData02 : MenuItemDataType=
{
    MenuItemName: "Lockpick the lock",
    MenuItemNumber: 2,
    MenuItemText: "Yous your tools, and time, to open the lock on the door",
    MenuItemSelectionDescription: "After some tinkering in the darknes you hear the familiar and ever welcome sound of a lock clicking open",
    NextMenuObject: placeholderScene,
    MenuItemReadFlags:[],
    MenuItemWriteFlags:[],
}