import { BattleMove } from "./BattleSystem/BattleMove";
import { CharacterBase } from "./Character/CharacterBase";
import { MenuItemBase } from "./MenuItemBase";
import { MenuItemDataType } from "./MenuItemDataType";
import { MenuObjectBase } from "./MenuObjectBase";
import { placeholderScene } from "./Scenes/Placeholders";

export class CombatMenuObject extends MenuObjectBase {
    constructor() {
        super([]);
    }

    public BuildCombatMoveMenuObject(characterInTurn: CharacterBase) {
        var combatMovesMenuItems: MenuItemBase[] = [];
        var moveIndex = 1;
        characterInTurn.CharacterSheet.BattleMoves.forEach(battleMove => {
            const menuItemData: MenuItemDataType = this.MakeCombatMenuItemData(battleMove,moveIndex);
            combatMovesMenuItems.push(new MenuItemBase(menuItemData));
            moveIndex++;
        });
        this.allMenuItems = combatMovesMenuItems;
    }

    private MakeCombatMenuItemData(battleMove:BattleMove, moveIndex:number):MenuItemDataType {
         const combatMoveMenuData : MenuItemDataType =
        {
            MenuItemName: "CombatMove " + battleMove.MoveName,
            MenuItemNumber: moveIndex,
            MenuItemText: battleMove.MoveName,
            MenuItemSelectionDescription: "You " + battleMove.MoveName,
            NextSceneObject: placeholderScene,
            MenuItemRequireAllFlags: [],
            MenuItemRequireAnyFlags: [],
            MenuItemForbiddenAllFlags: [],
            MenuItemForbiddenAnyFlags: [],
            MenuItemFlagsToChange:[],
        }
        return combatMoveMenuData;
    }
}