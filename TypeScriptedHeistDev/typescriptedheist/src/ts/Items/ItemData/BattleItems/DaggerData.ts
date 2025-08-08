import { BattleMove } from "../../../BattleSystem/BattleMove";
import { BattleMoveData } from "../../../BattleSystem/BattleMoveDataType";

import { WeaponDatatype } from "./WeaponItemDataType";

const stabMoveHitMultiplier: number = 1;
const stabMoveDamageMultiplier: number = 1;
const stabBattleMoveData:BattleMoveData={
    MoveName: "Stab",
    IsRanged: false,
    MoveHitMultiplier: stabMoveHitMultiplier,
    MoveDamageMultiplier: stabMoveDamageMultiplier,
}
const stabBattleMove:BattleMove = new BattleMove(stabBattleMoveData);

const weaponHit: number = 3;
const weaponDamage: number = 1;
export const DaggerItemData:WeaponDatatype={
    Name: "Cloak Dagger",
    BattleMoves:[stabBattleMove],
    WeaponHit: weaponHit,
    WeaponDamage: weaponDamage,
}