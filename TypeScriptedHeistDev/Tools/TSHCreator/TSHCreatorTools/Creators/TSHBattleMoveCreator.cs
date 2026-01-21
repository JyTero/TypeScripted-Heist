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
using System.Xml.Linq;
using TSHCreatorTools.Creators;
using TSHCreatorTools.dataClasses;
using static TSHCreatorTools.Creators.Enums;

namespace TSHCreatorTools
{
    public partial class TSHBattleMoveCreator : CreatorBaseForm
    {
        private string effectDataFolderName = "Effect";
        private List<EffectData> allEffects = new();
        private List<string> bmTypes = new();
        private CheckedListHandler effectsComboBoxHanlder;
        private ComboBoxHandler bmTypeComboBoxHandler;

        public TSHBattleMoveCreator()
        {
            InitializeComponent();
            metadataCreator = Metadata;
        }

        public override void OnCreatorWindowOpen()
        {
            base.OnCreatorWindowOpen();

            effectsComboBoxHanlder = new CheckedListHandler(EffectsCheckedListBox);
            bmTypeComboBoxHandler = new ComboBoxHandler(BMTypeCombBox);

            BuildListFromEffecData();
            BuildListFromBMTypeEnum();

            effectsComboBoxHanlder.PopulateCheckedList(allEffects.Cast<BaseData>().ToList());
            bmTypeComboBoxHandler.PopulateComboBox(bmTypes);
        }

        private void BuildListFromEffecData()
        {
            string completeJsonPath = Path.Combine(Paths.Instance.DataFolderPath(), effectDataFolderName);
            foreach (string file in Directory.GetFiles(completeJsonPath, "*.json"))
            {
                string jsonContent = File.ReadAllText(file);
                EffectData? data = JsonSerializer.Deserialize<EffectData>(jsonContent);
                if (data != null)
                    allEffects.Add(data);
            }
        }

        private void BuildListFromBMTypeEnum()
        {
            bmTypes = new();
            foreach (string s in Enum.GetNames(typeof(BattleMoveTypesEnum)))
            {
                bmTypes.Add(s);
            }
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


                BattleMoveEffects = effectsComboBoxHanlder.GetSelectedItems(),
                BattleMoveType = bmTypeComboBoxHandler.GetSelectedItem()
            };

            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);
        }

        private void TSHBattleMoveCreator_Load(object sender, EventArgs e)
        {

        }


        protected override void DeserialiseData(string jsonContent)
        {
            try
            {
                BattleMoveData BMData = JsonSerializer.Deserialize<BattleMoveData>(jsonContent);
                if (BMData != null)
                {
                    Console.WriteLine("Success: " + BMData.BattleMoveName);
                    FillFormFields(BMData);
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


        private void FillFormFields(BattleMoveData BMData)
        {
            BM_NameInput.Text = BMData.BattleMoveName;
            BM_IsRangedCheckbox.Checked = BMData.IsRanged;
            BM_WeaponHitMultiplierInput.Value = (Decimal)BMData.BattleMoveWeaponHitMultiplier;
            BM_WeaponDamageMultiplierInput.Value = (Decimal)BMData.BattleMoveWeaponDamageMultiplier;
            metadataCreator.MetadataDevNameInputField.Text = BMData.DataDevName;
            metadataCreator.MetadataTypeField.Text = BMData.DataType;

            FillSelectedEffects(BMData);
        }

        private void FillSelectedEffects(BattleMoveData BMData)
        {
            List<string> selectedItems = new();
            if (BMData.BattleMoveEffects == null)
            {
                BMData.BattleMoveEffects = new List<string>();
                return;

            }
            foreach (string effect in BMData.BattleMoveEffects)
            {
                selectedItems.Add(effect);
            }
            effectsComboBoxHanlder.LoadSelectionData(selectedItems);
        }

        private void LoadMoveDataButton_Click(object sender, EventArgs e)
        {
            LoadData();

        }
    }

}
