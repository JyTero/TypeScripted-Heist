//import { MenuObject } from "./MenuObject";
import { MenuItemBase } from "../MenuItemBase";
import { MenuObjectBase } from "../MenuObjectBase";
import { FlagManager, IsDebug } from "../MainPageInitialisation";
import { Sprite } from "../Canvas/Sprite";
import { ExplorationMenuItemData } from "../DataTypes/MenuItemDataType";
import { SceneBaseData } from "../DataTypes/SceneDataType";
import { Color } from "../Tools/Color";
import { ItemBase } from "../Items/ItemBase";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { BuildItemHandmade } from "../JsonInput/DataToObjectBuilders";
import { DebugWindowInstance } from "../DebugPageInitialisation";

export abstract class SceneBase {
    public SceneName: string = "";
    public SceneType: SceneTypesEnumHandmade;
    // sceneMenuItems: MenuItemBase[] = [];
    public BackgroundColor: Color;
    public MenuObject: MenuObjectBase; //Kept here to maybe add scene spesific options to combat ("Shoot chandelier down")

    public SceneSprites: Sprite[] = [];
    public SceneItems: ItemBase[] = [];

    protected abstract SceneSpsificStartUp(): void;
    protected abstract SceneSpesificMain(): void;
    protected abstract SceneSpesificExit(): void;
    //public BuildMenuItems(): MenuItemBase[] { return [] }

    constructor(data: SceneBaseData) {
        this.SceneName = data.SceneName;
        this.SceneType = this.StringToSceneType(data.SceneType);
        this.BackgroundColor = data.SceneBackgroundColor
        if (data.SceneItems != undefined)
            this.BuildSceneItems(data);
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

        if(IsDebug)
            DebugWindowInstance.OnSceneOpen(this);

        // const menuSelection = await this.GetMenuInput();
        // this.HandleMenuSelection(menuSelection);
        //Call spesific, general method within to 
        // await this.DoTheMenu();
    };

    public OnSceneEnd() {
        this.SceneSpesificExit();
    }
    protected PrepareGraphics(sceneData: SceneBaseData) {
        this.BackgroundColor = sceneData.SceneBackgroundColor;
    }


    public BuildMenuItem(MenuItemData: ExplorationMenuItemData): MenuItemBase {
        const newMenuItem: MenuItemBase = new MenuItemBase(MenuItemData);
        return newMenuItem;

    }
    private BuildSceneItems(data: SceneBaseData) {
        for (var itemData of data.SceneItems) {
            var i = BuildItemHandmade(itemData);
            var posData = data.SceneItemLocationDatas[data.SceneItems.indexOf(itemData)];
            i.ItemSprite.SetSpritePosScaleDataValues(posData.positionX, posData.positionY, posData.scaleX, posData.scaleY);
            //i.ItemSprite.SpritePosScaleData = data.SceneItemLocationDatas[data.SceneItems.indexOf(itemData)];
            i.parentScene = this;
            this.SceneItems.push(i);
            this.SceneSprites.push(i.ItemSprite);
        }
    }

    public RemoveSceneItem(item: ItemBase) {
        this.MenuObject.RemoveMenuItem(item.ItemMenuItems)
        this.SceneItems.splice(this.SceneItems.indexOf(item), 1);
        this.SceneSprites.splice(this.SceneSprites.indexOf(item.ItemSprite),1);
    }
    protected AdjustFlags(menuItem: MenuItemBase) {
        for (const flagToChange of menuItem.MenuItemFlagsToChange) {
           FlagManager.ChangeFlagValue(flagToChange);
        }
    }


    public IsSceneLoadingReady(): boolean {
        for (var item of this.SceneItems) {
            if (!item.ItemLoadingReady)
                return false;
        }
        return true;
    }
}