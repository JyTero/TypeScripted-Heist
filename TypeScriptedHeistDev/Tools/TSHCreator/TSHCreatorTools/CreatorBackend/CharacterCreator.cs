using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using TSHCreatorTools.dataClasses;

namespace TSHCreatorTools
{
    internal class CharacterCreator : CreatorCore
    {
        private TSHCharacterCreator characterCreatorWindow;

        public CharacterCreator(TSHCharacterCreator characterCreatorWindow, MetadataCreator metadataCreator)
                            : base(metadataCreator)
        {
            this.characterCreatorWindow = characterCreatorWindow;
        }


        protected override void OnCreateData()
        {
            base.OnCreateData();

            //CharacterData data = new CharacterData
            //{

            //    CharacterName = NameInput.Text,
            //    CharcterFaction = (int)factionNumericInput.Value,
            //    CharacterStrength = (int)StrengthInput.Value,
            //    CharacterDexterity = (int)DexterityInput.Value,
            //    CharacterPerception = (int)PerceptionInput.Value,
            //    CharacterWeaponSkill = (int)WeaponSkillInput.Value,
            //    CharacterDodge = (int)DodgeInput.Value,
            //    CharacterBaseSpeed = (int)BaseSpeedInput.Value,
            //    CharacterArmour = (int)ArmourRatingInput.Value,
            //    CharaterEquipedWeapon = SelectWeaponComboBox.SelectedItem.ToString(),
            //    CharacterImagePath = SelectImage.SelectedImageName(),

            //};
            //data = InsertMetadata(data);
            CharacterData data = characterCreatorWindow.CreateCharacterData();

            string jsonOutput = JsonSerializer.Serialize(data, new JsonSerializerOptions { WriteIndented = true });
            Debug.WriteLine(jsonOutput);

            CreateOutputJsonFile(jsonOutput);
        }
    }
}
