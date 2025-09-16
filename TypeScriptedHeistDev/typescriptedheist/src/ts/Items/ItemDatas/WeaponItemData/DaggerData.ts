import { BattleMove } from "../../../BattleSystem/BattleMove";
import { BattleMoveData } from "../../../DataTypes/BattleMoveDataType";
import { WeaponDatatype } from "../../../DataTypes/WeaponItemDataType";

const stabMoveHitMultiplier: number = 1;
const stabMoveDamageMultiplier: number = 1;
const stabBattleMoveData:BattleMoveData={
    BattleMoveName: "Stab",
    IsRanged: false,
    BattleMoveHitMultiplier: stabMoveHitMultiplier,
    BattleMoveDamageMultiplier: stabMoveDamageMultiplier,
    DataDevName: "Stab_Knife_BattleMove",
    DataType: "BattleMove",
}
const stabBattleMove:BattleMove = new BattleMove(stabBattleMoveData);

const weaponHit: number = 3;
const weaponDamage: number = 1;
export const DaggerItemData:WeaponDatatype={
    WeaponName: "Cloak Dagger",
    BattleMoves: [stabBattleMove],
    WeaponHit: weaponHit,
    WeaponDamage: weaponDamage,
    DataDevName: "Dev Daggers",
    DataType: "WeaponItems"
}