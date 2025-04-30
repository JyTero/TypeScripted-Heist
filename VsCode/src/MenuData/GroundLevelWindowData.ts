
import { placeholderScene } from "../index";
import { MenuItemDataType } from "../MenuItemDataType";

export const GroundLevelWindowData01: MenuItemDataType=
{
        MenuItemName: "Break the lock",
        MenuItemNumber: 1,
        MenuItemText: "Break the lock on the window, forcing it to open",
        MenuItemSelectionDescription: "With some knowhow and smart applying of force, you manage to break the lock on the window. It's not prety, but the windowis now open.",
        NextMenuObject: placeholderScene,
        MenuItemReadFlags:[],
        MenuItemWriteFlags:[],
}

export const GroundLevelWindowData02: MenuItemDataType=
{
        MenuItemName: "Break the window",
        MenuItemNumber: 1,
        MenuItemText: "Break the window",
        MenuItemSelectionDescription: "You break the window by hitting it with your elbow. The jacket you're wearing took most of the damage.",
        NextMenuObject: placeholderScene,
        MenuItemReadFlags:[],
        MenuItemWriteFlags:[],
}
export const GroundLevelWindowData03 : MenuItemDataType=
{
    MenuItemName: "Lockpick the window",
    MenuItemNumber: 2,
    MenuItemText: "Yous your tools, and time, to open the lock on the window",
    MenuItemSelectionDescription: "After some tinkering in the darknes you hear the familiar and ever welcome sound of a lock clicking open",
    NextMenuObject: placeholderScene,
    MenuItemReadFlags:[],
    MenuItemWriteFlags:[],
}