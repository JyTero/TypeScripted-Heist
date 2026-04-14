import { IsDebug, MainWindowPageDisplayManagerInstance } from "./MainPageInitialisation";

export enum AlertGroupType {
    default,
    CombatTurn,
    DialogLine,
}
export class AlertManager {
    // private static _instance: AlertManager;

    // public static get Instance() {
    //     if (!this._instance)
    //         this._instance = new AlertManager();
    //     return this._instance;
    // }

    private alertGroups: AlertGroup[];
    private OalertQueue: string[];
    private alertQueue: Alert[] = [];

    private currentAlertInDescription: Alert;
    private DescriptionTextIdName: string;
    constructor() {
        this.alertGroups = [];
        this.OalertQueue = [];
    }

    public CreateAlertGroup(groupName: string, groupType: AlertGroupType) {
        this.alertGroups.push(new AlertGroup(groupName, groupType));

    }

    public AddAlertToGroup(alertText: string, groupType: AlertGroupType) {
        var targetGroup = this.GetAlertGroup(groupType);
        if (targetGroup === undefined) {
            this.WriteAlertStorePrevious("No Alert Group of type " + groupType.toString(), []);
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

    public DoesAlertGroupExist(groupType: AlertGroupType): boolean {
        const ag = this.GetAlertGroup(groupType);
        if (ag == undefined)
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

            this.ApplyGroupSpesificsStyles(targetGroup);
            //groupText = targetGroup.NewAlert + ":\n";

            targetGroup.Alerts.forEach(alert => {
                groupText += alert + "\n";
            });
            this.WriteAlertStorePrevious(groupText, targetGroup.CSSTags);
            this.DeleteGroup(targetGroup)
        }
    }

    private ApplyGroupSpesificsStyles(group: AlertGroup) {

        switch (group.AlertGroupType) {
            case AlertGroupType.default:
                this.DefaulltSpesificStyles(group);
                return;
            case AlertGroupType.CombatTurn:
                this.CombatSpesificStyles(group);
                return;
            case AlertGroupType.DialogLine:
                this.DialogSpesificStyles(group);
                return;
        }
    }
    private dialogCSSClassName: string = "Dialog"
    private combatCSSClassName: string = "Combat";
    private DefaulltSpesificStyles(group: AlertGroup) {

    }
    private CombatSpesificStyles(group: AlertGroup) {
        group.CSSTags.push(this.combatCSSClassName);

    }
    private DialogSpesificStyles(group: AlertGroup) {
        group.CSSTags.push(this.dialogCSSClassName);
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


    public WriteAlertStorePrevious(alertContent: string, alertStyleTags: string[]) {

        const alert = new Alert(alertContent)
        if (alertStyleTags != undefined && alertStyleTags.length != 0)
            alert.AddTags(alertStyleTags);

        this.alertQueue.push(alert);


        if (this.clearingAlertBacklog)
            return;
        if (this.alertQueue.length != 0)
            this.ClearAlertBacklog();

    }
    // public WriteAlertStorePrevious(alert: string) {

    //     this.OalertQueue.push(alert);

    //     if (this.clearingAlertBacklog)
    //         return;
    //     if (this.OalertQueue.length != 0)
    //         this.ClearAlertBacklog();

    // }

    private clearingAlertBacklog: boolean = false;

    private async ClearAlertBacklog() {
        this.clearingAlertBacklog = true;
        const textField = document.getElementById("DescriptionText") as HTMLInputElement;
        if (!textField)
            console.error("Couldn't find DesciptionItemText (the place where text goes before log)");

        while (this.clearingAlertBacklog) {
            if (this.currentAlertInDescription != undefined)
                await MainWindowPageDisplayManagerInstance.MoveCurrentToHistory(this.currentAlertInDescription);
            // await AddNewHistoryDiv(textField.textContent);


            const newAlert = this.alertQueue.shift();
            if (newAlert != undefined) {
                textField.innerHTML = newAlert.Content;
                textField.className = "";
                newAlert.InsertTagsToElementClassList(textField);
                this.currentAlertInDescription = newAlert;

            }

            if (this.alertQueue.length == 0)
                this.clearingAlertBacklog = false;
        }
    }
    // private async ClearAlertBacklog() {
    //     this.clearingAlertBacklog = true;
    //     const textField = document.getElementById("DescriptionText") as HTMLInputElement;
    //     while (this.clearingAlertBacklog) {
    //         if (textField.textContent !== null)
    //             await AddNewHistoryDiv(textField.textContent);
    //         const newAlert = this.OalertQueue.shift();
    //         if (newAlert != undefined)
    //             textField.innerHTML = newAlert;

    //         if (this.OalertQueue.length == 0)
    //             this.clearingAlertBacklog = false;
    //     }
    // }
}

export class Alert {
    public Content: string;
    public CSSTags: string[] = [];

    constructor(content: string) {
        this.Content = content;
    }

    public AddTags(tags: string[]) {
        this.CSSTags = tags;
    }

    public InsertTagsToElementClassList(element: HTMLElement) {
        for (var s of this.CSSTags) {
            element.classList.add(s);
        }
    }

}

export class AlertGroup {
    public GroupName: string;
    public Alerts: string[];
    public AlertGroupType: AlertGroupType;
    public CSSTags: string[] = [];
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
    public AddTags(tags: string[]) {
        this.CSSTags = tags;
    }

    public InsertTagsToElementClassList(element: HTMLElement) {
        for (var s of this.CSSTags) {
            element.classList.add(s);
        }
    }
    public NewSubGroup(subGroup: AlertGroup) {
        if (!this.SubGroups)
            this.SubGroups = [];
        subGroup.IsSubGroup = true;
        this.SubGroups.push(subGroup);
    }

}