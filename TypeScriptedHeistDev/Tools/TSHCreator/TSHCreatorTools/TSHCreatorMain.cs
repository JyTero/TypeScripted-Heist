using System;
using System.Diagnostics;

namespace TSHCreatorTools
{
    public partial class TSHCreator : WindowBase
    {
        public TSHCreator()
        {
            InitializeComponent();
        }

        private void OpenWeaponCreatorButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Opening Weapon Creator");
            var weaponCreator = new TSHWeaponCreator();
            weaponCreator.ShowDialog();
        }

        private void OpenBattleMoveCreatorButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Opening Battle Move Creator");
            var battleMoveCreator = new TSHBattleMoveCreator();
            battleMoveCreator.ShowDialog();
        }
    }
}
