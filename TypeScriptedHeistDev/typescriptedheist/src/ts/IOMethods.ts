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

export function oldWriteToGame(text:string)
{
  const textField = document.getElementById("DescriptionText") as HTMLInputElement;

  const prevText = textField.textContent;
  if(prevText)
    AddNewHistoryDiv(prevText);

  if(textField)
    textField.innerHTML = text;
}

export function WriteAlert(text: string) {
  const textField = document.getElementById("DescriptionText") as HTMLInputElement;
  textField.innerHTML = text;
}

export async function WriteAlertStorePrevious(text: string) {
  const textField = document.getElementById("DescriptionText") as HTMLInputElement;
  if (textField.textContent !== null)
    await AddNewHistoryDiv(textField.textContent);
  textField.innerHTML = text;
}

export function WriteMenu(text:string)
{
  const textField = document.getElementById("DescriptionText") as HTMLInputElement;

  // const prevText = textField.textContent;
  // if(prevText)
  //   AddNewHistoryDiv(prevText);

  if(textField)
    textField.innerHTML = text;
}
export function WriteMenuSelection(itemDescription:string)
{
  //const textField = document.getElementById("DescriptionText") as HTMLInputElement;
  
  //AddNewHistoryDiv(selectedItem);
  AddNewHistoryDiv(itemDescription);
  // if(textField)
  //   textField.innerHTML = itemDescription;
  
}
