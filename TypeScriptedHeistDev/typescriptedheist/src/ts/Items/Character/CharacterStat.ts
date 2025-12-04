import { CharcterStatTypeEnum } from "../../../Assets/DataJsons/CharcterStatTypeEnum";
import { AlertGroupType, AlertManager } from "../../AlertManager";
import { ItemBase } from "../ItemBase";

export class CharacterStat {
    private statName: string = "";
    private statValue: number;
    private statMaxValue: number;

    private subscribers: (() => void)[] = [];

    private owner: ItemBase;

    get StatName(): string {
        return this.statName;
    }

    get Value(): number {
        return this.statValue
    }
    // private set Value(newValue: number) {
    //     this.statValue = newValue;

    // }

    constructor(name: string, initValue: number, maxValue: number, statType: CharcterStatTypeEnum, owner: ItemBase) {
        this.statName = name;
        this.statValue = initValue;
        this.statMaxValue = maxValue;
        this.owner = owner;
        owner.AddStatToDictionary(statType, this);
    }

    public SetValue(newValue: number) {
        this.statValue = newValue;
        this.NotifyValueChange();
    }
    public async AdjustValue(adjustValue: number) {
        this.statValue = this.statValue + adjustValue;
        this.NotifyValueChange();
        this.WriteAlert(adjustValue);

    }

    private WriteAlert(adjustValue: number) {
        if (AlertManager.Instance.DoesAlertGroupExist(AlertGroupType.CombatTurn))
            AlertManager.Instance.AddAlertToGroup(`${this.owner.ItemName} stat ${this.StatName} changes by ${adjustValue}`, AlertGroupType.CombatTurn);
        else
            AlertManager.Instance.WriteAlertStorePrevious(`${this.owner.ItemName} stat ${this.StatName} changes by ${adjustValue}`);
    }

    SubscribeToOnValueChange(callback: () => void) {
        this.subscribers.push(callback);
    }

    private NotifyValueChange() {
        for (const cb of this.subscribers) {
            cb();
        }
    }
}