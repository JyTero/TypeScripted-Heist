import { CharacterBase } from "./Character/CharacterBase";
import { MenuItemBase } from "./MenuItemBase";
import { MenuItemDataType } from "./MenuItemDataType";
import { MenuObjectBase } from "./MenuObjectBase";
import { placeholderScene } from "./Scenes/Placeholders";

export class TargetMenuObject extends MenuObjectBase{

    constructor() {
        super([]);
    }

    public BuildTargetMenuObject(combatTurnOrder:CharacterBase[]){
        var combatTargetMenuItems: MenuItemBase[] = [];
        var targetIndex = 1;
        combatTurnOrder.forEach(character => {
            const menuItemData: MenuItemDataType = this.MakeTargetMenuItemData(character,targetIndex);
            combatTargetMenuItems.push(new MenuItemBase(menuItemData));
            targetIndex++;
        });
        this.allMenuItems = combatTargetMenuItems;
    }

    private MakeTargetMenuItemData(targetCharacter:CharacterBase,targetIndex:number){
        const combatTargetMenuData : MenuItemDataType=
        {
            MenuItemName: "Combat Target " + targetCharacter.CharacterSheet.CharacterName,
            MenuItemNumber: targetIndex,
            MenuItemText: targetCharacter.CharacterSheet.CharacterName,
            MenuItemSelectionDescription: targetCharacter.CharacterSheet.CharacterName,
            NextSceneObject: placeholderScene,
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        }
        return combatTargetMenuData;
    }
}