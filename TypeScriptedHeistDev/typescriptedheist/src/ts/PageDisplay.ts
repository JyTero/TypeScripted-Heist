const  history = document.getElementById("TextHistory");

export function AddNewHistoryDiv(historyText:string){
    
    
    const newEntry = document.createElement("div");
    newEntry.className = "HistoryEntry";
    newEntry.textContent = historyText;
    history?.insertBefore(newEntry, history.firstChild);
}