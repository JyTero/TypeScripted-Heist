using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools
{

    internal class CreatorCore
    {
        protected MetadataCreator metadataCreator;

        public CreatorCore(MetadataCreator metadataCreator)
        {
            this.metadataCreator = metadataCreator;
        }

        public bool IsMetadataValid()
        {
            if (metadataCreator.MetadataDevNameInputField.Text == "")
                return false;
            else if (metadataCreator.MetadataTypeField.Text == "")
                return false;
            else
                return true;

        }
        public void CreateData()
        {
            if (!IsMetadataValid())
                return;
            OnCreateData();

        }

        protected virtual void OnCreateData() { }
        protected virtual void DeserialiseData(string jsonContent) { }

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
    }
}