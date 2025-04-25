//import { MenuObject } from "./MenuObject";

export class MenuItem {
    MenuItemName: string ="";
    MenuItemNumber: number =-1;
    MenuItemText: string ="";
    MenuItemSelectionDescription: string ="";
    MenuItemSetFlags: Boolean[] =[]; //Flags this many item changes
    MenuItemReadFlags: Boolean[]=[];

    //NextMenuObject: MenuObject = null;
    
    //No constructor, build manually (Ideally would get data from centralised place, like text from localisation file)
}