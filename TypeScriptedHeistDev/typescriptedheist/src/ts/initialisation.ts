import { oldWriteToGame } from "./IOMethods";
import { Main } from "./Main";

export const IsDebug:boolean = true;


console.log("Initialised");

for(let i = 0; i <= 10; i++){
    oldWriteToGame(i.toString());
}

Main();


