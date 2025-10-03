using System;
using System.Diagnostics;
using System.Text.Json;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public partial class TSHCharacterCreator : CreatorBase
    {
        private string battleDataFolderPathUnderRoot = "Weapon";

        public TSHCharacterCreator()
        {
            InitializeComponent();
            metadataCreator = MetadataCreatorTool;
            selectImage = SelectImage;

        }

        public override void OnCreatorWindowOpen(string jsonRootPath)
        {
            base.OnCreatorWindowOpen(jsonRootPath);

            SelectWeaponComboBox.DropDownStyle = ComboBoxStyle.DropDownList;

            //load parse manage all that 
            string completeJsonPath = Path.Combine(jsonRootPath, battleDataFolderPathUnderRoot);
            foreach (string file in Directory.GetFiles(completeJsonPath, "*.json"))
            {
                string jsonContent = File.ReadAllText(file);
                WeaponData? data = JsonSerializer.Deserialize<WeaponData>(jsonContent);
                if (data != null)
                    SelectWeaponComboBox.Items.Add(data.DataDevName);
            }

            SelectWeaponComboBox.DisplayMember = "Choose DataDevName";

            SelectWeaponComboBox.SelectedIndex = 0;
        }

        //private void FindImage()
        //{
        //    using (var openFileDialog = new OpenFileDialog())
        //    {
        //        if (Directory.Exists(jsonFolderPath))
        //            openFileDialog.InitialDirectory = jsonFolderPath;
        //        else
        //            openFileDialog.InitialDirectory = Application.StartupPath;

        //        openFileDialog.Filter = "Image files(*.png)|*.png|All files (*.*)|*.*";
        //        //openFileDialog.FilterIndex = 2;
        //        //openFileDialog.RestoreDirectory = true;

        //        if (openFileDialog.ShowDialog() == DialogResult.OK)
        //        {
        //            //jsonFolderPath = openFileDialog.SelectedPath;
        //            //JsonFolderPathInput.Text = jsonFolderPath;
        //            try
        //            {

        //                if (pictureBox1.Image != null)
        //                    pictureBox1.Image.Dispose();

        //                pictureBox1.Image = new Bitmap(openFileDialog.FileName);
        //                pictureBox1.SizeMode = PictureBoxSizeMode.Zoom;
        //            }
        //            catch (Exception exception)
        //            {
        //                MessageBox.Show($"Couldn't load image: {exception.Message}");
        //            }
        //        }
        //    }
        //    //SavePath();

        //    //Many classes might need images, so make its general (Baseclass?)
        //    //Make image reading a generic component (similar to Metadata

        //}

        //private void button1_Click(object sender, EventArgs e)
        //{
        //    FindImage();
        //}

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
                CharacterImagePath = SelectImage.SelectedImageName, //Change to be just the image name

            };
            data = InsertMetadata(data);

            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);
        }
    }
}
