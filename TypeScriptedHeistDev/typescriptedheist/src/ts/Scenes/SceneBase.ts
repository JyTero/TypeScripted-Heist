//import { MenuObject } from "./MenuObject";
import { ChangeFlagValue } from "../flags";
import { MenuItemBase } from "../MenuItemBase";
import { MenuObjectBase } from "../MenuObjectBase";
import { IsDebug, SceneManagerInstance } from "../MainPageInitialisation";
import { WriteMenuSelection } from "../IOMethods";
import { Sprite } from "../Canvas/Sprite";
import { ExplorationMenuItemDataType } from "../DataTypes/MenuItemDataType";
import { SceneBaseData } from "../DataTypes/SceneDataType";
import { Color } from "../Tools/Color";
import { ItemBase } from "../Items/ItemBase";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";

export class SceneBase {
    public SceneName: string = "";
    public SceneType:SceneTypesEnumHandmade;
    // sceneMenuItems: MenuItemBase[] = [];
    public BackgroundColor: Color;
    public MenuObject: MenuObjectBase; //Kept here to maybe add scene spesific options to combat ("Shoot chandelier down")

    public SceneSprites: Sprite[] = [];
    public SceneItems: ItemBase[];

    public SceneSpsificStartUp(): void { }
    public SceneSpesificMain(): void { }
    public BuildMenuItems(): MenuItemBase[] { return [] }

    constructor(data:SceneBaseData){
        this.SceneName = data.SceneName;
        this.SceneType = this.StringToSceneType(data.SceneType);
        this.BackgroundColor = data.SceneBackgroundColor
        this.PrepareGraphics(data);
    }

    private StringToSceneType(value: string): SceneTypesEnumHandmade {
    if (Object.values(SceneTypesEnumHandmade).includes(value as SceneTypesEnumHandmade)) {
        return value as SceneTypesEnumHandmade;
    }
    throw new Error(`Invalid scene type: ${value} (${this.SceneName})`);
}

    public SceneOnStartUp() {
        // this.MenuObject = new MenuObjectBase([]);
        // this.MenuObject.allMenuItems = this.BuildMenuItems();

        this.SceneSpsificStartUp();
    }
    public async SceneMain() {
        this.SceneSpesificMain();

        // const menuSelection = await this.GetMenuInput();
        // this.HandleMenuSelection(menuSelection);
        //Call spesific, general method within to 
        // await this.DoTheMenu();
    };

    protected PrepareGraphics(sceneData: SceneBaseData) {
        this.BackgroundColor = sceneData.SceneBackgroundColor;
        //this.PrepareSprites(sceneData);
    }

    // private async GetMenuInput(): Promise<number> {
    //     let response: number = 0;
    //     if (this.MenuObject)
    //         response = await this.MenuObject.HandleMenu();
    //     else
    //         console.log("NULL MENU: " + this.SceneName + " scene");
    //     return response;
    // }
    // private HandleMenuSelection(selection: number) {

    //     if (this.MenuObject != null) {

    //         const chosenMenuItem: MenuItemBase = this.MenuObject.validMenuItems[selection - 1];

    //         if (IsDebug)
    //             console.log(`The player chose ${chosenMenuItem.MenuItemName} (${selection})`);

    //         this.AdjustFlags(chosenMenuItem);
    //         WriteMenuSelection(chosenMenuItem.MenuItemSelectionDescription);
    //         SceneManagerInstance.HandleNextScene(this, chosenMenuItem.NextSceneObject); //Move to ScenMain / Move to its own class, guttin base class
    //     }
    //     else
    //         console.log(`sceneMenu ${this.MenuObject} of ${this.SceneName} is null`)
    // }

    public BuildMenuItem(MenuItemData: ExplorationMenuItemDataType): MenuItemBase {
        const newMenuItem: MenuItemBase = new MenuItemBase(MenuItemData);
        return newMenuItem;

    }


    protected AdjustFlags(menuItem: MenuItemBase) {
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

    // public TieMenuItemToSceneObject(menuItemIndex: number, targetScene: SceneBase) {
    //     this.MenuObject?.TieMenuItemToSceneObject(menuItemIndex, targetScene);
    // }
}