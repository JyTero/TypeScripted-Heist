// import { EffectData } from "../DataTypes/EffectDataType";
// import { WriteAlertStorePrevious } from "../IOMethods";
// import { ItemBase } from "../Items/ItemBase";
// import { CharacterStatTypes, EffectBase } from "./EffectBase";

// export class DamageOTEffect extends EffectBase{
  
//     private DamagePerTurn:number;
//     private EffectDuration:number;

//     private effectRemainingTurns:number;


//     async ApplyEffect(target: ItemBase) {
//         //Add self to targets active effects lists (OTEffects)
//         await WriteAlertStorePrevious(`${this.EffectName} has been applied to ${target.ItemName} for ${this.EffectDuration} turns`);
//         target.ReceiveEffect(this);
//         this.effectRemainingTurns = this.EffectDuration;
//         //Battle engine checks combatants effects at the start and end of its turn (Two lists of lists (Pre Turn and its ot,instant etc.))
//         //Reduce time remaining

//     }

//     async TriggerOTEffect(target:ItemBase){
        
//         await WriteAlertStorePrevious(`${target.ItemName} takes damage from ${this.EffectName} (${this.effectRemainingTurns}/${this.EffectDuration} turns)`);

//         const stat = target.GetStat(this.Stat);
//         stat?.AdjustValue(this.DamagePerTurn);
//         this.effectRemainingTurns--;

//         if(this.effectRemainingTurns <= 0)
//             this.OnEffectEnd(target);

//     }

//     OnEffectEnd(target:ItemBase){
//         super.OnEffectEnd(target);
//     }

// }