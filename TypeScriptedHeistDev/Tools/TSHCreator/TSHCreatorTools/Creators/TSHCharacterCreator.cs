using System;
using System.Diagnostics;
using System.Text.Json;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public partial class TSHCharacterCreator : CreatorBase
    {
        private string battleDataFolderPathUnderRoot = "Weapon";
        ComboBoxHandler comboBoxHandler;

        public TSHCharacterCreator()
        {
            InitializeComponent();


        }

        public override void OnCreatorWindowOpen()
        {
            base.OnCreatorWindowOpen();

            metadataCreator = MetadataCreatorTool;
            selectImage = SelectImage;
            comboBoxHandler = new(SelectWeaponComboBox);

            SelectWeaponComboBox.DropDownStyle = ComboBoxStyle.DropDownList;

            BuildWeaponsFromData();

        }

        private void BuildWeaponsFromData()
        {
            string completeJsonPath = Path.Combine(Paths.Instance.DataFolderPath(), battleDataFolderPathUnderRoot);
            foreach (string file in Directory.GetFiles(completeJsonPath, "*.json"))
            {
                string jsonContent = File.ReadAllText(file);
                WeaponData? data = JsonSerializer.Deserialize<WeaponData>(jsonContent);
                if (data != null)
                    SelectWeaponComboBox.Items.Add(data.DataDevName);
            }
        }

        private void CreateCharacterDataButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Creating Character Json");

            CreateData();
        }

        protected override void OnCreateData()
        {
            base.OnCreateData();

            CharacterData data = new CharacterData
            {

                CharacterName = NameInput.Text,
                CharcterFaction = (int)factionNumericInput.Value,
                CharacterStrength = (int)StrengthInput.Value,
                CharacterDexterity = (int)DexterityInput.Value,
                CharacterPerception = (int)PerceptionInput.Value,
                CharacterWeaponSkill = (int)WeaponSkillInput.Value,
                CharacterDodge = (int)DodgeInput.Value,
                CharacterBaseSpeed = (int)BaseSpeedInput.Value,
                CharacterArmour = (int)ArmourRatingInput.Value,
                CharaterEquipedWeapon = SelectWeaponComboBox.SelectedItem.ToString(),
                CharacterImagePath = SelectImage.SelectedImageName, 

            };
            data = InsertMetadata(data);

            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);
        }

        protected override void DeserialiseData(string jsonContent)
        {
            try
            {
                CharacterData BMData = JsonSerializer.Deserialize<CharacterData>(jsonContent);
                if (BMData != null)
                {
                    Console.WriteLine("Success: " + BMData.CharacterName);
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


        private async void FillFormFields(CharacterData characterData)
        {
            NameInput.Text = characterData.CharacterName;
            factionNumericInput.Value = characterData.CharcterFaction;
            StrengthInput.Value = characterData.CharacterStrength;
            DexterityInput.Value = characterData.CharacterDexterity;
            PerceptionInput.Value = characterData.CharacterPerception;
            WeaponSkillInput.Value = characterData.CharacterWeaponSkill;
            BaseSpeedInput.Value = characterData.CharacterBaseSpeed;
            ArmourRatingInput.Value = characterData.CharacterArmour;
            comboBoxHandler.LoadSelectionData(characterData.CharaterEquipedWeapon);

            string path = await Task.Run(() => FindImagePath(characterData.CharacterImagePath));

            SelectImage.DisplayImage(path);

            metadataCreator.MetadataDevNameInputField.Text = characterData.DataDevName;
            metadataCreator.MetadataTypeField.Text = characterData.DataType;
        }

        private void LoadDataButton_Click(object sender, EventArgs e)
        {
            LoadData();
           
        }

        private void SelectImage_HandleDestroyed(Object sender, EventArgs e)
        {

        }
    }
}
