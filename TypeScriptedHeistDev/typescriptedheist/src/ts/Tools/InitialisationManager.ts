export class InitialisationManager {

    public DebugWindowReady: boolean = false;
    public PlayerInventoryWindowReady: boolean = false;
    private UIinitialisationFlags: boolean[] = [];
    constructor() {
        this.UIinitialisationFlags.push(this.DebugWindowReady, this.PlayerInventoryWindowReady);
    }
    public StillPreparing(): boolean {
        for (var b of this.UIinitialisationFlags) {
            if (b)
                continue;
            else
                return true;
        }
        return false;
    }

    public UIReady(b:boolean){
        this.UIinitialisationFlags[this.UIinitialisationFlags.indexOf(b)] = true;
    }
}