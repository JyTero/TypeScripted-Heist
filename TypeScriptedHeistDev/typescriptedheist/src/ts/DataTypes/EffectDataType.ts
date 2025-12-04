import { MetaData } from "./MetaData";

export interface EffectData extends MetaData{
    EffectName:string;
    TargetStat:number;
    TargetEffectType:number;
    EffectPotency:number;
    EffectDuration:number;

}