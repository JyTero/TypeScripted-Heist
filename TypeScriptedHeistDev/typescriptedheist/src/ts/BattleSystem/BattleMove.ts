import { CharacterBase } from "../Character/CharacterBase";
import { BattleMoveData } from "./BattleMoveDataType";
import { BeginMeleeAttack } from "./Combat";

export class BattleMove{
    public MoveName:string;
    public IsRanged:boolean;
    public MoveDamageMultiplier:number;
    public MoveHitMultiplier: number;
    public MoveScore:number;
    constructor(data: BattleMoveData){
        this.MoveName = data.MoveName;
        this.IsRanged = data.IsRanged;
        this.MoveDamageMultiplier = data.MoveDamageMultiplier;
        this.MoveHitMultiplier = data.MoveHitMultiplier
        this.MoveScore = -1;
    }
   
    public ExecuteMove(attacker:CharacterBase, defender:CharacterBase){
        BeginMeleeAttack(attacker,defender);
    }
}