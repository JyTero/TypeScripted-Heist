using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using TSHCreatorTools.Creators;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools.CreatorBackend
{
    internal class EffectCreator : CreatorCore
    {
        private TSHEffectCreator effectCreatorWindow;
        
        public EffectCreator(TSHEffectCreator effectCreatorWindow, MetadataCreator metadataCreator)
            : base(metadataCreator)
        {
            this.effectCreatorWindow = effectCreatorWindow;
        }

        protected override void OnCreateData()
        {
            base.OnCreateData();

            EffectData data = effectCreatorWindow.CreateEffectData();

            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);

        }
    }
}
