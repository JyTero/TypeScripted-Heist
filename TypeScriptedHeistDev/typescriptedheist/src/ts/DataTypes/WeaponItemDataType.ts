import { BattleMove } from "../BattleSystem/BattleMove";
import { MetaData } from "./MetaData";

export interface WeaponDatatype extends MetaData {
    WeaponName: string;
    BattleMoves: BattleMove[];
    WeaponHit:number;
    WeaponDamage: number;
    
}