using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools
{
    public class Paths
    {
        private string assetFolderPath = "";
        private string dataFolderName = "DataJsons";    //"Data"
        private string spriteFolderName = "Img";        //"Sprites
        private string battleMoveDataFolderName = "BattleMove";
        
        
        private static Paths? _instance;
        public static Paths Instance
            => _instance ?? throw new InvalidOperationException("No PathManager");

        public static void Initialise()
        {
            _instance = new Paths();
        }

        public string AssetFolderPath()
        {
            return assetFolderPath;
        }

        public string DataFolderPath()
        {
            return dataFolderPath;
        }
        private string dataFolderPath;

        public string SpriteFolderPath()
        {
            return spriteFolderPath;
        }
        private string spriteFolderPath;

        public void SetAssetFolderPath(string path)
        {
            assetFolderPath = path;
            dataFolderPath = Path.Combine(assetFolderPath, dataFolderName);
            spriteFolderPath = Path.Combine(assetFolderPath, spriteFolderName);

        }



    }
}
