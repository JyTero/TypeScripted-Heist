//import { MenuObject } from "./MenuObject";
import { ChangeFlagValue } from "./flags";
import { MenuItemBase } from "./MenuItemBase";
import { MenuItemDataType } from "./MenuItemDataType";
import { MenuObjectBase } from "./MenuObjectBase";
import { IsDebug, SceneManager } from "./initialisation";
import { WriteMenuSelection } from "./IOMethods";

export abstract class SceneObjectBase {

    public SceneName: string = "";
    // sceneMenuItems: MenuItemBase[] = [];
    public MenuObject: MenuObjectBase | null = null;


    public abstract SceneSpsificStartUp(): void;
    public abstract SceneSpesificMain(): void;
    public abstract BuildMenuItems(): MenuItemBase[];

    public SceneOnStartUp() {
        this.MenuObject = new MenuObjectBase([]);
        this.MenuObject.allMenuItems = this.BuildMenuItems();

        this.SceneSpsificStartUp();
    }
    public async SceneMain() {
        this.SceneSpesificMain();
        
        const menuSelection = await this.GetMenuInput();
        this.HandleMenuSelection(menuSelection);
        //Call spesific, general method within to 
        // await this.DoTheMenu();
    };


    private async GetMenuInput():Promise<number>{
         let response: number = 0;
            if (this.MenuObject)
                response = await this.MenuObject.HandleMenu();
            else
                console.log("NULL MENU: " + this.SceneName + " scene");
            return response;
    }
    private HandleMenuSelection(selection:number){
        
        if (this.MenuObject != null) {

            const chosenMenuItem:MenuItemBase = this.MenuObject.validMenuItems[selection-1];
            
            if (IsDebug)
                console.log(`The player chose ${chosenMenuItem.MenuItemName} (${selection})`);

            this.AdjustFlags(chosenMenuItem);
            WriteMenuSelection(selection + ". " + chosenMenuItem.MenuItemText, chosenMenuItem.MenuItemSelectionDescription)
            SceneManager.HandleNextScene(this, chosenMenuItem.NextSceneObject); //Move to ScenMain / Move to its own class, guttin base class
        }
        else
            console.log(`sceneMenu ${this.MenuObject} of ${this.SceneName} is null`)
    }

    public BuildMenuItem(MenuItemData: MenuItemDataType): MenuItemBase {
        const newMenuItem: MenuItemBase = new MenuItemBase(MenuItemData);
        return newMenuItem;

    }

    
    private AdjustFlags(menuItem: MenuItemBase) {
        for (const flagToChange of menuItem.MenuItemFlagsToChange) {
            ChangeFlagValue(flagToChange);
        }
    }

    public TieMenuItemToSceneObject(menuItemIndex: number, targetScene: SceneObjectBase) {
        this.MenuObject?.TieMenuItemToSceneObject(menuItemIndex, targetScene);
    }
}