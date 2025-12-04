using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools.dataClasses
{
    public class BasicWorldItemData : BaseData
    {
        public string ItemName { get; set; }
        public int MaxHP { get; set; }
        public string SpriteName { get; set; }
    }
}
