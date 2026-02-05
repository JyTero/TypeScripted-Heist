import { Effect } from "../Effects/EffectBase";
import { MetaData } from "./MetaData";

export interface BattleMoveData extends MetaData {
    BattleMoveName: string;
    IsRanged: boolean;
    BattleMoveWeaponHitMultiplier: number;
    BattleMoveWeaponDamageMultiplier: number;
    BattleMoveEffects:Effect[];
    //TargetT
    // BattleMoveSource: WeaponItem;
}