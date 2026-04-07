import { CharacterEnum } from "../../../Assets/DataJsons/CharacterEnum";
import { FunctionalityComponentsHandmade } from "../../../Assets/FunctionalityComponentsEnumHandmade";
import { ScenesEnumHandmade } from "../../../Assets/ScenesEnumHandMade";
import { ItemBaseData } from "../../DataTypes/ItemDataTypes";
import { SceneSpesificItemSceneMenuItemDataType } from "../../DataTypes/MenuItemDataType";

export const WallArtBayek: ItemBaseData = {
    ItemName: "Wall art",
    ItemMaxHP: 2,
    ItemSpriteData: {
        Sprite: "Bayek.png",
        LocationData: {
            positionX: 25,
            positionY: 25,
            scaleX: 25,
            scaleY: 25
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
            positionX: 25,
            positionY: 25,
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

export const MichelleMindPalaceSpesificMenuItem01: SceneSpesificItemSceneMenuItemDataType = {
    SourceItem: CharacterEnum.Character_Michelle.toString(),
    TargetScene: ScenesEnumHandmade.MindPalace,
    MenuItemName: "TalkToMichelle01",
    MenuItemText: "Talk to the woman",
    MenuItemSelectionDescription: "You approach the woman. She's fidgeting with a small metallic cube. She raises her gaze and talks to you",
    NextScene: "",
    ItemSelectionEffects: [],
    ItemSelectionFunctionalityComponents: [FunctionalityComponentsHandmade.ShowDialog],
    ItemSelectionFunctionalityComponentDatas: [[
        "Michelle01",
        "Name's Michelle, what do you want?",
        "I see you eyeing my this little cube I'm playing with",
        "You're right, I don't really need it, but some say it's a secret key.",
        "Though I've no idea what it's for and, just between you and me...",
        "Don't think I'm gonna with the that, too much life left to live.",
        "You want this? Bring me my purse, I think a shady-lookin guy took it while I wasn't paying attention. He shouldn't be too far away.",
    ]],
    MenuItemRequireAllFlags: [],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: ["MindPalaceMichelleChat01"],
    MenuItemFlagsToChange: [{ FlagToChange: "MindPalaceMichelleChat01", FlagValue: true }],
}

export const MichelleMindPalaceSpesificMenuItem02: SceneSpesificItemSceneMenuItemDataType = {
    SourceItem: CharacterEnum.Character_Michelle.toString(),
    TargetScene: ScenesEnumHandmade.MindPalace,
    MenuItemName: "TalkToMichelle02",
    MenuItemText: "Talk Michelle",
    MenuItemSelectionDescription: "You approach the woman. She looks at you",
    NextScene: "",
    ItemSelectionEffects: [],
    ItemSelectionFunctionalityComponents: [FunctionalityComponentsHandmade.ShowDialog],
    ItemSelectionFunctionalityComponentDatas: [[
        "Michelle02",
        "You again, and without my purse...",
        "What do you want?",

    ]],
    MenuItemRequireAllFlags: ["MindPalaceMichelleChat01"],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: ["MindPalaceMichelleChat02"],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange: [],
}
export const MichelleMindPalaceSpesificMenuItem03: SceneSpesificItemSceneMenuItemDataType = {
    SourceItem: CharacterEnum.Character_Michelle.toString(),
    TargetScene: ScenesEnumHandmade.MindPalace,
    MenuItemName: "TalkToMichelle03",
    MenuItemText: "Talk Michelle",
    MenuItemSelectionDescription: "You approach the woman. She notices the purse and smiles at you",
    NextScene: "",
    ItemSelectionEffects: [],
    ItemSelectionFunctionalityComponents: [FunctionalityComponentsHandmade.ShowDialog],
    ItemSelectionFunctionalityComponentDatas: [[
                "Michelle03",
        "Hi again, and with my purse...",
        "The cash, naturally, seems to have walked away but the rest is here, thanks.",
        "And no, I'm not blaming you.",
        "Here's the toy",
    ]],
    MenuItemRequireAllFlags: ["MindPalaceMichelleChat01", "MindPalaceMichelleChat02", "MindPalaceMichelleChat03"],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: ["MindPalaceMichelleChat04"],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange: [{ FlagToChange: "MindPalaceMichelleChat04", FlagValue: true }],
}
export const MichelleMindPalaceSpesificMenuItem04: SceneSpesificItemSceneMenuItemDataType = {
    SourceItem: CharacterEnum.Character_Michelle.toString(),
    TargetScene: ScenesEnumHandmade.MindPalace,
    MenuItemName: "TalkToMichelle04",
    MenuItemText: "Talk Michelle",
    MenuItemSelectionDescription: "You approach the woman. Shesmiles at you",
    NextScene: "",
    ItemSelectionEffects: [],
    ItemSelectionFunctionalityComponents: [FunctionalityComponentsHandmade.ShowDialog],
    ItemSelectionFunctionalityComponentDatas: [[
                "Michelle04",
        "Hello, handsome.",
        "You got me my stuff, I gave you the toy, what else could you possibly want?",
        "Unless, of course, you want to... but we'll have to see about that later, I'm busy extracting revenge.",
        "TTYL ♥",
    ]],
    MenuItemRequireAllFlags: ["MindPalaceMichelleChat04"],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange: [],
}
export const BobMindPalaceNeighborSpesificMenuItem01: SceneSpesificItemSceneMenuItemDataType = {
    SourceItem: CharacterEnum.Character_Bob.toString(),
    TargetScene: ScenesEnumHandmade.MindPalaceNeighbor,
    MenuItemName: "BobPurse",
    MenuItemText: "Ask the man about the purse",
    MenuItemSelectionDescription: "Before you get the question out into the air, the eyes of the man before you go wild. Violent, even.",
    NextScene: ScenesEnumHandmade.BobCombat,
    ItemSelectionEffects: [],
    ItemSelectionFunctionalityComponents: [],
    ItemSelectionFunctionalityComponentDatas: [],
    MenuItemRequireAllFlags: [],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange: []
}