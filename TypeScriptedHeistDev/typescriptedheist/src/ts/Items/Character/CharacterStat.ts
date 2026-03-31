import { CharcterStatTypeEnum } from "../../../Assets/DataJsons/CharcterStatTypeEnum";
import { AlertGroupType, AlertManager } from "../../AlertManager";
import { StatChangedListener } from "../../EventListeners";
import { ItemBase } from "../ItemBase";
import { NewStatChangedEvent, StatChangedEvent } from "../../EventTypes";

export class CharacterStat {
    private statName: string = "";
    private statValue: number;
    private trueMaxValue: number;
    private currentMaxValue: number;


    private onValueChangeSubscribers: StatChangedListener[] = [];
    private onMaxChangeSubscribers: StatChangedListener[] = [];

    private owner: ItemBase;

    get StatName(): string {
        return this.statName;
    }

    get Value(): number {
        return this.statValue
    }
    get MaxValue(): number {
        return this.currentMaxValue;
    }
    // private set Value(newValue: number) {
    //     this.statValue = newValue;

    // }

    constructor(name: string, initValue: number, maxValue: number, statType: CharcterStatTypeEnum, owner: ItemBase) {
        this.statName = name;
        this.statValue = initValue;
        this.trueMaxValue = maxValue;
        this.currentMaxValue = this.trueMaxValue;
        this.owner = owner;
        owner.AddStatToDictionary(statType, this);
    }

    public SetValue(newValue: number) {
        this.statValue = newValue;
        this.NotifyValueChange(this.statValue, NaN);
    }

    public async DamageStat(adjust: number) {
        this.statValue = this.statValue - adjust;
        this.NotifyValueChange(this.statValue, adjust);
        this.WriteAlert(adjust);
    }
    public DestroyStat(adjust: number) {
        this.currentMaxValue += this.currentMaxValue - adjust;
        if (this.statValue > this.currentMaxValue)
            this.SetValue(this.currentMaxValue);
        this.WriteAlert(adjust);
        this.NotifyMaxValueChange(this.MaxValue, adjust);
    }
    public HealStat(adjust: number) {
        if (this.statValue + adjust > this.currentMaxValue)
            this.SetValue(this.currentMaxValue);
        else {
            this.statValue = this.statValue + adjust;
            this.NotifyValueChange(this.statValue, adjust);
            this.WriteAlert(adjust);
        }
    }
    public RestoreStat(adjust: number) {
        if (this.currentMaxValue + adjust > this.trueMaxValue)
            this.currentMaxValue = this.trueMaxValue;
        else {
            this.currentMaxValue += adjust;
        }
        this.NotifyMaxValueChange(this.MaxValue, adjust);
    }

    private WriteAlert(adjustValue: number) {
        if (AlertManager.Instance.DoesAlertGroupExist(AlertGroupType.CombatTurn))
            AlertManager.Instance.AddAlertToGroup(`${this.owner.ItemName} stat ${this.StatName} changes by ${adjustValue}`, AlertGroupType.CombatTurn);
        else
            AlertManager.Instance.WriteAlertStorePrevious(`${this.owner.ItemName} stat ${this.StatName} changes by ${adjustValue}`);
    }

    SubscribeToOnValueChange(listener: StatChangedListener) {
        this.onValueChangeSubscribers.push(listener);
    }

    SubscribeToOnMaxValueChange(listener: StatChangedListener){
        this.onMaxChangeSubscribers.push(listener);
    }

    private NotifyValueChange(newValue: number, change: number) {
        for (const cb of this.onValueChangeSubscribers) {
            //cb(newValue, change);
            cb(NewStatChangedEvent(cb.name + " StatChange", newValue, change));
        }
    }
    private NotifyMaxValueChange(newValue:number, change:number) {
        for (const cb of this.onMaxChangeSubscribers) {
            
            //cb(newValue, change);
            cb(NewStatChangedEvent(cb.name + " StatChange", newValue, change));
        }
    }
}