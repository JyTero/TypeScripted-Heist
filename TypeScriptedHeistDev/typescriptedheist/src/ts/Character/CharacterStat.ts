export class CharacterStat{
    private statName:string = "";
    private statValue:number;

     private subscribers: (() => void)[] = [];

    get StatName(): string{
        return this.statName;
    }

    get Value():number{
        return this.statValue
    }
    set Value(newValue:number){
        this.statValue = newValue;
        for (const cb of this.subscribers) {
            cb();
            }
}

    constructor(name:string){
        this.statName = name;
    }

    SubscribeToOnValueChange(callback: () => void) {
        this.subscribers.push(callback);
    }
}