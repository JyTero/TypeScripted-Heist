import { CharacterSheet } from "../Character/CharacterSheet";
import { IsDebug } from "../initialisation";
import { WriteAlert, WriteMenu, WriteMenuSelection } from "../IOMethods";
import { SceneObjectBase } from "../SceneObjectBase";
import { BattleArenaScene as BattleArenaSceneBase } from "../BattleArenaSceneBase";
import { BattleArenaData } from "./BattleStageDataType";
import { CharacterBase } from "../Character/CharacterBase";
import { PlayerCharacter } from "../PlayerCharacter";
import { GetRandomInt } from "../../Tools";
import { CombatMenuObject } from "../CombatMenuObject";
import { TargetMenuObject } from "../TargetMenuObject";

export async function BeginBattleEngine(battleData: BattleArenaData, currentScene: BattleArenaSceneBase) {
    const battleStage: BattleEngine = new BattleEngine(battleData, PlayerCharacter, currentScene);
    battleStage.OnEngineStartUp();

    battleStage.OnBattleStartUp();
    //Begin Battle
    WriteAlert("Battle Begins!");
    //Begin rounds
    await battleStage.BattleLoop();
    //Give turns
    //Manage Battle over
    //On
}

//The Battle Stage Engine
class BattleEngine {
    private playerCharacter: CharacterBase;
    private enemyCharacters: CharacterBase[] = [];

    private turnOrder: CharacterBase[] = [];

    private battleData: BattleArenaData;

    private characterInTurn: CharacterBase;
    private currentRound: number = -1;
    private currentTurnIndex: number = -1;
    private battleOver = false;
    private currentScene: BattleArenaSceneBase;
    private nextScene: SceneObjectBase;

    constructor(data: BattleArenaData, playerCharacter: CharacterBase, currentScene: BattleArenaSceneBase) {
        this.playerCharacter = playerCharacter;
        this.battleData = data;
        this.currentScene = currentScene;
        this.nextScene = data.NextScene;
    }
    public OnEngineStartUp() {
        if (IsDebug)
            console.log("On BattleEngine StartUp");
        this.battleData.EnemyCharacterDatas.forEach(enemyCharacter => {
            if (IsDebug)
                console.log("Battle Enemy Character: " + enemyCharacter.Name);
            this.enemyCharacters.push(new CharacterBase(new CharacterSheet(enemyCharacter)));
        });

        this.nextScene = this.currentScene.VictoryNextScene;
    }


    public OnBattleStartUp() {
        //TurnOrder
        this.SetUpTurnOrder();
        this.currentRound = 0;
        this.currentTurnIndex = 0;

    }

    public async BattleLoop() {
        this.OnRoundStart();
        while (!this.battleOver) {
            this.currentTurnIndex++;
            const nextChar = this.GetNextInTurnCharacter();
            if (nextChar == this.characterInTurn) {
                //End round, start new round
                this.EndRound();
                this.OnRoundStart();

            }
            else {
                this.characterInTurn = nextChar;
                await this.StartTurn()
                this.EndTurn();
                if (this.IsCombatOver()) {
                    console.log("End Combat");
                    this.OnBattleEnd();
                }

            }
        }

    }

    private OnRoundStart() {
        this.currentRound++;
        if (IsDebug)
            console.log(`Battle round ${this.currentRound} begins`);
    }
    private async StartTurn() {
        //Very placeholdery and proof of concept-y
        if (IsDebug)
            console.log(`${this.characterInTurn.CharacterSheet.CharacterName} takes turn`);

        if (this.characterInTurn === this.playerCharacter) {
            //Give Control to player
            //Create a menu out of potential moves

            const combatMoveMenu = new CombatMenuObject();
            combatMoveMenu.BuildCombatMoveMenuObject(this.characterInTurn);

            const combatMoveIndex = await combatMoveMenu.HandleMenu();
            const chosenCombatMove = this.characterInTurn.CharacterSheet.BattleMoves[combatMoveIndex-1];
            WriteMenuSelection(`${combatMoveIndex}. ${chosenCombatMove.MoveName}`, combatMoveMenu.allMenuItems[combatMoveIndex-1].MenuItemSelectionDescription);

            const targetMenu = new TargetMenuObject();
            targetMenu.BuildTargetMenuObject(this.turnOrder);

            const targetIndex = await targetMenu.HandleMenu();
            const chosenTarget = targetMenu.allMenuItems[targetIndex-1].MenuItemName;
            WriteMenuSelection(`${targetIndex}. ${chosenTarget}`, targetMenu.allMenuItems[targetIndex-1].MenuItemSelectionDescription);




            if(IsDebug)
                console.log(`${this.characterInTurn.CharacterSheet.CharacterName} takes action ${chosenCombatMove.MoveName} against ${chosenTarget}`)
            chosenCombatMove.ExecuteMove(this.characterInTurn, this.turnOrder[targetMenu.allMenuItems[targetIndex-1].MenuItemNumber-1]);

        }
        else {

            const i = GetRandomInt(0, this.characterInTurn.CharacterSheet.BattleMoves.length-1);
            const chosenMove = this.characterInTurn.CharacterSheet.BattleMoves[i];
            chosenMove.ExecuteMove(this.characterInTurn, this.playerCharacter)

        }
    }
    private EndTurn() {
        if (IsDebug)
            console.log(`${this.characterInTurn.CharacterSheet.CharacterName} ends their turn`);

    }

    private EndRound(){
        this.currentTurnIndex = 0;
    }

    private SetUpTurnOrder() {
        this.enemyCharacters.forEach(enemy => {
            this.turnOrder.push(enemy);
        });
        this.turnOrder.push(this.playerCharacter);
        this.SortTurnOrder();
        if (IsDebug) {
            console.log("Turn order for this combat: ");
            this.turnOrder.forEach(character => {
                console.log(character.CharacterSheet.CharacterName);
            });
        }
    }
    private SortTurnOrder() {
        this.turnOrder.sort((a, b) => b.CharacterSheet.BattleSpeed.Value - a.CharacterSheet.BattleSpeed.Value);
    }

    private GetNextInTurnCharacter(): CharacterBase {
        if (this.currentTurnIndex > this.turnOrder.length)
            return this.turnOrder[this.turnOrder.length - 1];     //If last previous was last turn of the round, reselect lastone again
        else
            return this.turnOrder[this.currentTurnIndex-1];
    }

    private IsCombatOver(): boolean{
        if(this.playerCharacter.CharacterSheet.CurrentHealth() <= 0)
            return true;
        else if(this.AllEnemiesAreDead())
            return true;
        else
            return false;
    }

    private AllEnemiesAreDead():boolean{

        return this.enemyCharacters.every(
            enemy => enemy.CharacterSheet.CurrentHealth() <= 0
        );
    }

    private OnBattleEnd() {

        this.nextScene.SceneMain();
        this.OnEngineDestroy();
    }
    private OnEngineDestroy() {

    }
}
// type BattleCharacter = {
//     Character: CharacterSheetBase;
//     BattleSpeed: number;
//     BattleMoves: BattleMove[];
// }