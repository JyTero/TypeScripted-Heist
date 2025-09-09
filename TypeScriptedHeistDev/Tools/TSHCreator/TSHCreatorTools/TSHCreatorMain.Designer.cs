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
            NameInput = new TextBox();
            NameGroup = new GroupBox();
            NameLabel = new Label();
            StrengthGroup = new GroupBox();
            numericUpDown1 = new NumericUpDown();
            StrengthLabel = new Label();
            label1 = new Label();
            OpenWeaponCreatorButton = new Button();
            OpenBattleMoveCreatorButton = new Button();
            NameGroup.SuspendLayout();
            StrengthGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).BeginInit();
            SuspendLayout();
            // 
            // NameInput
            // 
            NameInput.Location = new Point(125, 15);
            NameInput.Margin = new Padding(4, 3, 4, 3);
            NameInput.Name = "NameInput";
            NameInput.Size = new Size(116, 23);
            NameInput.TabIndex = 1;
            // 
            // NameGroup
            // 
            NameGroup.Controls.Add(NameLabel);
            NameGroup.Controls.Add(NameInput);
            NameGroup.Location = new Point(99, 47);
            NameGroup.Margin = new Padding(4, 3, 4, 3);
            NameGroup.Name = "NameGroup";
            NameGroup.Padding = new Padding(4, 3, 4, 3);
            NameGroup.Size = new Size(251, 48);
            NameGroup.TabIndex = 2;
            NameGroup.TabStop = false;
            NameGroup.Text = "NameGroup";
            // 
            // NameLabel
            // 
            NameLabel.AutoSize = true;
            NameLabel.Location = new Point(20, 18);
            NameLabel.Margin = new Padding(4, 0, 4, 0);
            NameLabel.Name = "NameLabel";
            NameLabel.Size = new Size(93, 15);
            NameLabel.TabIndex = 2;
            NameLabel.Text = "Character Name";
            // 
            // StrengthGroup
            // 
            StrengthGroup.Controls.Add(numericUpDown1);
            StrengthGroup.Controls.Add(StrengthLabel);
            StrengthGroup.Location = new Point(99, 103);
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
            label1.Location = new Point(92, 193);
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
            // TSHCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(617, 552);
            Controls.Add(OpenBattleMoveCreatorButton);
            Controls.Add(OpenWeaponCreatorButton);
            Controls.Add(label1);
            Controls.Add(StrengthGroup);
            Controls.Add(NameGroup);
            Margin = new Padding(4, 3, 4, 3);
            MinimizeBox = false;
            Name = "TSHCreator";
            Text = "TSHCreator";
            NameGroup.ResumeLayout(false);
            NameGroup.PerformLayout();
            StrengthGroup.ResumeLayout(false);
            StrengthGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).EndInit();
            ResumeLayout(false);
            PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox NameInput;
        private System.Windows.Forms.GroupBox NameGroup;
        private System.Windows.Forms.Label NameLabel;
        private System.Windows.Forms.GroupBox StrengthGroup;
        private System.Windows.Forms.Label StrengthLabel;
        private System.Windows.Forms.NumericUpDown numericUpDown1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button OpenWeaponCreatorButton;
        private Button OpenBattleMoveCreatorButton;
    }
}

