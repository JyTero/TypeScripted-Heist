import { CharacterBase } from "../Character/CharacterBase";
import { CharacterSheet } from "../Character/CharacterSheet";
import { IsDebug } from "../initialisation";

const attackHitDexMultiplier:number = 1.25;

export function BeginMeleeAttack(attackerChar: CharacterBase, defenderChar:CharacterBase)
{
    const attackerSheet = attackerChar.CharacterSheet;
    const defenderSheet =defenderChar.CharacterSheet;

    if(IsDebug)
        console.log(`${attackerSheet.CharacterName} tries to melee attack ${defenderSheet.CharacterName}}`); 
    if(AttackerHit(attackerSheet) > DefenderEvasion(defenderSheet)){
        //Hit
        const totalDamage: number = CalculateMeleeDamage(attackerSheet);
        const reducedDamage = ArmorDamageReduction(defenderSheet, totalDamage);
        if(IsDebug)
            console.log(`${defenderSheet.CharacterName} is hit for ${totalDamage}, but their amour reduces it to  ${reducedDamage}`); 
        defenderSheet.ReceiveDamage(reducedDamage);

    }
    else{
        if(IsDebug)
            console.log(`Missed! (${AttackerHit(attackerSheet)} vs ${DefenderEvasion(defenderSheet)})`);
    }
}

function AttackerHit(attacker: CharacterSheet):number{
    return (attacker.Dexterity.Value * attackHitDexMultiplier) * attacker.WeaponSkillHit.Value;
}
function DefenderEvasion(defender: CharacterSheet):number{
    return defender.Evasion.Value;
}

function CalculateMeleeDamage(attacker: CharacterSheet): number {
    return ((attacker.Strength.Value * 2) / 100) + 0.4 * attacker.WeaponSkillDmg.Value;
}
function ArmorDamageReduction(defender: CharacterSheet, incomingDamage: number): number {
    const dmgReduction = defender.ArmourRating * (incomingDamage / 100);
    return incomingDamage - dmgReduction;
}