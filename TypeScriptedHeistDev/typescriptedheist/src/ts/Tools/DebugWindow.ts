import { Delay, RemoveAllHTMLChildren } from "../../Tools";
import { CombatCharacter } from "../BattleSystem/CombatCharacter";
import { BattleAction } from "../BattleSystem/EnemyCombatAI";
import { FrameTimeMS, InitialisationManager } from "../MainPageInitialisation";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { Trait } from "../Items/Character/Trait";
import { PageElement } from "../UI/PageElement";
import { DebugWindowInstance } from "../DebugPageInitialisation";
import { IsHTMLElement as IsHTMLElement } from "./HTMLHelpers";
import { SubWindow } from "./SubWindow";
import { SceneBase } from "../Scenes/SceneBase";

//This will be the debug window
export class DebugWindow extends SubWindow {
    public UseDebugWindow: boolean;


    //private combatCharacterDivs: Record<CombatCharacter, HTMLElement> = {};
    private combatCharacterDivs = new Map<CombatCharacter, PageElement>();
    private combatCharacterDivsReverse = new Map<PageElement, CombatCharacter>();
    private combatDebugElement: PageElement;
    private combatGeneralPE: PageElement;
    private combatEnemyAIPE: PageElement;

    private SceneDebugParentPE: PageElement;
    private sceneMenuItemsDebugPE: PageElement;
    private sceneDebugHeaderPE: PageElement;
    private sceneMenuItemsDebugHeaderPE: PageElement;
    constructor() {
        super("Debug", "debugPage");
    }
    public async InitializeDebugWindow() {
        if (!this.UseDebugWindow)
            return;

        this.OpenSubWindow();
    }

    private combatDebugDivID: string = "CombatDebug";
    private combatAIDebugDivID: string = "CombatEnemyAI";
    private sceneDebugParentDivID: string = "SceneDebug";
    private sceneMenuItemsDebugID: string = "SceneMenuItemsDebug";
    private sceneDebugHeaderID: string = "SceneDebugHeader";


    protected override IndividualOnPageOpen() {
        var htmlElement: PageElement | null = this.PDM.FindPageElementByElementId(this.combatDebugDivID);
        if (htmlElement)
            this.combatDebugElement = htmlElement;
        htmlElement = null;

        htmlElement = this.PDM.FindPageElementByElementId(this.combatAIDebugDivID);
        if (htmlElement)
            this.combatEnemyAIPE = htmlElement;
        htmlElement = null;

        htmlElement = this.PDM.FindPageElementByElementId(this.sceneDebugParentDivID);
        if (htmlElement)
            this.SceneDebugParentPE = htmlElement;
        htmlElement = null;

        htmlElement = this.PDM.FindPageElementByElementId(this.sceneMenuItemsDebugID);
        if (htmlElement)
            this.sceneMenuItemsDebugPE = htmlElement;
        htmlElement = null;

        htmlElement = this.PDM.FindPageElementByElementId(this.sceneDebugHeaderID);
        if (htmlElement)
            this.sceneDebugHeaderPE = htmlElement;
        htmlElement = null;

        InitialisationManager.UIReady(InitialisationManager.DebugWindowReady);
        //InitialisationManager.DebugWindowReady = true;
    }



    //SCENE DEBUG§§
    public OnSceneOpen(scene: SceneBase) {
        this.sceneDebugHeaderPE.Element.textContent = `${scene.SceneName}`;
        this.sceneMenuItemsDebugPE.DestroyAllChildren();


    }

    private numberOfInvalidMenuItems: number = 0;


