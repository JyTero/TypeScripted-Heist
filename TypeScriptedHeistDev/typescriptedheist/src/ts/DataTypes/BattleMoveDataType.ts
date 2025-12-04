import { EffectBase } from "../Effects/EffectBase";
import { MetaData } from "./MetaData";

export interface BattleMoveData extends MetaData {
    BattleMoveName: string;
    IsRanged: boolean;
    BattleMoveWeaponHitMultiplier: number;
    BattleMoveWeaponDamageMultiplier: number;
    BattleMoveEffects:EffectBase[];
    //TargetT
    // BattleMoveSource: WeaponItem;
}