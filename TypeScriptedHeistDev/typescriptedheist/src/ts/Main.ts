
import { MainWindowPageDisplayManagerInstance, SceneManagerInstance } from "./MainPageInitialisation";
import { PlayerCharacter } from "./PlayerCharacter";
import { WeaponEnum } from "../Assets/DataJsons/WeaponEnum";
import { PageDisplayManager } from "./PageDisplay";
import { DebugPageDisplayManagerInstance } from "./DebugPageInitialisation";

// const mansionApproachScene: MansionApproachScene = new MansionApproachScene();
// const frontDoorScene: FrontDoorScene = new FrontDoorScene();
// const groundLevelWindowScene: GroundLevelWindowScene = new GroundLevelWindowScene();
// const backdoorScene: BackdoorScene = new BackdoorScene();
// const battleScene: BattleArenaTestScene = new BattleArenaTestScene();

export function Game() {
    console.log("Starting index main");




    InitialisePlayerCharacter();

    TestingThings();

    SceneManagerInstance.BeginFirstScene();
    //SceneManagerInstance.BeginFirstScene(mansionApproachScene);
    //mansionApproachScene.SceneMain();


}

// function GameOld() {
//     mansionApproachScene.SceneOnStartUp();
//     frontDoorScene.SceneOnStartUp();
//     groundLevelWindowScene.SceneOnStartUp();
//     backdoorScene.SceneOnStartUp();
//     battleScene.SceneOnStartUp();
//     //Rest of the scenes, move to proper place once confirmed and grown
//     //Tie scenes to each other
//     MansionApproachTieUp();
//     BackDoorTieUp();
//     BattleTestTieUp();

//     InitialisePlayerCharacter();

//     TestingThings();
//     SceneManagerInstance.BeginFirstScene(mansionApproachScene);
//     mansionApproachScene.SceneMain();
// }
function InitialisePlayerCharacter() {
    console.log("PC: " + PlayerCharacter.instance.GetPlayerCharacter().ItemName);
    //const pc = PlayerCharacter.instance.GetPlayerCharacter();
    //MainWindowPageDisplayManagerInstance.FindPageElementByElementId("PlayerName")?.SetElementText(pc.ItemName);
    //MainWindowPageDisplayManagerInstance.FindPageElementByElementId("PlayerHP")?.SetElementText(`HP: ${pc.Health.Value} / ${pc.Health.MaxValue}`)



}
function TestingThings() {
    PlayerCharacter.instance.GetPlayerCharacter().CharacterSheet.ChangeWeaponEnm(WeaponEnum.Weapon_Cane)
}

// function PrevTest(){
//     const bleedEffect: EffectData = {
//         EffectName: "Bleed",
//         PotencePerTurn: 2,
//         EffectLenghtTurns: 3,
//         DataDevName: "Effect_Bleed",
//         DataType: "Effect",
//     }
//     const moveData: BattleMoveData = {
//         BattleMoveName: "Bleeder",
//         IsRanged: false,
//         BattleMoveHitMultiplier: 0.7,
//         BattleMoveDamageMultiplier: 0.5,
//         DataDevName: "Stab_Knife_BattleMove",
//         DataType: "BattleMove",
//         BattleMoveEffects: [new DamageOTEffect(bleedEffect)],
//     }
//     const bleederMove: BattleMove = new BattleMove(moveData);
//     const weaponData: WeaponDatatype = {
//         WeaponName: "Cloak Dagger",
//         BattleMoves: [],
//         WeaponHit: 1,
//         WeaponDamage: 1,
//         DataDevName: "Dev Daggers",
//         DataType: "WeaponItems"
//     }
//     const weapon: WeaponItem = new WeaponItem(weaponData);
//     weapon.AddBattleMoves(BattleMoveEnum.BattleMove_Stab_Knife);
//     weapon.BattleMoves.push(bleederMove);
//     PlayerCharacter.instance.GetPlayerCharacter().CharacterSheet.ChangeWeaponItm(weapon)
// }
// function MansionApproachTieUp() {
//     mansionApproachScene.TieMenuItemToSceneObject(0, frontDoorScene);
//     mansionApproachScene.TieMenuItemToSceneObject(1, groundLevelWindowScene);
//     mansionApproachScene.TieMenuItemToSceneObject(2, backdoorScene);
//     mansionApproachScene.TieMenuItemToSceneObject(3, battleScene);

// }

// function BackDoorTieUp() {
//     backdoorScene.TieMenuItemToSceneObject(2, backdoorScene);
// }

// function BattleTestTieUp() {
//     battleScene.VictoryNextScene = mansionApproachScene;
// }