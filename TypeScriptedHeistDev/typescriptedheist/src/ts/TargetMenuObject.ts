import { CharacterBase } from "./Items/Character/CharacterBase";
import { ExplorationMenuItemDataType } from "./DataTypes/MenuItemDataType";
import { MenuItemBase } from "./MenuItemBase";
import { MenuObjectBase } from "./MenuObjectBase";
import { placeholderScene } from "./ScenesLegacy/Placeholders";
import { CombatCharacter } from "./BattleSystem/CombatCharacter";

export class TargetMenuObject extends MenuObjectBase{

    constructor() {
        super([]);
    }

    public BuildTargetMenuObject(combatTurnOrder:CombatCharacter[]){
        var combatTargetMenuItems: MenuItemBase[] = [];
        var targetIndex = 1;
        combatTurnOrder.forEach(combatCharacter => {
            const menuItemData: ExplorationMenuItemDataType = this.MakeTargetMenuItemData(combatCharacter.Character,targetIndex);
            combatTargetMenuItems.push(new MenuItemBase(menuItemData));
            targetIndex++;
        });
        this.allMenuItems = combatTargetMenuItems;
    }

    private MakeTargetMenuItemData(targetCharacter:CharacterBase,targetIndex:number){
        const combatTargetMenuData : ExplorationMenuItemDataType=
        {
            MenuItemName: "Combat Target " + targetCharacter.ItemName,
            MenuItemNumber: targetIndex,
            MenuItemText: targetCharacter.ItemName,
            MenuItemSelectionDescription: targetCharacter.ItemName,
            NextScene: placeholderScene,
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange: [],
        }
        return combatTargetMenuData;
    }
}