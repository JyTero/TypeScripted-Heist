import { Game as Game } from "./Main";
import { SceneManagement } from "./Scenes/SceneManagement";
import { CanvasGraphicEngine } from "./Canvas/CanvasGraphicEngine";
import { JsonHandler } from "./JsonInput/JsonHandler";
import { Delay } from "../Tools";
export const IsDebug:boolean = true;
export const FrameTimeMS: number = 16.67;
export const CanvasGraphicsInstance: CanvasGraphicEngine = new CanvasGraphicEngine();
export const SceneManagerInstance: SceneManagement = new SceneManagement();
export const JsonHandlerInstance:JsonHandler = new JsonHandler();


CanvasGraphicsInstance.StartGraphicEngine();

JsonHandlerInstance.BeginJsonLoading();


while(!JsonHandlerInstance.isJsonReady){
    await Delay(FrameTimeMS);
}

console.log("Initialised");
Game();


