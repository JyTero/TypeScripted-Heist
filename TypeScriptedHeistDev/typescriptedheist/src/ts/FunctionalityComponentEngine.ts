import { FunctionalityComponentsHandmade } from "../Assets/FunctionalityComponentsEnumHandmade";
import { ItemsEnumHandmade } from "../Assets/ItemsEnumHandmade";
import { AlertGroupType, AlertManager } from "./AlertManager";
import { ItemBase } from "./Items/ItemBase";
import { BuildItemHandmade } from "./JsonInput/DataToObjectBuilders";
import { AlertManagerInstance, AudioManager as AudioEngineInstance, CanvasGraphicsInstance } from "./MainPageInitialisation";
import { MenuItemBase } from "./MenuItemBase";
import { PlayerCharacter } from "./PlayerCharacter";
import { SceneBase } from "./Scenes/SceneBase";
import { Color } from "./Tools/Color";

export class FunctionalityComponent {
    public FCName: string;
    public FCEnum: FunctionalityComponentsHandmade;
    public FCData: string[];


    constructor(name: string, functionalityEnum: FunctionalityComponentsHandmade, data: string[]) {
        this.FCName = name;
        this.FCEnum = functionalityEnum;
        this.FCData = data;
    }


}
export class FunctionalityComponentEngine {

    public BuildFunctionalityComponents(source: String, enums: string[], data: string[][]): FunctionalityComponent[] {
        const components: FunctionalityComponent[] = [];
        // for (var i = 0; i < data.length)
        var i = 0;
        for (var componentEnumString of enums) {
            if (Object.values(FunctionalityComponentsHandmade).includes(componentEnumString as FunctionalityComponentsHandmade)) {
                var e = componentEnumString as FunctionalityComponentsHandmade;
                components.push(new FunctionalityComponent(source + componentEnumString, e, data[i]))
                i++;
            }
            else {
                throw console.error(`MenuItem ${source} contains unknown FunctionalityComponent: ${componentEnumString}`);

            }
        }
        return components;

    }
    public RunFunctionalityComponents(fcList: FunctionalityComponent[], scene: SceneBase) {
       // var fcList: FunctionalityComponent[] = menuItem.ItemSelectionFunctionalityComponents;
        var fcIndex = 0;

        for (var fc of fcList) {
            switch (fc.FCEnum) {
                case FunctionalityComponentsHandmade.ChangeCanvasBGColor:
                    this.ChangeCanvasBGColor(fc.FCData);
                    break;
                case FunctionalityComponentsHandmade.ShowDialog:
                    this.ShowDialog(fc.FCData);
                    break;
                case FunctionalityComponentsHandmade.RemoveSceneItemSelf:
                    this.DestroySceneItemSelf(fc.FCData, scene);
                    break;
                case FunctionalityComponentsHandmade.PlaySFX:
                    this.PlaySFX(fc.FCData)
                    break;
                case FunctionalityComponentsHandmade.AddInventoryItem:
                    this.AddInventoryItem(fc.FCData);
                    break;

            }
            fcIndex++;
        }
    }
    // public RunFunctionalityComponents(menuItem: MenuItemBase, scene: SceneBase) {
    //     var fcList: FunctionalityComponentsHandmade[] = menuItem.ItemSelectionFunctionalityComponents;
    //     var fcIndex = 0;

    //     for (var fc of fcList) {
    //         switch (fc) {
    //             case FunctionalityComponentsHandmade.ChangeCanvasBGColor:
    //                 this.ChangeCanvasBGColor(menuItem.ItemSelectionFunctionalityComponentData[fcIndex]);
    //                 break;
    //             case FunctionalityComponentsHandmade.ShowDialog:
    //                 this.ShowDialog(menuItem.ItemSelectionFunctionalityComponentData[fcIndex]);
    //                 break;
    //             case FunctionalityComponentsHandmade.RemoveSceneItemSelf:
    //                 this.DestroySceneItemSelf(menuItem.ItemSelectionFunctionalityComponentData[fcIndex], scene);
    //                 break;
    //             case FunctionalityComponentsHandmade.PlaySFX:
    //                 this.PlaySFX(menuItem.ItemSelectionFunctionalityComponentData[fcIndex])
    //                 break;
    //             case FunctionalityComponentsHandmade.AddInventoryItem:
    //                 this.AddInventoryItem(menuItem.ItemSelectionFunctionalityComponentData[fcIndex]);
    //                 break;

    //         }
    //         fcIndex++;
    //     }
    // }

    private ChangeCanvasBGColor(datas: string[]) {
        const thisData: number[] = this.StringArrayToNumberArray(datas);
        CanvasGraphicsInstance.ChangeBackgroundColor(new Color(thisData[0], thisData[1], thisData[2], thisData[3]));
    }
    private ShowDialog(datas: string[]) {
        AlertManagerInstance.CreateAlertGroup(`${datas[0]}`, AlertGroupType.DialogLine);
        for (var i = 1; i < (datas.length); i++) {
            AlertManagerInstance.AddAlertToGroup(datas[i], AlertGroupType.DialogLine);
        }
        AlertManagerInstance.PrintGroup(AlertGroupType.DialogLine);
    }
    private DestroySceneItemSelf(datas: string[], scene: SceneBase) {
        for (var sceneItem of scene.SceneItems) {
            if (sceneItem.ItemName != datas[0])
                continue;
            if(datas.length == 1)
                sceneItem.DestroySelf();
            else if (
                sceneItem.ItemSprite.SpritePosScaleData.positionX == +datas[1]
                && sceneItem.ItemSprite.SpritePosScaleData.positionY == +datas[2]
                && sceneItem.ItemSprite.SpritePosScaleData.scaleX == +datas[3]
                && sceneItem.ItemSprite.SpritePosScaleData.scaleY == +datas[4]
            ) {
                sceneItem.DestroySelf();
            }

        }
    }
    private PlaySFX(datas: string[]) {
        AudioEngineInstance.PlaySFX(datas[0]);
    }
    private AddInventoryItem(datas: string[]) {
        PlayerCharacter.instance.PlayerInventory.AddInventoryItem(BuildItemHandmade(datas[0] as ItemsEnumHandmade));
    }

    private StringArrayToNumberArray(strings: string[]): number[] {
        var ns: number[] = [];
        for (var s of strings) {
            const n: number = +s;
            ns.push(n);
        }
        return ns;
    }


}