    public InvalidSceneMenuItem() {
        if (this.numberOfInvalidMenuItems == 0) {
            this.sceneMenuItemsDebugHeaderPE = this.PDM.CreateNewPageElement("h3", "sceneMenuItemsDebugHeader");
            this.sceneMenuItemsDebugHeaderPE.Element.textContent = `Invalid menu items ${this.numberOfInvalidMenuItems}`
            this.sceneMenuItemsDebugPE.AppendChild(this.sceneMenuItemsDebugHeaderPE);
        }

    }
    //COMBAT DEBUG
    public OnCombatBegin(turnOrder: CombatCharacter[]) {
        if (!this.window)
            return;

        // const header = this.debugWindow.document.createElement("p")
        // header.style.fontWeight = "bold";
        // header.textContent = "BattleEngine";
        // this.combatDebug?.insertBefore(header, this.combatDebug.firstChild);

        const header = this.PDM.CreateNewPageElement("p", "CombatBeginHeader");
        header.SetFontWeight("bold");
        header.SetElementText("BattleEngine");
        this.combatDebugElement.InsertAsFirstChild(header);



        turnOrder.forEach(combatCharacter => {
            // const combatantDiv = this.debugWindow.document.createElement("div");
            // combatantDiv.className = "CombatantDiv";
            // this.combatEnemyAI?.appendChild(combatantDiv);
            const elementName = combatCharacter.Character.ItemName + "CombatDiv";
            const combatantDiv = this.PDM.CreateNewPageElement("div", elementName);
            this.combatEnemyAIPE.AppendChild(combatantDiv);

            // const divHeader = this.debugWindow.document.createElement("h1");
            // divHeader.textContent = combatCharacter.Character.ItemName;
            // combatantDiv.appendChild(divHeader);
            const divHeader = this.PDM.CreateNewPageElement("h1", combatCharacter.Character.ItemName + "CombatDivHeader");
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

    private ChooseBattleActionDebugProper(thisCombatCharacter: CombatCharacter, combatantPageElement: PageElement, BAs: BattleAction[]) {
        if (!this.window)
            return;
        if (!IsHTMLElement(combatantPageElement.Element)) {
            throw console.error(`Invalid HTML element given as a div for ${thisCombatCharacter.Character.ItemName} (HTML details: ${combatantPageElement.Element}|${(combatantPageElement.Element as HTMLElement).textContent})`);
        }

        var BAParentPE: PageElement | null = this.PDM.FindPageElementByElementId(thisCombatCharacter.Character.ItemName + "BAParent")

        if (BAParentPE == null) {
            BAParentPE = this.PDM.CreateNewPageElement("div", thisCombatCharacter.Character.ItemName + "BAParent");
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
            const BAPageElement = this.PDM.CreateNewPageElement("div", ba.BattleMove.MoveName);
            BAPageElement.Element.className = this.BADivClassName;
            BAParentPE!.AppendChild(BAPageElement)

            //BADivHeader
            const BAHeaderPE = this.PDM.CreateNewPageElement("div", ba.BattleMove.MoveName + "Header");
            BAHeaderPE.Element.className = this.BADivHeaderClassName;
            BAPageElement.AppendChild(BAHeaderPE);

            //Texti
            const BAName = this.PDM.CreateNewPageElement("p", "BAName");
            BAName.Element.textContent = ba.Score + ": " + ba.BattleMove.MoveName + " (" + ba.ActionTarget.Character.ItemName + ")";
            BAHeaderPE.AppendChild(BAName);

            //Button
            const seeDetailsBtn = this.PDM.CreateNewPageElement("button", ba.BattleMove.MoveName + "DetailsButton");
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

    private DetailsClicked(event: MouseEvent) {

        const buton = event.target as HTMLButtonElement;
        const BADiv = buton.parentElement?.parentElement as HTMLDivElement;
        const BAParentDiv = BADiv.parentElement as HTMLDivElement;

        this.PDM.PrintAllElmentsDEBUG(); //Undefined IDs

        //const button = DebugPageDisplayManagerInstance.FindPageElementByElementId(buton.id);
        //How to find the PageElement this HTML Button is tied to?

        const buttonPageElement = this.PDM.FindPageElementByElementId(buton!.id);
        const BAPageElement = this.PDM.FindPageElementByElementId(BADiv!.id);
        const BAParentPageElement = this.PDM.FindPageElementByElementId(BAParentDiv!.id);

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
                    const reasonsP = this.window.document.createElement("p");
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