import { BattleMove } from "../BattleSystem/BattleMove";
import { ExplorationMenuItemData } from "./MenuItemDataType";
import { MetaData } from "./MetaData";
import { SpriteData } from "./SpriteLocationDataType";

export interface ItemBaseData extends MetaData {
    ItemName: string;
    ItemMaxHP: number;
    ItemSpriteData:SpriteData,
    ItemSceneMenuItems:ExplorationMenuItemData[],
}

export interface WeaponDatatype extends ItemBaseData {

    BattleMoves: BattleMove[];
    WeaponHit: number;
    WeaponDamage: number;

}