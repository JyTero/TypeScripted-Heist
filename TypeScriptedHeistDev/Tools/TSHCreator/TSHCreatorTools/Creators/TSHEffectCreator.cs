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
using static TSHCreatorTools.Creators.Enums;

namespace TSHCreatorTools.Creators
{
    public partial class TSHEffectCreator : CreatorBaseForm
    {
        private ComboBoxHandler targetStatComboBox;
        private ComboBoxHandler effectTypeComboBox;
        //private ComboBoxHandler target
        public TSHEffectCreator()
        {
            InitializeComponent();


        }


        public override void OnCreatorWindowOpen()
        {
            base.OnCreatorWindowOpen();

            metadataCreator = metadataCreator1;

            targetStatComboBox = new(EffectTargetStatComboBox);
            SetUpTargetStatsComboBox();

            effectTypeComboBox = new(EffectTypeComboBox);
            SetUpEffectTypeComboBox();
        }

        private void SetUpTargetStatsComboBox()
        {
            List<string> targetStats = new();
            foreach (string s in Enum.GetNames(typeof(CharacterStatTypeEnum)))
            {
                targetStats.Add(s);
            }
            targetStatComboBox.PopulateComboBox(targetStats);
        }
        private void SetUpEffectTypeComboBox()
        {
            List<string> effectTypes = new();
            foreach (string s in Enum.GetNames(typeof(EffectTypeEnum)))
            {
                effectTypes.Add(s);
            }
            effectTypeComboBox.PopulateComboBox(effectTypes);
        }
        private void TSHEffectCreator_Load(object sender, EventArgs e)
        {

        }

        private void CreateDataButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Creating Effect Json");

            CreateData();
        }

        protected override void OnCreateData()
        {
            base.OnCreateData();

            EffectData data = new EffectData
            {
                DataDevName = metadataCreator.MetadataDevNameInputField.Text,
                DataType = metadataCreator.MetadataTypeField.Text,

                EffectName = EffectNameInput.Text,
                TargetStat = EffectTargetStatComboBox.SelectedIndex,
                TargetEffectType = EffectTypeComboBox.SelectedIndex,
                EffectPotency = (int)PotencyNumericUpDown.Value,
                EffectDuration = (int)DurationNumericUpDown.Value,
            };
            data = InsertMetadata(data);

            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);

        }

        private void TargetComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}

