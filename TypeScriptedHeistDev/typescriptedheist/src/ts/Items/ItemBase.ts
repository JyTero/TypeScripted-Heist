import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { EffectTypeEnumEnum } from "../../Assets/DataJsons/EffectTypeEnumEnum";
import { PersoanlityAxisEnumH } from "../../Assets/DataJsons/PersonalityAxisEnumHandmade";
import { TraitsEnumH } from "../../Assets/TraitsEnumHandmade";
import { AlertManager } from "../AlertManager";
import { Effect } from "../Effects/EffectBase";
import { StringChangedListner } from "../EventListeners";
import { IsDebug } from "../MainPageInitialisation";
import { CharacterStat } from "./Character/CharacterStat";
import { PersonalityAxis } from "./Character/PersonalityAxis";
import { Healer_Trait, Trait } from "./Character/Trait";

export class ItemBase {
    protected itemName: string;
    public get ItemName(): string {
        return this.itemName;
    }

    public Health: CharacterStat;

    private activeEffects: Effect[];

    //private objectStats:{[key:CharacterStatTypes]:CharacterStat}; 
    private objectStats: Partial<Record<CharcterStatTypeEnum, CharacterStat>> = {};

    private itemPersonalityAxes: Partial<Record<PersoanlityAxisEnumH, PersonalityAxis>> = {};
    private itemTraits: Trait[] = [];

    private onNameChangeSubscribers: StringChangedListner[] = [];

    constructor(maxHealth: number) {
        this.Health = new CharacterStat("Health", maxHealth, maxHealth, CharcterStatTypeEnum.Health, this);
        this.activeEffects = [];
    }

    public AddTrait(traitEnum: TraitsEnumH) {
        switch (traitEnum) {
            case TraitsEnumH.Default:
                console.log("Tried to add DEFAULT TRAIT for " + this.ItemName);
                break;
            case TraitsEnumH.Healer:
                const newTrait = new Healer_Trait();
                this.InserTraitToCharacter(newTrait);
                break;
            case TraitsEnumH.Reckless:
            //stuff
            default:
                console.log("Tried to ad UNKNOWN TRAITT TYPE for " + this.ItemName);


        }
    }
    private InserTraitToCharacter(trait: Trait) {
        if (IsDebug)
            console.log(`${trait.TraitName} has been added to ${this.ItemName}`);
        this.itemTraits.push(trait);
    }
    public GetTraits(): Trait[] {
        return this.itemTraits;
    }



    public async ReceiveEffect(effect: Effect) {
        this.activeEffects.push(effect);
        // await AlertManager.Instance.WriteAlertStorePrevious(`${this.ItemName} received effect ${effect.EffectName}`);
    }

    public RunOnceTurnEffects() {
        var debug = `Running OT effects for ${this.ItemName} (`;
        this.activeEffects.forEach(effect => {
            debug += `${effect.EffectName}, ${effect.EffectDuration}/${effect.EffectRemainingTurns} | `
            effect.TriggerOTEffect(this);
        });
        if (IsDebug)
            console.log(debug);
    }
    public ApplyDamageEffect(effect: Effect) {
        const targetStat = this.GetStat(effect.GetTargetStat())
    }

    public async RemoveEffect(effect: Effect) {
        const i = this.activeEffects.indexOf(effect);
        this.activeEffects.splice(i, 1);
        await AlertManager.Instance.WriteAlertStorePrevious(`${this.ItemName} no longer has OT  effect ${effect.EffectName}`);
    }

    public GetStat(key: CharcterStatTypeEnum): CharacterStat | undefined {
        // console.log(key, typeof key);
        // console.log(Object.keys(this.objectStats));
        return this.objectStats[key];
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

    public AddPersonalityAxisToDictionary(key: PersoanlityAxisEnumH, axis: PersonalityAxis) {
        if (key in this.itemPersonalityAxes)
            if (IsDebug)
                console.log("NOTE: " + this.ItemName + " already contains a " + key.toString() + " type stat" + "| " + this.itemPersonalityAxes[key]?.axisName + " vs " + axis.axisName);
            else {
                this.itemPersonalityAxes[key] = axis;
            }
    }
    public GetPersonalityAxes(): PersonalityAxis[] {
        var personalityAxis: PersonalityAxis[] = [];
        for (var axis of Object.values(this.itemPersonalityAxes)) {
            personalityAxis.push(axis);
        }

        return personalityAxis;
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

    public SubscribeToNameChange(listener: StringChangedListner) {
        this.onNameChangeSubscribers.push(listener);
    }
}