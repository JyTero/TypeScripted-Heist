import { Delay } from "../../Tools";
import { CombatCharacter } from "../BattleSystem/CombatCharacter";
import { BattleAction } from "../BattleSystem/EnemyCombatAI";
import { FrameTimeMS } from "../initialisation";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { Trait } from "../Items/Character/Trait";

//This will be the debug window
export class DebugWindow {
    public UseDebugWindow: boolean;

    private debugWindow: Window;
    private combatDebug: HTMLElement | null;
    private combatGeneral: HTMLElement | null;
    private combatEnemyAI: HTMLElement | null;

    public async InitializeDebugWindow() {
        if (!this.UseDebugWindow)
            return;

        const btn = document.createElement("button");
        btn.textContent = "Open debug";

        btn.addEventListener("click", () => {
            const debugWind = window.open("debugPage.html", "DebugWindow", "width=600,height=400");
            if (debugWind != null) {
                this.debugWindow = debugWind;
            }
            else
                return;

            debugWind.addEventListener("DOMContentLoaded", this.OnPageOpen.bind(this));



        });
        await Delay(FrameTimeMS);

        document.body.appendChild(btn);


        // const debugWindow = window.open(
        //     "", // URL (empty for a blank window)
        //     "DebugWindow", // Window name (for targeting)
        //     "width=600,height=400,left=200,top=200" // Window features
        // );

    }


    private OnPageOpen() {
        this.combatDebug = this.debugWindow.document.getElementById("CombatDebugging");
        this.combatGeneral = this.debugWindow.document.getElementById("CombatGeneral");
        this.combatEnemyAI = this.debugWindow.document.getElementById("CombatEnemyAI");
        // const newEntry = this.debugWindow.document.createElement("div");
        // const p = this.debugWindow.document.createElement("p");

        // newEntry.className = "divName";

        // p.textContent = "This here window is for debugging needs";
        // newEntry.appendChild(p);
        // this.combatDebug?.appendChild(newEntry);
    }



    //private combatCharacterDivs: Record<CombatCharacter, HTMLElement> = {};
    private combatCharacterDivs = new Map<CombatCharacter, HTMLDivElement>();
    //COMBAT DEBUG
    public OnCombatBegin(turnOrder: CombatCharacter[]) {
        if(!this.debugWindow)
            return;

        const header = this.debugWindow.document.createElement("p")
        header.style.fontWeight = "bold";
        header.textContent = "BattleEngine";
        //this.combatDebug?.appendChild(header);
        this.combatDebug?.insertBefore(header, this.combatDebug.firstChild);

        turnOrder.forEach(combatCharacter => {
            const combatantDiv = this.debugWindow.document.createElement("div");
            const divHeader = this.debugWindow.document.createElement("p");
            divHeader.textContent = combatCharacter.Character.ItemName;
            combatantDiv.appendChild(divHeader);
            this.combatEnemyAI?.appendChild(combatantDiv);

            this.combatCharacterDivs.set(combatCharacter, combatantDiv);
        });

    }

    public DebugTraitBAScoring(ba:BattleAction, trait:Trait, traitMultiplier:number){
        
    }

    public DisplayBattleActionDebugData(ba:BattleAction, owner:CharacterBase){
        
    } 
}