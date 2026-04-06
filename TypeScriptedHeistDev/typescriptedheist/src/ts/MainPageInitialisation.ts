import { Game as Game } from "./Main";
import { SceneManagement } from "./ScenesLegacy/SceneManagement";
import { CanvasGraphicEngine } from "./Canvas/CanvasGraphicEngine";
import { JsonHandler } from "./JsonInput/JsonHandler";
import { Delay } from "../Tools";
import { DebugWindow } from "./Tools/DebugWindow";
import { PageDisplayManager } from "./PageDisplay";
import { UIGeneralManager } from "./UI/UIGeneralManager";
import { FunctionalityComponentEngine } from "./FunctionalityComponentEngine";
import { AlertManager } from "./AlertManager";
import { AudioEngine } from "./AudioEngine";
import { WindowManagement } from "./UI/WindowManager";
export const IsDebug: boolean = true;
export const FrameTimeMS: number = 16.67;
await Delay(FrameTimeMS);
export const MainWindowPageDisplayManagerInstance: PageDisplayManager = new PageDisplayManager("Main", window);
export const AlertManagerInstance: AlertManager = new AlertManager();
export const CanvasGraphicsInstance: CanvasGraphicEngine = new CanvasGraphicEngine();
export const SceneManagerInstance: SceneManagement = new SceneManagement();
export const JsonHandlerInstance: JsonHandler = new JsonHandler();
export const DebugWindowInstance: DebugWindow = new DebugWindow();
export const UIManager: UIGeneralManager = new UIGeneralManager();
export const FCE: FunctionalityComponentEngine = new FunctionalityComponentEngine();
export const AudioManager:AudioEngine = new AudioEngine();
export const WindowManagerInstance:WindowManagement = new WindowManagement();

JsonHandlerInstance.BeginJsonLoading();
while (!JsonHandlerInstance.isJsonReady) {
    await Delay(FrameTimeMS);
}
MainWindowPageDisplayManagerInstance.CreatePageElementsOnPageLoad();

CanvasGraphicsInstance.StartGraphicEngine();




DebugWindowInstance.UseDebugWindow = true;
DebugWindowInstance.InitializeDebugWindow();



console.log("Hello world!");

console.log("Initialised");
await Delay(FrameTimeMS);

Game();


