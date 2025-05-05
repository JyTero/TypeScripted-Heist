import { MansionApproachScene } from "./Scenes/MansionApproachScene";
import { FrontDoorScene } from "./Scenes/FrontDoorScene";

import { GroundLevelWindowScene } from "./Scenes/GroundLevelWindowScene";


//export const placeholderMenu: MenuObjectBase = new MenuObjectBase();
//const mansionApproachScene: MansionApproachScene = new MansionApproachScene();
let mansionApproachScene: MansionApproachScene;
let frontDoorScene: FrontDoorScene;
let groundLevelWindowScene: GroundLevelWindowScene;

export function IndexMain() {
    console.log("Starting index main");

    mansionApproachScene = new MansionApproachScene();
    frontDoorScene = new FrontDoorScene();
    groundLevelWindowScene = new GroundLevelWindowScene();


    mansionApproachScene.SceneOnStartUp();
    frontDoorScene.SceneOnStartUp();
    groundLevelWindowScene.SceneOnStartUp();
    //Rest of the scenes, move to proper place once confirmed and grown
    //Tie scenes to each other
    MansionApproachTieUp();

    mansionApproachScene.SceneMain();


}
function MansionApproachTieUp() {
    mansionApproachScene.TieMenuItemToSceneObject(0, frontDoorScene);
    mansionApproachScene.TieMenuItemToSceneObject(1, groundLevelWindowScene);
}