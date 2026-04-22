import { IsDebug } from "./MainPageInitialisation";


export type FlagName = keyof typeof flagss;


const flagss =
{
    BrokeWindow: false,
    HasPorchDoorKey: false,
    MindPalaceGlassIsBroken: false,
    MindPalaceMichelleSpokenTo: false,   
    MindPalaceItemReceived: false,    
    MindPalaceItemReturned: false,
    
    //DemoProto
    VoiceMailListened: false,
};
//const flags: Flag[] = [];

export type Flag = {
    FlagName: FlagName;
    FlagValue: boolean;
}




export class FlagManager {
    // private flagmap:Map<FlagName, boolean> = new Map <FlagName, boolean>();
    private flags: Record<FlagName, boolean>;
    constructor(initialFlags: Record<FlagName, boolean> = { ...flagss }) {
        this.flags = initialFlags;
    }

    public ChangeFlagValue(flagToChange: Flag) {
        if (IsDebug)
            console.log("Changing " + flagToChange.FlagName.toString() + " to " + flagToChange.FlagValue);
        this.flags[flagToChange.FlagName] = flagToChange.FlagValue;
        console.log("flg: "+ this.flags[flagToChange.FlagName]);
    }
    get Flags() {
        return this.flags;
    }

    public HasAnyForbiddenFlags(givenFlags: FlagName[]): boolean {
        if (givenFlags.length === 0)
            return false;
        else {
            //OG tf
            const tf = givenFlags.some(flag => this.flags[flag]);
            const returnFlags: FlagName[] = givenFlags
                .filter(flag => this.flags[flag]) // Check if the flag is true
                .map(flag => flag); // Extract the flag name

            console.log("Forbidden flags true: " + returnFlags.toString());

            //From here, call debug method to display if item is not valid why its not
            //Change return to be the list of blocking flags
            if (tf == true)
                return true;
        }
        return false;

    }


    public HasAllForbiddenFlags(givenFlags: FlagName[]): boolean {
        if (givenFlags.length === 0)
            return false;
        else {
            const tf: boolean = givenFlags.every(flag => this.flags[flag]);
            const returnFlags: FlagName[] = givenFlags.filter(flag => this.flags[flag]).map(flag => flag);

            console.log("Forbidden flags true: " + returnFlags.toString());

            //From here, call debug method to display if item is not valid why its not
            //Change return to be the list of blocking flags
            if (tf == true)
                return true;
        }
        return false;
    }

    public HasAnyRequriedFlags(givenFlags: FlagName[]): boolean {
        if (givenFlags.length === 0)
            return true;
        else {
            const tf: boolean = givenFlags.every(flag => this.flags[flag]);
            const returnFlags: FlagName[] = givenFlags.filter(flag => this.flags[flag]).map(flag => flag);

            console.log("Required flags true: " + returnFlags.toString());

            //From here, call debug method to display if item is not valid why its not
            //Change return to be the list of blocking flags
            return tf;
        }
        return true;
    }

    public HasAllRequriedFlags(givenFlags: FlagName[]): boolean {
        if (givenFlags.length === 0)
            return true;
        else {
            const tf: boolean = givenFlags.every(flag => this.flags[flag]);
            const returnFlags: FlagName[] = givenFlags.filter(flag => this.flags[flag]).map(flag => flag);

            console.log("Required flags true: " + returnFlags.toString());

            //From here, call debug method to display if item is not valid why its not
            //Change return to be the list of blocking flags
            return tf;
        }
        return true;
    }
}