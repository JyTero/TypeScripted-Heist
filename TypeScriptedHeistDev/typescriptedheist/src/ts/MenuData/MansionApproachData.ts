import { MenuItemDataType } from "../MenuItemDataType";
import { placeholderScene } from "../Scenes/PlaceholderScene";



export const MansionApproachMenuItemData01 : MenuItemDataType=
{
        MenuItemName: "Lockpick Gate",
        MenuItemNumber: 1,
        MenuItemText: "Lockpick the front gate",
        MenuItemSelectionDescription: "You easily pick the broken lock on the gate and sneak in.",
        NextMenuObject: placeholderScene, //FrontDoorScene
        MenuItemReadFlags:[],
        MenuItemWriteFlags:[],
}

export const MansionApproachMenuItemData02 : MenuItemDataType =
{
    MenuItemName: "Climb Fence",
    MenuItemNumber: 2,
    MenuItemText: "Climb over the tall fence",
    MenuItemSelectionDescription: "You manage to climb over the brick fence.",
    NextMenuObject: placeholderScene,
    MenuItemReadFlags:[],
    MenuItemWriteFlags:[],
}

export const MansionApproachMenuItemData03 : MenuItemDataType = 
{
    MenuItemName: "Circle around",
    MenuItemNumber: 3,
    MenuItemText: "Walk around the property, looking for a easier way over the fence.",
    MenuItemSelectionDescription: "You walk along the fence and find a collapsed section on the far end of the back garden.",
    NextMenuObject: placeholderScene,
    MenuItemReadFlags:[],
    MenuItemWriteFlags:[],
}