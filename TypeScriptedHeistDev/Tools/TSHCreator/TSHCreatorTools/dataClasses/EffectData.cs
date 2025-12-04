using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools.dataClasses
{
    public class EffectData : BaseData
    {
        public string EffectName { get; set; }
        public int TargetStat {  get; set; }
        public int TargetEffectType { get; set; }
        public int EffectPotency { get; set; }
        public int EffectDuration { get; set; }
    }
}
