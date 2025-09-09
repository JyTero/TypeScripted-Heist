using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TSHCreator
{
    public partial class TSHCreator : Form
    {
        public TSHCreator()
        {
            InitializeComponent();
        }

        private void OpenWeaponCreatorButton_Click(object sender, EventArgs e)
        {
            Console.WriteLine("Opening Weapon Creator");
            var weaponCreator = new TSHWeaponCreator();
            weaponCreator.ShowDialog();
        }

        public void CreateOutputJson(string type, string name, string json)
        {
            string fileName = name + "WeaponData.json";
            File.Create(fileName).Close();
            using (StreamWriter sw = File.AppendText(fileName)) 
            {
                sw.WriteLine(type);
                sw.WriteLine(json);
            }
        }
    }
}
