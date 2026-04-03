using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public class CreatorBaseForm : Form
    {
        protected MetadataCreator? metadataCreator;
        protected TSHCreatorMain? mainWindow;

        public CreatorBaseForm()
        {
            FormBorderStyle = FormBorderStyle.FixedDialog;
            MaximizeBox = false;
            MinimizeBox = true;
        }

        //public CreatorBaseForm(TSHCreator mainWindow)
        //{
        //    this.mainWindow = mainWindow;

        //}
        public virtual void OnCreatorWindowOpen()
        {
        }
        //public bool IsMetadataValid()
        //{
        //    if (metadataCreator.MetadataDevNameInputField.Text == "")
        //        return false;
        //    else if (metadataCreator.MetadataTypeField.Text == "")
        //        return false;
        //    else
        //        return true;

        //}

        public void SetMainWindow(TSHCreatorMain mw)
        {
            mainWindow = mw;
        }

        protected void CreateData()
        {
            if (!metadataCreator.IsMetadataValid())
                return;
            OnCreateData();

        }

        protected virtual void OnCreateData() { }

        protected T InsertMetadata<T>(T data) where T : BaseData
        {
            data.DataDevName = metadataCreator.MetadataDevNameInputField.Text;
            data.DataType = metadataCreator.MetadataTypeField.Text;
            return data;
        }
        protected void CreateOutputJsonFile(string json)
        {
            string shortName = metadataCreator.MetadataDevNameInputField.Text.Replace(" ", "");
            string type = metadataCreator.MetadataTypeField.Text.Replace(" ", "");
            string path = Path.Combine(Paths.Instance.DataFolderPath(), type, shortName + ".json");
            //string path = jsonFolderPath + type + "_" + shortName + ".json";
            File.Create(path).Close();
            using (StreamWriter sw = new StreamWriter(path))
            {
                sw.WriteLine(json);
            }
        }

        protected void LoadData()
        {
            using (var openFileDialog = new OpenFileDialog())
            {
                openFileDialog.Filter = ".json files(*.json)|*.json|All files (*.*)|*.*";

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        string jsonContent = File.ReadAllText(openFileDialog.FileName);
                        DeserialiseData(jsonContent);

                    }
                    catch (FileNotFoundException)
                    {
                        MessageBox.Show("File not found", "File Not Found");
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
            }
        }

        protected virtual void DeserialiseData(string jsonContent) { }

        protected override void OnFormClosing(FormClosingEventArgs e)
        {
            base.OnFormClosing(e);
            Debug.WriteLine("Closed " + this.Text);
        }

        //private CancellationTokenSource? imageSearchCts;

        //protected async Task<string> BeginImageSearch(string imgName)
        //{
        //    string s = await Task.Run(() => FindImagePath(imgName));
        //    return s;
        //}

        //protected string FindImagePath(string imageName)
        //{
        //    imageSearchCts = new CancellationTokenSource();
        //    var token = imageSearchCts.Token;

        //    int i = 0;
        //    foreach (string file in Directory.EnumerateFiles(Paths.Instance.SpriteFolderPath(),"*.png", SearchOption.AllDirectories))
        //    {
        //        token.ThrowIfCancellationRequested();
        //        i++;

        //        if (Path.GetFileName(file) == imageName)
        //        {
        //            Debug.WriteLine($"Found the image. Searched {i} files.");
        //            return file;
        //        }
        //    }

        //    Debug.WriteLine($"DId not find the image. Searched {i} files.");
        //    return null;
        //}
    }
}
