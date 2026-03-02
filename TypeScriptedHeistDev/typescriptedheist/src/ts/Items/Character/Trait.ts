import { EffectTypeEnumEnum } from "../../../Assets/DataJsons/EffectTypeEnumEnum";
import { BattleAction } from "../../BattleSystem/EnemyCombatAI";
import { Effect } from "../../Effects/EffectBase";

export class Trait {
    public TraitName: string;


    public AdjustBAScoreByTraits(ba: BattleAction) {

    }
}


export class Healer_Trait extends Trait {

    private healBMEffectScoreMultiplier: number = 1.25
    override AdjustBAScoreByTraits(ba: BattleAction): void {
        super.AdjustBAScoreByTraits(ba);

        ba.BattleMove.MoveEffects.forEach(effect => {
            if (effect.GetEffectType() == EffectTypeEnumEnum.Heal || effect.GetEffectType() == EffectTypeEnumEnum.Restore) {
                ba.Score *= this.healBMEffectScoreMultiplier;
            }
        });
    }
}