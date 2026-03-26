import { Delay, RemoveAllHTMLChildren } from "../../Tools";
import { CombatCharacter } from "../BattleSystem/CombatCharacter";
import { BattleAction } from "../BattleSystem/EnemyCombatAI";
import { FrameTimeMS } from "../MainPageInitialisation";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { Trait } from "../Items/Character/Trait";
import { PageElement } from "../UI/PageElement";
import { DebugPageDisplayManagerInstance } from "../DebugPageInitialisation";
import { IsHTMLElement as IsHTMLElement } from "./HTMLHelpers";

//This will be the debug window
export class DebugWindow {
    public UseDebugWindow: boolean;

    private debugWindow: Window;
    // private combatDebug: HTMLElement | null;
    // private combatGeneral: HTMLElement | null;
    // private combatEnemyAI: HTMLElement | null;

    private appRoot: PageElement;
    private combatDebugElement: PageElement;
    private combatGeneral: PageElement;
    private combatEnemyAI: PageElement;
    public async InitializeDebugWindow() {
        if (!this.UseDebugWindow)
            return;

        this.OpenDebugPage();

        const btn = document.createElement("button");
        btn.textContent = "Open debug";

        btn.addEventListener("click", () => {
            this.OpenDebugPage();



        });
        await Delay(FrameTimeMS);

        document.body.appendChild(btn);


        // const debugWindow = window.open(
        //     "", // URL (empty for a blank window)
        //     "DebugWindow", // Window name (for targeting)
        //     "width=600,height=400,left=200,top=200" // Window features
        // );

    }

    private OpenDebugPage() {
        const debugWind = window.open("debugPage.html", "DebugWindow", "width=600,height=400");
        if (debugWind != null) {
            this.debugWindow = debugWind;
        }
        else
            return;

        debugWind.addEventListener("DOMContentLoaded", this.OnPageOpen.bind(this));
    }

    private OnPageOpen() {
        var appHTML: HTMLElement | null = this.debugWindow.document.getElementById("App");
        if (appHTML)
            this.appRoot = new PageElement(appHTML, "DebugApp", DebugPageDisplayManagerInstance);


        var htmlElement: PageElement | null = DebugPageDisplayManagerInstance.FindPageElementByElementId("CombatDebugging");
        if (htmlElement)
            this.combatDebugElement = htmlElement;
        htmlElement = null;

        htmlElement = DebugPageDisplayManagerInstance.FindPageElementByElementId("CombatEnemyAI");
        if (htmlElement)
            this.combatEnemyAI = htmlElement;


        // var htmlElement: HTMLElement | null = this.debugWindow.document.getElementById("CombatDebugging");
        // if (htmlElement)
        //     this.combatDebug = new PageElement(htmlElement, "CombatDebugging", DebugPageDisplayManagerInstance);
        // else
        //     throw console.error("Couldn't find CombatDebugging HTML element");

        // htmlElement = null;
        // htmlElement = this.debugWindow.document.getElementById("CombatGeneral");

        // if (htmlElement)
        //     this.combatGeneral = new PageElement(htmlElement, "CombatGeneral", DebugPageDisplayManagerInstance);
        // else
        //     throw console.error("Couldn't find CombatGeneral HTML element");

        // htmlElement = null;
        // htmlElement = this.debugWindow.document.getElementById("CombatEnemyAI");

        // if (htmlElement)
        //     this.combatEnemyAI = new PageElement(htmlElement, "CombatEnemyAI", DebugPageDisplayManagerInstance);
        // else
        //     throw console.error("Couldn't find CombatEnemyAI HTML element");

    }

    private MakePageElementsFromPreExistingPage() {

    }

    //private combatCharacterDivs: Record<CombatCharacter, HTMLElement> = {};
    private combatCharacterDivs = new Map<CombatCharacter, PageElement>();
    private combatCharacterDivsReverse = new Map<PageElement, CombatCharacter>();

    //COMBAT DEBUG
    public OnCombatBegin(turnOrder: CombatCharacter[]) {
        if (!this.debugWindow)
            return;

        // const header = this.debugWindow.document.createElement("p")
        // header.style.fontWeight = "bold";
        // header.textContent = "BattleEngine";
        // this.combatDebug?.insertBefore(header, this.combatDebug.firstChild);

        const header = new PageElement("p", "CombatBeginHeader", DebugPageDisplayManagerInstance)
        header.SetFontWeight("bold");
        header.SetElementText("BattleEngine");
        this.combatDebugElement.InsertAsFirstChild(header);



        turnOrder.forEach(combatCharacter => {
            // const combatantDiv = this.debugWindow.document.createElement("div");
            // combatantDiv.className = "CombatantDiv";
            // this.combatEnemyAI?.appendChild(combatantDiv);
            const elementName = combatCharacter.Character.ItemName + "CombatDiv";
            const combatantDiv = new PageElement("div", elementName, DebugPageDisplayManagerInstance);
            this.combatEnemyAI.AppendChild(combatantDiv);

            // const divHeader = this.debugWindow.document.createElement("h1");
            // divHeader.textContent = combatCharacter.Character.ItemName;
            // combatantDiv.appendChild(divHeader);
            const divHeader = new PageElement("h1", combatCharacter.Character.ItemName + "CombatDivHeader", DebugPageDisplayManagerInstance);
            divHeader.SetElementText(combatCharacter.Character.ItemName);
            combatantDiv.AppendChild(divHeader);

            this.combatCharacterDivs.set(combatCharacter, combatantDiv);
            this.combatCharacterDivsReverse.set(combatantDiv, combatCharacter);
        });

    }

