import { ItemBase } from "./Items/ItemBase";
import { PlayerCharacter } from "./PlayerCharacter";
import { SubWindow } from "./Tools/SubWindow";
import { PageElement } from "./UI/PageElement";

//Will probably evolve into more abstract invetory window
export class PlayerInventory extends SubWindow {

    private iventoryItems: ItemBase[] = [];
    private slotParent: PageElement;

    private inventorySlotRows: number = 3;
    private inventorySlotColumn: number = 3;
    private invetorySlots: InventorySlot[] = [];
    private numberOfInventorySlots: number = 16;
    private numberOfSlotsCreated: number = 0;

    public get InventoryItems(): ItemBase[] {
        const inventory = this.InventoryItems;
        return inventory;
    }

    public constructor() {

        super(`${PlayerCharacter.instance.GetPlayerCharacter().ItemName}'s inventory`, "blankPage");
        this.windowName = `${PlayerCharacter.instance.GetPlayerCharacter().ItemName}'s inventory`;
        this.OpenSubWindow();
    }

    protected override IndividualOnPageOpen(): void {
        this.window.document.body.style.backgroundColor = "green";
        //this.appRoot.Element.style.backgroundColor = "red";
        this.PrepareInventoryDisplay();
    }

    private inventorySlotsParentName: string = "inventorySlotsParent";
    private inventorySlotName: string = "inventorySlot";
    private invetorySlotClassName: string = "InventorySlot"
    private PrepareInventoryDisplay() {
        this.slotParent = this.PDM.CreateNewPageElement("div", this.inventorySlotsParentName);
        this.AppendToRoot(this.slotParent);
        for (var i = 0; i < this.numberOfInventorySlots; i++) {
            var inventorySlot = this.CreateInventorySlot();
            this.invetorySlots.push(inventorySlot);
            this.slotParent.AppendChild(inventorySlot);
        }

    }

    private CreateInventorySlot(): InventorySlot {
        var invSlot = new InventorySlot("div", `inventorySlotName${this.numberOfSlotsCreated}`, this.PDM);
        invSlot.Element.classList.add(this.invetorySlotClassName);
        return invSlot;
    }

    public AddInventoryItem(item: ItemBase) {

    }
    public RemoveInventoryItem(item: ItemBase) {

    }
}

class InventorySlot extends PageElement {
    public slotFull: boolean = false;
}