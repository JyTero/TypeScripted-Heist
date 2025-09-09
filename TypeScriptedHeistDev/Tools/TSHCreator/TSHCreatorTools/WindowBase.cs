using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools
{
    public class WindowBase : Form
    {
        protected MetadataCreator metadataCreator;
        public WindowBase() 
        {
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MinimizeBox = true; 
        }

        protected void CreateOutputJson(string type, string name, string json)
        {
            string fileName = type + "_" + name + ".json";
            File.Create(fileName).Close();
            using (StreamWriter sw = File.AppendText(fileName))
            {
                sw.WriteLine(json);
            }
        }
    }
}
