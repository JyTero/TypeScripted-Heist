import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { EffectTypeEnumEnum } from "../../Assets/DataJsons/EffectTypeEnumEnum";
import { AlertManager } from "../AlertManager";
import { EffectData } from "../DataTypes/EffectDataType";
import { ItemBase } from "../Items/ItemBase";


// //Stat enum, will be made by tool 
// export enum CharacterStatTypes {
//     Strength,
//     Dexterity,
//     Perception,
//     WeaponSkill,
//     Dodge,
//     Evasion,
//     WeaponSkillHit,
//     WeaponSkillDmg,
//     Speed,
//     BattleSpeed,
//     baseSpeed,
//     equipedWeapon,
//     ArmourRating,
//     Health,
// }
export enum AllEffects {
    DamageOT,

}
export class Effect {
    public EffectName: string;
    protected TargetStat: CharcterStatTypeEnum;
    protected EffectType: EffectTypeEnumEnum;
    protected potency: number;
    protected effectDuration: number;

    //private targetStatIntance: CharacterStat
    private effectRemainingTurns: number;

    public get Potency(): number {
        return this.potency;
    }
    public get EffectDuration():number{
        return this.effectDuration;
    }

    public GetEffectType(): EffectTypeEnumEnum {
        return this.EffectType;
    }
    public GetTargetStat(): CharcterStatTypeEnum {
        return this.TargetStat;
    }

    constructor(data: EffectData) {
        this.EffectName = data.EffectName;
        this.TargetStat = data.TargetStat;
        this.EffectType = data.TargetEffectType;
        this.potency = data.EffectPotency;
        this.effectDuration = data.EffectDuration;

        //Figure out what effect type (Heal, hurt), adjust value if needed
        this.AdjustEffectPotencyToMatchType();
    }

    public ApplyEffect(target: ItemBase) {
        //Do all modifiers to attack values here

        //is OT?
        if (this.DoesTargetHaveEffectTargetStat(target)) {
            if (this.effectDuration === 0)
                this.TriggerEffect(target)
            else
                this.ApplyOTEffect(target);
        }
        else
            console.log(`${target.ItemName} does not have stat ${this.TargetStat} required by ${this.EffectName}`);



        //Apply properly
        //Simply adjust stats
        //Apply effect to target for OT effects
    }

    protected OnEffectEnd(target: ItemBase): void {
        target.RemoveEffect(this);
    };

    private ApplyInstantEffect(target: ItemBase) {
        const statt = target.GetStat(this.TargetStat);
        statt?.DamageStat(this.potency);

    }

    private ApplyOTEffect(target: ItemBase) {
        target.ReceiveEffect(this);
        this.effectRemainingTurns = this.effectDuration;
    }

    private AdjustEffectPotencyToMatchType() {
        if (this.EffectType === EffectTypeEnumEnum.Damage || this.EffectType === EffectTypeEnumEnum.Destroy) {
            this.potency = -Math.abs(this.potency);
        }
    }

    private DoesTargetHaveEffectTargetStat(target: ItemBase): boolean {
        const targetStat = target.GetStat(this.TargetStat);

        if (targetStat === undefined)
            return false;
        else {
            // this.targetStatIntance = targetStat;
            return true;
        }
    }

    public TriggerEffect(target: ItemBase) {
        switch (this.EffectType) {
            case EffectTypeEnumEnum.Damage:
                this.ApplyDamageEffect(target);
                break;
            case EffectTypeEnumEnum.Destroy:
                this.ApplyDestroyEffect(target);
                break;
            case EffectTypeEnumEnum.Heal:
                this.ApplyHealEffect(target);
                break;
            case EffectTypeEnumEnum.Restore:
                this.ApplyRestoreEffect(target);
                break;
            default:
                console.log("UNKNOWN EffectType IN " + this.EffectName);
        }
        if (this.effectDuration > 0)
            this.HandleOvertimeEffects(target);

    }

    private ApplyDamageEffect(target: ItemBase) {
        const targetStat = target.GetStat(this.TargetStat)
        targetStat?.DamageStat(this.potency);
    }
    private ApplyDestroyEffect(target: ItemBase) {
        const targetStat = target.GetStat(this.TargetStat)
        targetStat?.DestroyStat(this.potency);
    }
    private ApplyHealEffect(target: ItemBase) {
        const targetStat = target.GetStat(this.TargetStat)
        targetStat?.HealStat(this.potency);
    }
    private ApplyRestoreEffect(target: ItemBase) {
        const targetStat = target.GetStat(this.TargetStat);
        targetStat?.RestoreStat(this.potency);
    }

    private HandleOvertimeEffects(target: ItemBase) {
        this.effectRemainingTurns--;
        if (this.effectRemainingTurns <= 0)
            target.RemoveEffect(this);
    }

    public async TriggerOTEffect(target: ItemBase) {

        await AlertManager.Instance.WriteAlertStorePrevious(`${target.ItemName} is affected by ${this.EffectName} (${this.effectRemainingTurns}/${this.effectDuration} turns)`);
        this.TriggerEffect(target);

        // const stat = target.GetStat(this.TargetStat);
        // //Call different methods based if damage/destroy/heal/restore

        // stat?.DamageStat(this.Potency);
        // this.effectRemainingTurns--;

        // if (this.effectRemainingTurns <= 0)
        //     this.OnEffectEnd(target);

    }
    //Instant value change
    //And/OR
    //Intant value set
    //And/OR
    //OT Value Change
    //And/OR
    //OT Value Set
    //THEN
    //OT Length (Turns? "On turn start...")

}