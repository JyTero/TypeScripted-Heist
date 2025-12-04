import { MenuItemBase } from "../MenuItemBase";
import { SceneBase } from "../SceneBase";
import { SceneDataType } from "../DataTypes/SceneDataType";
import { Color } from "../Tools/Color";
import { MansionApproachMenuItemData01, MansionApproachMenuItemData02, MansionApproachMenuItemData03, MansionApproachMenuItemData04 } from "../SceneData/MansionApproachData";
import { AlertManager } from "../AlertManager";

export class MansionApproachScene extends SceneBase {
    
   public SceneSpsificStartUp(): void {
        this.SceneName = MansionApproachSceneData.SceneName;
        this.PrepareGraphics(MansionApproachSceneData)
    }

   public async SceneSpesificMain() {
       await AlertManager.Instance.WriteAlertStorePrevious("The target is in sight");

    }

   public BuildMenuItems(): MenuItemBase[] {

        const FenceMenuItem1 = this.BuildMenuItem(MansionApproachMenuItemData01);
        const FenceMenuItem2 = this.BuildMenuItem(MansionApproachMenuItemData02);
        const FenceMenuItem3 = this.BuildMenuItem(MansionApproachMenuItemData03);
        const FenceMenuItem4 = this.BuildMenuItem(MansionApproachMenuItemData04);

        return [FenceMenuItem1, FenceMenuItem2, FenceMenuItem3, FenceMenuItem4];

    }
}

const MansionApproachSceneData:SceneDataType ={
    SceneName: "Mansion approach",
    SceneBackgroundColor: new Color(255,0,16,1),
}


