//import { MenuObject } from "./MenuObject";
import { MenuItemBase } from "./MenuItemBase";
import { MenuItemDataType } from "./MenuItemDataType";
import { MenuObjectBase } from "./MenuObjectBase";

export abstract class SceneObjectBase {

    SceneName: string = "";
    sceneMenuItems: MenuItemBase[] = [];
    sceneMenu: MenuObjectBase | null = null;

   
    abstract BuildMenuItems(): MenuItemBase[];
    abstract SceneSpesificMain(): void;
    abstract SceneSpsificStartUp():void;

    SceneOnStartUp(){
        this.sceneMenuItems = this.BuildMenuItems();
        this.sceneMenu = new MenuObjectBase(this.sceneMenuItems);
        this.SceneSpsificStartUp();
    }
    async SceneMain()
    {
        this.SceneSpesificMain();
        await this.DoTheMenu();
    };
    async DoTheMenu() {

        let response: number = 0;
        if (this.sceneMenu)
            response = await this.sceneMenu.RunMenu();
        else
            console.log("NULL MENU: " + this.SceneName + " scene");

       response--;

        this.LoadNextScene(this.sceneMenuItems[response].NextSceneObject);
        //if Scene menu items [result].next menu === menu, run its main
        //else exit cuz nothing to go to
    }

    BuildMenuItem(MenuItemData: MenuItemDataType): MenuItemBase {
        const newMenuItem: MenuItemBase = new MenuItemBase(MenuItemData.MenuItemName, MenuItemData.MenuItemNumber, MenuItemData.MenuItemText, MenuItemData.MenuItemSelectionDescription, MenuItemData.MenuItemReadFlags, MenuItemData.MenuItemWriteFlags);
        return newMenuItem;

    }

    TieMenuItemToSceneObject(menuItemIndex: number, targetScene: SceneObjectBase) {
        this.sceneMenuItems[menuItemIndex].NextSceneObject = targetScene;
    }

    LoadNextScene(sceneObjectBase: SceneObjectBase){
        sceneObjectBase.SceneMain();

    }

}