import { MenuItemDataType } from "../DataTypes/MenuItemDataType";
import { placeholderScene } from "../Scenes/Placeholders";



export const MansionApproachMenuItemData01 : MenuItemDataType=
{
        MenuItemName: "Lockpick Gate",
        MenuItemNumber: 1,
        MenuItemText: "Lockpick the front gate",
        MenuItemSelectionDescription: "You easily pick the broken lock on the gate and sneak in.",
        NextSceneObject: placeholderScene, //FrontDoorScene
        MenuItemRequireAllFlags: [],
        MenuItemRequireAnyFlags: [],
        MenuItemForbiddenAllFlags: [],
        MenuItemForbiddenAnyFlags: [],
        MenuItemFlagsToChange:[],
}

export const MansionApproachMenuItemData02 : MenuItemDataType =
{
    MenuItemName: "Climb Fence",
    MenuItemNumber: 2,
    MenuItemText: "Climb over the tall fence",
    MenuItemSelectionDescription: "You manage to climb over the brick fence.",
    NextSceneObject: placeholderScene,
    MenuItemRequireAllFlags: [],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange:[],
}

export const MansionApproachMenuItemData03 : MenuItemDataType = 
{
    MenuItemName: "Circle around",
    MenuItemNumber: 3,
    MenuItemText: "Walk around the property, looking for a easier way over the fence.",
    MenuItemSelectionDescription: "You walk along the fence and find a collapsed section on the far end of the back garden.",
    NextSceneObject: placeholderScene,
    MenuItemRequireAllFlags: [],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange:[],
}
export const MansionApproachMenuItemData04 : MenuItemDataType =
{
    MenuItemName: "Violence",
    MenuItemNumber: 4,
    MenuItemText: "Attack a random citizen on the other side of the road.",
    MenuItemSelectionDescription: "You run up to a citizen minding their own business and kick them.",
    NextSceneObject: placeholderScene,
    MenuItemRequireAllFlags: [],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange:[],
}