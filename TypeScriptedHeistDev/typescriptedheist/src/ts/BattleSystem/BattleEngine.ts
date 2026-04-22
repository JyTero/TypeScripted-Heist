import { AlertManagerInstance, CanvasGraphicsInstance, FCE, FlagManager, FrameTimeMS, IsDebug, SceneManagerInstance } from "../MainPageInitialisation";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { Delay } from "../../Tools";
import { CombatMenuObject } from "../CombatMenuObject";
import { TargetMenuObject } from "../TargetMenuObject";
import { BattleArenaDataType } from "../DataTypes/BattleArenaDataType";
import { BuildCharacter } from "../JsonInput/DataToObjectBuilders";
import { PlayerCharacter } from "../PlayerCharacter";
import { AlertGroupType, AlertManager } from "../AlertManager";
import { CombatCharacter } from "./CombatCharacter";
import { BattleAction, EnemyCombatAI } from "./EnemyCombatAI";
import { PersoanlityAxisEnumH } from "../../Assets/PersonalityAxisEnumHandmade";
import { PersonalityAxis } from "../Items/Character/PersonalityAxis";
import { TraitsEnumH } from "../../Assets/TraitsEnumHandmade";
import { ScenesEnumHandmade } from "../../Assets/OldScenesEnumHandMade";
import { CombatScene } from "../Scenes/CombatScene";
import { SceneBase } from "../Scenes/SceneBase";
import { CombatSceneData, SceneBaseData } from "../DataTypes/SceneDataType";
import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { DebugWindowInstance } from "../DebugPageInitialisation";
import { Flag } from "../flags";
import { FunctionalityComponent } from "../FunctionalityComponentEngine";

export async function BeginBattleEngine(sceneData: CombatSceneData, currentScene: CombatScene) {
    const battleStage: BattleEngine = new BattleEngine(sceneData, PlayerCharacter.instance.GetPlayerCharacter(), currentScene);
    await battleStage.OnEngineStartUp();

    battleStage.OnBattleStartUp();
    //Begin Battle
    //await WriteAlertStorePrevious("Battle Begins!");
    await AlertManagerInstance.WriteAlertStorePrevious("Battle Begins!",[]);
    //Begin rounds
    await battleStage.BattleLoop();

}

//The Battle Stage Engine
class BattleEngine {
    private playerCharacter: CharacterBase;
    private enemyCharacters: CharacterBase[] = [];

    private turnOrder: CombatCharacter[] = [];

    private battleData: BattleArenaDataType;

    private characterInTurn: CombatCharacter;
    private currentRound: number = -1;
    private currentTurnIndex: number = -1;
    private battleOver = false;
    private currentScene: CombatScene;
    private nextSceneVictory: ScenesEnumHandmade;
    private flagsToChangeVictory: Flag[];
    private victoryFCs: FunctionalityComponent[];
    private nextSceneLoss: ScenesEnumHandmade;
    private flagsToChangeLoss: Flag[]
    private lossFCs: FunctionalityComponent[];
    private previousScene: SceneBase;

    private xPos: number = 5;
    private yPos: number = 10;
    private xScale: number = 10;
    private yScale: number = 10;

    constructor(sceneData: CombatSceneData, playerCharacter: CharacterBase, currentScene: CombatScene) {
        this.playerCharacter = playerCharacter;
        this.battleData = sceneData.battleArenaData;
        this.currentScene = currentScene;
        this.nextSceneVictory = sceneData.combatVictoryNextScene;
        this.flagsToChangeVictory = sceneData.combatVictoryFlagsToChange;
        this.nextSceneLoss = sceneData.combatLossNextScene;
        this.flagsToChangeLoss = sceneData.combatLossFlagsToChange;
        this.victoryFCs = FCE.BuildFunctionalityComponents(`${this.currentScene.SceneName}battle`, sceneData.victoryFCs, sceneData.vicotryFCData);
        this.lossFCs = FCE.BuildFunctionalityComponents(`${this.currentScene.SceneName}battle`, sceneData.lossFCs, sceneData.lossFCData);

    }
    public async OnEngineStartUp() {
        if (IsDebug)
            console.log("On BattleEngine StartUp");
        this.battleData.EnemyCharacterDatas.forEach(enemyCharacterData => {
            var enemChar = BuildCharacter(enemyCharacterData);
            if (IsDebug)
                console.log("Battle Enemy Character: " + enemChar.ItemName);
            this.enemyCharacters.push(enemChar);

            //DEBUG
            this.GiveCharacterAgressivinessAxis(enemChar);

        });

        await this.WaitSpritesToLoad();


        // await Delay(FrameTimeMS);

    }

