import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { EffectTypeEnumEnum } from "../../Assets/DataJsons/EffectTypeEnumEnum";
import { MetaData } from "./MetaData";

export interface EffectData extends MetaData{
    EffectName:string;
    TargetStat:CharcterStatTypeEnum;
    TargetEffectType:EffectTypeEnumEnum;
    EffectPotency:number;
    EffectDuration:number;

}