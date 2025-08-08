import { Main } from "./Main";
import { SceneManagement } from "./Scenes/SceneManagement";

export const IsDebug:boolean = true;
export const SceneManager: SceneManagement = new SceneManagement();

console.log("Initialised");


Main();


