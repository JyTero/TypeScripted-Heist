import { CharacterBase } from "../Items/Character/CharacterBase";
import { CharacterSheet } from "../Items/Character/CharacterSheet";
import { AlertManagerInstance, IsDebug } from "../MainPageInitialisation";
import { CharcterStatTypeEnum } from "../../Assets/DataJsons/CharcterStatTypeEnum";
import { AlertManager } from "../AlertManager";

const attackHitDexMultiplier:number = 1.25;

export function BeginMeleeAttack(attackerChar: CharacterBase, defenderChar:CharacterBase)
{
    const attackerSheet = attackerChar.CharacterSheet;
    const defenderSheet = defenderChar.CharacterSheet;


    if(IsDebug)
        console.log(`${attackerChar.ItemName} tries to melee attack ${defenderChar.ItemName}`); 
    if(AttackerHit(attackerSheet) > DefenderEvasion(defenderSheet)){
        //Hit
        const totalDamage: number = CalculateMeleeDamage(attackerSheet);
        var reducedDamage:number =ArmorDamageReduction(defenderSheet, totalDamage);
        
        if(IsDebug)
            console.log(`${defenderChar.ItemName} is hit for ${totalDamage}, but their amour reduces it to  ${reducedDamage}`);
        AlertManagerInstance.WriteAlertStorePrevious(`${defenderChar.ItemName} is hit for ${totalDamage}, but their amour reduces it to  ${reducedDamage}`,[]); 

        reducedDamage = -Math.abs(reducedDamage);
        //defenderSheet.ReceiveDamage(reducedDamage);
        defenderChar.GetStat(CharcterStatTypeEnum.Health)?.DamageStat(reducedDamage);

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
    const dmgReduction = defender.ArmourRating.Value * (incomingDamage / 100);
    const reducedDmg =  Math.max(0, (incomingDamage - dmgReduction));
    return reducedDmg;
}