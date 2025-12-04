import { BattleMove } from "../../../BattleSystem/BattleMove";
import { BattleMoveData } from "../../../DataTypes/BattleMoveDataType";
import { WeaponDatatype } from "../../../DataTypes/WeaponItemDataType";
import { AllEffects } from "../../../Effects/EffectBase";

const stabMoveHitMultiplier: number = 1;
const stabMoveDamageMultiplier: number = 1;
const stabBattleMoveData:BattleMoveData={
    BattleMoveName: "Stab",
    IsRanged: false,
    BattleMoveWeaponHitMultiplier: stabMoveHitMultiplier,
    BattleMoveWeaponDamageMultiplier: stabMoveDamageMultiplier,
    DataDevName: "Stab_Knife_BattleMove",
    DataType: "BattleMove",
    BattleMoveEffects: [AllEffects.DamageOT],
}
//export const stabBattleMove:BattleMove = new BattleMove(stabBattleMoveData);

const weaponHit: number = 3;
const weaponDamage: number = 1;
export const DaggerItemData:WeaponDatatype={
    WeaponName: "Cloak Dagger",
    BattleMoves: [],
    WeaponHit: weaponHit,
    WeaponDamage: weaponDamage,
    DataDevName: "Dev Daggers",
    DataType: "WeaponItems"
}