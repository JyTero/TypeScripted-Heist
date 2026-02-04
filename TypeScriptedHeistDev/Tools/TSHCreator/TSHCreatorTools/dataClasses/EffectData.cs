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
        public string TargetStat {  get; set; }
        public string TargetEffectType { get; set; }
        public int EffectPotency { get; set; }
        public int EffectDuration { get; set; }
    }
}
