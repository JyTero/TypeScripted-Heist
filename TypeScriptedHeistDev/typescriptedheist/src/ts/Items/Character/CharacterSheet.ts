import { BattleMove } from "../../BattleSystem/BattleMove";
import { CharacterStat } from "./CharacterStat";
import { CharacterSheetDataType } from "../../DataTypes/CharacterSheetDataType";
import { CharacterFaction } from "../../Enums";
import { IsDebug, JsonHandlerInstance } from "../../initialisation";
import { WeaponItem } from "../WeaponItem/WeaponItem";
import { ItemBase } from "../ItemBase";
import { DataTypesEnum } from "../../../Assets/DataJsons/DataTypesEnum";
import { WeaponEnum } from "../../../Assets/DataJsons/WeaponEnum";
import { BBuildWeapon, BuildWeapon } from "../../JsonInput/DataToObjectBuilders";
import { CharacterJson } from "../../JsonInput/CharacterJson";
import { CharacterAttribute } from "./CharacterAttributes";
import { CharacterBase } from "./CharacterBase";
import { CharcterStatTypeEnum } from "../../../Assets/DataJsons/CharcterStatTypeEnum";

export class CharacterSheet{
    // public CharacterName: string = "Name Namesson";
    // private health: number = 10;
    // private AdjustHealth(value: number) {
    //     this.health = this.health + value;
    // }
    // public CurrentHealth(): number {
    //     return this.health;
    // }
    public Faction: CharacterFaction = 0; //Enum
    public Strength: CharacterAttribute;
    public Dexterity: CharacterAttribute;
    public Perception: CharacterAttribute;
    public WeaponSkill: CharacterStat;
    public Dodge: CharacterStat;


    public Evasion: CharacterStat;
    public WeaponSkillHit: CharacterStat;
    public WeaponSkillDmg: CharacterStat;
    public Speed: CharacterStat;
    public BattleSpeed: CharacterStat;

    public baseSpeed: CharacterStat;

    //Weapon = Dagger
    private equipedWeapon: WeaponItem; // Gear, Turn into something proper

    // public WeaponHit: number = 2;
    // public WeaponDamage: number = 1; 
    public ArmourRating: CharacterStat; //Gear, Turn into something proper

    public get BattleMoves(): BattleMove[] {
        return this.battleMoves;
    }
    private battleMoves: BattleMove[] = [];

    public get InventoryItems(): ItemBase[] {
        return this.inventoryItems;
    }
    private inventoryItems: ItemBase[] = [];
    private thisCharacter:CharacterBase;

    constructor(data: CharacterJson, _thisCharacter:CharacterBase) {
            
        this.thisCharacter = _thisCharacter;
        this.Faction = data.CharacterFaction;
        this.Strength = new CharacterAttribute("Strength", data.CharacterStrength,CharcterStatTypeEnum.Strength, _thisCharacter);
        this.Dexterity = new CharacterAttribute("Dexterity", data.CharacterDexterity, CharcterStatTypeEnum.Dexterity, _thisCharacter);
        this.Perception = new CharacterAttribute("Perception", data.CharacterPerception, CharcterStatTypeEnum.Perception, _thisCharacter);
        this.WeaponSkill = new CharacterStat("Weapon skill", data.CharacterWeaponSkill, 100, CharcterStatTypeEnum.WeaponSkill, _thisCharacter);
        this.Dodge = new CharacterStat("Dodge", data.CharacterDodge, 100, CharcterStatTypeEnum.Dodge, _thisCharacter);
        this.baseSpeed = new CharacterStat("BaseSpeed", data.CharacterBaseSpeed, 100, CharcterStatTypeEnum.baseSpeed, _thisCharacter);
        this.ArmourRating = new CharacterStat("Armour Rating", data.CharacterArmour, 100, CharcterStatTypeEnum.ArmourRating, _thisCharacter);
        this.equipedWeapon = BBuildWeapon(data.CharaterEquipedWeapon);

        this.BattleSpeed = this.Dexterity;

        this.Speed = new CharacterStat("Speed", 0, 100, CharcterStatTypeEnum.Speed, _thisCharacter);
        this.Evasion = new CharacterStat("Evasion", 0, 100, CharcterStatTypeEnum.Evasion, _thisCharacter);

        this.WeaponSkillHit = new CharacterStat("Weapon Skill HIt", 0, 100, CharcterStatTypeEnum.WeaponSkillHit, _thisCharacter);
        this.WeaponSkillDmg = new CharacterStat("Weapon SkilL Damage", 0, 100, CharcterStatTypeEnum.WeaponSkillDmg, _thisCharacter);

        this.SetUpStatSubscribtions();
        this.RecalculateDexterityDerivates();
        this.RecalculateWeaponSkillDerivates();
        this.SetUpBattleMoves();
    }

