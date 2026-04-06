import { InteractionSceneData } from "../DataTypes/SceneDataType";
import { CanvasGraphicsInstance, SceneManagerInstance } from "../MainPageInitialisation";
import { Color } from "../Tools/Color";
import { SceneBase } from "./SceneBase";

export class InteractionScene extends SceneBase {
    constructor(data: InteractionSceneData) {
        super(data);

    }


    public SceneSpsificStartUp(): void {
        
    }

    //Run the method
    public SceneSpesificMain(): void {
        CanvasGraphicsInstance.ChangeBackgroundColor(new Color(0,0,0,1));
    }
   protected SceneSpesificExit(): void {
        
    }
    private ReturnToPreviousScene(){
        SceneManagerInstance.ReturnToPreviousScene();
    }
}