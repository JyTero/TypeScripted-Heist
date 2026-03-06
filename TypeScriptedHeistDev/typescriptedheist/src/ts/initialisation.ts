import { Game as Game } from "./Main";
import { SceneManagement } from "./Scenes/SceneManagement";
import { CanvasGraphicEngine } from "./Canvas/CanvasGraphicEngine";
import { JsonHandler } from "./JsonInput/JsonHandler";
import { Delay } from "../Tools";
import { DebugWindow } from "./Tools/DebugWindow";
export const IsDebug:boolean = true;
export const FrameTimeMS: number = 16.67;
export const CanvasGraphicsInstance: CanvasGraphicEngine = new CanvasGraphicEngine();
export const SceneManagerInstance: SceneManagement = new SceneManagement();
export const JsonHandlerInstance:JsonHandler = new JsonHandler();
export const DebugWindowInstance:DebugWindow = new DebugWindow();

CanvasGraphicsInstance.StartGraphicEngine();

JsonHandlerInstance.BeginJsonLoading();

DebugWindowInstance.UseDebugWindow = true;
DebugWindowInstance.InitializeDebugWindow();


while(!JsonHandlerInstance.isJsonReady){
    await Delay(FrameTimeMS);
}

console.log("Hello world!");

console.log("Initialised");
Game();


