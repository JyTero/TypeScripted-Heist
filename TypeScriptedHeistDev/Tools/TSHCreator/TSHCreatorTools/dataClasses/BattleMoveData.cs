using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools.dataClasses
{
    internal class BattleMoveData : BaseData
    {
        public string BattleMoveName { get; set; }
        public bool IsRanged { get; set; }
        public float BattleMoveWeaponHitMultiplier { get; set; }
        public float BattleMoveWeaponDamageMultiplier { get; set; }
    }
}
