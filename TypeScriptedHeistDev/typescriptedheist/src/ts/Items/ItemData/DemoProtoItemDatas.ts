import { CharacterEnum } from "../../../Assets/DataJsons/CharacterEnum";
import { FunctionalityComponentsHandmade } from "../../../Assets/FunctionalityComponentsEnumHandmade";
import { ScenesEnumHandmade } from "../../../Assets/ScenesEnumHandMade";
import { SceneSpesificItemSceneMenuItemDataType } from "../../DataTypes/MenuItemDataType";

export const LadyOfNightMenuItem: SceneSpesificItemSceneMenuItemDataType = {
    SourceItem: CharacterEnum.Character_LadyOfNight,
    TargetScene: ScenesEnumHandmade.HookingAlley,
    MenuItemName: "WhosThisWoman",
    MenuItemText: "Approach a woman",
    MenuItemSelectionDescription: "You approach one of the women in the alley.",
    NextScene: "",
    ItemSelectionEffects: [],
    ItemSelectionFunctionalityComponentsEnum: [FunctionalityComponentsHandmade.ShowDialog, FunctionalityComponentsHandmade.RemoveSceneItemSelf],
    ItemSelectionFunctionalityComponentDatas: [[
        "NotYourLady",
        "Hello handsome. I know nothing cubes, but I do know how to have a good time",
        "Come back for me, would you?",
    ], ["Lady of the Night",
    ]],
    MenuItemRequireAllFlags: [],
    MenuItemRequireAnyFlags: [],
    MenuItemForbiddenAllFlags: [],
    MenuItemForbiddenAnyFlags: [],
    MenuItemFlagsToChange: []

}