using System;
using System.Diagnostics;
using System.Text.Json;
using System.Windows.Forms;
using TSHCreatorTools.Creators;
using static TSHCreatorTools.Creators.Enums;

namespace TSHCreatorTools
{
    public partial class TSHCreator : Form
    {
        //public ToolSaveDataManager ToolSaveDataManagerVar = new();
        private string assetsFolderPath = "";
        //private string jsonFolderPath = "";
        //private string imageFolderPath = "";

        public TSHCreator()
        {
            InitializeComponent();
            Paths.Initialise();

            ToolSaveDataManager.Instance.InitialiseToolSettings();
            LoadAssetsRootPaht();
        }

        private void OpenWeaponCreatorButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Opening Weapon Creator");
            if (IsJsonFolderPathValid())
            {
                var weaponCreator = new TSHWeaponCreator();
                weaponCreator.OnCreatorWindowOpen();
                weaponCreator.ShowDialog();
            }
        }

        private void OpenBattleMoveCreatorButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Opening Battle Move Creator");

            var battleMoveCreator = new TSHBattleMoveCreator();
            battleMoveCreator.OnCreatorWindowOpen();
            battleMoveCreator.ShowDialog();

        }

        private bool IsJsonFolderPathValid()
        {
            string jsonFolderPath = Paths.Instance.DataFolderPath();

            if (jsonFolderPath == null || jsonFolderPath == "")
            {
                MessageBox.Show("This Creator requires pre existing data.\nPlease enter the path to the root folder for json files!");
                return false;
            }
            else if (Directory.Exists(jsonFolderPath))
            {
                return true;
            }
            else
            {
                MessageBox.Show("This Creator requires pre existing data.\nPlease enter the valid path to the root folder for json files!");
                return false;
            }
        }

        private void FindJsonsRootButton_Click(object sender, EventArgs e)
        {
            using (var openFileDialog = new FolderBrowserDialog())
            {
                if (Directory.Exists(assetsFolderPath))
                    openFileDialog.InitialDirectory = assetsFolderPath;
                else
                    openFileDialog.InitialDirectory = Application.StartupPath;

                //openFileDialog.Filter = "txt files (*.txt)|*.txt|All files (*.*)|*.*";
                //openFileDialog.FilterIndex = 2;
                //openFileDialog.RestoreDirectory = true;

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    Paths.Instance.SetAssetFolderPath(openFileDialog.SelectedPath);
                    SetAssetFolderPath();
                }
            }
            SaveAssetsRootPath();
            Debug.WriteLine(AssetsFolderPathInput.Text);
        }

        private void SetAssetFolderPath()
        {
            AssetsFolderPathInput.Text = assetsFolderPath;
        }

        private void CreateDataSourceJson(Dictionary<string, List<string>> dataSources, string name)
        {
            string json = JsonSerializer.Serialize(dataSources, new JsonSerializerOptions { WriteIndented = true });
            string fileName = name + ".json";
            string workingPath = Path.Combine(Paths.Instance.DataFolderPath(), fileName);
            File.Create(workingPath).Close();
            using (StreamWriter sw = new StreamWriter(workingPath))
            {
                sw.Write(json);
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            CreateEnumsForAllDatas();
        }

        private void SaveAssetsRootPath()
        {
            ToolSaveDataManager.Instance.SetAssetsRootPath(assetsFolderPath);
        }

        private void LoadAssetsRootPaht()
        {
            assetsFolderPath = ToolSaveDataManager.Instance.GetAssetsRootPath();
            //SetAssetFolderPath(assetsFolderPath);
            Paths.Instance.SetAssetFolderPath(assetsFolderPath);
            SetAssetFolderPath();


        }


        //Hideous monster
        private void CreateEnumsForAllDatas()
        {
            DirectoryInfo[] dataTypeFolders = new DirectoryInfo(Paths.Instance.DataFolderPath()).GetDirectories();

            Dictionary<string, List<string>> dataSources = new();

            List<string> fileNames = new();
            List<string> dataTypeFolderNames = new();

            foreach (DirectoryInfo dataTypeFolder in dataTypeFolders)
            {
                fileNames = [];
                string p = Path.Combine(Paths.Instance.DataFolderPath(), dataTypeFolder.Name);
                FileInfo[] filesInFolder = new DirectoryInfo(p).GetFiles("*.json");

                dataTypeFolderNames.Add(dataTypeFolder.Name);

                foreach (FileInfo file in filesInFolder)
                {
                    fileNames.Add(file.Name);
                }
                CreateDataTSEnum(dataTypeFolder.Name, fileNames);
                dataSources.Add(dataTypeFolder.Name, fileNames);
            }
            CreateDataTSEnum("DataTypes", dataTypeFolderNames);
            CreateDataSourceJson(dataSources, "DataSource");

            //Create something similar to images so that TS can find them easily

            //Get all image subfolders
            DirectoryInfo[] imageTypeFolders = new DirectoryInfo(Paths.Instance.SpriteFolderPath()).GetDirectories();

            Dictionary<string, List<string>> imageSources = new();

            List<string> imageFolderNames = new();

            foreach (DirectoryInfo imageFolder in imageTypeFolders)
            {
                fileNames = [];
                string p = Path.Combine(Paths.Instance.SpriteFolderPath(), imageFolder.Name);
                FileInfo[] filesInFolder = new DirectoryInfo(p).GetFiles("*.png");

                imageFolderNames.Add(imageFolder.Name);

                foreach (FileInfo file in filesInFolder)
                {
                    fileNames.Add(file.Name);
                }

                CreateDataTSEnum("Images" + imageFolder.Name, fileNames);
                imageSources.Add(imageFolder.Name, fileNames);

            }
            CreateDataTSEnum("ImageTypes", dataTypeFolderNames);
            CreateDataSourceJson(imageSources, "ImageSources");

            string[] enumList = Enum.GetNames(typeof(CharacterStatTypeEnum));
            BuildTSEnumFromStringList(enumList, "CharcterStatType");
            enumList = Enum.GetNames(typeof (EffectTypeEnum));
            BuildTSEnumFromStringList(enumList, "EffectTypeEnum");

        }
        private void CreateDataTSEnum(string enumName, List<string> folderContentNames)
        {
            string fileName = enumName + "Enum.ts";
            string enumOpen = "export enum " + enumName + "Enum\n{";
            string enumClose = "}";
            string workingPath = Path.Combine(Paths.Instance.DataFolderPath(), fileName);
            string s = "";

            //File.Create(workingPath).Close();
            using (StreamWriter sw = new StreamWriter(workingPath))
            {
                sw.WriteLine(enumOpen);
                foreach (string fileInFolder in folderContentNames)
                {
                    string name = "";
                    if (fileInFolder.Contains(".json"))
                        name = fileInFolder.Replace(".json", "");
                    else if (fileInFolder.Contains(".png"))
                        name = fileInFolder.Replace(".png", "");
                    else
                    {
                        Debug.WriteLine("Unexpected file extension " + fileInFolder + " (Enum " + fileName + ")");
                        name = fileInFolder;
                    }
                    s = " = \"" + name + "\",";
                    sw.WriteLine(name + s);
                }
                sw.WriteLine(enumClose);
            }
        }

        private void BuildTSEnumFromStringList(string[] enumContent, string enumName)
        {
            string fileName = enumName + "Enum.ts";
            string enumOpen = "export enum " + enumName + "Enum\n{";
            string enumClose = "}";
            string workingPath = Path.Combine(Paths.Instance.DataFolderPath(), fileName);
            //string enmunContent = "";
           string workingString = "";

            using (StreamWriter sw = new StreamWriter(workingPath))
            {
                sw.WriteLine(enumOpen);
                foreach (string enumItem in enumContent)
                {
                    //workingString = "";
                    workingString = enumItem + ",";
                    sw.WriteLine(workingString);
                }
                sw.WriteLine(enumClose);

                //sw.Write(workingString);
            }
        }

        private void OpenCharacterCreatorButton_Click(object sender, EventArgs e)
        {
            var characterCreator = new TSHCharacterCreator();
            Debug.WriteLine("Opening Character Creator");

            characterCreator.OnCreatorWindowOpen();
            characterCreator.ShowDialog();
            //How to know when it quits
        }

        private void EffectCreatorButton_Click(object sender, EventArgs e)
        {
            var effectCreator = new TSHEffectCreator();
            Debug.WriteLine("Opening Effect Creator");

            effectCreator.OnCreatorWindowOpen();
            effectCreator.ShowDialog();
        }
    }
}
