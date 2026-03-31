
interface EventBase{
    eventName:string,    
}

export interface StatChangedEvent extends EventBase{
    newValue:number,
    changeAmmount:number,
}
export function NewStatChangedEvent(name:string, nv:number, c:number):StatChangedEvent{
    return {eventName:name, newValue: nv, changeAmmount: c};
}