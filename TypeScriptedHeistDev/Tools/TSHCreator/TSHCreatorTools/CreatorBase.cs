using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools
{
    public class CreatorBase : Form
    {
        protected MetadataCreator metadataCreator;
        protected string jsonFolderPath = "";
        public CreatorBase() 
        {
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MinimizeBox = true; 
        }
        public virtual void OnCreatorWindowOpen(string jsonRootPath)
        {
            this.jsonFolderPath = jsonRootPath;
        }
        public bool IsMetadataValid()
        {
            if (metadataCreator.MetadataDevNameInputField.Text == "")
                return false;
            //else if (metadataCreator.MetadataTypeField.Text == "")
            //    return false;
            else
                return true;

        }
        protected void CreateData()
        {
            if (!IsMetadataValid())
                return;
            this.OnCreateData();

        }

        protected virtual void OnCreateData() { }
        protected void CreateOutputJsonFile(string json)
        {
            string shortName = metadataCreator.MetadataDevNameInputField.Text.Replace(" ", "");
            string type = metadataCreator.MetadataTypeField.Text.Replace(" ", "");
            string path = Path.Combine(jsonFolderPath, type, shortName+".json"); 
            //string path = jsonFolderPath + type + "_" + shortName + ".json";
            File.Create(path).Close();
            using (StreamWriter sw = new StreamWriter(path))
            {
                sw.WriteLine(json);
            }
        }
        protected virtual void GetAllJsonInFolder()
        {
            //json base folder

        }
    }
}
