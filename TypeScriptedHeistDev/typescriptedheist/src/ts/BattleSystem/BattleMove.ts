import { CharacterBase } from "../Character/CharacterBase";
import { BattleMoveData } from "../DataTypes/BattleMoveDataType";
import { BeginMeleeAttack } from "./Combat";

export class BattleMove{
    public MoveName:string;
    public IsRanged:boolean;
    public MoveDamageMultiplier:number;
    public MoveHitMultiplier: number;
    public MoveScore:number;
    constructor(data: BattleMoveData){
        this.MoveName = data.BattleMoveName;
        this.IsRanged = data.IsRanged;
        this.MoveDamageMultiplier = data.BattleMoveDamageMultiplier;
        this.MoveHitMultiplier = data.BattleMoveHitMultiplier
        this.MoveScore = -1;
    }
   
    public ExecuteMove(attacker:CharacterBase, defender:CharacterBase){
        BeginMeleeAttack(attacker,defender);
    }
}