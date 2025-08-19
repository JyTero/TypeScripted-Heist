import { CanvasGraphicsEngine } from "./Canvas/CanvasGraphicEngine";
import { Sprite } from "./Canvas/Sprite";

const  history = document.getElementById("TextHistory");
const canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

export function AddNewHistoryDiv(historyText:string){   
    const newEntry = document.createElement("div");
    newEntry.className = "HistoryEntry";
    newEntry.textContent = historyText;
    history?.insertBefore(newEntry, history.firstChild);
}
TestImage();
function TestImage() {
    // Load image
    const image = new Image();
    image.src = "src/Assets/PictoBun.png"; 
    
    image.onload = () => {
        if(ctx != null) {

            const sprite = new Sprite(image);
            
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

            const canvasGraphisc = new CanvasGraphicsEngine();   
            canvasGraphisc.DrawSprite(sprite, 0, 0, 10, 10);
           // canvasGraphisc.DrawSprite(sprite, 1, 1, 10, 10);
            canvasGraphisc.DrawSprite(sprite, 25, 25, 10, 10);
            canvasGraphisc.DrawSprite(sprite, 50, 50, 10, 10);
            canvasGraphisc.DrawSprite(sprite, 75, 75, 10, 10);
            //canvasGraphisc.DrawSprite(sprite, 99, 99, 10, 10);
            canvasGraphisc.DrawSprite(sprite, 100, 75, 10, 10);
        }
    };

    image.onerror = () => {
        console.error("Failed to load image.");
    };
}