import { GetPlayerInput } from "./LineReader"
import { MenuItem } from "./MenuItem";

export class MenuObject {

    /// name : string ;
    menuItems: MenuItem[] = [];


    constructor(_menuItems: MenuItem[]) {
        this.menuItems = _menuItems
    }

    async HandleMenu(): Promise<number> {
        let playerInputIsValid: Boolean = false;
        let playerInput: number = 0;

        while (!playerInputIsValid) {
            this.DisplayMenu();
            playerInput = await this.GetAndCheckPlayerInput();
            if (playerInput === -1)
                console.log("Please select a valid option using the number keys.")
            else if (playerInput > this.menuItems.length || playerInput < 1)
                console.log("Please choose one of the given options with the number keys.")
            else
                playerInputIsValid = true;

        }
        console.log("The player chose " + playerInput);
        return playerInput;
    }

    DisplayMenu() {
        let i: number = 1;
        this.menuItems.forEach(element => {
            element.MenuItemNumber = i;
            this.WriteMenuItem(element);

            i++;
        });
    }

    WriteMenuItem(_menuItem: MenuItem) {
        console.log(_menuItem.MenuItemNumber + ". " + _menuItem.MenuItemText);
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
        return await GetPlayerInput("Choose: ");
    }

}

