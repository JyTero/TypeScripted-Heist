import { MenuItemBase } from "../MenuItemBase";
import { SceneBase } from "../Scenes/SceneBase";
import { SceneBaseData } from "../DataTypes/SceneDataType";
import { Color } from "../Tools/Color";
import {  } from "../SceneData/MansionApproachData";
import { AlertManager } from "../AlertManager";
import { SceneTypesEnumHandmade } from "../../Assets/SceneTypesEnumHandmade";
import { AlertManagerInstance } from "../MainPageInitialisation";

export class MansionApproachScene extends SceneBase {
   protected SceneSpesificExit(): void {
       throw new Error("Method not implemented.");
   }
    
   public SceneSpsificStartUp(): void {
        this.SceneName = MansionApproachSceneData.SceneName;
        this.PrepareGraphics(MansionApproachSceneData)
    }

   public async SceneSpesificMain() {
       await AlertManagerInstance.WriteAlertStorePrevious("The target is in sight",[]);

    }

}

const MansionApproachSceneData:SceneBaseData ={
    SceneName: "Mansion approach",
    SceneType: SceneTypesEnumHandmade.ExplorationScene.toString(),
    SceneBackgroundColor: new Color(255, 0, 16, 1),
    SceneItems: [],
    SceneItemLocationDatas: []
}


