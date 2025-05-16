import { MansionApproachScene } from "./Scenes/MansionApproachScene";
import { FrontDoorScene } from "./Scenes/FrontDoorScene";

import { GroundLevelWindowScene } from "./Scenes/GroundLevelWindowScene";
import { BackdoorScene } from "./Scenes/BackdoorScene";


//export const placeholderMenu: MenuObjectBase = new MenuObjectBase();
//const mansionApproachScene: MansionApproachScene = new MansionApproachScene();
let mansionApproachScene: MansionApproachScene;
let frontDoorScene: FrontDoorScene;
let groundLevelWindowScene: GroundLevelWindowScene;
let backdoorScene: BackdoorScene;

export function Main() {
    console.log("Starting index main");

    mansionApproachScene = new MansionApproachScene();
    frontDoorScene = new FrontDoorScene();
    groundLevelWindowScene = new GroundLevelWindowScene();
    backdoorScene = new BackdoorScene();

    mansionApproachScene.SceneOnStartUp();
    frontDoorScene.SceneOnStartUp();
    groundLevelWindowScene.SceneOnStartUp();
    backdoorScene.SceneOnStartUp();
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

}

function BackDoorTieUp(){
    backdoorScene.TieMenuItemToSceneObject(2, backdoorScene);
}