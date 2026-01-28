using System;
using System.Diagnostics;
using System.Text.Json;
using System.Windows.Forms;
using System.Xml.Linq;
using TSHCreatorTools.CreatorBackend;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    public partial class TSHWeaponCreator : CreatorBaseForm
    {
        private List<BattleMoveData> allBattleMoves = new();
        private string battleDataFolderName = "BattleMove";

        private WeaponCreator weaponCreator;

        private CheckedListHandler checkedListHandler;

        public TSHWeaponCreator()
        {
            InitializeComponent();
            metadataCreator = Metadata;
        }

        public override void OnCreatorWindowOpen()
        {
            base.OnCreatorWindowOpen();

            checkedListHandler = new CheckedListHandler(battleMovesCheckedList);

            BuildListFromBattleMoveData();
            checkedListHandler.PopulateCheckedList(allBattleMoves.Cast<BaseData>().ToList());

            weaponCreator = new WeaponCreator(this, metadataCreator);
        }

        private void BuildListFromBattleMoveData()
        {
            string completeJsonPath = Path.Combine(Paths.Instance.DataFolderPath(), battleDataFolderName);
            foreach (string file in Directory.GetFiles(completeJsonPath, "*.json"))
            {
                string jsonContent = File.ReadAllText(file);
                BattleMoveData? data = JsonSerializer.Deserialize<BattleMoveData>(jsonContent);
                if (data != null)
                    allBattleMoves.Add(data);
            }
        }


        private void CreateWeaponData_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Creating Weapon Json");

            weaponCreator.CreateData();
        }

        //protected override void OnCreateData()
        //{
        //    base.OnCreateData();

        //    string name = WeaponNameInput.Text;
        //    List<string> battleMoves = new();
        //    int hit = (int)WeaponHitInput.Value;
        //    int dmg = (int)WeaponDamageInput.Value;
        //    //TODO:
        //    //Validate data inputs
        //    //Set output folder to proper subfolder of jsonRoot

        //    foreach (var item in battleMovesCheckedList.CheckedItems)
        //    {
        //        if (item is BattleMoveData move)
        //            battleMoves.Add(move.DataDevName);
        //    }

        //    WeaponData data = new WeaponData
        //    {
        //        WeaponName = name,
        //        BattleMoves = battleMoves,
        //        WeaponHit = hit,
        //        WeaponDamage = dmg,
        //    };

        //    data = InsertMetadata(data);

        //    string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
        //    Debug.WriteLine(jsonOutput);

        //    CreateOutputJsonFile(jsonOutput);
        //}

        public WeaponData CreateWeaponData()
        {
            List<string> battleMoves = new();

            foreach (var item in battleMovesCheckedList.CheckedItems)
            {
                if (item is BattleMoveData move)
                    battleMoves.Add(move.DataDevName);
            }

            WeaponData data = new WeaponData
            {
                WeaponName = WeaponNameInput.Text,
                BattleMoves = battleMoves,
                WeaponHit = (int)WeaponHitInput.Value,
                WeaponDamage = (int)WeaponDamageInput.Value,
            };

            data = InsertMetadata(data);
            return data;
        }

        private void LoadDataButton_Click(object sender, EventArgs e)
        {
            LoadData();
        }

        protected override void DeserialiseData(string jsonContent)
        {
            try
            {
                WeaponData BMData = JsonSerializer.Deserialize<WeaponData>(jsonContent);
                if (BMData != null)
                {
                    Console.WriteLine("Success: " + BMData.WeaponName);
                    FillFormFields(BMData);
                }
                else
                    Console.WriteLine("Mistakes happen");
            }
            catch (JsonException)
            {
                MessageBox.Show("Invalid .json file. The file may not be a proper .json file, or it's ivalid format for the selected data", "Invalid Json File");
            }
            catch (Exception ex)
            {
                MessageBox.Show("Unexpected error:\n" + ex.Message, "Error");
            }
        }

        private void FillFormFields(WeaponData weaponData)
        {
            WeaponNameInput.Text = weaponData.WeaponName;
            //Handle battle moves
            FillSelectedBattleMoves(weaponData);
            WeaponHitInput.Value = weaponData.WeaponHit;
            WeaponDamageInput.Value = weaponData.WeaponDamage;

            metadataCreator.MetadataDevNameInputField.Text = weaponData.DataDevName;
            metadataCreator.MetadataTypeField.Text = weaponData.DataType;
        }

        private void FillSelectedBattleMoves(WeaponData data)
        {
            // ClearUpOldData();

            List<string> selectedItems = new();
            foreach (string battleMove in data.BattleMoves)
            {
                selectedItems.Add(battleMove);
            }

            checkedListHandler.LoadSelectionData(selectedItems);

            //foreach (string bm in data.BattleMoves)
            //{
            //    for (int i = 0; i < battleMovesCheckedList.Items.Count; i++)
            //    {


            //        BattleMoveData itemBM = (BattleMoveData)battleMovesCheckedList.Items[i];
            //        if (bm == itemBM.DataDevName)
            //            battleMovesCheckedList.SetItemCheckState(i, CheckState.Checked);

            //    }
            //}
        }



    }
}
