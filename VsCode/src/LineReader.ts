import * as readline from 'readline';
export function GetPlayerInput(question: string): Promise<string>
{
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,

    });

    return new Promise((resolve) => {
        rl.question(question, (input: string) => {
            rl.close();
            resolve(input);
        });
    });
}
