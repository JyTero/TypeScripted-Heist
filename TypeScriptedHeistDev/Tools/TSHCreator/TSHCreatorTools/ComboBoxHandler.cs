using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public class ComboBoxHandler
    {
        private ComboBox comboBox;
        private List<string> comboBoxContent;
        public ComboBoxHandler(ComboBox comboBox)
        {
            this.comboBox = comboBox;
        }

        public void PopulateComboBox(List<BaseData> newContent)
        {
            List<string> sl = new();

            foreach (BaseData data in newContent)
            {
                sl.Add(data.DataDevName);
            }

            PopulateComboBox(sl);
            //comboBoxContent = new();
            //foreach (BaseData data in newContent)
            //{
            //    if (newContent != null)
            //        comboBoxContent.Add(data.DataDevName);
            //}

            //comboBox.DataSource = comboBoxContent;
            //comboBox.DisplayMember = "DataDevName";
            //comboBox.SelectedIndex = 0;
        }
        public void PopulateComboBox(List<string> newContent)
        {

            comboBoxContent = new();
            foreach (string s in newContent)
            {
                if (newContent != null)
                    comboBoxContent.Add(s);
            }

            comboBox.DataSource = comboBoxContent;
            comboBox.DisplayMember = "DataDevName";
            comboBox.SelectedIndex = 0;

            comboBox.DropDownStyle = ComboBoxStyle.DropDownList;
        }


        public int GetSelectedItem()
        {
            return comboBox.SelectedIndex;
        }
        public void LoadSelectionData(string selectedItem)
        {
            int i = 0;
            foreach(string data in comboBoxContent)
            {
                if(data == selectedItem)
                {
                    comboBox.SelectedIndex = i;
                }
            }
        }
    }
}
