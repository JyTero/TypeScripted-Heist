export class JsonHandler {
    //Get all json files
    
    //private jsonRootFolderPath: string = "./src/Assets/DataJsons";
    //Make private get/set metodit
    public data: Record<string, any[]> = {};
    public isJsonReady:boolean = false;
    public BeginJsonLoading(){
        this.GetJsonLocations();
    }

    private async GetJsonLocations() {
        if (typeof window != "undefined") {
            const fest = await fetch("./src/Assets/DataJsons/DataSource.json").then(r => r.json());

            
            for (const [category, files] of Object.entries(fest)) {
                this.data[category] = await this.LoadCategory(category, files as string[]);
            }
            console.log(this.data);
            this.isJsonReady = true;
        }
    }

        private async LoadCategory(category: string, files: string[]): Promise<any[]> {
        const results: any[] = [];
          for (const file of files) {
            const path = `./src/Assets/DataJsons/${category}/${file}`;
            const json = await fetch(path).then(r =>r.json());
            results.push(json);
        }
        return results;
    }

    // public async ReadJson() {
    //     if (typeof window !== "undefined") {
    //         const path: string = "./src/Assets/DataJsons/BattleMoves/BattleMove_MoneyMoves.json";

    //         // Running in browser
    //         const response = await fetch(path);
    //         const jsonContent: string = await response.text();
    //         console.log("Loaded Json Content:" + jsonContent);
    //         const bm: BattleMoveData = JSON.parse(jsonContent) as BattleMoveData;
    //         const s = "Name: " + bm.BattleMoveName + "\DevName: " + bm.DataDevName;
    //         console.log(s);
    //     }
    // }


}