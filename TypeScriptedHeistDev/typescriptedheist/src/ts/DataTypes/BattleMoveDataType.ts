import { MetaData } from "./MetaData";

export interface BattleMoveData extends MetaData {
    BattleMoveName: string;
    IsRanged: boolean;
    BattleMoveHitMultiplier: number;
    BattleMoveDamageMultiplier: number;
    //TargetT
    // BattleMoveSource: WeaponItem;
}