    //DEBUG
    private GiveCharacterAgressivinessAxis(character: CharacterBase) {
        const axis = new PersonalityAxis("Aggressiveness", 0.2, PersoanlityAxisEnumH.Aggressiveness, character)
    }

    public OnBattleStartUp() {
        //TurnOrder

        this.SetUpTurnOrder();
        this.SetUpSprites();
        this.SetUpEnemyAI();
        this.currentRound = 0;
        this.currentTurnIndex = 0;

        this.InsertFeaturesToGameDebug();
        if (IsDebug)
            DebugWindowInstance.OnCombatBegin(this.turnOrder)
    }

    private InsertFeaturesToGameDebug() {
        this.enemyCharacters.forEach(enemy => {
            if (enemy.ItemName == "Henrique")
                enemy.AddTrait(TraitsEnumH.Healer);
        });
    }

    private SetUpEnemyAI() {
        //Loop though all
        for (const combatCharacter of this.turnOrder) {
            if (combatCharacter.Character == this.playerCharacter)
                continue;
            const combatAI = new EnemyCombatAI(combatCharacter.Character);
            combatCharacter.EnemyCombatAI = combatAI;
            combatAI.SetUpBattleActions(this.turnOrder, combatCharacter.Character.CharacterSheet.BattleMoves);
        }
    }

    public async BattleLoop() {

        while (!this.battleOver) {
            if (this.currentRound == 0) {
                const allCharactersReady = this.enemyCharacters.every(character => character.ItemLoadingReady === true)
                if (allCharactersReady) {
                    this.OnRoundStart();
                }
                else {
                    await Delay(FrameTimeMS);
                    continue;
                }
            }
            else {

                this.currentTurnIndex++;
                const nextChar = this.GetNextInTurnCharacter();
                if (nextChar == this.characterInTurn) {
                    //End round, start new round
                    await this.EndRound();
                    this.OnRoundStart();
                }
                else {
                    this.characterInTurn = nextChar;
                    await this.StartTurn()
                    this.EndTurn();
                    if (this.IsCombatOver()) {
                        console.log("End Combat");
                        if (this.playerCharacter.GetStat(CharcterStatTypeEnum.Health)!.Value <= 0)
                            this.OnBattleEnd(false);    //t/f if the player won
                        else
                            this.OnBattleEnd(true);
                    }
                }
            }
            await Delay(FrameTimeMS);
        }
    }

