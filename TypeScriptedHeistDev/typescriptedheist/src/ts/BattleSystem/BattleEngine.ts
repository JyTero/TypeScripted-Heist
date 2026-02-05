import { CanvasGraphicsInstance, FrameTimeMS, IsDebug, SceneManagerInstance } from "../initialisation";
import { SceneBase } from "../SceneBase";
import { BattleArenaScene as BattleArenaSceneBase } from "../BattleArenaSceneBase";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { Delay, GetRandomInt } from "../../Tools";
import { CombatMenuObject } from "../CombatMenuObject";
import { TargetMenuObject } from "../TargetMenuObject";
import { BattleArenaDataType } from "../DataTypes/BattleArenaDataType";
import { WeaponEnum } from "../../Assets/DataJsons/WeaponEnum";
import { BuildCharacter } from "../JsonInput/DataToObjectBuilders";
import { CharacterEnum } from "../../Assets/DataJsons/CharacterEnum";
import { PlayerCharacter } from "../PlayerCharacter";
import { SceneManagement } from "../Scenes/SceneManagement";
import { AlertGroup, AlertGroupType, AlertManager } from "../AlertManager";

export async function BeginBattleEngine(battleData: BattleArenaDataType, currentScene: BattleArenaSceneBase) {
    const battleStage: BattleEngine = new BattleEngine(battleData, PlayerCharacter.instance.GetPlayerCharacter(), currentScene);
    await battleStage.OnEngineStartUp();

    battleStage.OnBattleStartUp();
    //Begin Battle
    //await WriteAlertStorePrevious("Battle Begins!");
    await AlertManager.Instance.WriteAlertStorePrevious("Battle Begins!");
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

    private battleData: BattleArenaDataType;

    private characterInTurn: CharacterBase;
    private currentRound: number = -1;
    private currentTurnIndex: number = -1;
    private battleOver = false;
    private currentScene: BattleArenaSceneBase;
    private nextScene: SceneBase;

    private xPos: number = 5;
    private yPos: number = 10;
    private xScale: number = 10;
    private yScale: number = 10;

    constructor(data: BattleArenaDataType, playerCharacter: CharacterBase, currentScene: BattleArenaSceneBase) {
        this.playerCharacter = playerCharacter;
        this.battleData = data;
        this.currentScene = currentScene;
        this.nextScene = data.NextScene;
    }
    public async OnEngineStartUp() {
        if (IsDebug)
            console.log("On BattleEngine StartUp");
        this.battleData.EnemyCharacterDatas.forEach(enemyCharacterData => {
            var enemChar = BuildCharacter(enemyCharacterData);
            if (IsDebug)
                console.log("Battle Enemy Character: " + enemChar.ItemName);
            this.enemyCharacters.push(enemChar);
            //enemChar.CharacterSheet.ChangeWeaponEnm(WeaponEnum.Weapon_ForcedHitter);

        });

        //DEBUG
        //var enemChar = BuildCharacter(CharacterEnum.Character_Svoordmän);
        // this.enemyCharacters.push(enemChar);
        //enemChar.CharacterSheet.ChangeWeapon(WeaponEnum.Weapon_ShortSword);

        this.nextScene = this.currentScene.VictoryNextScene;
        await Delay(FrameTimeMS);

    }


    public OnBattleStartUp() {
        //TurnOrder

        this.SetUpTurnOrder();
        this.SetUpSprites();
        this.currentRound = 0;
        this.currentTurnIndex = 0;
    }

    public async BattleLoop() {

        while (!this.battleOver) {
            if (this.currentRound == 0) {
                const allCharactersReady = this.enemyCharacters.every(character => character.CharacterLoadingReady === true)
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
                        this.OnBattleEnd();
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
            console.log(`${this.characterInTurn.ItemName} takes turn`);

        AlertManager.Instance.CreateAlertGroup(`${this.characterInTurn.ItemName} combat turn`, AlertGroupType.CombatTurn);

        AlertManager.Instance.AddAlertToGroup(`${this.characterInTurn.ItemName} takes turn!`, AlertGroupType.CombatTurn);

        //await WriteAlertStorePrevious(`${this.characterInTurn.ItemName} takes turn!`);

        if (this.characterInTurn === this.playerCharacter) {
            //Give Control to player
            //Create a menu out of potential moves

            const combatMoveMenu = new CombatMenuObject();
            combatMoveMenu.BuildCombatMoveMenuObject(this.characterInTurn);

            const combatMoveIndex = await combatMoveMenu.HandleMenu();
            const chosenCombatMove = this.characterInTurn.CharacterSheet.BattleMoves[combatMoveIndex - 1];
            // WriteMenuSelection(combatMoveMenu.allMenuItems[combatMoveIndex-1].MenuItemSelectionDescription);

            const targetMenu = new TargetMenuObject();
            targetMenu.BuildTargetMenuObject(this.turnOrder);

            const targetIndex = await targetMenu.HandleMenu();
            const chosenTarget: string = targetMenu.allMenuItems[targetIndex - 1].MenuItemName;
            const chosenTargetCharacter: CharacterBase = this.turnOrder[targetMenu.allMenuItems[targetIndex - 1].MenuItemNumber - 1];
            // WriteMenuSelection(targetMenu.allMenuItems[targetIndex-1].MenuItemSelectionDescription);

            if (IsDebug)
                console.log(`${this.characterInTurn.ItemName} takes action ${chosenCombatMove.MoveName} against ${chosenTarget}`)

            AlertManager.Instance.AddAlertToGroup(`${this.characterInTurn.ItemName} takes action ${chosenCombatMove.MoveName} against ${chosenTargetCharacter.ItemName}`, AlertGroupType.CombatTurn);
            //WriteAlert(`${this.characterInTurn.ItemName} takes action ${chosenCombatMove.MoveName} against ${chosenTargetCharacter.ItemName}`);
            chosenCombatMove.ExecuteMove(this.characterInTurn, chosenTargetCharacter);

            //OnCharacterDeath
            if (chosenTargetCharacter.Health.Value <= 0) {
                CanvasGraphicsInstance.RemoveSpriteFromList(chosenTargetCharacter.CharacterSprite);
                //Remove from turn order
                const i = this.turnOrder.indexOf(chosenTargetCharacter);
                this.turnOrder.splice(i, 1);
            }

        }
        else {
            this.characterInTurn.RunOnceTurnEffects();

            const i = GetRandomInt(0, this.characterInTurn.CharacterSheet.BattleMoves.length - 1);
            const chosenMove = this.characterInTurn.CharacterSheet.BattleMoves[i];
            AlertManager.Instance.AddAlertToGroup(`${this.characterInTurn.ItemName} takes action ${chosenMove.MoveName} against ${this.playerCharacter.ItemName}`, AlertGroupType.CombatTurn);
            //await WriteAlertStorePrevious(`${this.characterInTurn.ItemName} takes action ${chosenMove.MoveName} against ${this.playerCharacter.ItemName}`);
            chosenMove.ExecuteMove(this.characterInTurn, this.playerCharacter);

        }

    }
    private EndTurn() {
        if (IsDebug)
            console.log(`${this.characterInTurn.ItemName} ends their turn`);
        AlertManager.Instance.AddAlertToGroup(`${this.characterInTurn.ItemName} ends their turn`, AlertGroupType.CombatTurn);
        AlertManager.Instance.PrintGroup(AlertGroupType.CombatTurn);

    }

    private async EndRound() {
        this.currentTurnIndex = 0;
        var hpString = "";
        //Show all Hp, placeholder here
        this.turnOrder.forEach(character => {
            hpString += `${character.ItemName} has ${character.Health.Value}hp\n`;
            hpString += "<br>";
        });
        await AlertManager.Instance.WriteAlertStorePrevious(hpString);
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
                console.log(character.ItemName);
            });
        }
    }
    private SortTurnOrder() {
        this.turnOrder.sort((a, b) => b.CharacterSheet.BattleSpeed.Value - a.CharacterSheet.BattleSpeed.Value);
    }

    private SetUpSprites() {
        this.playerCharacter.CharacterSprite;
        this.playerCharacter.CharacterSprite.SetSpritePosScaleDataValues(5, 60, 10, 10);
        CanvasGraphicsInstance.AddSpriteToListPreComp(this.playerCharacter.CharacterSprite);

        //Give enemy sprite its x/y pos and x/y scale

        this.enemyCharacters.forEach(enemy => {
            enemy.CharacterSprite.SetSpritePosScaleDataValues(this.xPos, this.yPos, this.xScale, this.yScale);
            this.xPos = this.xPos + 10
            CanvasGraphicsInstance.AddSpriteToListPreComp(enemy.CharacterSprite);
        });

    }

    private GetNextInTurnCharacter(): CharacterBase {
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

    private OnBattleEnd() {
        this.battleOver = true;
        //this.nextScene.SceneMain();
        this.OnEngineDestroy();
        SceneManagerInstance.HandleNextScene(this.currentScene, this.nextScene);
    }
    private async OnEngineDestroy() {
        await AlertManager.Instance.WriteAlertStorePrevious("Battle ended");

    }
}