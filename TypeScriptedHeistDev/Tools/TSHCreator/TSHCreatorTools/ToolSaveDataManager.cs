using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace TSHCreatorTools
{
    public class ToolSaveDataManager
    {
        private static ToolSaveDataManager _instance;
        public static ToolSaveDataManager Instance => _instance ??= new ToolSaveDataManager();

        private  ToolSettings toolSettings = new();

        private string saveDataFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "ToolSaveData");
        private string settingsFileName = "ToolSettings.json";
        private string settingsPath = "";

        public void InitialiseToolSettings()
        {
            settingsPath = Path.Combine(saveDataFolder, settingsFileName);
            string combinedPath = Path.Combine(saveDataFolder, settingsFileName);

            if (!File.Exists(combinedPath))
            {
                Directory.CreateDirectory(saveDataFolder);
                File.Create(settingsPath).Close();

            }
            string settingsData = File.ReadAllText(Path.Combine(saveDataFolder, settingsFileName));

            if (settingsData == null)
            {
                MessageBox.Show("Couldn't find ToolSettings.json, given path may be invalid or the path does not exsist.\nPath: " + saveDataFolder);
                return;
            }
            if(settingsData != "")
                toolSettings = JsonSerializer.Deserialize<ToolSettings>(settingsData);
        }
        //    private void SavePath(string settingsFileName)
        //    {
        //        if (!Directory.Exists(settingsFolder))
        //            Directory.CreateDirectory(settingsFolder);

        //        string filePath = Path.Combine(settingsFolder, "GameDataPath.txt");

        //        File.Create(filePath).Close();
        //        using (StreamWriter sw = File.AppendText(filePath))
        //        {
        //            sw.WriteLine(jsonFolderPath);
        //        }
        //        Debug.WriteLine("Saved path: " + jsonFolderPath);
        //    }

        public string GetAssetsRootPath()
        {
            return toolSettings.AssetsRootPath;
        }
        public void SetAssetsRootPath(string path)
        {
            toolSettings.AssetsRootPath = path;
            SaveSettingsToFile();
        }

        public string GetRecentImagePath()
        {
            return toolSettings.RecentImagePath;
        }
        public void SetRecentImagePath(string path)
        {
            toolSettings.RecentImagePath = path;
            SaveSettingsToFile();
        }

        private void SaveSettingsToFile()
        {
            string json = JsonSerializer.Serialize(toolSettings, new JsonSerializerOptions { WriteIndented = true });
            using (StreamWriter sw = new StreamWriter(settingsPath))
            {
                sw.Write(json);

            }
        }
    }
}
