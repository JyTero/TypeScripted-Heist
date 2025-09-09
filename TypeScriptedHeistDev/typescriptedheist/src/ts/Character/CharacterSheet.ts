import { BattleMove } from "../BattleSystem/BattleMove";
import { CharacterStat } from "./CharacterStat";
import { CharacterSheetDataType } from "../DataTypes/CharacterSheetDataType";
import { CharacterFaction } from "../Enums";
import { WeaponItem } from "../Items/BattleItems/WeaponItem";
import { IsDebug } from "../initialisation";

export class CharacterSheet{
    public CharacterName:string = "Name Namesson";
    private  health:number = 10;
    public AdjustHealth(value:number){
        this.health = this.health-value;
    }
    public CurrentHealth():number {
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
    public EquipedWeapon: WeaponItem; // Gear, Turn into something proper
    // public WeaponHit: number = 2;
    // public WeaponDamage: number = 1;
    public ArmourRating: number = 15; //Gear, Turn into something proper

    private battleMoves: BattleMove[] = [];
    public get BattleMoves(): BattleMove[]{
        return this.battleMoves;
    }


    constructor(data:CharacterSheetDataType){
        
        this.CharacterName = data.Name;
        this.Faction = data.Faction;
        this.Strength.Value = data.Strength;
        this.Dexterity.Value = data.Dexterity
        this.Perception.Value = data.Perception;
        this.WeaponSkill.Value = data.WeaponSkill;
        this.Dodge.Value = data.Dodge;
        this.baseSpeed.Value = data.BaseSpeed;
        this.ArmourRating = data.ArmourRating;
        this.EquipedWeapon = data.CurrentWeapon;

        this.BattleSpeed = this.Dexterity;
        
        this.SetUpStatSubscribtions();
        this.RecalculateDexterityDerivates();
        this.RecalculateWeaponSkillDerivates();
        this.SetUpBattleMoves();
    }
    
    private SetUpStatSubscribtions(){
        this.Dexterity.SubscribeToOnValueChange(() => this.RecalculateDexterityDerivates());
        this.WeaponSkill.SubscribeToOnValueChange(() => this.RecalculateWeaponSkillDerivates());
        
    }
    private SetUpBattleMoves(){
        //TODO: Default BattleMoves avalable to all, (Melee, runaway)
        this.EquipedWeapon.BattleMoves.forEach(battleMove => {
            this.battleMoves.push(battleMove);
        });
    }
    private CalculateWeaponSkillHit():number{
       return (this.WeaponSkill.Value+this.EquipedWeapon.WeaponHit)/10;
    }
    private CalculateWeaponSkillDmg():number{
        return (this.WeaponSkill.Value + this.EquipedWeapon.WeaponDamage) / 10;
    }
    private CalculateSpeed():number{
        return this.baseSpeed.Value + (this.Dexterity.Value / 10);
    }
    private CalculateEvasion():number{
       return (((this.Dexterity.Value + this.Speed.Value) / 10) + 1) * this.Dodge.Value;
    }

    private RecalculateDexterityDerivates(){
        this.Speed.Value = this.CalculateSpeed();
        this.Evasion.Value = this.CalculateEvasion();

    }
    private RecalculateWeaponSkillDerivates(){
        this.WeaponSkillHit.Value = this.CalculateWeaponSkillHit();
        this.WeaponSkillDmg.Value = this.CalculateWeaponSkillDmg();
    }
    //Battle Engine
    public GatherBattleMoves(){
        //Base
        
        //Weapon
        //Others
    }
    //Its own method to adjust damage based on target resistances and vulnerabilities                                                                                    
    public ReceiveDamage(damage:number){
        this.AdjustHealth(damage);
        if(IsDebug)
            console.log(`${this.CharacterName} HP left: ${this.CurrentHealth()}`);
    }
}