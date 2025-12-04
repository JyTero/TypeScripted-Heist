namespace TSHCreatorTools
{
    partial class TSHBattleMoveCreator
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
            BM_NameGroup = new GroupBox();
            BM_NameInput = new TextBox();
            BattleMoveNameLabel = new Label();
            BM_IsRanged = new GroupBox();
            BM_IsRangedCheckbox = new CheckBox();
            BM_IsRangedLabel = new Label();
            BM_WeaponHitMultiplierGroup = new GroupBox();
            BM_WeaponHitMultiplierInput = new NumericUpDown();
            BM_WeaponHitMultiplierLabel = new Label();
            BM_WeaponDamageMultiplierGroup = new GroupBox();
            BM_WeaponDamageMultiplierInput = new NumericUpDown();
            BM_WeaponDamageMultiplierLabel = new Label();
            CreateBMDataButton = new Button();
            Metadata = new MetadataCreator();
            LoadMoveDataButton = new Button();
            EffectsCheckedListBox = new CheckedListBox();
            EffectsHeader = new Label();
            BMTypeGroup = new GroupBox();
            BMTypeLabel = new Label();
            BMTypeCombBox = new ComboBox();
            BM_NameGroup.SuspendLayout();
            BM_IsRanged.SuspendLayout();
            BM_WeaponHitMultiplierGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)BM_WeaponHitMultiplierInput).BeginInit();
            BM_WeaponDamageMultiplierGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)BM_WeaponDamageMultiplierInput).BeginInit();
            BMTypeGroup.SuspendLayout();
            SuspendLayout();
            // 
            // BM_NameGroup
            // 
            BM_NameGroup.AutoSize = true;
            BM_NameGroup.Controls.Add(BM_NameInput);
            BM_NameGroup.Controls.Add(BattleMoveNameLabel);
            BM_NameGroup.Location = new Point(12, 35);
            BM_NameGroup.Name = "BM_NameGroup";
            BM_NameGroup.Size = new Size(229, 73);
            BM_NameGroup.TabIndex = 0;
            BM_NameGroup.TabStop = false;
            // 
            // BM_NameInput
            // 
            BM_NameInput.Location = new Point(117, 28);
            BM_NameInput.Name = "BM_NameInput";
            BM_NameInput.Size = new Size(100, 23);
            BM_NameInput.TabIndex = 1;
            // 
            // BattleMoveNameLabel
            // 
            BattleMoveNameLabel.AutoSize = true;
            BattleMoveNameLabel.Location = new Point(6, 31);
            BattleMoveNameLabel.Name = "BattleMoveNameLabel";
            BattleMoveNameLabel.Size = new Size(105, 15);
            BattleMoveNameLabel.TabIndex = 0;
            BattleMoveNameLabel.Text = "Battle Move Name";
            // 
            // BM_IsRanged
            // 
            BM_IsRanged.AutoSize = true;
            BM_IsRanged.Controls.Add(BM_IsRangedCheckbox);
            BM_IsRanged.Controls.Add(BM_IsRangedLabel);
            BM_IsRanged.Location = new Point(18, 114);
            BM_IsRanged.Name = "BM_IsRanged";
            BM_IsRanged.Size = new Size(146, 58);
            BM_IsRanged.TabIndex = 1;
            BM_IsRanged.TabStop = false;
            // 
            // BM_IsRangedCheckbox
            // 
            BM_IsRangedCheckbox.AutoSize = true;
            BM_IsRangedCheckbox.Location = new Point(125, 22);
            BM_IsRangedCheckbox.Name = "BM_IsRangedCheckbox";
            BM_IsRangedCheckbox.Size = new Size(15, 14);
            BM_IsRangedCheckbox.TabIndex = 1;
            BM_IsRangedCheckbox.UseVisualStyleBackColor = true;
            // 
            // BM_IsRangedLabel
            // 
            BM_IsRangedLabel.AutoSize = true;
            BM_IsRangedLabel.Location = new Point(6, 19);
            BM_IsRangedLabel.Name = "BM_IsRangedLabel";
            BM_IsRangedLabel.Size = new Size(113, 15);
            BM_IsRangedLabel.TabIndex = 0;
            BM_IsRangedLabel.Text = "Ranged Battle Move";
            // 
            // BM_WeaponHitMultiplierGroup
            // 
            BM_WeaponHitMultiplierGroup.AutoSize = true;
            BM_WeaponHitMultiplierGroup.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            BM_WeaponHitMultiplierGroup.Controls.Add(BM_WeaponHitMultiplierInput);
            BM_WeaponHitMultiplierGroup.Controls.Add(BM_WeaponHitMultiplierLabel);
            BM_WeaponHitMultiplierGroup.Location = new Point(18, 178);
            BM_WeaponHitMultiplierGroup.Margin = new Padding(4, 3, 4, 3);
            BM_WeaponHitMultiplierGroup.Name = "BM_WeaponHitMultiplierGroup";
            BM_WeaponHitMultiplierGroup.Padding = new Padding(4, 3, 4, 3);
            BM_WeaponHitMultiplierGroup.Size = new Size(191, 61);
            BM_WeaponHitMultiplierGroup.TabIndex = 4;
            BM_WeaponHitMultiplierGroup.TabStop = false;
            // 
            // BM_WeaponHitMultiplierInput
            // 
            BM_WeaponHitMultiplierInput.DecimalPlaces = 1;
            BM_WeaponHitMultiplierInput.Increment = new decimal(new int[] { 1, 0, 0, 65536 });
            BM_WeaponHitMultiplierInput.Location = new Point(136, 16);
            BM_WeaponHitMultiplierInput.Margin = new Padding(4, 3, 4, 3);
            BM_WeaponHitMultiplierInput.Name = "BM_WeaponHitMultiplierInput";
            BM_WeaponHitMultiplierInput.Size = new Size(47, 23);
            BM_WeaponHitMultiplierInput.TabIndex = 1;
            BM_WeaponHitMultiplierInput.Value = new decimal(new int[] { 1, 0, 0, 0 });
            // 
            // BM_WeaponHitMultiplierLabel
            // 
            BM_WeaponHitMultiplierLabel.AutoSize = true;
            BM_WeaponHitMultiplierLabel.Location = new Point(8, 18);
            BM_WeaponHitMultiplierLabel.Margin = new Padding(4, 0, 4, 0);
            BM_WeaponHitMultiplierLabel.Name = "BM_WeaponHitMultiplierLabel";
            BM_WeaponHitMultiplierLabel.Size = new Size(124, 15);
            BM_WeaponHitMultiplierLabel.TabIndex = 0;
            BM_WeaponHitMultiplierLabel.Text = "Weapon Hit Multiplier";
            // 
            // BM_WeaponDamageMultiplierGroup
            // 
            BM_WeaponDamageMultiplierGroup.AutoSize = true;
            BM_WeaponDamageMultiplierGroup.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            BM_WeaponDamageMultiplierGroup.Controls.Add(BM_WeaponDamageMultiplierInput);
            BM_WeaponDamageMultiplierGroup.Controls.Add(BM_WeaponDamageMultiplierLabel);
            BM_WeaponDamageMultiplierGroup.Location = new Point(18, 245);
            BM_WeaponDamageMultiplierGroup.Margin = new Padding(4, 3, 4, 3);
            BM_WeaponDamageMultiplierGroup.Name = "BM_WeaponDamageMultiplierGroup";
            BM_WeaponDamageMultiplierGroup.Padding = new Padding(4, 3, 4, 3);
            BM_WeaponDamageMultiplierGroup.Size = new Size(223, 61);
            BM_WeaponDamageMultiplierGroup.TabIndex = 4;
            BM_WeaponDamageMultiplierGroup.TabStop = false;
            // 
            // BM_WeaponDamageMultiplierInput
            // 
            BM_WeaponDamageMultiplierInput.DecimalPlaces = 1;
            BM_WeaponDamageMultiplierInput.Increment = new decimal(new int[] { 1, 0, 0, 65536 });
            BM_WeaponDamageMultiplierInput.Location = new Point(168, 16);
            BM_WeaponDamageMultiplierInput.Margin = new Padding(4, 3, 4, 3);
            BM_WeaponDamageMultiplierInput.Name = "BM_WeaponDamageMultiplierInput";
            BM_WeaponDamageMultiplierInput.Size = new Size(47, 23);
            BM_WeaponDamageMultiplierInput.TabIndex = 1;
            BM_WeaponDamageMultiplierInput.Value = new decimal(new int[] { 1, 0, 0, 0 });
            // 
            // BM_WeaponDamageMultiplierLabel
            // 
            BM_WeaponDamageMultiplierLabel.AutoSize = true;
            BM_WeaponDamageMultiplierLabel.Location = new Point(8, 18);
            BM_WeaponDamageMultiplierLabel.Margin = new Padding(4, 0, 4, 0);
            BM_WeaponDamageMultiplierLabel.Name = "BM_WeaponDamageMultiplierLabel";
            BM_WeaponDamageMultiplierLabel.Size = new Size(152, 15);
            BM_WeaponDamageMultiplierLabel.TabIndex = 0;
            BM_WeaponDamageMultiplierLabel.Text = "Weapon Damage Multiplier";
            // 
            // CreateBMDataButton
            // 
            CreateBMDataButton.Anchor = AnchorStyles.Bottom | AnchorStyles.Left | AnchorStyles.Right;
            CreateBMDataButton.AutoSize = true;
            CreateBMDataButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            CreateBMDataButton.Location = new Point(356, 473);
            CreateBMDataButton.Name = "CreateBMDataButton";
            CreateBMDataButton.Size = new Size(144, 25);
            CreateBMDataButton.TabIndex = 5;
            CreateBMDataButton.Text = "Create Battle Move Data";
            CreateBMDataButton.UseVisualStyleBackColor = true;
            CreateBMDataButton.Click += CreateBMDataButton_Click;
            // 
            // Metadata
            // 
            Metadata.Location = new Point(305, 294);
            Metadata.Name = "Metadata";
            Metadata.Size = new Size(235, 173);
            Metadata.TabIndex = 6;
            // 
            // LoadMoveDataButton
            // 
            LoadMoveDataButton.Anchor = AnchorStyles.Top | AnchorStyles.Left | AnchorStyles.Right;
            LoadMoveDataButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            LoadMoveDataButton.Location = new Point(265, 35);
            LoadMoveDataButton.Name = "LoadMoveDataButton";
            LoadMoveDataButton.Size = new Size(119, 23);
            LoadMoveDataButton.TabIndex = 7;
            LoadMoveDataButton.Text = "Load Data...";
            LoadMoveDataButton.UseVisualStyleBackColor = true;
            LoadMoveDataButton.Click += LoadMoveDataButton_Click;
            // 
            // EffectsCheckedListBox
            // 
            EffectsCheckedListBox.FormattingEnabled = true;
            EffectsCheckedListBox.Location = new Point(18, 326);
            EffectsCheckedListBox.Name = "EffectsCheckedListBox";
            EffectsCheckedListBox.Size = new Size(223, 166);
            EffectsCheckedListBox.TabIndex = 8;
            // 
            // EffectsHeader
            // 
            EffectsHeader.AutoSize = true;
            EffectsHeader.Location = new Point(18, 308);
            EffectsHeader.Name = "EffectsHeader";
            EffectsHeader.Size = new Size(42, 15);
            EffectsHeader.TabIndex = 9;
            EffectsHeader.Text = "Effects";
            // 
            // BMTypeGroup
            // 
            BMTypeGroup.Controls.Add(BMTypeLabel);
            BMTypeGroup.Controls.Add(BMTypeCombBox);
            BMTypeGroup.Location = new Point(305, 100);
            BMTypeGroup.Name = "BMTypeGroup";
            BMTypeGroup.Size = new Size(200, 100);
            BMTypeGroup.TabIndex = 10;
            BMTypeGroup.TabStop = false;
            BMTypeGroup.Text = "BattleMove Type";
            // 
            // BMTypeLabel
            // 
            BMTypeLabel.AutoSize = true;
            BMTypeLabel.Location = new Point(6, 36);
            BMTypeLabel.Name = "BMTypeLabel";
            BMTypeLabel.Size = new Size(87, 15);
            BMTypeLabel.TabIndex = 1;
            BMTypeLabel.Text = "Select BM Type";
            // 
            // BMTypeCombBox
            // 
            BMTypeCombBox.FormattingEnabled = true;
            BMTypeCombBox.Location = new Point(6, 54);
            BMTypeCombBox.Name = "BMTypeCombBox";
            BMTypeCombBox.Size = new Size(121, 23);
            BMTypeCombBox.TabIndex = 0;
            // 
            // TSHBattleMoveCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(552, 510);
            Controls.Add(BMTypeGroup);
            Controls.Add(EffectsHeader);
            Controls.Add(EffectsCheckedListBox);
            Controls.Add(LoadMoveDataButton);
            Controls.Add(Metadata);
            Controls.Add(CreateBMDataButton);
            Controls.Add(BM_WeaponDamageMultiplierGroup);
            Controls.Add(BM_WeaponHitMultiplierGroup);
            Controls.Add(BM_IsRanged);
            Controls.Add(BM_NameGroup);
            Name = "TSHBattleMoveCreator";
            Text = "TSHBattleMoveCreator";
            Load += TSHBattleMoveCreator_Load;
            BM_NameGroup.ResumeLayout(false);
            BM_NameGroup.PerformLayout();
            BM_IsRanged.ResumeLayout(false);
            BM_IsRanged.PerformLayout();
            BM_WeaponHitMultiplierGroup.ResumeLayout(false);
            BM_WeaponHitMultiplierGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)BM_WeaponHitMultiplierInput).EndInit();
            BM_WeaponDamageMultiplierGroup.ResumeLayout(false);
            BM_WeaponDamageMultiplierGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)BM_WeaponDamageMultiplierInput).EndInit();
            BMTypeGroup.ResumeLayout(false);
            BMTypeGroup.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private GroupBox BM_NameGroup;
        private TextBox BM_NameInput;
        private Label BattleMoveNameLabel;
        private GroupBox BM_IsRanged;
        private Label BM_IsRangedLabel;
        private CheckBox BM_IsRangedCheckbox;
        private GroupBox BM_WeaponHitMultiplierGroup;
        private Label BM_WeaponHitMultiplierLabel;
        private NumericUpDown BM_WeaponHitMultiplierInput;
        private GroupBox BM_WeaponDamageMultiplierGroup;
        private NumericUpDown BM_WeaponDamageMultiplierInput;
        private Label BM_WeaponDamageMultiplierLabel;
        private Button CreateBMDataButton;
        private MetadataCreator Metadata;
        private Button LoadMoveDataButton;
        private CheckedListBox EffectsCheckedListBox;
        private Label EffectsHeader;
        private GroupBox BMTypeGroup;
        private ComboBox BMTypeCombBox;
        private Label BMTypeLabel;
    }
}