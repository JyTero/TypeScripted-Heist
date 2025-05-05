import { MenuItemBase } from "./MenuItemBase";
import { WaitForInput, WriteToGame } from "./IOMethods";

export class MenuObjectBase {

    /// name : string ;
    menuItems: MenuItemBase[];


    constructor(_menuItems?: MenuItemBase[]) {
        this.menuItems = _menuItems?? [];
    }

    async RunMenu(): Promise<number> {
        let playerInputIsValid: Boolean = false;
        let playerInput: number = 0;

        while (!playerInputIsValid) {
            this.DisplayMenu();
            playerInput = await this.GetAndCheckPlayerInput();
            if (playerInput === -1)
                WriteToGame("Please select a valid option using the number keys.");
            else if (playerInput > this.menuItems.length || playerInput < 1)
                WriteToGame("Please choose one of the given options with the number keys.");
            else
                playerInputIsValid = true;

        }
        console.log("The player chose " + playerInput);
        return playerInput;
    }

    DisplayMenu() {
        let i: number = 1;
        let s: string = "";
        this.menuItems.forEach(element => {
            element.MenuItemNumber = i;
            s+= this.WriteMenuItem(element)+ "<br>";

            i++;
        });

        WriteToGame(s);
    }

    WriteMenuItem(_menuItem: MenuItemBase):string {
        return _menuItem.MenuItemNumber + ". " + _menuItem.MenuItemText;
    }

    async GetAndCheckPlayerInput(): Promise<number> {
        let input = await this.GetConsoleInput();

        let response = parseInt(input, 10);

        //Check Input
        if (isNaN(response)) {
            //Not a number
            return -1;
        }
        else {
            return response;
        }


    }


    async GetConsoleInput(): Promise<string> {
        return await WaitForInput();
    }



}


