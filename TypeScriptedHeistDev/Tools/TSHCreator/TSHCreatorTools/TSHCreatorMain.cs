using System;
using System.Diagnostics;
using System.Text.Json;
using System.Windows.Forms;

namespace TSHCreatorTools
{
    public partial class TSHCreator : Form
    {
        private string jsonFolderPath = "";
        private string settingsFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "ToolSaveData");
        public TSHCreator()
        {
            InitializeComponent();
            LoadPath();
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
            jsonFolderPath = JsonFolderPathInput.Text;

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
                if (Directory.Exists(jsonFolderPath))
                    openFileDialog.InitialDirectory = jsonFolderPath;
                else
                    openFileDialog.InitialDirectory = Application.StartupPath;

                //openFileDialog.Filter = "txt files (*.txt)|*.txt|All files (*.*)|*.*";
                //openFileDialog.FilterIndex = 2;
                //openFileDialog.RestoreDirectory = true;

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    jsonFolderPath = openFileDialog.SelectedPath;
                    JsonFolderPathInput.Text = jsonFolderPath;
                }
            }
            SavePath();
            Debug.WriteLine(JsonFolderPathInput.Text);
        }

        private void CreateEnumsForAllDatas()
        {
            //All data types enum
            DirectoryInfo[] dataTypeFolders = new DirectoryInfo(jsonFolderPath).GetDirectories();

            Dictionary<string, List<string>> dataSources = new();

            List<string> folderNames = new();
            foreach (DirectoryInfo dataTypeFolder in dataTypeFolders)
            {
                folderNames.Add(dataTypeFolder.Name);

                string p = Path.Combine(jsonFolderPath, dataTypeFolder.Name);
                FileInfo[] filesInFolder = new DirectoryInfo(p).GetFiles("*.json");

                List<string> fileNames = new();
                foreach (FileInfo file in filesInFolder)
                {
                    fileNames.Add(file.Name);
                }
                CreateTSEnumFile(dataTypeFolder.Name, fileNames);
                dataSources.Add(dataTypeFolder.Name, fileNames);
            }
            CreateTSEnumFile("DataTypes", folderNames);
            CreateDataSourceJson(dataSources);

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
                foreach (string folderName in folderContentNames)
                {
                    string name = folderName.Replace(".json", "");
                    s = " = \"" + name + "\",";
                    sw.WriteLine(name + s);
                }
                sw.WriteLine(enumClose);
            }
        }

        private void CreateDataSourceJson(Dictionary<string, List<string>> dataSources)
        {
            string json = JsonSerializer.Serialize(dataSources, new JsonSerializerOptions { WriteIndented = true });
            string workingPath = Path.Combine(jsonFolderPath, "DataSource.json");
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

        private void SavePath()
        {
           
            
            if(!Directory.Exists(settingsFolder))
                Directory.CreateDirectory(settingsFolder);
            
            string filePath = Path.Combine(settingsFolder, "GameDataPath.txt");

            File.Create(filePath).Close();
            using (StreamWriter sw = File.AppendText(filePath))
            {
                sw.WriteLine(jsonFolderPath);
            }
            Debug.WriteLine("Saved path: " + jsonFolderPath);
        }

        private void LoadPath()
        {
            if (!Directory.Exists(settingsFolder))
                return;

            using StreamReader reader = new(Path.Combine(settingsFolder, "GameDataPath.txt"));

            // Read the stream as a string.
            string text = reader.ReadToEnd().Trim();
            jsonFolderPath = text;
            JsonFolderPathInput.Text = text;

            Debug.WriteLine("Read path: " + text + " ( " + jsonFolderPath + " )");
            }
    }
}
