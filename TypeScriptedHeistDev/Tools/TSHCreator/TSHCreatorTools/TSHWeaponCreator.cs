using System;
using System.Diagnostics;
using System.Text.Json;
using System.Windows.Forms;

namespace TSHCreatorTools
{
    public partial class TSHWeaponCreator : WindowBase
    {
        public TSHWeaponCreator()
        {
            InitializeComponent();
            metadataCreator = Metadata;
        }

        private void CreateWeaponData_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Creating Weapon Json");

            if (metadataCreator != null && !metadataCreator.IsMetadataValid())
            {
                MessageBox.Show("Please fill out the the Metadata fields before proceding.");
            }

            string name = WeaponNameInput.Text;
            int hit = (int)WeaponHitInput.Value;
            int dmg = (int)WeaponDamageInput.Value;

            WeaponData data = new WeaponData 
            {
                DataDevName = metadataCreator.MetadataDevNameInputField.Text,
                DataType = metadataCreator.MetadataTypeField.Text,

                WeaponName = name,
                WeaponHit = hit,
                WeaponDamage = dmg,
            };
   
            string jsonOutput = JsonSerializer.Serialize(data);
            Debug.WriteLine(jsonOutput);

            string trimmedName = String.Concat(name.Where(c => !Char.IsWhiteSpace(c)));
            CreateOutputJson(metadataCreator.MetadataTypeField.Text, name, jsonOutput);
        }
    }
}
