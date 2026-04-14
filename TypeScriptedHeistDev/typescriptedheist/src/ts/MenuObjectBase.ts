import { MenuItemBase } from "./MenuItemBase";
import { WaitForInput } from "./IOMethods";
import { SceneBase } from "./Scenes/SceneBase";
import { Delay } from "../Tools";
import { AlertManagerInstance, FlagManager, FrameTimeMS } from "./MainPageInitialisation";
import { AlertManager } from "./AlertManager";
import { ExplorationMenuItemData } from "./DataTypes/MenuItemDataType";

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
            await this.DisplayMenu();
            playerInput = await this.GetAndCheckPlayerInput();
            if (playerInput === -1)
                AlertManagerInstance.WriteAlertStorePrevious("Please select a valid option using the number keys.",[]);
            else if (playerInput > this.validMenuItems.length || playerInput < 1)
                AlertManagerInstance.WriteAlertStorePrevious("Please choose one of the given options with the number keys.",[]);
            else
                playerInputIsValid = true;

        }
        return playerInput;
    }
    // public TieMenuItemToSceneObject(menuItemIndex: number, targetScene: SceneBase) {
    //     this.allMenuItems[menuItemIndex].NextSceneDataReference = targetScene;
    // }

    public DisplayMenu() {
        let i: number = 1;
        let s: string = "";
        this.validMenuItems = [];
        for (const menuItem of this.allMenuItems) {
            // element.MenuItemNumber = i;

            if (FlagManager.HasAnyForbiddenFlags(menuItem.MenuItemForbiddenAnyFlags) || FlagManager.HasAllForbiddenFlags(menuItem.MenuItemForbiddenAllFlags))
                continue;
            if (!FlagManager.HasAnyRequriedFlags(menuItem.MenuItemRequireAnyFlags) || !FlagManager.HasAllRequriedFlags(menuItem.MenuItemRequireAllFlags))
                continue;

            menuItem.NumberMenuItem(i);
            s += this.WriteMenuItem(menuItem, i) + "<br>";
            this.validMenuItems.push(menuItem);
            i++;

        };
        //await WriteMenuStorePrevious(s);
        AlertManagerInstance.WriteAlertStorePrevious(s,[]);
        // await Delay(FrameTimeMS);
    }

    public RemoveMenuItem(menuItems: ExplorationMenuItemData[]) {
        for (var menuItemData of menuItems) {
            for (var menuItem of this.allMenuItems) {
                if (menuItemData.MenuItemName == menuItem.MenuItemName)
                    this.allMenuItems.splice(this.allMenuItems.indexOf(menuItem), 1);
            }
        }
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


