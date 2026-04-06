import { PlayerCharacterUIPanel } from "./PlayerCharacterUIPanel"

export class UIGeneralManager{
    public PlayerUIPanel: PlayerCharacterUIPanel;

    public constructor(){
        this.PlayerUIPanel = new PlayerCharacterUIPanel();
    }
    public InitializeUI(){
        //this.PlayerUIPanel.OnPanelOpen();
    }
}