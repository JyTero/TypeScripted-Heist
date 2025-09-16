import { DataTypesEnum } from "../../Assets/DataJsons/DataTypesEnum";
import { WeaponEnum } from "../../Assets/DataJsons/WeaponEnum";
import { JsonHandlerInstance } from "../initialisation";
import { WeaponItem } from "../Items/WeaponItem/WeaponItem";

  export function BuildWeapon(weaponEnum: WeaponEnum): WeaponItem {
        const allWeaponReferences = JsonHandlerInstance.data[DataTypesEnum.Weapon.toString()];
        const weapon = allWeaponReferences.find(w => w.DataDevName === weaponEnum.toString());
        return new WeaponItem(weapon);
    }