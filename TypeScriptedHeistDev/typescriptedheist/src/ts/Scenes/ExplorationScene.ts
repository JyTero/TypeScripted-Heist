import { ExplorationMenuItemDataType } from "../DataTypes/MenuItemDataType";
import { ExplorationSceneData } from "../DataTypes/SceneDataType";
import { WriteMenuSelection } from "../IOMethods";
import { IsDebug, SceneManagerInstance } from "../MainPageInitialisation";
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
        var items: MenuItemBase[] = [];
        for (var menuItemData of menuItemDatas) {
            var mi: MenuItemBase = new MenuItemBase(menuItemData);
            items.push(mi);
        }
        return items;
    }

    public SceneSpsificStartUp(): void {

    }

    public async SceneSpesificMain() {
        const menuSelection = await this.GetMenuInput();
        this.HandleMenuSelection(menuSelection);
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
            SceneManagerInstance.HandleNextScene(this, chosenMenuItem.NextSceneDataReference); //Move to ScenMain / Move to its own class, guttin base class
        }
        else
            console.log(`sceneMenu ${this.MenuObject} of ${this.SceneName} is null`)
    }
}