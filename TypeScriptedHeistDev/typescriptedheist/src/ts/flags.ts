import { IsDebug } from "./MainPageInitialisation";


export type FlagName = keyof typeof flags;

const flags =
{
    BrokeWindow: false,
    HasPorchDoorKey: false,
    MindPalaceGlassIsBroken: false,
    MindPalaceMichelleChat01: false,    //First talk, intro the missio
    MindPalaceMichelleChat02: false,    //No item to give "Where item"
    MindPalaceMichelleChat03: false,    //Return item, recieve item
    MindPalaceMichelleChat04: false,    //After missio
};

export type FlagType = {
    FlagToChange: FlagName;
    FlagValue: boolean;
}




export class FlagManager {
    public ChangeFlagValue(flagToChange: FlagType) {
        if (IsDebug)
            console.log("Changing " + flagToChange.FlagToChange.toString() + " to " + flagToChange.FlagValue);
        flags[flagToChange.FlagToChange] = flagToChange.FlagValue;
    }
    get Flags(){
        return flags;
    }
}