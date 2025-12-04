using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools.Creators
{
    public class Enums
    {
        public enum CharacterStatTypeEnum
        {
            Unknown,
            Strength,
            Dexterity,
            Perception,
            WeaponSkill,
            Dodge,
            Evasion,
            WeaponSkillHit,
            WeaponSkillDmg,
            Speed,
            BattleSpeed,
            baseSpeed,
            equipedWeapon,
            ArmourRating,
            Health,
        }
    }

    public enum BattleMoveIntendedTargetEnum
    {
        Unknown,
        Self,
        Ally,
        Enemy,
        Item,
    }

    public enum EffectTypeEnum
    {
        Unknown,
        Damage,
        Destroy,
        Heal,
        Restore,
    }

    public enum BattleMoveTypesEnum
    {
        Unknown,
        Attack,
        Heal,
    }
}