    public GetEquipedWeapon(): WeaponItem {
        return this.equipedWeapon;
    }
    public ChangeWeaponEnm(weaponEnum: WeaponEnum) {

        const newWeapon = BuildWeapon(weaponEnum);
        this.ChangeWeapon(newWeapon);

        //newWeapon.BuildWeaponBattleMoves();

        // this.PrintAllBattleMoves();
        // this.equipedWeapon.BattleMoves.forEach(battleMoveInCurrentWeapon => {
        //     const i = this.battleMoves.indexOf(battleMoveInCurrentWeapon);
        //     this.battleMoves.splice(i, 1);
        // });
        // this.PrintAllBattleMoves();
        // newWeapon.BattleMoves.forEach(battleMoveInNewWeapon => {
        //     this.battleMoves.push(battleMoveInNewWeapon);
        // });
        // this.PrintAllBattleMoves();

        // this.equipedWeapon = newWeapon;
    }
    public ChangeWeaponItm(weapon:WeaponItem){
        this.ChangeWeapon(weapon);
    }

    private ChangeWeapon(weapon:WeaponItem){
        //newWeapon.BuildWeaponBattleMoves();

        this.PrintAllBattleMoves();
        this.equipedWeapon.BattleMoves.forEach(battleMoveInCurrentWeapon => {
            const i = this.battleMoves.indexOf(battleMoveInCurrentWeapon);
            this.battleMoves.splice(i, 1);
        });
        this.PrintAllBattleMoves();
        weapon.BattleMoves.forEach(battleMoveInNewWeapon => {
            this.battleMoves.push(battleMoveInNewWeapon);
        });
        this.PrintAllBattleMoves();

        this.equipedWeapon = weapon;
    }
    //DEBUG
    private PrintAllBattleMoves() {
        console.log("All " + this.thisCharacter.ItemName + "'s battle moves:");
        if (this.battleMoves.length === 0)
            console.log("empty");
        else {
            this.battleMoves.forEach(battleMove => {
                console.log(battleMove.MoveName);
            });
        }
    }
    private SetUpStatSubscribtions() {
        this.Dexterity.SubscribeToOnValueChange(() => this.RecalculateDexterityDerivates());
        this.WeaponSkill.SubscribeToOnValueChange(() => this.RecalculateWeaponSkillDerivates());

    }
    private SetUpBattleMoves() {
        //TODO: Default BattleMoves avalable to all, (Melee, runaway)
        this.equipedWeapon.BattleMoves.forEach(battleMove => {
            this.battleMoves.push(battleMove);
        });
    }
    private CalculateWeaponSkillHit(): number {
        return (this.WeaponSkill.Value + this.equipedWeapon.WeaponHit) / 10;
    }
    private CalculateWeaponSkillDmg(): number {
        return (this.WeaponSkill.Value + this.equipedWeapon.WeaponDamage) / 10;
    }
    private CalculateSpeed(): number {
        return this.baseSpeed.Value + (this.Dexterity.Value / 10);
    }
    private CalculateEvasion(): number {
        return (((this.Dexterity.Value + this.Speed.Value) / 10) + 1) * this.Dodge.Value;
    }

    private RecalculateDexterityDerivates() {
        this.Speed.SetValue(this.CalculateSpeed());
        this.Evasion.SetValue(this.CalculateEvasion());

    }
    private RecalculateWeaponSkillDerivates() {
        this.WeaponSkillHit.SetValue(this.CalculateWeaponSkillHit());
        this.WeaponSkillDmg.SetValue(this.CalculateWeaponSkillDmg());
    }
    //Battle Engine
    public GatherBattleMoves() {
        //Base

        //Weapon
        //Others
    }
    //Its own method to adjust damage based on target resistances and vulnerabilities                                                                                    
    public ReceiveDamage(damage: number) {
        this.thisCharacter.Health.DamageStat(damage);
        if (IsDebug)
            console.log(`${this.thisCharacter.ItemName} HP left: ${this.thisCharacter.Health.Value}`);
    }
}