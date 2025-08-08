const  history = document.getElementById("TextHistory");
const canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

TestImage();
export function AddNewHistoryDiv(historyText:string){   
    const newEntry = document.createElement("div");
    newEntry.className = "HistoryEntry";
    newEntry.textContent = historyText;
    history?.insertBefore(newEntry, history.firstChild);
}

function TestImage() {
    // Load image
    const image = new Image();
    image.src = "src/Assets/PictoBun.png"; // Update with your image path

    image.onload = () => {
        if(ctx != null) 
        ctx.drawImage(image, 50, 50, 100,100); // Draw the image at x:100, y:100
    };

    image.onerror = () => {
        console.error("Failed to load image.");
    };
}