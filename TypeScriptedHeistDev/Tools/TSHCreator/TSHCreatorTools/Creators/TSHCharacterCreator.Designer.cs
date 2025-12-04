namespace TSHCreatorTools
{
    partial class TSHCharacterCreator
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            components = new System.ComponentModel.Container();
            CharacterNameLabel = new Label();
            CharacterStrengthLabel = new Label();
            CharacterDesterityLabel = new Label();
            CharacterPerceptionLabel = new Label();
            CharacterDodgeLabel = new Label();
            CharacterWeaponSkillLabel = new Label();
            CharacterBaseSpeedLabel = new Label();
            CharacterArmourRatingLabel = new Label();
            NameInput = new TextBox();
            StrengthInput = new NumericUpDown();
            DexterityInput = new NumericUpDown();
            PerceptionInput = new NumericUpDown();
            WeaponSkillInput = new NumericUpDown();
            DodgeInput = new NumericUpDown();
            BaseSpeedInput = new NumericUpDown();
            ArmourRatingInput = new NumericUpDown();
            CharacterEquipedWeapon = new Label();
            SelectWeaponComboBox = new ComboBox();
            SelectImage = new SelectImage();
            CreateCharacterDataButton = new Button();
            MetadataCreatorTool = new MetadataCreator();
            factionNumericInput = new NumericUpDown();
            FactionLabel = new Label();
            FactionTooltip = new ToolTip(components);
            LoadDataButton = new Button();
            ((System.ComponentModel.ISupportInitialize)StrengthInput).BeginInit();
            ((System.ComponentModel.ISupportInitialize)DexterityInput).BeginInit();
            ((System.ComponentModel.ISupportInitialize)PerceptionInput).BeginInit();
            ((System.ComponentModel.ISupportInitialize)WeaponSkillInput).BeginInit();
            ((System.ComponentModel.ISupportInitialize)DodgeInput).BeginInit();
            ((System.ComponentModel.ISupportInitialize)BaseSpeedInput).BeginInit();
            ((System.ComponentModel.ISupportInitialize)ArmourRatingInput).BeginInit();
            ((System.ComponentModel.ISupportInitialize)factionNumericInput).BeginInit();
            SuspendLayout();
            // 
            // CharacterNameLabel
            // 
            CharacterNameLabel.AutoSize = true;
            CharacterNameLabel.Location = new Point(79, 40);
            CharacterNameLabel.Name = "CharacterNameLabel";
            CharacterNameLabel.Size = new Size(39, 15);
            CharacterNameLabel.TabIndex = 0;
            CharacterNameLabel.Text = "Name";
            // 
            // CharacterStrengthLabel
            // 
            CharacterStrengthLabel.AutoSize = true;
            CharacterStrengthLabel.Location = new Point(79, 93);
            CharacterStrengthLabel.Name = "CharacterStrengthLabel";
            CharacterStrengthLabel.Size = new Size(52, 15);
            CharacterStrengthLabel.TabIndex = 1;
            CharacterStrengthLabel.Text = "Strength";
            // 
            // CharacterDesterityLabel
            // 
            CharacterDesterityLabel.AutoSize = true;
            CharacterDesterityLabel.Location = new Point(79, 124);
            CharacterDesterityLabel.Name = "CharacterDesterityLabel";
            CharacterDesterityLabel.Size = new Size(53, 15);
            CharacterDesterityLabel.TabIndex = 2;
            CharacterDesterityLabel.Text = "Dexterity";
            // 
            // CharacterPerceptionLabel
            // 
            CharacterPerceptionLabel.AutoSize = true;
            CharacterPerceptionLabel.Location = new Point(79, 153);
            CharacterPerceptionLabel.Name = "CharacterPerceptionLabel";
            CharacterPerceptionLabel.Size = new Size(64, 15);
            CharacterPerceptionLabel.TabIndex = 3;
            CharacterPerceptionLabel.Text = "Perception";
            // 
            // CharacterDodgeLabel
            // 
            CharacterDodgeLabel.AutoSize = true;
            CharacterDodgeLabel.Location = new Point(84, 217);
            CharacterDodgeLabel.Name = "CharacterDodgeLabel";
            CharacterDodgeLabel.Size = new Size(42, 15);
            CharacterDodgeLabel.TabIndex = 4;
            CharacterDodgeLabel.Text = "Dodge";
            // 
            // CharacterWeaponSkillLabel
            // 
            CharacterWeaponSkillLabel.AutoSize = true;
            CharacterWeaponSkillLabel.Location = new Point(84, 202);
            CharacterWeaponSkillLabel.Name = "CharacterWeaponSkillLabel";
            CharacterWeaponSkillLabel.Size = new Size(74, 15);
            CharacterWeaponSkillLabel.TabIndex = 5;
            CharacterWeaponSkillLabel.Text = "Weapon skill";
            // 
            // CharacterBaseSpeedLabel
            // 
            CharacterBaseSpeedLabel.AutoSize = true;
            CharacterBaseSpeedLabel.Location = new Point(79, 252);
            CharacterBaseSpeedLabel.Name = "CharacterBaseSpeedLabel";
            CharacterBaseSpeedLabel.Size = new Size(66, 15);
            CharacterBaseSpeedLabel.TabIndex = 6;
            CharacterBaseSpeedLabel.Text = "Base Speed";
            // 
            // CharacterArmourRatingLabel
            // 
            CharacterArmourRatingLabel.AutoSize = true;
            CharacterArmourRatingLabel.Location = new Point(79, 289);
            CharacterArmourRatingLabel.Name = "CharacterArmourRatingLabel";
            CharacterArmourRatingLabel.Size = new Size(85, 15);
            CharacterArmourRatingLabel.TabIndex = 7;
            CharacterArmourRatingLabel.Text = "Armour Rating";
            // 
            // NameInput
            // 
            NameInput.Location = new Point(136, 32);
            NameInput.Name = "NameInput";
            NameInput.Size = new Size(100, 23);
            NameInput.TabIndex = 8;
            // 
            // StrengthInput
            // 
            StrengthInput.Location = new Point(144, 90);
            StrengthInput.Maximum = new decimal(new int[] { 20, 0, 0, 0 });
            StrengthInput.Name = "StrengthInput";
            StrengthInput.Size = new Size(35, 23);
            StrengthInput.TabIndex = 9;
            // 
            // DexterityInput
            // 
            DexterityInput.Location = new Point(144, 122);
            DexterityInput.Maximum = new decimal(new int[] { 20, 0, 0, 0 });
            DexterityInput.Name = "DexterityInput";
            DexterityInput.Size = new Size(35, 23);
            DexterityInput.TabIndex = 10;
            // 
            // PerceptionInput
            // 
            PerceptionInput.Location = new Point(149, 153);
            PerceptionInput.Maximum = new decimal(new int[] { 20, 0, 0, 0 });
            PerceptionInput.Name = "PerceptionInput";
            PerceptionInput.Size = new Size(35, 23);
            PerceptionInput.TabIndex = 11;
            // 
            // WeaponSkillInput
            // 
            WeaponSkillInput.Location = new Point(164, 194);
            WeaponSkillInput.Maximum = new decimal(new int[] { 20, 0, 0, 0 });
            WeaponSkillInput.Name = "WeaponSkillInput";
            WeaponSkillInput.Size = new Size(35, 23);
            WeaponSkillInput.TabIndex = 12;
            // 
            // DodgeInput
            // 
            DodgeInput.Location = new Point(164, 223);
            DodgeInput.Maximum = new decimal(new int[] { 20, 0, 0, 0 });
            DodgeInput.Name = "DodgeInput";
            DodgeInput.Size = new Size(35, 23);
            DodgeInput.TabIndex = 13;
            // 
            // BaseSpeedInput
            // 
            BaseSpeedInput.Location = new Point(164, 252);
            BaseSpeedInput.Maximum = new decimal(new int[] { 20, 0, 0, 0 });
            BaseSpeedInput.Name = "BaseSpeedInput";
            BaseSpeedInput.Size = new Size(35, 23);
            BaseSpeedInput.TabIndex = 14;
            // 
            // ArmourRatingInput
            // 
            ArmourRatingInput.Location = new Point(179, 287);
            ArmourRatingInput.Maximum = new decimal(new int[] { 20, 0, 0, 0 });
            ArmourRatingInput.Name = "ArmourRatingInput";
            ArmourRatingInput.Size = new Size(35, 23);
            ArmourRatingInput.TabIndex = 15;
            // 
            // CharacterEquipedWeapon
            // 
            CharacterEquipedWeapon.AutoSize = true;
            CharacterEquipedWeapon.Location = new Point(79, 321);
            CharacterEquipedWeapon.Name = "CharacterEquipedWeapon";
            CharacterEquipedWeapon.Size = new Size(97, 15);
            CharacterEquipedWeapon.TabIndex = 16;
            CharacterEquipedWeapon.Text = "Equiped Weapon";
            // 
            // SelectWeaponComboBox
            // 
            SelectWeaponComboBox.FormattingEnabled = true;
            SelectWeaponComboBox.Location = new Point(182, 321);
            SelectWeaponComboBox.Name = "SelectWeaponComboBox";
            SelectWeaponComboBox.Size = new Size(252, 23);
            SelectWeaponComboBox.Sorted = true;
            SelectWeaponComboBox.TabIndex = 17;
            SelectWeaponComboBox.Text = "Select equiped weapon";
            // 
            // SelectImage
            // 
            SelectImage.Location = new Point(51, 378);
            SelectImage.Name = "SelectImage";
            SelectImage.Size = new Size(602, 225);
            SelectImage.TabIndex = 20;
            // 
            // CreateCharacterDataButton
            // 
            CreateCharacterDataButton.Anchor = AnchorStyles.Bottom | AnchorStyles.Left;
            CreateCharacterDataButton.AutoSize = true;
            CreateCharacterDataButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            CreateCharacterDataButton.Location = new Point(164, 569);
            CreateCharacterDataButton.Name = "CreateCharacterDataButton";
            CreateCharacterDataButton.Size = new Size(132, 25);
            CreateCharacterDataButton.TabIndex = 21;
            CreateCharacterDataButton.Text = "Create Character Data";
            CreateCharacterDataButton.UseVisualStyleBackColor = true;
            CreateCharacterDataButton.Click += CreateCharacterDataButton_Click;
            // 
            // MetadataCreatorTool
            // 
            MetadataCreatorTool.Location = new Point(459, 62);
            MetadataCreatorTool.Name = "MetadataCreatorTool";
            MetadataCreatorTool.Size = new Size(263, 225);
            MetadataCreatorTool.TabIndex = 22;
            // 
            // factionNumericInput
            // 
            factionNumericInput.Location = new Point(338, 236);
            factionNumericInput.Maximum = new decimal(new int[] { 2, 0, 0, 0 });
            factionNumericInput.Name = "factionNumericInput";
            factionNumericInput.Size = new Size(40, 23);
            factionNumericInput.TabIndex = 23;
            // 
            // FactionLabel
            // 
            FactionLabel.AutoSize = true;
            FactionLabel.Location = new Point(235, 244);
            FactionLabel.Name = "FactionLabel";
            FactionLabel.Size = new Size(97, 15);
            FactionLabel.TabIndex = 24;
            FactionLabel.Text = "CharacterFaction";
            // 
            // FactionTooltip
            // 
            FactionTooltip.ToolTipTitle = "NOTE! Doesn't  really do anything yet. Values: 0 None, ??? | 1 Player, ??? | 2 Enemy, ???";
            // 
            // LoadDataButton
            // 
            LoadDataButton.Anchor = AnchorStyles.Bottom | AnchorStyles.Left | AnchorStyles.Right;
            LoadDataButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            LoadDataButton.Location = new Point(301, 93);
            LoadDataButton.Name = "LoadDataButton";
            LoadDataButton.Size = new Size(77, 23);
            LoadDataButton.TabIndex = 25;
            LoadDataButton.Text = "Load data...";
            LoadDataButton.UseVisualStyleBackColor = true;
            LoadDataButton.Click += LoadDataButton_Click;
            // 
            // TSHCharacterCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 792);
            Controls.Add(LoadDataButton);
            Controls.Add(FactionLabel);
            Controls.Add(factionNumericInput);
            Controls.Add(MetadataCreatorTool);
            Controls.Add(CreateCharacterDataButton);
            Controls.Add(SelectImage);
            Controls.Add(SelectWeaponComboBox);
            Controls.Add(CharacterEquipedWeapon);
            Controls.Add(ArmourRatingInput);
            Controls.Add(BaseSpeedInput);
            Controls.Add(DodgeInput);
            Controls.Add(WeaponSkillInput);
            Controls.Add(PerceptionInput);
            Controls.Add(DexterityInput);
            Controls.Add(StrengthInput);
            Controls.Add(NameInput);
            Controls.Add(CharacterArmourRatingLabel);
            Controls.Add(CharacterBaseSpeedLabel);
            Controls.Add(CharacterWeaponSkillLabel);
            Controls.Add(CharacterDodgeLabel);
            Controls.Add(CharacterPerceptionLabel);
            Controls.Add(CharacterDesterityLabel);
            Controls.Add(CharacterStrengthLabel);
            Controls.Add(CharacterNameLabel);
            Name = "TSHCharacterCreator";
            Text = "TSHCharacterCreator";
            ((System.ComponentModel.ISupportInitialize)StrengthInput).EndInit();
            ((System.ComponentModel.ISupportInitialize)DexterityInput).EndInit();
            ((System.ComponentModel.ISupportInitialize)PerceptionInput).EndInit();
            ((System.ComponentModel.ISupportInitialize)WeaponSkillInput).EndInit();
            ((System.ComponentModel.ISupportInitialize)DodgeInput).EndInit();
            ((System.ComponentModel.ISupportInitialize)BaseSpeedInput).EndInit();
            ((System.ComponentModel.ISupportInitialize)ArmourRatingInput).EndInit();
            ((System.ComponentModel.ISupportInitialize)factionNumericInput).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label CharacterNameLabel;
        private Label CharacterStrengthLabel;
        private Label CharacterDesterityLabel;
        private Label CharacterPerceptionLabel;
        private Label CharacterDodgeLabel;
        private Label CharacterWeaponSkillLabel;
        private Label CharacterBaseSpeedLabel;
        private Label CharacterArmourRatingLabel;
        private TextBox NameInput;
        private NumericUpDown StrengthInput;
        private NumericUpDown DexterityInput;
        private NumericUpDown PerceptionInput;
        private NumericUpDown WeaponSkillInput;
        private NumericUpDown DodgeInput;
        private NumericUpDown BaseSpeedInput;
        private NumericUpDown ArmourRatingInput;
        private Label CharacterEquipedWeapon;
        private ComboBox SelectWeaponComboBox;
        private SelectImage SelectImage;
        private Button CreateCharacterDataButton;
        private MetadataCreator MetadataCreatorTool;
        private NumericUpDown factionNumericInput;
        private Label FactionLabel;
        private ToolTip FactionTooltip;
        private Button LoadDataButton;
    }
}