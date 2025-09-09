import { MenuItemBase } from "./MenuItemBase";
import { WaitForInput, WriteAlert, WriteAlertStorePrevious, WriteMenu} from "./IOMethods";
import { Flags } from "./flags";
import { SceneObjectBase } from "./SceneObjectBase";
import { Delay } from "../Tools";
import { FrameTimeMS } from "./initialisation";

export class MenuObjectBase {

    /// name : string ;
    public allMenuItems: MenuItemBase[];
    public validMenuItems: MenuItemBase[] = [];

    constructor(_menuItems: MenuItemBase[]) {
        this.allMenuItems = _menuItems ?? [];
    }

   
    public async HandleMenu(): Promise<number> {
        let playerInputIsValid: Boolean = false;
        let playerInput: number = 0;

        while (!playerInputIsValid) {
            this.DisplayMenu();
            playerInput = await this.GetAndCheckPlayerInput();
            if (playerInput === -1)
                WriteAlertStorePrevious("Please select a valid option using the number keys.");
            else if (playerInput > this.validMenuItems.length || playerInput < 1)
                WriteAlert("Please choose one of the given options with the number keys.");
            else
                playerInputIsValid = true;

        }
        return playerInput;
    }
    public TieMenuItemToSceneObject(menuItemIndex: number, targetScene: SceneObjectBase) {
        this.allMenuItems[menuItemIndex].NextSceneObject = targetScene;


    }
    public DisplayMenu() {
        let i: number = 1;
        let s: string = "";
        this.validMenuItems = [];
        for (const menuItem of this.allMenuItems) {
            // element.MenuItemNumber = i;

            if (this.HasAnyForbiddenFlags(menuItem) || this.HasAllForbiddenFlags(menuItem))
                continue;
            if (!this.HasAnyRequriedFlags(menuItem) || !this.HasAllRequriedFlags(menuItem))
                continue;

            menuItem.NumberMenuItem(i);
            s += this.WriteMenuItem(menuItem, i) + "<br>";
            this.validMenuItems.push(menuItem);
            i++;

        };
        WriteMenu(s);
        Delay(FrameTimeMS);
    }

    private HasAnyForbiddenFlags(menuItem: MenuItemBase): boolean {
        if (menuItem.MenuItemForbiddenAnyFlags.length === 0)
            return false;
        else
            return menuItem.MenuItemForbiddenAnyFlags.some(flag => Flags[flag])

    }
    private HasAllForbiddenFlags(menuItem: MenuItemBase): boolean {
        if (menuItem.MenuItemForbiddenAllFlags.length === 0)
            return false;
        else
            return menuItem.MenuItemForbiddenAllFlags.every(flag => Flags[flag]);
    }
    private HasAnyRequriedFlags(menuItem: MenuItemBase): boolean {
        if (menuItem.MenuItemRequireAnyFlags.length === 0)
            return true;
        else
            return menuItem.MenuItemRequireAnyFlags.some(flag => Flags[flag])

    }
    private HasAllRequriedFlags(menuItem: MenuItemBase): boolean {
        if (menuItem.MenuItemRequireAllFlags.length === 0)
            return true;
        else
            return menuItem.MenuItemRequireAllFlags.every(flag => Flags[flag]);
    }

    private WriteMenuItem(_menuItem: MenuItemBase, menuItemNumber: number): string {
        return menuItemNumber + ". " + _menuItem.MenuItemText;
    }

    private async GetAndCheckPlayerInput(): Promise<number> {
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


    private async GetConsoleInput(): Promise<string> {
        return await WaitForInput();
    }



}


