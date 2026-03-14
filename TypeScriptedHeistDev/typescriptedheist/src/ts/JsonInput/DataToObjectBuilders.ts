import { CharacterEnum } from "../../Assets/DataJsons/CharacterEnum";
import { DataTypesEnum } from "../../Assets/DataJsons/DataTypesEnum";
import { WeaponEnum } from "../../Assets/DataJsons/WeaponEnum";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { IsDebug, JsonHandlerInstance } from "../initialisation";
import { WeaponItem } from "../Items/WeaponItem/WeaponItem";

export function BuildWeapon(weaponEnum: WeaponEnum): WeaponItem {
  const allWeaponReferences = JsonHandlerInstance.JsonDatabase[DataTypesEnum.Weapon.toString()];
  const weapon = allWeaponReferences.find(w => w.DataDevName === weaponEnum.toString());
  return new WeaponItem(weapon);
}
export function BBuildWeapon(weaponEnum: string): WeaponItem {
  const allWeaponReferences = JsonHandlerInstance.JsonDatabase[DataTypesEnum.Weapon.toString()];
  const weapon = allWeaponReferences.find(w => w.DataDevName === weaponEnum.toString());
  return new WeaponItem(weapon);
}

export function BuildCharacter(characterEnum: CharacterEnum): CharacterBase {
  const allCharacters = JsonHandlerInstance.JsonDatabase[DataTypesEnum.Character.toString()];
  const character = allCharacters.find(c => c.DataDevName === characterEnum.toString());
  if (character) {
    return new CharacterBase(character);
  }
  else {
    if (IsDebug)
      console.log("No character found! | " + characterEnum.toString());
    return new CharacterBase(character)
  }
}