    private OnRoundStart() {
        this.currentRound++;
        if (IsDebug)
            console.log(`Battle round ${this.currentRound} begins`);
    }
    //Very placeholdery and proof of concept-y
    private async StartTurn() {
        if (IsDebug)
            console.log(`${this.characterInTurn.Character.ItemName} takes turn`);

        AlertManagerInstance.CreateAlertGroup(`${this.characterInTurn.Character.ItemName} combat turn`, AlertGroupType.CombatTurn);

        AlertManagerInstance.AddAlertToGroup(`${this.characterInTurn.Character.ItemName} takes turn!`, AlertGroupType.CombatTurn);

        this.characterInTurn.Character.RunOnceTurnEffects();

        //await WriteAlertStorePrevious(`${this.characterInTurn.ItemName} takes turn!`);

        if (this.characterInTurn.Character === this.playerCharacter) {
            //Give Control to player
            //Create a menu out of potential moves

            const combatMoveMenu = new CombatMenuObject();
            combatMoveMenu.BuildCombatMoveMenuObject(this.characterInTurn.Character);

            const combatMoveIndex = await combatMoveMenu.HandleMenu();
            const chosenCombatMove = this.characterInTurn.Character.CharacterSheet.BattleMoves[combatMoveIndex - 1];
            // WriteMenuSelection(combatMoveMenu.allMenuItems[combatMoveIndex-1].MenuItemSelectionDescription);

            const targetMenu = new TargetMenuObject();
            targetMenu.BuildTargetMenuObject(this.turnOrder);

            const targetIndex = await targetMenu.HandleMenu();
            const chosenTarget: string = targetMenu.allMenuItems[targetIndex - 1].MenuItemName;
            const chosenTargetCombatCharacter: CombatCharacter = this.turnOrder[targetMenu.allMenuItems[targetIndex - 1].MenuItemNumber - 1];
            // WriteMenuSelection(targetMenu.allMenuItems[targetIndex-1].MenuItemSelectionDescription);

            if (IsDebug)
                console.log(`${this.characterInTurn.Character.ItemName} takes action ${chosenCombatMove.MoveName} against ${chosenTarget}`)

            AlertManagerInstance.AddAlertToGroup(`${this.characterInTurn.Character.ItemName} takes action ${chosenCombatMove.MoveName} against ${chosenTargetCombatCharacter.Character.ItemName}`, AlertGroupType.CombatTurn);
            //WriteAlert(`${this.characterInTurn.ItemName} takes action ${chosenCombatMove.MoveName} against ${chosenTargetCharacter.ItemName}`);
            chosenCombatMove.ExecuteMove(this.characterInTurn.Character, chosenTargetCombatCharacter.Character);

            //OnCharacterDeath
            if (chosenTargetCombatCharacter.Character.Health.Value <= 0) {
                CanvasGraphicsInstance.RemoveSpriteFromList(chosenTargetCombatCharacter.Character.ItemSprite);
                //Remove from turn order
                const i = this.turnOrder.indexOf(chosenTargetCombatCharacter);
                this.turnOrder.splice(i, 1);
            }

        }
        else {

            this.characterInTurn.EnemyCombatAI.BeginTurn();
            const chosenBattleAction: BattleAction = this.characterInTurn.EnemyCombatAI.ChooseBattleAction();

            // //OLD: Pick random BattleMove, always target the player
            // const i = GetRandomInt(0, this.characterInTurn.Character.CharacterSheet.BattleMoves.length - 1);
            // const chosenMove = this.characterInTurn.Character.CharacterSheet.BattleMoves[i];
            AlertManagerInstance.AddAlertToGroup(`${this.characterInTurn.Character.ItemName} takes action ${chosenBattleAction.BattleMove.MoveName} against ${this.playerCharacter.ItemName}`, AlertGroupType.CombatTurn);
            // //await WriteAlertStorePrevious(`${this.characterInTurn.ItemName} takes action ${chosenMove.MoveName} against ${this.playerCharacter.ItemName}`);
            chosenBattleAction.BattleMove.ExecuteMove(this.characterInTurn.Character, chosenBattleAction.ActionTarget.Character);

        }

    }

    private EnemyTurn() {

    }

    private EndTurn() {
        if (IsDebug)
            console.log(`${this.characterInTurn.Character.ItemName} ends their turn`);
        AlertManagerInstance.AddAlertToGroup(`${this.characterInTurn.Character.ItemName} ends their turn`, AlertGroupType.CombatTurn);
        AlertManagerInstance.PrintGroup(AlertGroupType.CombatTurn);

    }

    private async EndRound() {
        this.currentTurnIndex = 0;
        var hpString = "";
        //Show all Hp, placeholder here
        this.turnOrder.forEach(combatCharacter => {
            hpString += `${combatCharacter.Character.ItemName} has ${combatCharacter.Character.Health.Value}hp\n`;
            hpString += "<br>";
        });
        await AlertManagerInstance.WriteAlertStorePrevious(hpString,[]);
    }

