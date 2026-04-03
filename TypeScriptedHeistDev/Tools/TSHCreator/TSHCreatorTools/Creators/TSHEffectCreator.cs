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
using TSHCreatorTools.CreatorBackend;
using TSHCreatorTools.dataClasses;
using TSHCreatorTools.Helpers;
using static TSHCreatorTools.Creators.Enums;

namespace TSHCreatorTools.Creators
{
    public partial class TSHEffectCreator : CreatorBaseForm
    {
        private ComboBoxHandler targetStatComboBox;
        private ComboBoxHandler effectTypeComboBox;
        private EffectCreator effectCreator;
        //private ComboBoxHandler target
        public TSHEffectCreator()
        {
            InitializeComponent();
            metadataCreator = metadataCreator1;
            targetStatComboBox = new(EffectTargetStatComboBox);
            effectTypeComboBox = new(EffectTypeComboBox);
            effectCreator = new EffectCreator(this, metadataCreator);


        }


        public override void OnCreatorWindowOpen()
        {
            base.OnCreatorWindowOpen();
            SetUpTargetStatsComboBox();
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

            effectCreator.CreateData();
        }

        //protected override void OnCreateData()
        //{
        //    base.OnCreateData();

        //    EffectData data = new EffectData
        //    {
        //        DataDevName = metadataCreator.MetadataDevNameInputField.Text,
        //        DataType = metadataCreator.MetadataTypeField.Text,

        //        EffectName = EffectNameInput.Text,
        //        TargetStat = EffectTargetStatComboBox.SelectedIndex,
        //        TargetEffectType = EffectTypeComboBox.SelectedIndex,
        //        EffectPotency = (int)PotencyNumericUpDown.Value,
        //        EffectDuration = (int)DurationNumericUpDown.Value,
        //    };
        //    data = InsertMetadata(data);

        //    string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
        //    Debug.WriteLine(jsonOutput);

        //    CreateOutputJsonFile(jsonOutput);

        //}

        public EffectData CreateEffectData()
        {
            EffectData data = new EffectData
            {
                DataDevName = metadataCreator.MetadataDevNameInputField.Text,
                DataType = metadataCreator.MetadataTypeField.Text,

                EffectName = EffectNameInput.Text,
                TargetStat = EffectTargetStatComboBox.SelectedItem.ToString(),
                TargetEffectType = EffectTypeComboBox.SelectedItem.ToString(),
                EffectPotency = (int)PotencyNumericUpDown.Value,
                EffectDuration = (int)DurationNumericUpDown.Value,
            };
            data = InsertMetadata(data);
            return data;
        }

        private void TargetComboBox_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void LoadEffectDataButton_Click(object sender, EventArgs e)
        {
            LoadData();

        }

        protected override void DeserialiseData(string jsonContent)
        {
            try
            {
                EffectData effectData = JsonSerializer.Deserialize<EffectData>(jsonContent);
                if (effectData != null)
                {
                    Console.WriteLine("Success: " + effectData.EffectName);
                    FillFormFields(effectData);
                }
                else
                    Console.WriteLine("Mistakes happen");
            }
            catch (JsonException)
            {
                MessageBox.Show("Invalid .json file. The file may not be a proper .json file, or it's ivalid format for the selected data", "Invalid Json File");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Unexpected error:\n" + ex.Message, "Error");
            }
        }

        private void FillFormFields(EffectData effectData)
        {
            EffectNameInput.Text = effectData.EffectName;
            //Handle battle moves
            targetStatComboBox.LoadSelectionData(effectData.TargetStat);
            effectTypeComboBox.LoadSelectionData(effectData.TargetEffectType);

            PotencyNumericUpDown.Value = effectData.EffectPotency;
            DurationNumericUpDown.Value = effectData.EffectDuration;

            metadataCreator.MetadataDevNameInputField.Text = effectData.DataDevName;
            metadataCreator.MetadataTypeField.Text = effectData.DataType;
        }

    }
}

