import { Delay } from "../Tools";

import { Sprite } from "./Canvas/Sprite";
import { CanvasGraphics, FrameTimeMS } from "./initialisation";

const  history = document.getElementById("TextHistory");
const canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

export async function AddNewHistoryDiv(historyText:string){   

    const newEntry = document.createElement("div");
    newEntry.className = "HistoryEntry";
    newEntry.textContent = historyText;
    history?.insertBefore(newEntry, history.firstChild);
    await Delay(FrameTimeMS);
}
TestImage();
function TestImage() {
    // Load image
    const image = new Image();
    image.src = "src/Assets/PictoBun.png"; 
    

    image.onload = () => {
        if(ctx != null) {
            
            ctx.moveTo(0, canvas.height/2);
            ctx.lineTo(canvas.width, canvas.height/2);

            ctx.moveTo(0, canvas.height/4);
            ctx.lineTo(canvas.width, canvas.height/4);
            
            ctx.moveTo(0, (canvas.height/4*3));
            ctx.lineTo(canvas.width, (canvas.height/4*3));

            ctx.moveTo(canvas.width/2, 0);
            ctx.lineTo(canvas.width/2, canvas.height);

            ctx.moveTo(canvas.width/4, 0);
            ctx.lineTo(canvas.width/4, canvas.height);

            
            ctx.moveTo((canvas.width/4*3), 0);
            ctx.lineTo((canvas.width/4*3), canvas.height);

            ctx.stroke();
            
            // var sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 0, 0, 10, 10);
            // sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 25, 25, 10, 10);
            // sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 50, 50, 10, 10);
            // sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 75, 75, 10, 10);
            // sprite = new Sprite(image);
            // CanvasGraphics.AddSpriteToList(sprite, 100, 75, 10, 10);
        }
    };

    image.onerror = () => {
        console.error("Failed to load image.");
    };
}