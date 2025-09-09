import { Main as Game } from "./Main";
import { SceneManagement } from "./Scenes/SceneManagement";
import { CanvasGraphicEngine } from "./Canvas/CanvasGraphicEngine";
export const IsDebug:boolean = true;
export const FrameTimeMS: number = 16.67;
export const CanvasGraphics: CanvasGraphicEngine = new CanvasGraphicEngine();
export const SceneManager: SceneManagement = new SceneManagement();

CanvasGraphics.StartGraphicEngine();

console.log("Initialised");
            
Game();


