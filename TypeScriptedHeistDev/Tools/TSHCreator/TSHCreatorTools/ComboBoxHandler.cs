using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public class ComboBoxHandler
    {
        private ComboBox comboBox;
        private BindingList<string> comboBoxContent = new();
        public ComboBoxHandler(ComboBox comboBox)
        {
            this.comboBox = comboBox;
        }


        public void PopulateComboBox(List<string> newContent)
        {
           // if(comboBoxContent != null)
                comboBoxContent.Clear();

            //comboBoxContent = new();
            foreach (string s in newContent)
            {
                if(s != null)
                    comboBoxContent.Add(s);
            }

            comboBox.DataSource = comboBoxContent;
         //  comboBox.DisplayMember = "DataDevName";
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
                i++;
            }
        }

        public void RefreshComboBoxContent()
        {
            if (comboBox.SelectedIndex >= 0)
            {
                string oldWpnName = comboBoxContent[comboBox.SelectedIndex];
                LoadSelectionData(oldWpnName);
            }
            else
                comboBox.SelectedIndex = 0;

        }
    }
}
