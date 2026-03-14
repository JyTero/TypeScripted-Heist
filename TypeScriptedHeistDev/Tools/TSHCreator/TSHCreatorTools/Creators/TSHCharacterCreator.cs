using System;
using System.Diagnostics;
using System.Text.Json;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public partial class TSHCharacterCreator : CreatorBaseForm
    {
        protected SelectImage selectImage;
        private string weaponFolderPathUnderRoot = "Weapon";

        private ComboBoxHandler comboBoxHandler;
        private CharacterCreator characterCreator;
        public TSHCharacterCreator() : base()
        {
            InitializeComponent();
            metadataCreator = MetadataCreatorTool;
            comboBoxHandler = new(SelectWeaponComboBox);
            characterCreator = new CharacterCreator(this, metadataCreator);
        }

        //class static jsoncoverter

        //public static jsontoCharacter(json file)

        //chatacter = jsoncoverter.jsontoCharacter(file);

        public override void OnCreatorWindowOpen()
        {
            base.OnCreatorWindowOpen();

            selectImage = SelectImage;
            SelectWeaponComboBox.DropDownStyle = ComboBoxStyle.DropDownList;

            BuildWeaponsFromData();

        }

        public void BuildWeaponsFromData()
        {
            string completeJsonPath = Path.Combine(Paths.Instance.DataFolderPath(), weaponFolderPathUnderRoot);
            List<string> weaponNames = new();
            foreach (string file in Directory.GetFiles(completeJsonPath, "*.json"))
            {
                string jsonContent = File.ReadAllText(file);
                WeaponData? data = JsonSerializer.Deserialize<WeaponData>(jsonContent);
                if (data != null)
                {
                    //SelectWeaponComboBox.Items.Add(data.DataDevName);
                    weaponNames.Add(data.DataDevName);
                }
            }
            comboBoxHandler.PopulateComboBox(weaponNames);
        }
        //private void BuildWeaponsFromData()
        //{
        //    string completeJsonPath = Path.Combine(Paths.Instance.DataFolderPath(), weaponFolderPathUnderRoot);
        //    List<string> weaponNames = new();
        //    foreach (string file in Directory.GetFiles(completeJsonPath, "*.json"))
        //    {
        //        string jsonContent = File.ReadAllText(file);
        //        WeaponData? data = JsonSerializer.Deserialize<WeaponData>(jsonContent);
        //        if (data != null)
        //        {
        //            //SelectWeaponComboBox.Items.Add(data.DataDevName);
        //            weaponNames.Add(data.DataDevName);
        //        }
        //    }
        //    comboBoxHandler.PopulateComboBox(weaponNames);
        //}

        private void CreateCharacterDataButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Creating Character Json");

            characterCreator.CreateData();
        }

        //protected override void OnCreateData()
        //{
        //    base.OnCreateData();

        //    CharacterData data = new CharacterData
        //    {

        //        CharacterName = NameInput.Text,
        //        CharcterFaction = (int)factionNumericInput.Value,
        //        CharacterStrength = (int)StrengthInput.Value,
        //        CharacterDexterity = (int)DexterityInput.Value,
        //        CharacterPerception = (int)PerceptionInput.Value,
        //        CharacterWeaponSkill = (int)WeaponSkillInput.Value,
        //        CharacterDodge = (int)DodgeInput.Value,
        //        CharacterBaseSpeed = (int)BaseSpeedInput.Value,
        //        CharacterArmour = (int)ArmourRatingInput.Value,
        //        CharaterEquipedWeapon = SelectWeaponComboBox.SelectedItem.ToString(),
        //        CharacterImagePath = SelectImage.SelectedImageName(),

        //    };
        //    data = InsertMetadata(data);

        //    string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
        //    Debug.WriteLine(jsonOutput);

        //    CreateOutputJsonFile(jsonOutput);
        //}

        public CharacterData CreateCharacterData()
        {
            CharacterData data = new CharacterData
            {

                CharacterName = NameInput.Text,
                CharacterFaction = (int)factionNumericInput.Value,
                CharacterStrength = (int)StrengthInput.Value,
                CharacterDexterity = (int)DexterityInput.Value,
                CharacterPerception = (int)PerceptionInput.Value,
                CharacterWeaponSkill = (int)WeaponSkillInput.Value,
                CharacterDodge = (int)DodgeInput.Value,
                CharacterBaseSpeed = (int)BaseSpeedInput.Value,
                CharacterArmour = (int)ArmourRatingInput.Value,
                CharaterEquipedWeapon = SelectWeaponComboBox.SelectedItem.ToString(),
                CharacterImagePath = SelectImage.SelectedImageName(),

            };
            data = InsertMetadata(data);

            return data;
        }

        //Move this (and handle all others breaking)
        protected override void DeserialiseData(string jsonContent)
        {
            try
            {
                CharacterData characterData = JsonSerializer.Deserialize<CharacterData>(jsonContent);
                if (characterData != null)
                {
                    Console.WriteLine("Success: " + characterData.CharacterName);
                    FillFormFields(characterData);
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
            //BuildWeaponsFromData();

            NameInput.Text = characterData.CharacterName;
            factionNumericInput.Value = characterData.CharacterFaction;
            StrengthInput.Value = characterData.CharacterStrength;
            DexterityInput.Value = characterData.CharacterDexterity;
            PerceptionInput.Value = characterData.CharacterPerception;
            WeaponSkillInput.Value = characterData.CharacterWeaponSkill;
            BaseSpeedInput.Value = characterData.CharacterBaseSpeed;
            ArmourRatingInput.Value = characterData.CharacterArmour;
            comboBoxHandler.LoadSelectionData(characterData.CharaterEquipedWeapon);

            metadataCreator.MetadataDevNameInputField.Text = characterData.DataDevName;
            metadataCreator.MetadataTypeField.Text = characterData.DataType;

            string path = await Task.Run(() => SelectImage.FindImagePath(characterData.CharacterImagePath));
            if (path == null)
                selectImage.DisposeOldPreviewImage();
            else
                SelectImage.DisplayImage(path);
        }

        private void LoadDataButton_Click(object sender, EventArgs e)
        {
            LoadData();

        }

        private void SelectImage_HandleDestroyed(Object sender, EventArgs e)
        {

        }

        private void RefreshWeaponsButton_Click(object sender, EventArgs e)
        {
            BuildWeaponsFromData();
            //comboBoxHandler.RefreshComboBoxContent();
        }

        private void OpenWeaponCreatorButton_Click(object sender, EventArgs e)
        {
            //Copied from TSHCreatorMain
            mainWindow.OpenWeaponCreator();
        }
    }
}
