import { CharacterBase } from "../Items/Character/CharacterBase";
import { BattleMoveData } from "../DataTypes/BattleMoveDataType";
import { BeginMeleeAttack } from "./Combat";
import { EffectBase } from "../Effects/EffectBase";
import { ItemBase } from "../Items/ItemBase";
import { JsonHandlerInstance } from "../initialisation";
import { DataTypesEnum } from "../../Assets/DataJsons/DataTypesEnum";
import { EffectData } from "../DataTypes/EffectDataType";


export class BattleMove {
    public MoveName: string;
    public IsRanged: boolean;
    public MoveDamageMultiplier: number;
    public MoveHitMultiplier: number;
    //public AttackerMoveEffects: EffectBase[];
    public MoveEffects: EffectBase[];
    public MoveScore: number;
    constructor(data: BattleMoveData) {
        this.MoveName = data.BattleMoveName;
        this.IsRanged = data.IsRanged;
        this.MoveDamageMultiplier = data.BattleMoveWeaponDamageMultiplier;
        this.MoveHitMultiplier = data.BattleMoveWeaponHitMultiplier
        this.MoveEffects = data.BattleMoveEffects;
        this.MoveScore = -1;

        if (this.MoveEffects != null)
            this.BuildBattleMoveEffects();
    }

    private BuildBattleMoveEffects() {
        var tmp: EffectBase[] = this.MoveEffects;
        this.MoveEffects = [];
        tmp.forEach(effect => {

            const allEffectReferences = JsonHandlerInstance.JsonDatabase[DataTypesEnum.Effect.toString()];
            const effectReference = allEffectReferences.find(e => e.DataDevName === effect);
            const newEffect: EffectBase = new EffectBase(effectReference);
            this.MoveEffects.push(newEffect);

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
            effect.ApplyEffect(defender);
        });
    }
}