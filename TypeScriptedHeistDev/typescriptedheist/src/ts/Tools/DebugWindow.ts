import { Delay, RemoveAllHTMLChildren } from "../../Tools";
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
    private combatCharacterDivsReverse = new Map<HTMLDivElement, CombatCharacter>();

    //COMBAT DEBUG
    public OnCombatBegin(turnOrder: CombatCharacter[]) {
        if (!this.debugWindow)
            return;

        const header = this.debugWindow.document.createElement("p")
        header.style.fontWeight = "bold";
        header.textContent = "BattleEngine";
        //this.combatDebug?.appendChild(header);
        this.combatDebug?.insertBefore(header, this.combatDebug.firstChild);

        turnOrder.forEach(combatCharacter => {
            const combatantDiv = this.debugWindow.document.createElement("div");
            combatantDiv.className = "CombatantDiv";
            const divHeader = this.debugWindow.document.createElement("h1");
            divHeader.textContent = combatCharacter.Character.ItemName;
            combatantDiv.appendChild(divHeader);
            this.combatEnemyAI?.appendChild(combatantDiv);

            this.combatCharacterDivs.set(combatCharacter, combatantDiv);
            this.combatCharacterDivsReverse.set(combatantDiv, combatCharacter);
        });

    }

    public ChooseBattleActionDebug(thisCharacter: CharacterBase, bas: BattleAction[]) {

        this.combatCharacterDivs.forEach((value: HTMLDivElement, key: CombatCharacter) => {
            if (key.Character == thisCharacter) {
                this.ChooseBattleActionDebugProper(key, value, bas);
            }
            else
                return;
        })

    }

    private BAParentDivClassName: string = "BattleActionsParent";
    private BADivClassName: string = "BattleAction";
    private BADivHeaderClassName: string = "BattleActionHeader";
    private DetailsButtonClassname: string = "DetailsButton";

    private ChooseBattleActionDebugProper(thisCombatCharacter: CombatCharacter, thisDiv: HTMLDivElement, BAs: BattleAction[]) {
        if (!this.debugWindow)
            return;
        //Create BAParent Div
        var BAParentDiv = thisDiv.getElementsByClassName(this.BAParentDivClassName)[0];

        if (!BAParentDiv) {
            BAParentDiv = this.CreateBAParentDiv();
            thisDiv.appendChild(BAParentDiv);
        }
        else {
            RemoveAllHTMLChildren(BAParentDiv);
        }

        // const BAParentHeaderText = this.debugWindow.document.createElement("p");
        // BAParentHeaderText.textContent = "BAs: ";
        // thisDiv.appendChild(BAParentHeaderText);
        var i = 0;

        BAs.forEach(ba => {
            //Code
            const BADiv = this.debugWindow.document.createElement("div");
            BADiv.className = this.BADivClassName;
            BAParentDiv.appendChild(BADiv)

            //BADivHeader
            const BADivHeader = this.debugWindow.document.createElement("div");
            BADivHeader.className = this.BADivHeaderClassName;
            BADiv.appendChild(BADivHeader);

            //Texti
            const BAName = this.debugWindow.document.createElement("p");
            BAName.textContent = ba.Score + ": " + ba.BattleMove.MoveName + " (" + ba.ActionTarget.Character.ItemName + ")";
            BADivHeader.appendChild(BAName);

            //Button
            const seeDetailsBtn = this.debugWindow.document.createElement("button");
            seeDetailsBtn.textContent = "🔎";
            seeDetailsBtn.className = this.DetailsButtonClassname;
            seeDetailsBtn.addEventListener("click", this.DetailsClicked.bind(this));
            //seeDetailsBtn.addEventListener("mouseover", this.DetailsHovered.bind(this));

            //For pinning etc.
            //seeDetailsBtn.addEventListener()
            BADivHeader.appendChild(seeDetailsBtn);


            i++;
        });

        //BAParentHeaderText.textContent += i;
    }

    private CreateBAParentDiv(): HTMLDivElement {
        const parentDiv = this.debugWindow.document.createElement("div");
        parentDiv.className = this.BAParentDivClassName;
        return parentDiv;
    }
    private DetailsClicked(event: MouseEvent) {
        const button = event.target as HTMLButtonElement;
        const BADiv = button.parentElement?.parentElement as HTMLDivElement;
        const BAParentDiv = BADiv.parentElement as HTMLDivElement;

        var reasonsTexts = "";

        const combatCharacter = this.combatCharacterDivsReverse.get(BAParentDiv.parentElement as HTMLDivElement);
        const index = BADiv ? Array.from(BADiv.parentElement!.children).indexOf(BADiv) : -1;
        const ba = combatCharacter?.EnemyCombatAI.battleActions[index];
        if (ba)

            if (combatCharacter) {
                console.log("Inspecting: " + combatCharacter.Character.ItemName + " | " + ba.BattleMove.MoveName + ": " + ba?.Score);

                for (const [key, value] of ba.ScoringHistory.entries()) {
                    const reasonText = value + ": " + key + "<br>";
                    reasonsTexts += reasonText;
                }

                if (BADiv.children.length > 1) {
                    if (BADiv.children[2].nodeName == "P") {
                        BADiv.children[1].innerHTML = reasonsTexts;
                    }
                }
                else {
                    const reasonsP = this.debugWindow.document.createElement("p");
                    reasonsP.innerHTML = reasonsTexts;
                    BADiv.appendChild(reasonsP);

                }

            }


        // const combatCharacterDiv = button.parentElement?.parentElement?.parentElement as HTMLDivElement;
        // if (combatCharacterDiv) {

        //     const foundEntry = Array.from(this.combatCharacterDivs.entries()).find(
        //         ([_, div]) => div === combatCharacterDiv
        //     );

        //     if (foundEntry) {
        //         const [combatCharacter, div] = foundEntry;
        //         const index = Array.from(BAParentDiv.children).findIndex(
        //             (child) => child === combatCharacterDiv
        //         );

        //         const ba = combatCharacter.EnemyCombatAI.battleActions[index];
        //         console.log("BA: " + ba.BattleMove.MoveName);
        //     }


        // }
    }
    private DetailsHovered(event: MouseEvent) {
        const b = event.target as HTMLButtonElement;
        const combatCharacterDiv = b.parentElement?.parentElement?.parentElement as HTMLDivElement;
        if (combatCharacterDiv) {


            // this.combatCharacterDivs.forEach((value: HTMLDivElement, key: CombatCharacter) => {
            //    if(value == combatCharacterDiv)
            //    {

            //    }

        }

    }
}