import { IsDebug } from "./initialisation";
import { AddNewHistoryDiv } from "./PageDisplay";

export enum AlertGroupType {
    default,
    CombatTurn,
}
export class AlertManager {
    private static _instance: AlertManager;

    public static get Instance() {
        if (!this._instance)
            this._instance = new AlertManager();
        return this._instance;
    }

    private alertGroups: AlertGroup[];

    constructor() {
        this.alertGroups = [];
        this.alertQueue = [];
    }

    public CreateAlertGroup(groupName: string, groupType: AlertGroupType) {
        this.alertGroups.push(new AlertGroup(groupName, groupType));

    }

    public AddAlertToGroup(alertText: string, groupType: AlertGroupType) {
        var targetGroup = this.GetAlertGroup(groupType);
        if (targetGroup === undefined) {
            this.WriteAlertStorePrevious("No Alert Group of type " + groupType.toString());
            return;
        }
        else {
            targetGroup = targetGroup as AlertGroup;
            targetGroup.NewAlert(alertText);
        }
    }

    private GetAlertGroup(groupType: AlertGroupType): AlertGroup | undefined {
        var targetGroup = this.alertGroups.find(g => g.AlertGroupType = groupType);
        if (targetGroup === undefined) {
            if (IsDebug)
                console.log("Couldn't find group " + groupType);
        }
        return targetGroup;
    }

    public DoesAlertGroupExist(groupType: AlertGroupType):boolean{
        const ag = this.GetAlertGroup(groupType);
        if(ag == undefined)
            return false;
        return true;
    }

    public PrintGroup(groupType: AlertGroupType) {
        var groupText: string = "";

        var targetGroup = this.GetAlertGroup(groupType);
        if (targetGroup === undefined) {
            return;
        }
        else {
            targetGroup = targetGroup as AlertGroup;

            //groupText = targetGroup.NewAlert + ":\n";

            targetGroup.Alerts.forEach(alert => {
                groupText += alert + "\n";
            });
            this.WriteAlertStorePrevious(groupText);
            this.DeleteGroup(targetGroup)
        }
    }

    private DeleteGroup(group: AlertGroup) {

        const i: number = this.alertGroups.indexOf(group);
        this.alertGroups.splice(i);
        // var targetGroup = this.GetAlertGroup(groupType);
        // if (targetGroup === undefined) {
        //     return;
        // }
        // else {
        //     const i:number = this.alertGroups.indexOf(targetGroup);
        //     this.alertGroups.splice(i);
        // }
    }

    private alertQueue: string[];

    public WriteAlertStorePrevious(alert: string) {

        this.alertQueue.push(alert);

        if (this.clearingAlertBacklog)
            return;
        if (this.alertQueue.length != 0)
            this.ClearAlertBacklog();

        // if (this.alertQueue.length == 0) {
        //   WriteAlertStorePrevious(alert);
        // }
        // else {
        //   this.alertQueue.push(alert);
        // }
    }
    // private async HandleAlertQueue() {
    //     const textField = document.getElementById("DescriptionText") as HTMLInputElement;
    //     const alert = this.alertQueue[this.alertQueue.length - 1];
    //     await AddNewHistoryDiv(textField.innerHTML);
    //     textField.innerHTML = alert;
    //     this.alertQueue.splice(this.alertQueue.length - 1);

    //     if (this.alertQueue.length != 0) {
    //         const nextAlert = this.alertQueue[this.alertQueue.length - 1];
    //         this.alertQueue.splice(this.alertQueue.length - 1);
    //         this.WriteAlertStorePreviousPriv(nextAlert);
    //     }
    // }
    private clearingAlertBacklog: boolean = false;

    private async ClearAlertBacklog() {
        this.clearingAlertBacklog = true;
        const textField = document.getElementById("DescriptionText") as HTMLInputElement;
        while (this.clearingAlertBacklog) {
            if (textField.textContent !== null)
                await AddNewHistoryDiv(textField.textContent);
            const newAlert = this.alertQueue.shift();
            if (newAlert != undefined)
                textField.innerHTML = newAlert;

            if (this.alertQueue.length == 0)
                this.clearingAlertBacklog = false;
        }
    }
}


export class AlertGroup {
    public GroupName: string;
    public Alerts: string[];
    public AlertGroupType: AlertGroupType;
    public SubGroups: AlertGroup[];
    public IsSubGroup: boolean;

    constructor(groupName: string, groupType: AlertGroupType) {
        this.GroupName = groupName;
        this.Alerts = [];
        this.AlertGroupType = groupType;
    }

    public NewAlert(alertText: string) {
        this.Alerts.push(alertText);
    }

    public NewSubGroup(subGroup: AlertGroup) {
        if (!this.SubGroups)
            this.SubGroups = [];
        subGroup.IsSubGroup = true;
        this.SubGroups.push(subGroup);
    }

}