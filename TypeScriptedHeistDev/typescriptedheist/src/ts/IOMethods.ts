// import * as readline from 'readline';
// export function OGetPlayerInput(question: string): Promise<string> {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,

//   });

//   return new Promise((resolve) => {
//     rl.question(question, (input: string) => {
//       rl.close();
//       resolve(input);
//     });
//   });
// }


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
  console.log("Tried to write " + text);
  if(textField)
    textField.textContent = text;
}