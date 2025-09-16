import { BattleMove } from "../BattleSystem/BattleMove";
import { CharacterStat } from "./CharacterStat";
import { CharacterSheetDataType } from "../DataTypes/CharacterSheetDataType";
import { CharacterFaction } from "../Enums";
import { IsDebug, JsonHandlerInstance } from "../initialisation";
import { WeaponItem } from "../Items/WeaponItem/WeaponItem";
import { ItemBase } from "../Items/ItemBase";
import { DataTypesEnum } from "../../Assets/DataJsons/DataTypesEnum";
import { WeaponEnum } from "../../Assets/DataJsons/WeaponEnum";
import { BuildWeapon } from "../JsonInput/DataToObjectBuilders";

export class CharacterSheet {
    public CharacterName: string = "Name Namesson";
    private health: number = 10;
    public AdjustHealth(value: number) {
        this.health = this.health - value;
    }
    public CurrentHealth(): number {
        return this.health;
    }
    public Faction: CharacterFaction = 0; //Enum
    public Strength: CharacterStat = new CharacterStat("Strength");
    public Dexterity: CharacterStat = new CharacterStat("Dexterity");
    public Perception: CharacterStat = new CharacterStat("Perception");
    public WeaponSkill: CharacterStat = new CharacterStat("WeaponSkill");
    public Dodge: CharacterStat = new CharacterStat("Dodge");


    public Evasion: CharacterStat = new CharacterStat("Evasion");
    public WeaponSkillHit: CharacterStat = new CharacterStat("WeaponSkillHit");
    public WeaponSkillDmg: CharacterStat = new CharacterStat("WeaponSkillDmg");
    public Speed: CharacterStat = new CharacterStat("Speed");
    public BattleSpeed: CharacterStat = new CharacterStat("BattleSpeed");

    public baseSpeed: CharacterStat = new CharacterStat("baseSpeed");

    //Weapon = Dagger
    private equipedWeapon: WeaponItem; // Gear, Turn into something proper

    // public WeaponHit: number = 2;
    // public WeaponDamage: number = 1;
    public ArmourRating: number = 15; //Gear, Turn into something proper

    public get BattleMoves(): BattleMove[] {
        return this.battleMoves;
    }
    private battleMoves: BattleMove[] = [];

    public get InventoryItems(): ItemBase[] {
        return this.inventoryItems;
    }
    private inventoryItems: ItemBase[] = [];



    constructor(data: CharacterSheetDataType) {

        this.CharacterName = data.Name;
        this.Faction = data.Faction;
        this.Strength.Value = data.Strength;
        this.Dexterity.Value = data.Dexterity
        this.Perception.Value = data.Perception;
        this.WeaponSkill.Value = data.WeaponSkill;
        this.Dodge.Value = data.Dodge;
        this.baseSpeed.Value = data.BaseSpeed;
        this.ArmourRating = data.ArmourRating;
        this.equipedWeapon = data.CurrentWeapon;

        this.BattleSpeed = this.Dexterity;

        this.SetUpStatSubscribtions();
        this.RecalculateDexterityDerivates();
        this.RecalculateWeaponSkillDerivates();
        this.SetUpBattleMoves();
    }

    public GetEquipedWeapon(): WeaponItem {
        return this.equipedWeapon;
    }
    public ChangeWeapon(weaponEnum: WeaponEnum) {

        const newWeapon = BuildWeapon(weaponEnum);
        newWeapon.BuildWeaponBattleMoves();

        this.PrintAllBattleMoves();
        this.equipedWeapon.BattleMoves.forEach(battleMoveInCurrentWeapon => {
            const i = this.battleMoves.indexOf(battleMoveInCurrentWeapon);
            this.battleMoves.splice(i, 1);
        });
        this.PrintAllBattleMoves();
        newWeapon.BattleMoves.forEach(battleMoveInNewWeapon => {
            this.battleMoves.push(battleMoveInNewWeapon);
        });
        this.PrintAllBattleMoves();

        this.equipedWeapon = newWeapon;
    }

    //DEBUG
    private PrintAllBattleMoves() {
        console.log("All " + this.CharacterName + "'s battle moves:");
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
        this.Speed.Value = this.CalculateSpeed();
        this.Evasion.Value = this.CalculateEvasion();

    }
    private RecalculateWeaponSkillDerivates() {
        this.WeaponSkillHit.Value = this.CalculateWeaponSkillHit();
        this.WeaponSkillDmg.Value = this.CalculateWeaponSkillDmg();
    }
    //Battle Engine
    public GatherBattleMoves() {
        //Base

        //Weapon
        //Others
    }
    //Its own method to adjust damage based on target resistances and vulnerabilities                                                                                    
    public ReceiveDamage(damage: number) {
        this.AdjustHealth(damage);
        if (IsDebug)
            console.log(`${this.CharacterName} HP left: ${this.CurrentHealth()}`);
    }
}