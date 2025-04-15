"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuObject = void 0;
const LineReader_1 = require("./LineReader");
class MenuObject {
    constructor(_menuItems) {
        this.menuItems = [];
        this.menuItems = _menuItems;
    }
    HandleMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let playerInputIsValid = false;
            let playerInput = 0;
            while (!playerInputIsValid) {
                this.DisplayMenu();
                playerInput = yield this.GetAndCheckPlayerInput();
                if (playerInput === -1)
                    console.log("Please select a valid option using the number keys.");
                else if (playerInput > this.menuItems.length || playerInput < 1)
                    console.log("Please choose one of the given options with the number keys.");
                else
                    playerInputIsValid = true;
            }
            console.log("The player chose " + playerInput);
            return playerInput;
        });
    }
    DisplayMenu() {
        let i = 1;
        this.menuItems.forEach(element => {
            element.MenuItemNumber = i;
            this.WriteMenuItem(element);
            i++;
        });
    }
    WriteMenuItem(_menuItem) {
        console.log(_menuItem.MenuItemNumber + ". " + _menuItem.MenuItemText);
    }
    GetAndCheckPlayerInput() {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield this.GetConsoleInput();
            let response = parseInt(input, 10);
            if (isNaN(response)) {
                return -1;
            }
            else {
                return response;
            }
        });
    }
    GetConsoleInput() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, LineReader_1.GetPlayerInput)("Choose: ");
        });
    }
}
exports.MenuObject = MenuObject;
//# sourceMappingURL=MenuObject.js.map