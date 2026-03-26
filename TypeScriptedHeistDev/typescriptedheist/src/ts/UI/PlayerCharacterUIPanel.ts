import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { CharacterStat } from "../Items/Character/CharacterStat";
import { MainWindowPageDisplayManagerInstance } from "../MainPageInitialisation";
import { PlayerCharacter } from "../PlayerCharacter";
import { PageElement } from "./PageElement";

export class PlayerCharacterUIPanel {
    private parentPageElement: PageElement;
    private playerHPPE: PageElement;
    private playerNamePE: PageElement;

    private playerUIPanelID: string = "PlayerStatsDiv";
    private playerHPUIID: string = "PlayerHP";
    private playerNameUIID: string = "PlayerName";

    private currentMaxHP:number;
    private currentHP:number;
    private name:string;

    public OnPanelOpen() {
        //Subscribe to stuff
        const pc = PlayerCharacter.instance.GetPlayerCharacter();
        const pcHealth = pc.GetStat(CharcterStatTypeEnum.Health) as CharacterStat;
        pcHealth.SubscribeToOnValueChange(((newValue, change) => this.OnHealthChange(newValue, change)));
        pcHealth.SubscribeToOnMaxValueChange(((newValue, change) => this.OnMaxHealthChange(newValue, change)));


        //Find pagelements;
        var t = MainWindowPageDisplayManagerInstance.FindPageElementByElementId(this.playerUIPanelID);
        if (t != null)
            this.parentPageElement = t;

        t = this.parentPageElement.FindChildByID(this.playerHPUIID);
        if(t!=null)
            this.playerHPPE = t;

        t = this.parentPageElement.FindChildByID(this.playerNameUIID);
        if(t!=null)
            this.playerNamePE = t;

        // this.currentMaxHP = pc.GetStat(CharcterStatTypeEnum.Health)?.MaxValue as number; 
        // this.name = pc.ItemName;
        // this.currentHP = this.currentMaxHP
        // this.OnHealthChange(0,0);
    }


    private OnHealthChange(newValue:number, change:number) {
        this.currentHP = newValue;
        this.playerHPPE.SetElementText(this.HPUIText());
        
    }
    private OnMaxHealthChange(newValue:number, change:number){
        this.currentMaxHP = newValue;
        this.playerHPPE.SetElementText(this.HPUIText());
    }
    private HPUIText():string{
        return `HP: ${this.currentHP} / ${this.currentMaxHP}`
    }
}