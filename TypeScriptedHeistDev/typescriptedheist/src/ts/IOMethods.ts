import { AddNewHistoryDiv } from "./PageDisplay";

export function WaitForInput(): Promise<string> {
  return new Promise((resolve) => {
    const inputField = document.getElementById("playerInput") as HTMLInputElement;
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;

    const handler = () => {
      submitBtn.removeEventListener("click", handler); // Remove after one use
      const input = inputField.value.trim();
      inputField.value = ""; // Clear field
      resolve(input);
    };

    submitBtn.addEventListener("click", handler);
  });
}

export function WriteToGame(text:string)
{
  const textField = document.getElementById("DescriptionText") as HTMLInputElement;
  //console.log("Tried to write " + text);

  const prevText = textField.value;
  if(prevText)
    AddNewHistoryDiv(prevText);

  if(textField)
    textField.innerHTML = text;
}