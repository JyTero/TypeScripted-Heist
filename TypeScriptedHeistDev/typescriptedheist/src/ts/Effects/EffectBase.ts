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
export class EffectBase {
    public EffectName: string;
    protected TargetStat: CharcterStatTypeEnum;
    protected TargetEffectType: EffectTypeEnumEnum;
    protected Potency: number;
    protected EffectDuration: number;

    //private targetStatIntance: CharacterStat
    private effectRemainingTurns:number;
    constructor(data: EffectData) {
        this.EffectName = data.EffectName;
        this.TargetStat = data.TargetStat;
        this.TargetEffectType = data.TargetEffectType;
        this.Potency = data.EffectPotency;
        this.EffectDuration = data.EffectDuration;

        //Figure out what effect type (Heal, hurt), adjust value if needed
        this.AdjustEffectPotencyToMatchType();
    }

    public ApplyEffect(target: ItemBase) {
        //Do all modifiers to attack values here

        //is OT?
        if (this.DoesTargetHaveEffectTargetStat(target)) {
            if (this.EffectDuration === 0)
                this.ApplyInstantEffect(target)
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
        statt?.AdjustValue(this.Potency);

    }

    private ApplyOTEffect(target: ItemBase) {
        target.ReceiveEffect(this);
        this.effectRemainingTurns = this.EffectDuration;
    }

    private AdjustEffectPotencyToMatchType() {
        if (this.TargetEffectType === EffectTypeEnumEnum.Damage || this.TargetEffectType === EffectTypeEnumEnum.Destroy) {
            this.Potency = -Math.abs(this.Potency);
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

    public async TriggerOTEffect(target: ItemBase) {

        await AlertManager.Instance.WriteAlertStorePrevious(`${target.ItemName} is affected by ${this.EffectName} (${this.effectRemainingTurns}/${this.EffectDuration} turns)`);

        const stat = target.GetStat(this.TargetStat);
        stat?.AdjustValue(this.Potency);
        this.effectRemainingTurns--;

        if (this.effectRemainingTurns <= 0)
            this.OnEffectEnd(target);

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