import { StatChangedEvent } from "./EventTypes";
export type StatChangedListener = (statChangedEvent:StatChangedEvent) => void;
export type StringChangedListner = (newString: string) => void;