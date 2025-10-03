using System;
using System.Diagnostics;
using System.Text.Json;
using System.Windows.Forms;

namespace TSHCreatorTools
{
    public partial class TSHCreator : Form
    {
        //public ToolSaveDataManager ToolSaveDataManagerVar = new();
        private string assetsFolderPath = "";
        private string jsonFolderPath = "";
        private string imageFolderPath = "";

        public TSHCreator()
        {
            InitializeComponent();
            ToolSaveDataManager.Instance.InitialiseToolSettings();
            LoadAssetsRootPaht();
        }

        private void OpenWeaponCreatorButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Opening Weapon Creator");
            if (IsJsonFolderPathValid())
            {
                var weaponCreator = new TSHWeaponCreator();
                weaponCreator.OnCreatorWindowOpen(jsonFolderPath);
                weaponCreator.ShowDialog();
            }
        }

        private void OpenBattleMoveCreatorButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Opening Battle Move Creator");

            var battleMoveCreator = new TSHBattleMoveCreator();
            battleMoveCreator.OnCreatorWindowOpen(jsonFolderPath);
            battleMoveCreator.ShowDialog();

        }

        private bool IsJsonFolderPathValid()
        {
            jsonFolderPath = AssetsFolderPathInput.Text;

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
                    assetsFolderPath = openFileDialog.SelectedPath;
                    jsonFolderPath = Path.Combine(assetsFolderPath, "DataJsons");
                    imageFolderPath = Path.Combine(assetsFolderPath, "Img");
                    AssetsFolderPathInput.Text = assetsFolderPath;
                }
            }
            SaveAssetsRootPath();
            Debug.WriteLine(AssetsFolderPathInput.Text);
        }

        private void CreateTSEnumFile(string enumName, List<string> folderContentNames)
        {
            string fileName = enumName + "Enum.ts";
            string enumOpen = "export enum " + enumName + "Enum\n{";
            string enumClose = "}";
            string workingPath = Path.Combine(jsonFolderPath, fileName);
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

        private void CreateDataSourceJson(Dictionary<string, List<string>> dataSources, string name)
        {
            string json = JsonSerializer.Serialize(dataSources, new JsonSerializerOptions { WriteIndented = true });
            string fileName = name + ".json";
            string workingPath = Path.Combine(jsonFolderPath, fileName);
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
            AssetsFolderPathInput.Text = assetsFolderPath;

        }

        private void button2_Click(object sender, EventArgs e)
        {
            var characterCreator = new TSHCharacterCreator();
            Debug.WriteLine("Opening Character Creator");

            characterCreator.OnCreatorWindowOpen(jsonFolderPath);
            characterCreator.ShowDialog();

        }

        private void CreateEnumsForAllDatas()
        {
            DirectoryInfo[] dataTypeFolders = new DirectoryInfo(jsonFolderPath).GetDirectories();

            Dictionary<string, List<string>> dataSources = new();

            List<string> fileNames = new();
            List<string> dataTypeFolderNames = new();

            foreach (DirectoryInfo dataTypeFolder in dataTypeFolders)
            {
                fileNames = [];
                string p = Path.Combine(jsonFolderPath, dataTypeFolder.Name);
                FileInfo[] filesInFolder = new DirectoryInfo(p).GetFiles("*.json");
             
                dataTypeFolderNames.Add(dataTypeFolder.Name);

                foreach (FileInfo file in filesInFolder)
                {
                    fileNames.Add(file.Name);
                }
                CreateTSEnumFile(dataTypeFolder.Name, fileNames);
                dataSources.Add(dataTypeFolder.Name, fileNames);
            }
            CreateTSEnumFile("DataTypes", dataTypeFolderNames);
            CreateDataSourceJson(dataSources, "DataSource");

            //Create something similar to images so that TS can find them easily

            //Get all image subfolders
            DirectoryInfo[] imageTypeFolders = new DirectoryInfo(imageFolderPath).GetDirectories();

            Dictionary<string, List<string>> imageSources = new();

            List<string> imageFolderNames = new();

            foreach (DirectoryInfo imageFolder in imageTypeFolders)
            {
                fileNames = [];
                string p = Path.Combine(imageFolderPath, imageFolder.Name);
                FileInfo[] filesInFolder = new DirectoryInfo(p).GetFiles("*.png");

                imageFolderNames.Add(imageFolder.Name);

                foreach (FileInfo file in filesInFolder)
                {
                    fileNames.Add(file.Name);
                }

                CreateTSEnumFile("Images" + imageFolder.Name, fileNames);
                imageSources.Add(imageFolder.Name, fileNames);

            }
            CreateTSEnumFile("ImageTypes", dataTypeFolderNames);
            CreateDataSourceJson(imageSources, "ImageSources");

        }

        private void TSHCreator_Load(object sender, EventArgs e)
        {

        }
    }
}
