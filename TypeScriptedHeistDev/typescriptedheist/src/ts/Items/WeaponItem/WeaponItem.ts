import { DataTypesEnum } from "../../../Assets/DataJsons/DataTypesEnum";
import { BattleMove } from "../../BattleSystem/BattleMove";
import { BattleMoveData } from "../../DataTypes/BattleMoveDataType";
import { WeaponDatatype } from "../../DataTypes/WeaponItemDataType";
import { JsonHandlerInstance } from "../../initialisation";
import { ItemBase } from "../ItemBase";

export class WeaponItem extends ItemBase{
    
    public BattleMoves: BattleMove[]; //ToDO: public get, private set

    public WeaponHit: number;
    public WeaponDamage:number;

    constructor(data:WeaponDatatype){
        super();
        this.ItemName = data.WeaponName;
        this.BattleMoves = data.BattleMoves;
        this.WeaponHit = data.WeaponHit;
        this.WeaponDamage = data.WeaponDamage;
    }

    public BuildWeaponBattleMoves(){
        var tmp: BattleMove[] = this.BattleMoves;
        this.BattleMoves = [];
        tmp.forEach(bm => {
            
            const allBMReferences= JsonHandlerInstance.data[DataTypesEnum.BattleMove.toString()];
            const battleMove = allBMReferences.find(w => w.DataDevName === bm);
            const newBM:BattleMove = new BattleMove(battleMove);
            this.BattleMoves.push(newBM);
        });
    }
}