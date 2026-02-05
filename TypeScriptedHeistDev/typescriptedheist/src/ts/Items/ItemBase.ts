import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { EffectTypeEnumEnum } from "../../Assets/DataJsons/EffectTypeEnumEnum";
import { AlertManager } from "../AlertManager";
import { Effect } from "../Effects/EffectBase";
import { IsDebug } from "../initialisation";
import { CharacterStat } from "./Character/CharacterStat";

export class ItemBase {
    public ItemName: string = "Gia's Gunn";

    public Health: CharacterStat;

    private activeEffects: Effect[];

    //private objectStats:{[key:CharacterStatTypes]:CharacterStat}; 
    private objectStats: Partial<Record<CharcterStatTypeEnum, CharacterStat>> = {};

    constructor(maxHealth: number) {
        this.Health = new CharacterStat("Health", maxHealth, maxHealth, CharcterStatTypeEnum.Health, this);
        this.activeEffects = [];
    }

    public async ReceiveEffect(effect: Effect) {
        this.activeEffects.push(effect);
        await AlertManager.Instance.WriteAlertStorePrevious(`${this.ItemName} received effect ${effect.EffectName}`);
    }

    public RunOnceTurnEffects() {
        this.activeEffects.forEach(effect => {
            effect.TriggerOTEffect(this);
        });
    }



    public ApplyDamageEffect(effect: Effect){
        const targetStat = this.GetStat(effect.GetTargetStat())
    }

    public AddStatToDictionary(key: CharcterStatTypeEnum, stat: CharacterStat) {
        if (key in this.objectStats) {

            if (IsDebug)
                console.log("NOTE: " + this.ItemName + " already contains a " + key.toString() + " type stat" + "| " + this.objectStats[key]?.StatName + " vs " + stat.StatName);
        }
        else {
            this.objectStats[key] = stat;
        }
    }

    public async RemoveEffect(effect: Effect) {
        const i = this.activeEffects.indexOf(effect);
        this.activeEffects.splice(i, 1);
        await AlertManager.Instance.WriteAlertStorePrevious(`${this.ItemName} no longer has OT  effect ${effect.EffectName}`);
    }

    public GetStat(key: CharcterStatTypeEnum): CharacterStat | undefined {
        console.log(key, typeof key);
        console.log(Object.keys(this.objectStats));
        return this.objectStats[key];
    }

    // private MaxHealth: number = 10;
    // public AdjustMaxHealth(value:number){
    //     this.MaxHealth = this.MaxHealth + value;
    // }
    // public GetMaxHealth():number{
    //     return this.MaxHealth;
    // }
    // private currentHealth: number =  this.MaxHealth;

    // public AdjustHealth(value: number) {
    //     this.currentHealth = this.currentHealth + value;
    // }
    // public CurrentHealth(): number {
    //     return this.currentHealth;
    // }
}