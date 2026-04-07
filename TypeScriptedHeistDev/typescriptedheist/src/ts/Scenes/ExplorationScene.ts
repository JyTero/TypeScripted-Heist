import { ExplorationMenuItemDataType } from "../DataTypes/MenuItemDataType";
import { ExplorationSceneData } from "../DataTypes/SceneDataType";
import { WriteMenuSelection } from "../IOMethods";
import { FCE, IsDebug, SceneManagerInstance } from "../MainPageInitialisation";
import { MenuItemBase } from "../MenuItemBase";
import { MenuObjectBase } from "../MenuObjectBase";
import { SceneBase } from "./SceneBase"

export class ExplorationScene extends SceneBase {


    constructor(data: ExplorationSceneData) {
        super(data);
        this.MenuObject = new MenuObjectBase([]);
        this.MenuObject.allMenuItems = this.BuildMenuitems(data.MenuItems);
        data.MenuItems

    }

    private BuildMenuitems(menuItemDatas: ExplorationMenuItemDataType[]): MenuItemBase[] {
        var menuItems: MenuItemBase[] = [];
        //Data menuItems
        for (var menuItemData of menuItemDatas) {
            var mi: MenuItemBase = new MenuItemBase(menuItemData);
            menuItems.push(mi);
        }
        //Item menuItems (Objects.. Chairs, characters and the like)
        for (var menuItem of this.SceneItems) {
            if (menuItem.HasMenuItems)
                for (var menuItemData of menuItem.ItemMenuItems) {
                var mi: MenuItemBase = new MenuItemBase(menuItemData);
                menuItems.push(mi);
                }
        }
        return menuItems;
    }

    public SceneSpsificStartUp(): void {
        this.AddSceneSpesificMenuItems();
    }

    private AddSceneSpesificMenuItems(){
        var menuDatas:ExplorationMenuItemDataType[] = SceneManagerInstance.GetSpesificMenuItems(this.SceneItems,this);
        if(menuDatas.length == 0)
            return;
        else{
            for(var menudata of menuDatas){
                var mi:MenuItemBase = new MenuItemBase(menudata);
                this.MenuObject.allMenuItems.push(mi);
            }
        }
    }
    public async SceneSpesificMain() {
        const menuSelection = await this.GetMenuInput();
        this.HandleMenuSelection(menuSelection);
    }

    protected SceneSpesificExit(): void {

    }
    private async GetMenuInput(): Promise<number> {
        let response: number = 0;
        if (this.MenuObject)
            response = await this.MenuObject.HandleMenu();
        else
            console.log("NULL MENU: " + this.SceneName + " scene");
        return response;
    }
    private HandleMenuSelection(selection: number) {

        if (this.MenuObject != null) {

            const chosenMenuItem: MenuItemBase = this.MenuObject.validMenuItems[selection - 1];

            if (IsDebug)
                console.log(`The player chose ${chosenMenuItem.MenuItemName} (${selection})`);

            if (chosenMenuItem.MenuItemFlagsToChange.length != 0)
                this.AdjustFlags(chosenMenuItem);

            WriteMenuSelection(chosenMenuItem.MenuItemSelectionDescription);
            FCE.RunFunctionalityComponents(chosenMenuItem, this)
            SceneManagerInstance.HandleNextScene(this, chosenMenuItem.NextSceneDataReference); //Move to ScenMain / Move to its own class, guttin base class
        }
        else
            console.log(`sceneMenu ${this.MenuObject} of ${this.SceneName} is null`)
    }

}