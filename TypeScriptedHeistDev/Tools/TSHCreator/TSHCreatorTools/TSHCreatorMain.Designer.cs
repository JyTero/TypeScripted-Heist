namespace TSHCreatorTools
{
    partial class TSHCreator
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
            JsonFolderPathInput = new TextBox();
            JsonPathGroup = new GroupBox();
            FindJsonsRootButton = new Button();
            JsonPathLabel = new Label();
            StrengthGroup = new GroupBox();
            numericUpDown1 = new NumericUpDown();
            StrengthLabel = new Label();
            label1 = new Label();
            OpenWeaponCreatorButton = new Button();
            OpenBattleMoveCreatorButton = new Button();
            openFileDialogFindJsonRoot = new OpenFileDialog();
            button1 = new Button();
            JsonPathGroup.SuspendLayout();
            StrengthGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).BeginInit();
            SuspendLayout();
            // 
            // JsonFolderPathInput
            // 
            JsonFolderPathInput.Location = new Point(125, 15);
            JsonFolderPathInput.Margin = new Padding(4, 3, 4, 3);
            JsonFolderPathInput.Name = "JsonFolderPathInput";
            JsonFolderPathInput.Size = new Size(408, 23);
            JsonFolderPathInput.TabIndex = 1;
            // 
            // JsonPathGroup
            // 
            JsonPathGroup.Controls.Add(FindJsonsRootButton);
            JsonPathGroup.Controls.Add(JsonPathLabel);
            JsonPathGroup.Controls.Add(JsonFolderPathInput);
            JsonPathGroup.Location = new Point(13, 47);
            JsonPathGroup.Margin = new Padding(4, 3, 4, 3);
            JsonPathGroup.Name = "JsonPathGroup";
            JsonPathGroup.Padding = new Padding(4, 3, 4, 3);
            JsonPathGroup.Size = new Size(541, 79);
            JsonPathGroup.TabIndex = 2;
            JsonPathGroup.TabStop = false;
            JsonPathGroup.Text = "Path to Json Root Folder";
            // 
            // FindJsonsRootButton
            // 
            FindJsonsRootButton.Anchor = AnchorStyles.Top | AnchorStyles.Right;
            FindJsonsRootButton.AutoSize = true;
            FindJsonsRootButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            FindJsonsRootButton.Location = new Point(211, 44);
            FindJsonsRootButton.Name = "FindJsonsRootButton";
            FindJsonsRootButton.Size = new Size(64, 25);
            FindJsonsRootButton.TabIndex = 7;
            FindJsonsRootButton.Text = "Browse...";
            FindJsonsRootButton.UseVisualStyleBackColor = true;
            FindJsonsRootButton.Click += FindJsonsRootButton_Click;
            // 
            // JsonPathLabel
            // 
            JsonPathLabel.AutoSize = true;
            JsonPathLabel.Location = new Point(8, 19);
            JsonPathLabel.Margin = new Padding(4, 0, 4, 0);
            JsonPathLabel.Name = "JsonPathLabel";
            JsonPathLabel.Size = new Size(107, 15);
            JsonPathLabel.TabIndex = 2;
            JsonPathLabel.Text = "Path to Json Folder";
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
            // TSHCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(617, 552);
            Controls.Add(button1);
            Controls.Add(OpenBattleMoveCreatorButton);
            Controls.Add(OpenWeaponCreatorButton);
            Controls.Add(label1);
            Controls.Add(StrengthGroup);
            Controls.Add(JsonPathGroup);
            Margin = new Padding(4, 3, 4, 3);
            MinimizeBox = false;
            Name = "TSHCreator";
            Text = "TSHCreator";
            JsonPathGroup.ResumeLayout(false);
            JsonPathGroup.PerformLayout();
            StrengthGroup.ResumeLayout(false);
            StrengthGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).EndInit();
            ResumeLayout(false);
            PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox JsonFolderPathInput;
        private System.Windows.Forms.GroupBox JsonPathGroup;
        private System.Windows.Forms.Label JsonPathLabel;
        private System.Windows.Forms.GroupBox StrengthGroup;
        private System.Windows.Forms.Label StrengthLabel;
        private System.Windows.Forms.NumericUpDown numericUpDown1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button OpenWeaponCreatorButton;
        private Button OpenBattleMoveCreatorButton;
        private OpenFileDialog openFileDialogFindJsonRoot;
        private Button FindJsonsRootButton;
        private Button button1;
    }
}

