"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeholderScene = void 0;
const MansionApproachScene_1 = require("./Scenes/MansionApproachScene");
const FrontDoorScene_1 = require("./Scenes/FrontDoorScene");
const PlaceholderScene_1 = require("./Scenes/PlaceholderScene");
exports.placeholderScene = new PlaceholderScene_1.PlaceholderScene();
const mansionApproachScene = new MansionApproachScene_1.MansionApproachScene();
const frontDoorScene = new FrontDoorScene_1.FrontDoorScene();
mansionApproachScene.SceneOnStartUp();
frontDoorScene.SceneOnStartUp();
mansionApproachScene.TieMenuItemToSceneObject(0, frontDoorScene);
mansionApproachScene.SceneMain();
//# sourceMappingURL=index.js.map