import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { EffectTypeEnumEnum } from "../../Assets/DataJsons/EffectTypeEnumEnum";
import { Effect } from "../Effects/EffectBase";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { CharacterStat } from "../Items/Character/CharacterStat";
import { BattleMove } from "./BattleMove";
import { CombatCharacter } from "./CombatCharacter";

export class EnemyCombatAI {
    private thisCharacter: CharacterBase;
    private battleActions: BattleAction[] = [];
    private lowHpHealingMoveScoreMultiplier: number;
    private canThisCharacterHeal: boolean = false;

    private lowHPThreshold = 3;     //Used as a divisioner (hp / lowHPThreshold)
    private discourageUnwantedBattleACtions: number = -100;
    constructor(character: CharacterBase) {
        this.thisCharacter = character;
        // character.CharacterSheet.BattleMoves.forEach(bm => {
        //     this.allBattleMoves.push(new BattleAction(bm));

        // });
        character.InitialiseCombatAI(this);

    }
    
    private GiveAllMovesBaseScore() {
        this.battleActions.forEach(bm => {
            bm.BMDefaultScore();
        });
    }
    public SetUpBattleActions(characters: CombatCharacter[], battleMoves: BattleMove[]) {
        for (var character of characters) {
            if (character.Character == this.thisCharacter)
                continue;
            battleMoves.forEach(bm => {
                const ba = new BattleAction(this.thisCharacter, bm, character);
                this.battleActions.push(ba);
            });
        }
        this.GiveAllMovesBaseScore();
        this.SetQuickFlags();
    }

    private SetQuickFlags() {
        //canHeal?
        this.battleActions.forEach(bm => {
            bm.BattleMove.MoveEffects.forEach(effect => {
                if (effect.GetEffectType() == EffectTypeEnumEnum.Heal || effect.GetEffectType() == EffectTypeEnumEnum.Restore) {
                    this.canThisCharacterHeal = true;
                }
            });
        });
    }

    //How about choosing targets
    public ChooseBattleAction(): BattleAction {

        this.battleActions.forEach(ba => {

            this.ScoreBAByTraits(ba);
            this.ScoreBAByPersonalityAxes(ba);

            this.DiscourageHealingEnemies(ba);
            this.DiscourageHurtingAllies(ba);
        });

        this.battleActions.sort((a, b) => b.Score - a.Score);

        return this.battleActions[0];

        //LowOwnHP REQUIRES SELFHEAL BM
        // const hp = this.thisCharacter.GetStat(CharcterStatTypeEnum.Health)?.Value;
        // if (hp != undefined)
        //     if (hp < hp / this.lowHPThreshold)
        //         if (this.canThisCharacterHeal)
        //             this.LowHPScoring();

        //Other scoring affecting things, (Own/enemy/ally positions, potential targets, other traits)

    }

    private ScoreBAByTraits(ba: BattleAction) {
        this.thisCharacter.GetTraits()?.forEach(trait => {
            trait.AdjustBAScoreByTraits(ba);
        });

    }
    private ScoreBAByPersonalityAxes(ba:BattleAction){
        this.thisCharacter.GetPersonalityAxes().forEach(axis => {
            axis.AdjustBAScoreByPersonalityAxis(ba);
        });
    }

    private DiscourageHurtingAllies(ba: BattleAction) {
        if (ba.TargetIsAlly && !ba.BattleMove.IsHealingMove)
            ba.Score += this.discourageUnwantedBattleACtions;

    }
    private DiscourageHealingEnemies(ba: BattleAction) {
        if (ba.TargetIsAlly && !ba.BattleMove.IsHealingMove)
            ba.Score += this.discourageUnwantedBattleACtions;
    }
    private LowHPScoring() {
        this.battleActions.forEach(bm => {
            if (bm.BattleMove.IsHealingMove)
                bm.Score *= this.lowHpHealingMoveScoreMultiplier;
        });
    }
}

export class BattleAction {
    public ActionOwner: CharacterBase;
    public BattleMove: BattleMove;
    public ActionTarget: CombatCharacter;
    public Score: number;
    public TargetIsAlly: boolean = false;

    constructor(actionOwner: CharacterBase, bm: BattleMove, target: CombatCharacter) {
        this.ActionOwner = actionOwner;
        this.BattleMove = bm;
        this.ActionTarget = target;
        this.Score = 0;
        if (target.Character.CharacterSheet.Faction == actionOwner.CharacterSheet.Faction)
            this.TargetIsAlly = true;

    }
    public BMDefaultScore() {
        var score = 0;

        this.BattleMove.MoveEffects.forEach(effect => {
            if (effect.EffectDuration == 0)
                score += effect.Potency;
            else {
                const durMult = (effect.Potency / 10) + 1
                score += effect.Potency + durMult;
            }
        this.Score = score;
        });
    }
}