import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { StatChangedEvent } from "../EventTypes";
import { CharacterStat } from "../Items/Character/CharacterStat";
import { MainWindowPageDisplayManagerInstance } from "../MainPageInitialisation";
import { PlayerCharacter } from "../PlayerCharacter";
import { PageElement } from "./PageElement";

export class PlayerCharacterUIPanel {
    private parentPageElement: PageElement;
    private playerHPPE: PageElement;
    private playerNamePE: PageElement;

    private panelName: string = "PlayerUIPanel";
    private playerUIPanelID: string = "PlayerStatsDiv";
    private playerHPUIID: string = "PlayerHP";
    private playerNameUIID: string = "PlayerName";

    private currentMaxHP: number;
    private currentHP: number;
    private name: string;

    public OnPanelOpen() {
        var h = MainWindowPageDisplayManagerInstance.FindHTMLElementByID(this.playerUIPanelID);
        if (h)
            MainWindowPageDisplayManagerInstance.CreateNewPageElement(h, this.panelName);
        //Subscribe to stuff
        const pc = PlayerCharacter.instance.GetPlayerCharacter();
        const pcHealth = pc.GetStat(CharcterStatTypeEnum.Health) as CharacterStat;
        pcHealth.SubscribeToOnValueChange(((statChangedEventer) => this.OnHealthChange(statChangedEventer)));
        pcHealth.SubscribeToOnMaxValueChange(((statChangedEventer) => this.OnMaxHealthChange(statChangedEventer)));


        //Find pagelements;
        var t = MainWindowPageDisplayManagerInstance.FindPageElementByElementId(this.playerUIPanelID);
        if (t != null)
            this.parentPageElement = t;

        t = this.parentPageElement.FindChildByID(this.playerHPUIID);
        if (t != null)
            this.playerHPPE = t;

        t = this.parentPageElement.FindChildByID(this.playerNameUIID);
        if (t != null)
            this.playerNamePE = t;

        this.currentMaxHP = pc.GetStat(CharcterStatTypeEnum.Health)?.MaxValue as number;
        this.name = pc.ItemName;
        this.currentHP = this.currentMaxHP
        this.playerHPPE.SetElementText(this.HPUIText());
    }


    private OnHealthChange(statChangedEventer: StatChangedEvent) {
        this.currentHP = statChangedEventer.newValue;
        this.playerHPPE.SetElementText(this.HPUIText());

    }
    private OnMaxHealthChange(statChangedEventer: StatChangedEvent) {
        this.currentMaxHP = statChangedEventer.newValue;
        this.playerHPPE.SetElementText(this.HPUIText());
    }
    private HPUIText(): string {
        return `HP: ${this.currentHP} / ${this.currentMaxHP}`
    }
}