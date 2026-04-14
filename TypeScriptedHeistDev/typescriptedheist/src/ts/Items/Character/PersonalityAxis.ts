import { PersoanlityAxisEnumH } from "../../../Assets/PersonalityAxisEnumHandmade";
import { BattleAction } from "../../BattleSystem/EnemyCombatAI";
import { ItemBase } from "../ItemBase";

export class PersonalityAxis{
    public axisName: string = "";
    protected defaultValue:number;
    protected currentValue:number;    //Axis values range between -1 to 1
    protected owner: ItemBase;

   public constructor(name:string, value:number, axisType:PersoanlityAxisEnumH, owner:ItemBase){
        this.axisName = name;
        this.defaultValue = value;
        
        owner.AddPersonalityAxisToDictionary(axisType, this);
    }

    public AdjustBAScoreByPersonalityAxis(ba:BattleAction){

    }
}


export class Aggressiveness_PersonalityAxis extends PersonalityAxis {

    override AdjustBAScoreByPersonalityAxis(ba: BattleAction): void {
        super.AdjustBAScoreByPersonalityAxis(ba);

        //IF battle action is dealing damage to enemy
        if(!ba.TargetIsAlly && !ba.BattleMove.IsHealingMove){
            const scoreMultiplier = this.currentValue + 1;
            ba.MultiplyScore(scoreMultiplier,"PersonalityAxis");

        }

    }
}

