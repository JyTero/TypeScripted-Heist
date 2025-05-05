export function AddNewHistoryDiv(historyText:string){
    const  history = document.getElementById("TextHistory");
    
    const newEntry = document.createElement("div");

    console.log("This happens: " + historyText);

    newEntry.className = "HistoryEntry";
    newEntry.textContent = historyText;
    history?.appendChild(newEntry);
}