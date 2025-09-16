import { MansionApproachScene } from "./Scenes/MansionApproachScene";
import { FrontDoorScene } from "./Scenes/FrontDoorScene";
import { GroundLevelWindowScene } from "./Scenes/GroundLevelWindowScene";
import { BackdoorScene } from "./Scenes/BackdoorScene";
import { BattleArenaTestScene } from "./Scenes/BattleArenaTestScene";
import { JsonHandlerInstance, SceneManagerInstance } from "./initialisation";
import { PlayerCharacter } from "./PlayerCharacter";
import { WeaponItem } from "./Items/WeaponItem/WeaponItem";
import { WeaponEnum } from "../Assets/DataJsons/WeaponEnum";
import { DataTypesEnum } from "../Assets/DataJsons/DataTypesEnum";

const mansionApproachScene: MansionApproachScene = new MansionApproachScene();
const frontDoorScene: FrontDoorScene = new FrontDoorScene();
const groundLevelWindowScene: GroundLevelWindowScene = new GroundLevelWindowScene();
const backdoorScene: BackdoorScene = new BackdoorScene();
const battleScene: BattleArenaTestScene = new BattleArenaTestScene();

export function Game() {
    console.log("Starting index main");

    mansionApproachScene.SceneOnStartUp();
    frontDoorScene.SceneOnStartUp();
    groundLevelWindowScene.SceneOnStartUp();
    backdoorScene.SceneOnStartUp();
    battleScene.SceneOnStartUp();
    //Rest of the scenes, move to proper place once confirmed and grown
    //Tie scenes to each other
    MansionApproachTieUp();
    BackDoorTieUp();
    BattleTestTieUp();

    TestingThings();

    SceneManagerInstance.BeginFirstScene(mansionApproachScene);
    mansionApproachScene.SceneMain();


}
function TestingThings(){
   // console.log("PC weapon: " + PlayerCharacter.CharacterSheet.GetEquipedWeapon().ItemName);
    
    //const weapons = JsonHandlerInstance.data[DataTypesEnum.WeaponItems.toString()];
    //console.log("weapons: " + weapons);
    //const boot = weapons.find(w => w.DataDevName ===  WeaponItemsEnum.Weapon_Boots.toString())
    //console.log("Boot: " + boot);
    PlayerCharacter.CharacterSheet.ChangeWeapon(WeaponEnum.Weapon_Hoe);

   // console.log("PC weapon: " + PlayerCharacter.CharacterSheet.GetEquipedWeapon().ItemName);
}
function MansionApproachTieUp() {
    mansionApproachScene.TieMenuItemToSceneObject(0, frontDoorScene);
    mansionApproachScene.TieMenuItemToSceneObject(1, groundLevelWindowScene);
    mansionApproachScene.TieMenuItemToSceneObject(2, backdoorScene);
    mansionApproachScene.TieMenuItemToSceneObject(3, battleScene);

}

function BackDoorTieUp(){
    backdoorScene.TieMenuItemToSceneObject(2, backdoorScene);
}

function BattleTestTieUp(){
    battleScene.VictoryNextScene = mansionApproachScene;
}