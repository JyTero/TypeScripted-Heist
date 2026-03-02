import { CharacterBase } from "./Items/Character/CharacterBase";
import { MenuItemDataType } from "./DataTypes/MenuItemDataType";
import { MenuItemBase } from "./MenuItemBase";
import { MenuObjectBase } from "./MenuObjectBase";
import { placeholderScene } from "./Scenes/Placeholders";
import { CombatCharacter } from "./BattleSystem/CombatCharacter";

export class TargetMenuObject extends MenuObjectBase{

    constructor() {
        super([]);
    }

    public BuildTargetMenuObject(combatTurnOrder:CombatCharacter[]){
        var combatTargetMenuItems: MenuItemBase[] = [];
        var targetIndex = 1;
        combatTurnOrder.forEach(combatCharacter => {
            const menuItemData: MenuItemDataType = this.MakeTargetMenuItemData(combatCharacter.Character,targetIndex);
            combatTargetMenuItems.push(new MenuItemBase(menuItemData));
            targetIndex++;
        });
        this.allMenuItems = combatTargetMenuItems;
    }

    private MakeTargetMenuItemData(targetCharacter:CharacterBase,targetIndex:number){
        const combatTargetMenuData : MenuItemDataType=
        {
            MenuItemName: "Combat Target " + targetCharacter.ItemName,
            MenuItemNumber: targetIndex,
            MenuItemText: targetCharacter.ItemName,
            MenuItemSelectionDescription: targetCharacter.ItemName,
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