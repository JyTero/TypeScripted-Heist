using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools.CreatorBackend
{
    internal class WeaponCreator : CreatorCore
    {
        private TSHWeaponCreator weaponCreatorWindow;
        public WeaponCreator(TSHWeaponCreator weaponCreatorWindow, MetadataCreator metadataCreator)
                : base(metadataCreator)
        {
            this.weaponCreatorWindow = weaponCreatorWindow;
        }

        protected override void OnCreateData()
        {
            base.OnCreateData();

            WeaponData data = weaponCreatorWindow.CreateWeaponData();

            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);
        }
    }
}
