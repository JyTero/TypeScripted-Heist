import { ItemBase } from "./Items/ItemBase";
import { InitialisationManager } from "./MainPageInitialisation";
import { PlayerCharacter } from "./PlayerCharacter";
import { SubWindow } from "./Tools/SubWindow";
import { PageElement } from "./UI/PageElement";

//Will probably evolve into more abstract invetory window
export class PlayerInventory extends SubWindow {

    private iventoryItems: ItemBase[] = [];
    private slotParent: PageElement;

    private inventorySlotRows: number = 3;
    private inventorySlotColumn: number = 3;
    private allInvetorySlots: InventorySlot[] = [];
    private emptyInventorySlot: InventorySlot[] = [];
    private fullInventorySlots: InventorySlot[] = [];
    private numberOfInventorySlots: number = 6;
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
        //this.appRoot.Element.style.backgroundColor = "red";
        this.PrepareInventoryDisplay();

        //InitialisationManager.PlayerInventoryWindowReady = true;
        InitialisationManager.UIReady(InitialisationManager.PlayerInventoryWindowReady);
    }

    private inventorySlotsParentName: string = "inventorySlotsParent";
    private inventorySlotName: string = "inventorySlot";
    private invetorySlotClassName: string = "InventorySlot"
    private PrepareInventoryDisplay() {
        this.slotParent = this.PDM.CreateNewPageElement("div", this.inventorySlotsParentName);
        this.AppendToRoot(this.slotParent);
        for (var i = 0; i < this.numberOfInventorySlots; i++) {
            var inventorySlot = this.CreateInventorySlot();
            this.allInvetorySlots.push(inventorySlot);
            this.slotParent.AppendChild(inventorySlot);

            if (inventorySlot.isEmpty)
                this.emptyInventorySlot.push(inventorySlot);
            else
                this.fullInventorySlots.push(inventorySlot);
        }

    }

    private CreateInventorySlot(): InventorySlot {
        var invSlot = new InventorySlot("div", `inventorySlotName${this.numberOfSlotsCreated}`, this.PDM);
        invSlot.Element.classList.add(this.invetorySlotClassName);
        return invSlot;
    }

    public AddInventoryItem(item: ItemBase) {
        const slot = this.emptyInventorySlot.pop();
        if (!slot)
            return
        slot.AddItemToSlot(item);
        slot.Element.style.backgroundImage = "url('./src/Assets/Img/character/bag.png')";
    }
    public RemoveInventoryItem(item: ItemBase) {

    }
}

class InventorySlot extends PageElement {
    public isEmpty: boolean = true;
    private itemInSlot: ItemBase;

    public AddItemToSlot(item: ItemBase) {
        this.itemInSlot = item;
    }
}