    public ChooseBattleActionDebug(thisCharacter: CharacterBase, bas: BattleAction[]) {

        this.combatCharacterDivs.forEach((value: PageElement, key: CombatCharacter) => {
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

    private BAParentPEIDSuffix: string = "BAParent";

    //This fucks up the debug layout
    private ChooseBattleActionDebugProper(thisCombatCharacter: CombatCharacter, combatantPageElement: PageElement, BAs: BattleAction[]) {
        if (!this.debugWindow)
            return;
        if (!IsHTMLElement(combatantPageElement.Element)) {
            throw console.error(`Invalid HTML element given as a div for ${thisCombatCharacter.Character.ItemName} (HTML details: ${combatantPageElement.Element}|${(combatantPageElement.Element as HTMLElement).textContent})`);
        }
        //Create BAParent Div
        // var BAParentElement: PageElement = combatantPageElement.ElementParent;
        // //var BAParentDiv = thisDiv.getElementsByClassName(this.BAParentDivClassName)[0];

        // if (!BAParentElement) {
        //     BAParentElement = this.CreateBAParentDiv();
        //     combatantPageElement.AppendChild(BAParentElement);
        // }
        // else {
        //     RemoveAllHTMLChildren(BAParentElement.Element);
        // }

        var BAParentPE: PageElement | null = DebugPageDisplayManagerInstance.FindPageElementByElementId(thisCombatCharacter.Character.ItemName + "BAParent")

        if (BAParentPE == null) {
            BAParentPE = new PageElement("div", thisCombatCharacter.Character.ItemName + "BAParent", DebugPageDisplayManagerInstance);
            BAParentPE.Element.className = this.BAParentDivClassName;
            combatantPageElement.AppendChild(BAParentPE);

        }
        else
            RemoveAllHTMLChildren(BAParentPE.Element);
        // const BAParentHeaderText = this.debugWindow.document.createElement("p");
        // BAParentHeaderText.textContent = "BAs: ";
        // thisDiv.appendChild(BAParentHeaderText);
        var i = 0;

        console.log(`BAParent id: ${BAParentPE.Id}`);
        // return;
        BAs.forEach(ba => {
            //Code
            const BAPageElement = new PageElement("div", ba.BattleMove.MoveName, DebugPageDisplayManagerInstance);
            BAPageElement.Element.className = this.BADivClassName;
            BAParentPE!.AppendChild(BAPageElement)

            //BADivHeader
            const BAHeaderPE = new PageElement("div", ba.BattleMove.MoveName + "Header", DebugPageDisplayManagerInstance);
            BAHeaderPE.Element.className = this.BADivHeaderClassName;
            BAPageElement.AppendChild(BAHeaderPE);

            //Texti
            const BAName = new PageElement("p", "BAName", DebugPageDisplayManagerInstance);
            BAName.Element.textContent = ba.Score + ": " + ba.BattleMove.MoveName + " (" + ba.ActionTarget.Character.ItemName + ")";
            BAHeaderPE.AppendChild(BAName);

            //Button
            const seeDetailsBtn = new PageElement("button", ba.BattleMove.MoveName + "DetailsButton", DebugPageDisplayManagerInstance);
            seeDetailsBtn.Element.textContent = "🔎";
            seeDetailsBtn.Element.className = this.DetailsButtonClassname;
            seeDetailsBtn.Element.addEventListener("click", this.DetailsClicked.bind(this));
            //seeDetailsBtn.addEventListener("mouseover", this.DetailsHovered.bind(this));

            //For pinning etc.
            //seeDetailsBtn.addEventListener()
            BAHeaderPE.AppendChild(seeDetailsBtn);


            i++;
        });


        //BAParentHeaderText.textContent += i;
    }

    private CreateBAParentDiv(): PageElement {
        const parentDiv = new PageElement("div", "BAParent", DebugPageDisplayManagerInstance);
        parentDiv.Element.className = this.BAParentDivClassName;
        return parentDiv;
    }
    private DetailsClicked(event: MouseEvent) {

        const buton = event.target as HTMLButtonElement;
        const BADiv = buton.parentElement?.parentElement as HTMLDivElement;
        const BAParentDiv = BADiv.parentElement as HTMLDivElement;

        DebugPageDisplayManagerInstance.PrintAllElmentsDEBUG(); //Undefined IDs

        //const button = DebugPageDisplayManagerInstance.FindPageElementByElementId(buton.id);
        //How to find the PageElement this HTML Button is tied to?

        const buttonPageElement = DebugPageDisplayManagerInstance.FindPageElementByElementId(buton!.id);
        const BAPageElement = DebugPageDisplayManagerInstance.FindPageElementByElementId(BADiv!.id);
        const BAParentPageElement = DebugPageDisplayManagerInstance.FindPageElementByElementId(BAParentDiv!.id);

        if (!BAParentPageElement)
            return;
        var reasonsTexts = "";

        const combatCharacter = this.combatCharacterDivsReverse.get(BAParentPageElement.ElementParent);
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