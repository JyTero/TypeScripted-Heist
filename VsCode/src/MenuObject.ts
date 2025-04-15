import {GetPlayerInput} from "./LineReader"
export class MenuObject{

   /// name : string ;
    menuItems : MenuItem[] = [];


    constructor(_menuItems:MenuItem[])
    {
        this.menuItems = _menuItems
    }

   async HandleMenu()
    {
        this.DisplayMenu();
        //Get Input
        const playerInput = await this.GetAndCheckPlayerInput();



        console.log("The player chose " + playerInput);

        //Return Input
    }

    DisplayMenu() 
    {
        let i : number = 1;
        this.menuItems.forEach(element => 
        {
            element.MenuItemNumber = i;
            this.WriteMenuItem(element);

            i++;
        });    
    }

    WriteMenuItem(_menuItem: MenuItem)
    {
        console.log(_menuItem.MenuItemNumber + ". " + _menuItem.MenuItemText);
    }

   async GetAndCheckPlayerInput():Promise<number>
    {
        let input = await this.GetConsoleInput();

            let response = parseInt(input,10);
        
            //Check Input
            if(isNaN(response))
            {
                //Not a number
                console.log("Please select a valid option using the number keys.")
                this.GetAndCheckPlayerInput();
                return -1;
            }
            else
            {
                return response;
            }


    }   
    ValidatePlayerInput(input : number)
    {
        //if input bad
        //ReRun Menu Display and user input get+validation
        //else
        //return user value
    }

   async GetConsoleInput():Promise<string>
    {
        return await GetPlayerInput("Choose: ");
    }

}

export type MenuItem = {
    MenuItemName : string;
    MenuItemNumber : number;
    MenuItemText : string;
}