// import { OTEffectData } from "../DataTypes/OTEffectDataType";
// import { ItemBase } from "../Items/ItemBase";
// import { CharacterStatTypes, EffectBase } from "./EffectBase";

// export class HealOTEffect extends EffectBase{
  
//     private DamagePerTurn:number;
//     private EffectLenghtTurns:number;

//     private effectRemainingTurns:number;

//     constructor(otEffectData:OTEffectData){
//         super(otEffectData.DataDevName,otEffectData.EffectName);

//         this.DamagePerTurn = otEffectData.PotencePerTurn;
//         this.EffectLenghtTurns = otEffectData.EffectLenghtTurns;
        
//         this.Stat = CharacterStatTypes.Health;

//     }

//       ApplyEffect(target: ItemBase) {
//         //Add self to targets active effects lists (OTEffects)
//         target.ReceivePreTurnEffect(this);
//         this.effectRemainingTurns = this.EffectLenghtTurns;
//         //Battle engine checks combatants effects at the start and end of its turn (Two lists of lists (Pre Turn and its ot,instant etc.))
//         //Reduce time remaining

//     }

//     TriggerOTEffect(target:ItemBase){
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