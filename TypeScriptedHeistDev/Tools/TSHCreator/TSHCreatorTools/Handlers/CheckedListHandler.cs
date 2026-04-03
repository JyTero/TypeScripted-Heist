using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using TSHCreatorTools.dataClasses;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace TSHCreatorTools.Helpers
{
    public class CheckedListHandler
    {
        private CheckedListBox checkedList;
        private List<BaseData> listContent;

        public CheckedListHandler(CheckedListBox checkedList)
        {
            this.checkedList = checkedList;
        }

        public void PopulateCheckedList(List<BaseData> newContent)
        {
            listContent = new();
            foreach (BaseData data in newContent)
            {
                if (newContent != null)
                    listContent.Add(data);
            }

            checkedList.DataSource = listContent;
            checkedList.DisplayMember = "DataDevName";
        }

        public void LoadSelectionData(List<string> loadedData)
        {
            ClearOldSelectionData();

            foreach (string bm in loadedData)
            {
                for (int i = 0; i < checkedList.Items.Count; i++)
                {

                    BaseData itemBM = (BaseData)checkedList.Items[i];
                    if (bm == itemBM.DataDevName)
                        checkedList.SetItemCheckState(i, CheckState.Checked);

                }
            }
        }

        private void ClearOldSelectionData()
        {
            for (int i = 0; i < checkedList.Items.Count; i++)
            {
                //Set off as part of clearing up old data
                checkedList.SetItemCheckState(i, CheckState.Unchecked);
            }
        }

        public List<string> GetSelectedItems()
        {
            List<string> returnal = new();
            foreach(var s in  checkedList.SelectedItems)
                if(s is BaseData data)
                    returnal.Add(data.DataDevName);
            return returnal;
        }
    }
}
