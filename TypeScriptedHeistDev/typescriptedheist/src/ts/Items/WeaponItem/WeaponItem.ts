import { BattleMove } from "../../BattleSystem/BattleMove";
import { WeaponDatatype } from "../ItemData/BattleItems/WeaponItemDataType";

export class WeaponItem{
    public WeaponName: string = "Gia's Gunn";
    public BattleMoves: BattleMove[]; //ToDO: public get, private set

    public WeaponHit: number;
    public WeaponDamage:number;

    constructor(data:WeaponDatatype){
        this.WeaponName = data.Name;
        this.BattleMoves = data.BattleMoves;
        this.WeaponHit = data.WeaponHit;
        this.WeaponDamage = data.WeaponDamage;
    }
}