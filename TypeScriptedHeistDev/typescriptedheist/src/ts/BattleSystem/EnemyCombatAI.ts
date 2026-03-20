import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { EffectTypeEnumEnum } from "../../Assets/DataJsons/EffectTypeEnumEnum";
import { Effect } from "../Effects/EffectBase";
import { DebugWindowInstance, IsDebug } from "../MainPageInitialisation";
import { CharacterBase } from "../Items/Character/CharacterBase";
import { CharacterStat } from "../Items/Character/CharacterStat";
import { BattleMove } from "./BattleMove";
import { CombatCharacter } from "./CombatCharacter";

export class EnemyCombatAI {
    private thisCharacter: CharacterBase;
    public battleActions: BattleAction[] = [];
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

        if (IsDebug)
            DebugWindowInstance.ChooseBattleActionDebug(this.thisCharacter, this.battleActions);

        return this.battleActions[0];

        //LowOwnHP REQUIRES SELFHEAL BM
        // const hp = this.thisCharacter.GetStat(CharcterStatTypeEnum.Health)?.Value;
        // if (hp != undefined)
        //     if (hp < hp / this.lowHPThreshold)
        //         if (this.canThisCharacterHeal)
        //             this.LowHPScoring();

        //Other scoring affecting things, (Own/enemy/ally positions, potential targets, other traits)

    }
    private discourageHurtingAlliesReason = "I won't hurt my friends";
    private discourageHealingEnemiesReason = "I won't heal my enemies";
    private lowHPScoringAdjustmentReason = "Low HP, I should heal...";

    private ScoreBAByTraits(ba: BattleAction) {
        this.thisCharacter.GetTraits()?.forEach(trait => {
            trait.AdjustBAScoreByTraits(ba);
        });

    }
    private ScoreBAByPersonalityAxes(ba: BattleAction) {
        this.thisCharacter.GetPersonalityAxes().forEach(axis => {
            axis.AdjustBAScoreByPersonalityAxis(ba);
        });
    }

    private DiscourageHurtingAllies(ba: BattleAction) {
        if (ba.TargetIsAlly && !ba.BattleMove.IsHealingMove) {
            var score = ba.Score + this.discourageUnwantedBattleACtions;
            ba.AdjustScore(score, this.discourageHurtingAlliesReason);
        }
    }
    private DiscourageHealingEnemies(ba: BattleAction) {
        if (!ba.TargetIsAlly && ba.BattleMove.IsHealingMove) {
            var score = ba.Score + this.discourageUnwantedBattleACtions;
            ba.AdjustScore(score, this.discourageHealingEnemiesReason);
        }

    }
    private LowHPScoring() {
        this.battleActions.forEach(bm => {
            if (bm.BattleMove.IsHealingMove) {
                var score = bm.Score * this.lowHpHealingMoveScoreMultiplier;
                bm.AdjustScore(score, this.lowHPScoringAdjustmentReason);
            }
        });
    }

    public BeginTurn() {
        this.battleActions.forEach(ba => {
            ba.ResetBA();
        });

        this.GiveAllMovesBaseScore();
        this.SetQuickFlags();
    }
}

export class BattleAction {
    public ActionOwner: CharacterBase;
    public BattleMove: BattleMove;
    public ActionTarget: CombatCharacter;
    private score: number;
    public get Score() {
        return this.score;
    }

    public ScoringHistory = new Map<number, string>();
    public TargetIsAlly: boolean = false;

    constructor(actionOwner: CharacterBase, bm: BattleMove, target: CombatCharacter) {
        this.ActionOwner = actionOwner;
        this.BattleMove = bm;
        this.ActionTarget = target;
        this.score = 0;
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
            this.score = score;
        });
    }

    public AdjustScore(adjustAmmount: number, changeReason: string) {

        this.score += adjustAmmount;
        this.ScoringHistory.set(adjustAmmount, changeReason);

    }

    public ResetBA(){
        this.score = 0;
        this.ScoringHistory.clear();
    }
}