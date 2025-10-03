using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools.dataClasses
{
    public class CharacterData : BaseData
    {
        public string CharacterName { get; set; }
        public int CharcterFaction { get; set; }
        public int CharacterStrength { get; set; }
        public int CharacterDexterity { get; set; }
        public int CharacterPerception { get; set; }
        public int CharacterWeaponSkill { get; set; }
        public int CharacterDodge { get; set; }
        public int CharacterBaseSpeed { get; set; }
        public int CharacterArmour { get; set; }
        public string CharaterEquipedWeapon { get; set; }
        public string CharacterImagePath { get; set; }
    }
}
