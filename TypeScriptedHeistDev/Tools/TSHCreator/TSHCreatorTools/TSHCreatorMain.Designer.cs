namespace TSHCreatorTools
{
    partial class TSHCreatorMain
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
            AssetsFolderPathInput = new TextBox();
            AssetsPathGroup = new GroupBox();
            FindAssetFolderButton = new Button();
            AssetsPathLabel = new Label();
            StrengthGroup = new GroupBox();
            numericUpDown1 = new NumericUpDown();
            StrengthLabel = new Label();
            label1 = new Label();
            OpenWeaponCreatorButton = new Button();
            OpenBattleMoveCreatorButton = new Button();
            openFileDialogFindJsonRoot = new OpenFileDialog();
            button1 = new Button();
            OpenCharacterCreatorButton = new Button();
            EffectCreatorButton = new Button();
            OpenSceneCreatorButton = new Button();
            AssetsPathGroup.SuspendLayout();
            StrengthGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).BeginInit();
            SuspendLayout();
            // 
            // AssetsFolderPathInput
            // 
            AssetsFolderPathInput.Location = new Point(125, 15);
            AssetsFolderPathInput.Margin = new Padding(4, 3, 4, 3);
            AssetsFolderPathInput.Name = "AssetsFolderPathInput";
            AssetsFolderPathInput.Size = new Size(408, 23);
            AssetsFolderPathInput.TabIndex = 1;
            // 
            // AssetsPathGroup
            // 
            AssetsPathGroup.Controls.Add(FindAssetFolderButton);
            AssetsPathGroup.Controls.Add(AssetsPathLabel);
            AssetsPathGroup.Controls.Add(AssetsFolderPathInput);
            AssetsPathGroup.Location = new Point(13, 47);
            AssetsPathGroup.Margin = new Padding(4, 3, 4, 3);
            AssetsPathGroup.Name = "AssetsPathGroup";
            AssetsPathGroup.Padding = new Padding(4, 3, 4, 3);
            AssetsPathGroup.Size = new Size(541, 79);
            AssetsPathGroup.TabIndex = 2;
            AssetsPathGroup.TabStop = false;
            AssetsPathGroup.Text = "Path to Assets Root Folder";
            // 
            // FindAssetFolderButton
            // 
            FindAssetFolderButton.Anchor = AnchorStyles.Top | AnchorStyles.Right;
            FindAssetFolderButton.AutoSize = true;
            FindAssetFolderButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            FindAssetFolderButton.Location = new Point(211, 44);
            FindAssetFolderButton.Name = "FindAssetFolderButton";
            FindAssetFolderButton.Size = new Size(64, 25);
            FindAssetFolderButton.TabIndex = 7;
            FindAssetFolderButton.Text = "Browse...";
            FindAssetFolderButton.UseVisualStyleBackColor = true;
            FindAssetFolderButton.Click += FindJsonsRootButton_Click;
            // 
            // AssetsPathLabel
            // 
            AssetsPathLabel.AutoSize = true;
            AssetsPathLabel.Location = new Point(8, 19);
            AssetsPathLabel.Margin = new Padding(4, 0, 4, 0);
            AssetsPathLabel.Name = "AssetsPathLabel";
            AssetsPathLabel.Size = new Size(117, 15);
            AssetsPathLabel.TabIndex = 2;
            AssetsPathLabel.Text = "Path to Assets Folder";
            // 
            // StrengthGroup
            // 
            StrengthGroup.Controls.Add(numericUpDown1);
            StrengthGroup.Controls.Add(StrengthLabel);
            StrengthGroup.Location = new Point(394, 436);
            StrengthGroup.Margin = new Padding(4, 3, 4, 3);
            StrengthGroup.Name = "StrengthGroup";
            StrengthGroup.Padding = new Padding(4, 3, 4, 3);
            StrengthGroup.Size = new Size(194, 48);
            StrengthGroup.TabIndex = 3;
            StrengthGroup.TabStop = false;
            StrengthGroup.Text = "StrengthGroup";
            // 
            // numericUpDown1
            // 
            numericUpDown1.Location = new Point(135, 16);
            numericUpDown1.Margin = new Padding(4, 3, 4, 3);
            numericUpDown1.Name = "numericUpDown1";
            numericUpDown1.Size = new Size(50, 23);
            numericUpDown1.TabIndex = 3;
            // 
            // StrengthLabel
            // 
            StrengthLabel.AutoSize = true;
            StrengthLabel.Location = new Point(20, 18);
            StrengthLabel.Margin = new Padding(4, 0, 4, 0);
            StrengthLabel.Name = "StrengthLabel";
            StrengthLabel.Size = new Size(93, 15);
            StrengthLabel.TabIndex = 2;
            StrengthLabel.Text = "Character Name";
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(388, 487);
            label1.Margin = new Padding(4, 0, 4, 0);
            label1.Name = "label1";
            label1.Size = new Size(216, 15);
            label1.TabIndex = 4;
            label1.Text = "IGNORE THOSE ABOVE, NOT WORKING";
            // 
            // OpenWeaponCreatorButton
            // 
            OpenWeaponCreatorButton.AutoSize = true;
            OpenWeaponCreatorButton.Location = new Point(168, 378);
            OpenWeaponCreatorButton.Margin = new Padding(4, 3, 4, 3);
            OpenWeaponCreatorButton.Name = "OpenWeaponCreatorButton";
            OpenWeaponCreatorButton.Size = new Size(145, 27);
            OpenWeaponCreatorButton.TabIndex = 5;
            OpenWeaponCreatorButton.Text = "Open Weapon Creator";
            OpenWeaponCreatorButton.UseVisualStyleBackColor = true;
            OpenWeaponCreatorButton.Click += OpenWeaponCreatorButton_Click;
            // 
            // OpenBattleMoveCreatorButton
            // 
            OpenBattleMoveCreatorButton.AutoSize = true;
            OpenBattleMoveCreatorButton.Location = new Point(168, 422);
            OpenBattleMoveCreatorButton.Margin = new Padding(4, 3, 4, 3);
            OpenBattleMoveCreatorButton.Name = "OpenBattleMoveCreatorButton";
            OpenBattleMoveCreatorButton.Size = new Size(154, 27);
            OpenBattleMoveCreatorButton.TabIndex = 6;
            OpenBattleMoveCreatorButton.Text = "Open Battle Move Creator";
            OpenBattleMoveCreatorButton.UseVisualStyleBackColor = true;
            OpenBattleMoveCreatorButton.Click += OpenBattleMoveCreatorButton_Click;
            // 
            // button1
            // 
            button1.AutoSize = true;
            button1.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            button1.Location = new Point(284, 252);
            button1.Name = "button1";
            button1.Size = new Size(80, 25);
            button1.TabIndex = 7;
            button1.Text = "Make Thing";
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // OpenCharacterCreatorButton
            // 
            OpenCharacterCreatorButton.AutoSize = true;
            OpenCharacterCreatorButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            OpenCharacterCreatorButton.Location = new Point(168, 459);
            OpenCharacterCreatorButton.Name = "OpenCharacterCreatorButton";
            OpenCharacterCreatorButton.Size = new Size(142, 25);
            OpenCharacterCreatorButton.TabIndex = 8;
            OpenCharacterCreatorButton.Text = "Open Character Creatpr";
            OpenCharacterCreatorButton.UseVisualStyleBackColor = true;
            OpenCharacterCreatorButton.Click += OpenCharacterCreatorButton_Click;
            // 
            // EffectCreatorButton
            // 
            EffectCreatorButton.Anchor = AnchorStyles.Bottom | AnchorStyles.Left;
            EffectCreatorButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            EffectCreatorButton.Location = new Point(168, 490);
            EffectCreatorButton.Name = "EffectCreatorButton";
            EffectCreatorButton.Size = new Size(154, 23);
            EffectCreatorButton.TabIndex = 9;
            EffectCreatorButton.Text = "Open Effect Creator";
            EffectCreatorButton.UseVisualStyleBackColor = true;
            EffectCreatorButton.Click += EffectCreatorButton_Click;
            // 
            // OpenSceneCreatorButton
            // 
            OpenSceneCreatorButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            OpenSceneCreatorButton.Location = new Point(168, 521);
            OpenSceneCreatorButton.Name = "OpenSceneCreatorButton";
            OpenSceneCreatorButton.Size = new Size(154, 23);
            OpenSceneCreatorButton.TabIndex = 10;
            OpenSceneCreatorButton.Text = "Open Scene Creator";
            OpenSceneCreatorButton.UseVisualStyleBackColor = true;
            OpenSceneCreatorButton.Click += OpenSceneCreatorButton_Click;
            // 
            // TSHCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(617, 552);
            Controls.Add(OpenSceneCreatorButton);
            Controls.Add(EffectCreatorButton);
            Controls.Add(OpenCharacterCreatorButton);
            Controls.Add(button1);
            Controls.Add(OpenBattleMoveCreatorButton);
            Controls.Add(OpenWeaponCreatorButton);
            Controls.Add(label1);
            Controls.Add(StrengthGroup);
            Controls.Add(AssetsPathGroup);
            Margin = new Padding(4, 3, 4, 3);
            MinimizeBox = false;
            Name = "TSHCreator";
            Text = "TSHCreator";
            AssetsPathGroup.ResumeLayout(false);
            AssetsPathGroup.PerformLayout();
            StrengthGroup.ResumeLayout(false);
            StrengthGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).EndInit();
            ResumeLayout(false);
            PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox AssetsFolderPathInput;
        private System.Windows.Forms.GroupBox AssetsPathGroup;
        private System.Windows.Forms.Label AssetsPathLabel;
        private System.Windows.Forms.GroupBox StrengthGroup;
        private System.Windows.Forms.Label StrengthLabel;
        private System.Windows.Forms.NumericUpDown numericUpDown1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button OpenWeaponCreatorButton;
        private Button OpenBattleMoveCreatorButton;
        private OpenFileDialog openFileDialogFindJsonRoot;
        private Button FindAssetFolderButton;
        private Button button1;
        private Button OpenCharacterCreatorButton;
        private Button EffectCreatorButton;
        private Button OpenSceneCreatorButton;
    }
}

