import { CharacterEnum } from "../../Assets/DataJsons/CharacterEnum";
import { DataTypesEnum } from "../../Assets/DataJsons/DataTypesEnum";
import { WeaponEnum } from "../../Assets/DataJsons/WeaponEnum";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { IsDebug, JsonHandlerInstance } from "../MainPageInitialisation";
import { WeaponItem } from "../Items/WeaponItem/WeaponItem";
import { ItemsEnumHandmade } from "../../Assets/ItemsEnumHandmade";
import { ItemBase } from "../Items/ItemBase";
import { FragileGlassItem, WallArtAltGramp, WallArtBayek } from "../Items/ItemData/ItemDatasHandmade";
import { PlayerCharacter } from "../PlayerCharacter";

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
export function BuildItemHandmade(itemEnum: ItemsEnumHandmade): ItemBase {
  switch (itemEnum) {
    case ItemsEnumHandmade.WallArtBayek:
      return new ItemBase(WallArtBayek);
    case ItemsEnumHandmade.WallArtAltGramp:
      return new ItemBase(WallArtAltGramp);
    case ItemsEnumHandmade.FragileGlassItem:
      return new ItemBase(FragileGlassItem);
    case ItemsEnumHandmade.Character_Amalia:
      return BuildCharacter(CharacterEnum.Character_Amalia);
    case ItemsEnumHandmade.Character_Michelle:
      return BuildCharacter(CharacterEnum.Character_Michelle);
    case ItemsEnumHandmade.Character_Bob:
      return BuildCharacter(CharacterEnum.Character_Bob);
  }

}