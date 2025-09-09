using System;
using System.Text.Json;
using System.Windows.Forms;

namespace TSHCreator
{
    public partial class TSHWeaponCreator : Form
    {
        public TSHWeaponCreator()
        {
            InitializeComponent();
        }

        private void CreateWeaponData_Click(object sender, EventArgs e)
        {
            Console.WriteLine("Creating Json");
            string name = WeaponNameInput.Text;
            int hit = (int)WeaponHitInput.Value;
            int dmg = (int)WeaponDamageInput.Value;

            WeaponData data = new WeaponData 
            {
                WeaponName = name,
                WeaponHit = hit,
                WeaponDamage = dmg,
            };
            Console.WriteLine($"Name: {name}, hit: {hit}, dmg: {dmg}");

            Console.WriteLine(JsonSerializer.Serialize(data));
            string jsonOutput = JsonSerializer.Serialize(data);
            Console.WriteLine(jsonOutput);
        }
            //TSHCreator creator = new TSHCreator();
            //creator.CreateOutputJson("Weapon", name, jsonOutput);
    }
}
