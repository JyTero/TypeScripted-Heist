import { CharacterBase } from "../Items/Character/CharacterBase";
import { BattleMoveData } from "../DataTypes/BattleMoveDataType";
import { BeginMeleeAttack } from "./Combat";
import { Effect } from "../Effects/EffectBase";
import { ItemBase } from "../Items/ItemBase";
import { JsonHandlerInstance } from "../initialisation";
import { DataTypesEnum } from "../../Assets/DataJsons/DataTypesEnum";
import { EffectData } from "../DataTypes/EffectDataType";
import { EffectTypeEnumEnum } from "../../Assets/DataJsons/EffectTypeEnumEnum";


export class BattleMove {
    public MoveName: string;
    public IsRanged: boolean;
    public MoveDamageMultiplier: number;
    public MoveHitMultiplier: number;
    //public AttackerMoveEffects: EffectBase[];
    public MoveEffects: Effect[];

    private isHealingMove = false;
    public get IsHealingMove():boolean{
      return this.isHealingMove;  
    } 

    constructor(data: BattleMoveData) {
        this.MoveName = data.BattleMoveName;
        this.IsRanged = data.IsRanged;
        this.MoveDamageMultiplier = data.BattleMoveWeaponDamageMultiplier;
        this.MoveHitMultiplier = data.BattleMoveWeaponHitMultiplier
        this.MoveEffects = data.BattleMoveEffects;

        if (this.MoveEffects != null)
            this.BuildBattleMoveEffects();


    }

    private BuildBattleMoveEffects() {
        var tmp: Effect[] = this.MoveEffects;
        this.MoveEffects = [];
        tmp.forEach(effect => {

            const allEffectReferences = JsonHandlerInstance.JsonDatabase[DataTypesEnum.Effect.toString()];
            const effectReference = allEffectReferences.find(e => e.DataDevName === effect);
            const newEffect: Effect = new Effect(effectReference);
            this.MoveEffects.push(newEffect);
            
            if(newEffect.GetEffectType() == EffectTypeEnumEnum.Heal ||newEffect.GetEffectType() == EffectTypeEnumEnum.Restore){
                this.isHealingMove = true;
            }
        });
    }

    public ExecuteMove(attacker: CharacterBase, defender: CharacterBase) {
        if (this.MoveEffects == undefined)
            BeginMeleeAttack(attacker, defender);
        else
            this.ApplyEffects(attacker, defender);
    }

    private ApplyEffects(attacker: CharacterBase, defender: CharacterBase) {
        this.MoveEffects.forEach(effect => {
            effect.ApplyEffect(defender, attacker);
        });
    }

}