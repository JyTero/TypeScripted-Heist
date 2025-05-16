//import { MenuObject } from "./MenuObject";
import { ChangeFlagValue } from "./flags";
import { MenuItemBase } from "./MenuItemBase";
import { MenuItemDataType } from "./MenuItemDataType";
import { MenuObjectBase } from "./MenuObjectBase";
import { IsDebug } from "./initialisation";
import { WriteMenuSelection } from "./IOMethods";

export abstract class SceneObjectBase {

    public SceneName: string = "";
    // sceneMenuItems: MenuItemBase[] = [];
    public sceneMenu: MenuObjectBase | null = null;


    public abstract BuildMenuItems(): MenuItemBase[];
    public abstract SceneSpesificMain(): void;
    public abstract SceneSpsificStartUp(): void;

    public SceneOnStartUp() {
        this.sceneMenu = new MenuObjectBase([], this);
        this.sceneMenu.MenuOnStartUp();

        this.SceneSpsificStartUp();
    }
    public async SceneMain() {
        this.SceneSpesificMain();
        await this.DoTheMenu();
    };
    public async DoTheMenu() {

        if (this.sceneMenu != null) {
            let response: number = 0;
            if (this.sceneMenu)
                response = await this.sceneMenu.RunMenu();
            else
                console.log("NULL MENU: " + this.SceneName + " scene");
            response--;
            const chosenMenuItem:MenuItemBase = this.sceneMenu.validMenuItems[response];
            
            if (IsDebug)
                console.log(`The player chose ${chosenMenuItem} (${response+1})`);


            this.AdjustFlags(chosenMenuItem);
            WriteMenuSelection(response+1 + ". " + chosenMenuItem.MenuItemText, chosenMenuItem.MenuItemSelectionDescription)
            this.LoadNextScene(chosenMenuItem.NextSceneObject);
        }
        else
            console.log(`sceneMenu ${this.sceneMenu} of ${this.SceneName} is null`)

    }

    public BuildMenuItem(MenuItemData: MenuItemDataType): MenuItemBase {
        const newMenuItem: MenuItemBase = new MenuItemBase(MenuItemData);
        return newMenuItem;

    }


    private LoadNextScene(sceneObjectBase: SceneObjectBase) {
        sceneObjectBase.SceneMain();

    }

    private AdjustFlags(menuItem: MenuItemBase) {
        for (const flagToChange of menuItem.MenuItemFlagsToChange) {
            ChangeFlagValue(flagToChange);
        }
    }

    public TieMenuItemToSceneObject(menuItemIndex: number, targetScene: SceneObjectBase) {
        this.sceneMenu?.TieMenuItemToSceneObject(menuItemIndex, targetScene);
    }
}