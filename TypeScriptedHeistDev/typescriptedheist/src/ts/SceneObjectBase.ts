//import { MenuObject } from "./MenuObject";
import { ChangeFlagValue } from "./flags";
import { MenuItemBase } from "./MenuItemBase";
import { MenuObjectBase } from "./MenuObjectBase";
import { IsDebug, SceneManagerInstance } from "./initialisation";
import { WriteMenuSelection } from "./IOMethods";
import { Sprite } from "./Canvas/Sprite";
import { MenuItemDataType } from "./DataTypes/MenuItemDataType";
import { SceneDataType } from "./DataTypes/SceneDataType";
import { Color } from "./Tools/Color";

export abstract class SceneObjectBase {

    public SceneName: string = "";
    // sceneMenuItems: MenuItemBase[] = [];
    public MenuObject: MenuObjectBase | null = null;

    public BackgroundColor:Color;
    public SceneSprites: Sprite[] = [];

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

    protected PrepareGraphics(sceneData: SceneDataType){
        this.BackgroundColor = sceneData.SceneBackgroundColor;
        //this.PrepareSprites(sceneData);
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

            this.AdjustFlags(chosenMenuItem);
            WriteMenuSelection(chosenMenuItem.MenuItemSelectionDescription);
            SceneManagerInstance.HandleNextScene(this, chosenMenuItem.NextSceneObject); //Move to ScenMain / Move to its own class, guttin base class
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

    // private PrepareSprites(sceneData: SceneDataType) {
    //     var i = 0;
    //     // if (sceneData) {

    //     //     sceneData.SceneSprites.forEach(sprite => {
    //     //         sprite.SpritePosScaleData = sceneData.SpriteLocationData[i];
    //     //         i++;
    //     //     });
    //     // }
    // }

    public TieMenuItemToSceneObject(menuItemIndex: number, targetScene: SceneObjectBase) {
        this.MenuObject?.TieMenuItemToSceneObject(menuItemIndex, targetScene);
    }
}