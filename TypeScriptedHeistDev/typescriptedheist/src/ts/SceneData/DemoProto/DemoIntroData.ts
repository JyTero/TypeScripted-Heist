import { FunctionalityComponentsHandmade } from "../../../Assets/FunctionalityComponentsEnumHandmade";
import { ScenesEnumHandmade } from "../../../Assets/ScenesEnumHandMade";
import { SceneTypesEnumHandmade } from "../../../Assets/SceneTypesEnumHandmade";
import { ExplorationSceneData } from "../../DataTypes/SceneDataType";
import { Color } from "../../Tools/Color";

export const DemoIntroSceneData: ExplorationSceneData = {
    SceneName: "The Begining",
    SceneType: SceneTypesEnumHandmade.ExplorationScene,
    SceneBackgroundColor: new Color(13, 24, 63, 1),
    SceneItems: [],
    SceneItemLocationDatas: [],
    MenuItems: [
        {
            MenuItemName: "ListenToVoiceMail",
            MenuItemText: "Listen a voice mail",
            MenuItemSelectionDescription: "You listen to a voice mail:",
            NextScene: "",
            ItemSelectionEffects: [],
            ItemSelectionFunctionalityComponentsEnum: [FunctionalityComponentsHandmade.ShowDialog],
            ItemSelectionFunctionalityComponentDatas: [
                ["IntroVoiceMail",
                    "Sup",
                    "Firstly, I want nothing to do with this little heist of yours, don't need the Corporation detectives on my ass. I have never heard of this thing and you will delete this voice mail after hearing it, got it?",
                    "Now, of course I'll help you but only because I owe you, and I'm inclined to think you'll owe me after this, so no dying or getting caught.",
                    "To get into the office, you'll need four keys, though the keys are tiny titanium cubes with intricate carvings, moving components and magnetic signatures, so uncopyable and tightly guarded.",
                    "With that said, I've managed to track one down, and it's in the hands of a lady of the night, sending you the deets.",
                    "I'll let you know when I find info on the rest.",
                ],
            ],
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [{ FlagName: "VoiceMailListened", FlagValue: true }],
        },
        {
            MenuItemName: "GoToHookingAlley",
            MenuItemText: "Go to Hooking Alley",
            MenuItemSelectionDescription: "You make your way towards Hooking Alley",
            NextScene: ScenesEnumHandmade.HookingAlley,
            ItemSelectionEffects: [],
            ItemSelectionFunctionalityComponentsEnum: [],
            ItemSelectionFunctionalityComponentDatas: [
            ],
            MenuItemRequireAllFlags: ["VoiceMailListened"],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        },
    ],
    DataDevName: "FirstScene",
    DataType: ""
}