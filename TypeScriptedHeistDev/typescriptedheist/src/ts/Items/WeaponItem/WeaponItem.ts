import { BattleMoveEnum } from "../../../Assets/DataJsons/BattleMoveEnum";
import { DataTypesEnum } from "../../../Assets/DataJsons/DataTypesEnum";
import { BattleMove } from "../../BattleSystem/BattleMove";
import { BattleMoveData } from "../../DataTypes/BattleMoveDataType";
import { WeaponDatatype } from "../../DataTypes/ItemDataTypes";
import { JsonHandlerInstance } from "../../MainPageInitialisation";
import { ItemBase } from "../ItemBase";

export class WeaponItem extends ItemBase{
    
    public BattleMoves: BattleMove[]; //ToDO: public get, private set

    public WeaponHit: number;
    public WeaponDamage:number;


    constructor(data:WeaponDatatype){
        super(10);
        this.itemName = data.WeaponName;
        this.BattleMoves = data.BattleMoves;
        this.WeaponHit = data.WeaponHit;
        this.WeaponDamage = data.WeaponDamage;

        this.BuildWeaponBattleMoves();
    }

    private BuildWeaponBattleMoves(){
        var tmp: BattleMove[] = this.BattleMoves;
        this.BattleMoves = [];
        tmp.forEach(bm => {
            
            const allBMReferences= JsonHandlerInstance.JsonDatabase[DataTypesEnum.BattleMove.toString()];
            const battleMove = allBMReferences.find(w => w.DataDevName === bm);
            const newBM:BattleMove = new BattleMove(battleMove);
            this.BattleMoves.push(newBM);
        });
    }

    public AddBattleMoves(BMEnum:BattleMoveEnum){
            const allBMReferences= JsonHandlerInstance.JsonDatabase[DataTypesEnum.BattleMove.toString()];
            const battleMove = allBMReferences.find(w => w.DataDevName === BMEnum);
            const newBM:BattleMove = new BattleMove(battleMove);
            this.BattleMoves.push(newBM);
    }
}