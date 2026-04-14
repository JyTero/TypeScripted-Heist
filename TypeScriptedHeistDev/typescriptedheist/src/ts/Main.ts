
import { FrameTimeMS, InitialisationManager, SceneManagerInstance, UIManager, WindowManagerInstance } from "./MainPageInitialisation";
import { PlayerCharacter } from "./PlayerCharacter";
import { WeaponEnum } from "../Assets/DataJsons/WeaponEnum";
import { PageDisplayManager } from "./PageDisplay";
import { DebugWindowInstance } from "./DebugPageInitialisation";
import { Delay } from "../Tools";

// const mansionApproachScene: MansionApproachScene = new MansionApproachScene();
// const frontDoorScene: FrontDoorScene = new FrontDoorScene();
// const groundLevelWindowScene: GroundLevelWindowScene = new GroundLevelWindowScene();
// const backdoorScene: BackdoorScene = new BackdoorScene();
// const battleScene: BattleArenaTestScene = new BattleArenaTestScene();

export async function Game() {
    console.log("Starting index main");

    //thx mozilla documentation
    addEventListener("onunload", (event) => { })
    onbeforeunload = (event) => {WindowManagerInstance.CloseAllSubWindows(); }


    InitialisePlayerCharacter();

    TestingThings();

    
    UIManager.InitializeUI();
    
    while(InitialisationManager.StillPreparing()){
        
        await Delay(FrameTimeMS);
    }
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


}
function TestingThings() {
    PlayerCharacter.instance.GetPlayerCharacter().CharacterSheet.ChangeWeaponEnm(WeaponEnum.Weapon_Cane)
}

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