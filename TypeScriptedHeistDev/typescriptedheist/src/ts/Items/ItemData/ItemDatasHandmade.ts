import { FunctionalityComponentsHandmade } from "../../../Assets/FunctionalityComponentsEnumHandmade";
import { ItemBaseData } from "../../DataTypes/ItemDataTypes";

export const WallArtBayek: ItemBaseData = {
    ItemName: "Wall art",
    ItemMaxHP: 2,
    ItemSpriteData: {
        Sprite: "Bayek.png",
        LocationData: {
            positionX: 50,
            positionY: 50,
            scaleX: 50,
            scaleY: 50
        }
    },
    ItemSceneMenuItems: [],
    DataDevName: "WallArtBayek",
    DataType: "Item"
}

export const WallArtAltGramp: ItemBaseData = {
    ItemName: "Wall art",
    ItemMaxHP: 2,
    ItemSpriteData: {
        Sprite: "AltGrandpa.png",
        LocationData: {
            positionX: 75,
            positionY: 60,
            scaleX: 25,
            scaleY: 25
        }
    },
    ItemSceneMenuItems: [],
    DataDevName: "WallArtAltGramp",
    DataType: "Item",
}

export const FragileGlassItem: ItemBaseData = {
    ItemName: "ClassCup",
    ItemMaxHP: 2,
    ItemSpriteData: {
        Sprite: "FragileGlass.png",
        LocationData: {
            positionX: 5,
            positionY: 20,
            scaleX: 20,
            scaleY: 20,
        }
    },
    ItemSceneMenuItems: [{
        MenuItemName: "BreakGlass",
        MenuItemText: "Break the fragile glass",
        MenuItemSelectionDescription: "You break the discarded glass item",
        NextScene: "",
        ItemSelectionEffects: [],
        ItemSelectionFunctionalityComponents: [FunctionalityComponentsHandmade.RemoveSceneItemSelf, FunctionalityComponentsHandmade.PlaySFX],
        ItemSelectionFunctionalityComponentDatas: [["ClassCup"/*ItemName*/, "5", "20", "20", "20",], ["BottleBreak.wav"]],//Name, LocationData[]
        MenuItemRequireAllFlags: [],
        MenuItemRequireAnyFlags: [],
        MenuItemForbiddenAllFlags: [],
        MenuItemForbiddenAnyFlags: [], //"MindPalaceGlassIsBroken"
        MenuItemFlagsToChange: [], //{ FlagToChange: "MindPalaceGlassIsBroken", FlagValue: true }
    },],
    DataDevName: "FragileGlassItem",
    DataType: "Item"
}