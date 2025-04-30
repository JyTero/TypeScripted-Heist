import { MansionApproachScene } from "./Scenes/MansionApproachScene";
import { FrontDoorScene } from "./Scenes/FrontDoorScene";
import { PlaceholderScene } from "./Scenes/PlaceholderScene";

export const placeholderScene: PlaceholderScene = new PlaceholderScene();

const mansionApproachScene: MansionApproachScene = new MansionApproachScene();
const frontDoorScene: FrontDoorScene = new FrontDoorScene();

mansionApproachScene.SceneOnStartUp();
frontDoorScene.SceneOnStartUp();
//Rest of the scenes, move to proper place once confirmed and grown
//Tie scenes to each other
mansionApproachScene.TieMenuItemToSceneObject(0,frontDoorScene);

mansionApproachScene.SceneMain();



