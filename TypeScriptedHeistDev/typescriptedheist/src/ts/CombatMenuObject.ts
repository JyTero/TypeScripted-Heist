import { BattleMove } from "./BattleSystem/BattleMove";
import { CharacterBase } from "./Items/Character/CharacterBase";
import { ExplorationMenuItemDataType } from "./DataTypes/MenuItemDataType";
import { MenuItemBase } from "./MenuItemBase";
import { MenuObjectBase } from "./MenuObjectBase";
import { placeholderScene } from "./ScenesLegacy/Placeholders";

export class CombatMenuObject extends MenuObjectBase {
    constructor() {
        super([]);
    }

    public BuildCombatMoveMenuObject(characterInTurn: CharacterBase) {
        var combatMovesMenuItems: MenuItemBase[] = [];
        var moveIndex = 1;
        characterInTurn.CharacterSheet.BattleMoves.forEach(battleMove => {
            const menuItemData: ExplorationMenuItemDataType = this.MakeCombatMenuItemData(battleMove,moveIndex);
            combatMovesMenuItems.push(new MenuItemBase(menuItemData));
            moveIndex++;
        });
        this.allMenuItems = combatMovesMenuItems;
    }

    private MakeCombatMenuItemData(battleMove:BattleMove, moveIndex:number):ExplorationMenuItemDataType {
         const combatMoveMenuData : ExplorationMenuItemDataType =
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