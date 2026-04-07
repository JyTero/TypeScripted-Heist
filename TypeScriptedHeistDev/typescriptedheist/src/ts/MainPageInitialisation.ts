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
import { DebugWindowInstance } from "./DebugPageInitialisation";
import { FlagManager as FlagManagerr } from "./flags";
export const IsDebug: boolean = true;
export const FrameTimeMS: number = 16.67;
await Delay(FrameTimeMS);
export const JsonHandlerInstance: JsonHandler = new JsonHandler();
export const MainWindowPageDisplayManagerInstance: PageDisplayManager = new PageDisplayManager("Main", window);
export const CanvasGraphicsInstance: CanvasGraphicEngine = new CanvasGraphicEngine();
export const FlagManager: FlagManagerr = new FlagManagerr();
export const SceneManagerInstance: SceneManagement = new SceneManagement();
//export const DebugWindowInstance: DebugWindow = new DebugWindow();
export const FCE: FunctionalityComponentEngine = new FunctionalityComponentEngine();
export const AudioManager: AudioEngine = new AudioEngine();
export const WindowManagerInstance: WindowManagement = new WindowManagement();
export const AlertManagerInstance: AlertManager = new AlertManager();
export const UIManager: UIGeneralManager = new UIGeneralManager();

JsonHandlerInstance.BeginJsonLoading();
while (!JsonHandlerInstance.isJsonReady) {
    await Delay(FrameTimeMS);
}
var appHTML: HTMLElement | null = window.document.getElementById("App");
if (appHTML)
    MainWindowPageDisplayManagerInstance.CreatePageElementFromRoot(appHTML,`${window.name}App`);

CanvasGraphicsInstance.StartGraphicEngine();




DebugWindowInstance.UseDebugWindow = true;
DebugWindowInstance.InitializeDebugWindow();



console.log("Hello world!");

console.log("Initialised");
await Delay(FrameTimeMS);

await Game();


