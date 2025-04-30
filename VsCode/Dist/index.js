import { MansionApproachScene } from "./Scenes/MansionApproachScene";
import { FrontDoorScene } from "./Scenes/FrontDoorScene";
import { PlaceholderScene } from "./Scenes/PlaceholderScene";
import { GroundLevelWindowScene } from "./Scenes/GroundLevelWindowScene";
import { MenuObjectBase } from "./MenuObjectBase";
export var placeholderScene = new PlaceholderScene();
export var placeholderMenu = new MenuObjectBase();
var mansionApproachScene = new MansionApproachScene();
var frontDoorScene = new FrontDoorScene();
var groundLevelWindowScene = new GroundLevelWindowScene();
mansionApproachScene.SceneOnStartUp();
frontDoorScene.SceneOnStartUp();
groundLevelWindowScene.SceneOnStartUp();
MansionApproachTieUp();
mansionApproachScene.SceneMain();
function MansionApproachTieUp() {
    mansionApproachScene.TieMenuItemToSceneObject(0, frontDoorScene);
    mansionApproachScene.TieMenuItemToSceneObject(1, groundLevelWindowScene);
}
//# sourceMappingURL=index.js.map