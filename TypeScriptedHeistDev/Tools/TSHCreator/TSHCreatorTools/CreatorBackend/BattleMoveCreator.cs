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
    internal class BattleMoveCreator : CreatorCore
    {
        TSHBattleMoveCreator battleMoveCreatorWindow;
        public BattleMoveCreator(TSHBattleMoveCreator battleMoveCreatorWindow, MetadataCreator metadataCreator)
            : base(metadataCreator)
        {
            this.battleMoveCreatorWindow = battleMoveCreatorWindow;
        }


        protected override void OnCreateData()
        {
            BattleMoveData data = battleMoveCreatorWindow.CreateBattleMoveData();
            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);
        }
    }
}
