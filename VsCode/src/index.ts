import { MansionApproachScene } from "./Scenes/MansionApproachScene";
import { FrontDoorScene } from "./Scenes/FrontDoorScene";
import { PlaceholderScene } from "./Scenes/PlaceholderScene";
import { GroundLevelWindowScene } from "./Scenes/GroundLevelWindowScene";
import { MenuObjectBase } from "./MenuObjectBase";

export const placeholderScene: PlaceholderScene = new PlaceholderScene();
export const placeholderMenu: MenuObjectBase = new MenuObjectBase();

const mansionApproachScene: MansionApproachScene = new MansionApproachScene();
const frontDoorScene: FrontDoorScene = new FrontDoorScene();
const groundLevelWindowScene: GroundLevelWindowScene = new GroundLevelWindowScene();

mansionApproachScene.SceneOnStartUp();
frontDoorScene.SceneOnStartUp();
groundLevelWindowScene.SceneOnStartUp();
//Rest of the scenes, move to proper place once confirmed and grown
//Tie scenes to each other
MansionApproachTieUp();

mansionApproachScene.SceneMain();



function MansionApproachTieUp()
{
    mansionApproachScene.TieMenuItemToSceneObject(0,frontDoorScene);
    mansionApproachScene.TieMenuItemToSceneObject(1,groundLevelWindowScene);
}