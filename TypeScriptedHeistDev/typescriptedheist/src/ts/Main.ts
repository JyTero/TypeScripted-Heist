import { MansionApproachScene } from "./Scenes/MansionApproachScene";
import { FrontDoorScene } from "./Scenes/FrontDoorScene";
import { GroundLevelWindowScene } from "./Scenes/GroundLevelWindowScene";
import { BackdoorScene } from "./Scenes/BackdoorScene";
import { BattleArenaTestScene } from "./Scenes/BattleArenaTestScene";

const mansionApproachScene: MansionApproachScene = new MansionApproachScene();
const frontDoorScene: FrontDoorScene = new FrontDoorScene();
const groundLevelWindowScene: GroundLevelWindowScene = new GroundLevelWindowScene();
const backdoorScene: BackdoorScene = new BackdoorScene();
const battleScene: BattleArenaTestScene = new BattleArenaTestScene();

export function Main() {
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

    mansionApproachScene.SceneMain();


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