    private SetUpTurnOrder() {
        this.enemyCharacters.forEach(enemy => {
            const combatCharacter = new CombatCharacter(enemy)
            this.turnOrder.push(combatCharacter);
        });
        const combatCharacter = new CombatCharacter(this.playerCharacter);
        this.turnOrder.push(combatCharacter);
        this.SortTurnOrder();
        if (IsDebug) {
            console.log("Turn order for this combat: ");
            this.turnOrder.forEach(character => {
                console.log(character.Character.ItemName);
            });
        }
    }
    private SortTurnOrder() {
        this.turnOrder.sort((a, b) => b.Character.CharacterSheet.BattleSpeed.Value - a.Character.CharacterSheet.BattleSpeed.Value);
    }

    private async WaitSpritesToLoad() {
        //Hold and wait untill all sprites have been loaded
        var spritesReady = false;

        while (!spritesReady) {
            await Delay(FrameTimeMS);
            //Check all
            for (var enemyCharacter of this.enemyCharacters) {
                if (!enemyCharacter.ItemLoadingReady)
                    break;
                if (this.enemyCharacters.indexOf(enemyCharacter) == this.enemyCharacters.length - 1) {
                    if (this.playerCharacter.ItemLoadingReady)
                        spritesReady = true;
                }
            }
        }
    }

    private SetUpSprites() {


        this.playerCharacter.ItemSprite;
        this.playerCharacter.ItemSprite.SetSpritePosScaleDataValues(5, 60, 10, 10);
        CanvasGraphicsInstance.AddSpriteToListPreComp(this.playerCharacter.ItemSprite);

        //Give enemy sprite its x/y pos and x/y scale

        this.enemyCharacters.forEach(enemy => {
            enemy.ItemSprite.SetSpritePosScaleDataValues(this.xPos, this.yPos, this.xScale, this.yScale);
            this.xPos = this.xPos + 10
            CanvasGraphicsInstance.AddSpriteToListPreComp(enemy.ItemSprite);
        });

    }

    private GetNextInTurnCharacter(): CombatCharacter {
        if (this.currentTurnIndex > this.turnOrder.length)
            return this.turnOrder[this.turnOrder.length - 1];     //If  previous was last turn of the round, reselect last one again
        else
            return this.turnOrder[this.currentTurnIndex - 1];
    }

    private IsCombatOver(): boolean {
        if (this.playerCharacter.Health.Value <= 0)
            return true;
        else if (this.AllEnemiesAreDead())
            return true;
        else
            return false;
    }


    private AllEnemiesAreDead(): boolean {

        return this.enemyCharacters.every(
            enemy => enemy.Health.Value <= 0
        );
    }

    private OnBattleEnd(playerWon: boolean) {
        this.battleOver = true;
        //this.nextScene.SceneMain();

        if (playerWon) {
            AlertManagerInstance.WriteAlertStorePrevious("Player won the battle ended",[]);
            this.AdjustFlags(this.flagsToChangeVictory);
            FCE.RunFunctionalityComponents(this.victoryFCs, this.currentScene);
            SceneManagerInstance.HandleNextScene(this.currentScene, this.nextSceneVictory);
        }
        else {
            AlertManagerInstance.WriteAlertStorePrevious("Player lost the battle ended",[]);
            this.AdjustFlags(this.flagsToChangeLoss);
            FCE.RunFunctionalityComponents(this.lossFCs, this.currentScene);
            SceneManagerInstance.HandleNextScene(this.currentScene, this.nextSceneLoss);
        }
        this.OnEngineDestroy();
    }

    private AdjustFlags(flags: Flag[]) {
        for (var fc of flags) {
            FlagManager.ChangeFlagValue(fc)
        }
    }
    private async OnEngineDestroy() {

    }
}