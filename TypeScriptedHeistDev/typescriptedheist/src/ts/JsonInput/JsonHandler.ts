import { IsDebug } from "../MainPageInitialisation";

export class JsonHandler {
    //Get all json files
    
    //private jsonRootFolderPath: string = "./src/Assets/DataJsons";
    //Make private get/set metodit
    public IsJsonDebug = false;
    public JsonDatabase: Record<string, any[]> = {};
    public isJsonReady:boolean = false;
    public BeginJsonLoading(){
        this.BuildJsonDatabase();
      //  this.BuildImageDatabase();
    }


    private async BuildJsonDatabase() {
        if (typeof window != "undefined") {
            const fest = await fetch("./src/Assets/DataJsons/DataSource.json").then(r => r.json());

            console.log(fest.toString());
            
            for (const [category, files] of Object.entries(fest)) {
                this.JsonDatabase[category] = await this.LoadJsonCategory(category, files as string[]);
            }
            console.log(this.JsonDatabase);
            this.isJsonReady = true;
        }
    }

        private async LoadJsonCategory(category: string, files: string[]): Promise<any[]> {
        const results: any[] = [];
          for (const file of files) {
            const path = `./src/Assets/DataJsons/${category}/${file}`;
            if(IsDebug && this.IsJsonDebug)
                console.log("Attempting to get " + path);
            const json = await fetch(path).then(r =>r.json());
            if(IsDebug && this.IsJsonDebug)
                console.log("Loaded: " +  json.DataDevName);
            results.push(json);
        }
        return results;
    }

        private async BuildImageDatabase() {
        if (typeof window != "undefined") {
            const fest = await fetch("./src/Assets/DataJsons/ImageSources.json").then(r => r.json());

            console.log(fest.toString());
            
            for (const [category, files] of Object.entries(fest)) {
                this.JsonDatabase[category] = await this.LoadImageCategory(category, files as string[]);
            }
            console.log(this.JsonDatabase);
            this.isJsonReady = true;
        }
    }

        private async LoadImageCategory(category: string, files: string[]): Promise<any[]> {
        const results: any[] = [];
          for (const file of files) {
            const path = `./src/Assets/Img/${category}/${file}`;
            if(IsDebug)
                console.log("Attempting to get " + path);
            const json = await fetch(path).then(r =>r.json());
            if(IsDebug)
                console.log("Loaded: " +  json.DataDevName);
            results.push(json);
        }
        return results;
    }
}