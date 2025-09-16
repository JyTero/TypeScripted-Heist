using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows.Forms;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public partial class TSHBattleMoveCreator : CreatorBase
    {
        public TSHBattleMoveCreator()
        {
            InitializeComponent();
            metadataCreator = Metadata;
        }

        private void CreateBMDataButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Creating BattleMoveData Json");

            CreateData();            
        }

        protected override void OnCreateData()
        {
            string name = BM_NameInput.Text;
            bool isRanged = BM_IsRangedCheckbox.Checked;
            float hitMultiplier = (float)BM_WeaponHitMultiplierInput.Value;
            float dmgMultiplier = (float)BM_WeaponDamageMultiplierInput.Value;

            BattleMoveData data = new BattleMoveData
            {
                DataDevName = metadataCreator.MetadataDevNameInputField.Text,
                DataType = metadataCreator.MetadataTypeField.Text,

                BattleMoveName = name,
                IsRanged = isRanged,
                BattleMoveWeaponHitMultiplier = hitMultiplier,
                BattleMoveWeaponDamageMultiplier = dmgMultiplier,
            };

            string jsonOutput = JsonSerializer.Serialize(data);
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);
        }
    }
    
}
