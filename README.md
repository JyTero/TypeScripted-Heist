# Read Me
TypeScripted-Heist is a TypeScript and .NET learning project. 

The project is to be a text-based adventure game with turn-based combat written in TS, running in browser environment. The .NET portion is a tool to create game data, such as NPC characters and their equipment.

Current focus is on the turn-based combat and getting that to a basic state, and the TSHCreator, which will be used to create .json files the game uses for data. Plan is to have most everything be loaded from .json files created with the tool. The game also has some working menus and choices outside of combat, but those systems need to be rewritten. At some point. 

## Current milestone goals 

- Working turn-based combat system with only a basic attack available
  - Enemies take their turn, player is able to choose their action on their turn, player is informed of combat events, such as who dealt and how much damage to whom
  - Values of attack (hit chance/damage) are determined by character skills and weapon stats
  - Enemies pick randomly from attacks available to them, no enemy AI yet
- Ability to load BattleArenaData and its components from .json files
  - This means combat encounters, with varied number of enemies and their weapons
- Have a standalone .NET tool capable of creating characters, weapons and BattleMove data .json from user input
- Tool has to create and update
  - DataSource.json so that TS game can find data .jsons
  - A variety of TS enums which are used during the game development to add newly created objects, such as weapons, into game.
  - Developers use the enums to reference the data .jsons in game code.

### To try the project yourself
Disclaimer: The project is very much a work in progress, so this is no unpack and play solution, nor is there much to play around with.  But for those curious, here’s a guide on how the project should open and function properly on anyone's PC. 
NOTE: The game should work on any modern PC OS, but no guarantees. The .NET tool is made using WinForms, and as such might not work on non-windows systems. The project is being developed on a Windows 11 system.  

Game Requirements:  
- VSCode
- Node.js

Download the project from its GitHub page and unzip to location of choice.

Steps: 
1. Open VSCode and within open the project folder, found in the unzipped folder: \TypeScripted-Heist-main\TypeScriptedHeistDev\typescriptedheist
2. In the VS terminal, run “npm install”, without quotation marks
3. After that’s done, run “npm run dev”, without quotation marks
4. Press F5 to begin debugging. VSCode asks what to use with debugging, select your browser of choice
5. Most should work, game is being developed on Chrome
6. There should now be a .vscode folder with a launch.json file. Make sure that the address on “url” field is the same as the in which Vite launched its local host server
7. I usually have to change “http://localhost:8080” to “http://localhost:5173”, without quotation marks
8. Now Press F5 again and new browser window should open. Inputting one of the numbers shown into the text field progresses the game, the red square is the canvas area, which will, eventually, be used for game graphics

To try the tool: 
- Running a debug build of the executable requires nothing and can be found in ...\TypeScripted-Heist-main\TypeScriptedHeistDev\Tools\TSHCreator\TSHCreatorTools\bin\Debug\net8.0-windows 

### (Optional) If you want to open the tool project: 
Tool Requirements:
- Visual Studio with the .NET desktop development workload installed
  - The project is being developed on VSCommunity22
Tool Steps:
- Open the “TSHCreatorTools.sln” found in ...\TypeScripted-Heist-main\TypeScriptedHeistDev\Tools\TSHCreator\TSHCreatorTools. 

### Need help? 
Send a message, raise an issue or get in contact in some other way. Given that this is a hobby/learning project, and work in progress, I can’t guarantee to be able to help with every issue, but I’d love to try. 

### Have tips or tricks? Guides or thoughts?
Do let me know! As mentioned, this is a learning project, and I’d love to know if I’m about drive the project off a ledge due to decisions made. Though I reserve the right to not apply given tips, it is my project, after all. :grin:
