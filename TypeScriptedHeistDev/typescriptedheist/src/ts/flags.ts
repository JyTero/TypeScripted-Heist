import { IsDebug } from "./initialisation";


export type FlagName = keyof typeof Flags;
export const Flags =
{
    BrokeWindow: false,
    HasPorchDoorKey: false,
    
};

export type MenuItemFlagChange = {
    FlagToChange: FlagName;
    FlagValue: boolean;
}

export function ChangeFlagValue(flagToChange:MenuItemFlagChange){
    if(IsDebug)
        console.log("Changing " + flagToChange.FlagToChange.toString() + " to " + flagToChange.FlagValue);
    Flags[flagToChange.FlagToChange] = flagToChange.FlagValue;
}