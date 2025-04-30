import * as readline from 'readline';
export function GetPlayerInput(question) {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(function (resolve) {
        rl.question(question, function (input) {
            rl.close();
            resolve(input);
        });
    });
}
//# sourceMappingURL=LineReader.js.map