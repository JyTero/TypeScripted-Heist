import { BattleMove } from "../BattleSystem/BattleMove";
import { ExplorationMenuItemDataType } from "./MenuItemDataType";
import { MetaData } from "./MetaData";
import { SpriteData } from "./SpriteLocationDataType";

export interface ItemBaseData extends MetaData {
    ItemName: string;
    ItemMaxHP: number;
    ItemSpriteData:SpriteData,
    ItemSceneMenuItems:ExplorationMenuItemDataType[],
}

export interface WeaponDatatype extends MetaData {

    BattleMoves: BattleMove[];
    WeaponHit: number;
    WeaponDamage: number;

}