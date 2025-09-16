using System;
using System.Diagnostics;
using System.Text.Json;
using System.Windows.Forms;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public partial class TSHWeaponCreator : CreatorBase
    {
        private List<BattleMoveData> allBattleMoves = new();
        private string battleDataFolderPathUnderRoot = "BattleMove";

        public TSHWeaponCreator()
        {
            InitializeComponent();
            metadataCreator = Metadata;
        }

        public override void OnCreatorWindowOpen(string jsonRootPath)
        {
            base.OnCreatorWindowOpen(jsonRootPath);

            //load parse manage all that 
            string completeJsonPath = Path.Combine(jsonRootPath,battleDataFolderPathUnderRoot);
            foreach (string file in Directory.GetFiles(completeJsonPath, "*.json"))
            {
                string jsonContent = File.ReadAllText(file);
                BattleMoveData? data = JsonSerializer.Deserialize<BattleMoveData>(jsonContent);
                if(data != null)
                    allBattleMoves.Add(data);
            }

            battleMovesCheckedList.DataSource = allBattleMoves;
            battleMovesCheckedList.DisplayMember = "DataDevName";
        }

        private void CreateWeaponData_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Creating Weapon Json");

            CreateData();
        }

        protected override void OnCreateData()
        {
            string name = WeaponNameInput.Text;
            List<string> battleMoves = new();
            int hit = (int)WeaponHitInput.Value;
            int dmg = (int)WeaponDamageInput.Value;
            //TODO:
            //Deal with reading and saving battle move data
            //Validate data inputs
            //Set output folder to proper subfolder of jsonRoot

            foreach(var item in battleMovesCheckedList.CheckedItems)
            {
                if(item is BattleMoveData move)
                    battleMoves.Add(move.DataDevName);
            }

            WeaponData data = new WeaponData
            {
                DataDevName = metadataCreator.MetadataDevNameInputField.Text,
                DataType = metadataCreator.MetadataTypeField.Text,

                WeaponName = name,
                BattleMoves = battleMoves,
                WeaponHit = hit,
                WeaponDamage = dmg,
            };

            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);
        }
    }
}   
