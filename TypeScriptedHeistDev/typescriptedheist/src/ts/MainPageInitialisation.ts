import { Game as Game } from "./Main";
import { SceneManagement } from "./Scenes/SceneManagement";
import { CanvasGraphicEngine } from "./Canvas/CanvasGraphicEngine";
import { JsonHandler } from "./JsonInput/JsonHandler";
import { Delay } from "../Tools";
import { DebugWindow } from "./Tools/DebugWindow";
import { PageDisplayManager } from "./PageDisplay";
import { UIGeneralManager } from "./UI/UIGeneralManager";
export const IsDebug: boolean = true;
export const FrameTimeMS: number = 16.67;
await Delay(FrameTimeMS);
export const MainWindowPageDisplayManagerInstance: PageDisplayManager = new PageDisplayManager("Main");
export const CanvasGraphicsInstance: CanvasGraphicEngine = new CanvasGraphicEngine();
export const SceneManagerInstance: SceneManagement = new SceneManagement();
export const JsonHandlerInstance: JsonHandler = new JsonHandler();
export const DebugWindowInstance: DebugWindow = new DebugWindow();
export const UIManager:UIGeneralManager = new UIGeneralManager();

JsonHandlerInstance.BeginJsonLoading();
while (!JsonHandlerInstance.isJsonReady) {
    await Delay(FrameTimeMS);
}

CanvasGraphicsInstance.StartGraphicEngine();


MainWindowPageDisplayManagerInstance.CreatePageElementsOnPageLoad();

UIManager.InitializeUI();

DebugWindowInstance.UseDebugWindow = true;
DebugWindowInstance.InitializeDebugWindow();



console.log("Hello world!");

console.log("Initialised");
Game();


