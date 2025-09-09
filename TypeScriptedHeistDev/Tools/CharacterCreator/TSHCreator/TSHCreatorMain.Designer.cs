namespace TSHCreator
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
            this.NameInput = new System.Windows.Forms.TextBox();
            this.NameGroup = new System.Windows.Forms.GroupBox();
            this.NameLabel = new System.Windows.Forms.Label();
            this.StrengthGroup = new System.Windows.Forms.GroupBox();
            this.numericUpDown1 = new System.Windows.Forms.NumericUpDown();
            this.StrengthLabel = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.OpenWeaponCreatorButton = new System.Windows.Forms.Button();
            this.NameGroup.SuspendLayout();
            this.StrengthGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown1)).BeginInit();
            this.SuspendLayout();
            // 
            // NameInput
            // 
            this.NameInput.Location = new System.Drawing.Point(107, 13);
            this.NameInput.Name = "NameInput";
            this.NameInput.Size = new System.Drawing.Size(100, 20);
            this.NameInput.TabIndex = 1;
            // 
            // NameGroup
            // 
            this.NameGroup.Controls.Add(this.NameLabel);
            this.NameGroup.Controls.Add(this.NameInput);
            this.NameGroup.Location = new System.Drawing.Point(85, 41);
            this.NameGroup.Name = "NameGroup";
            this.NameGroup.Size = new System.Drawing.Size(215, 42);
            this.NameGroup.TabIndex = 2;
            this.NameGroup.TabStop = false;
            this.NameGroup.Text = "NameGroup";
            // 
            // NameLabel
            // 
            this.NameLabel.AutoSize = true;
            this.NameLabel.Location = new System.Drawing.Point(17, 16);
            this.NameLabel.Name = "NameLabel";
            this.NameLabel.Size = new System.Drawing.Size(84, 13);
            this.NameLabel.TabIndex = 2;
            this.NameLabel.Text = "Character Name";
            // 
            // StrengthGroup
            // 
            this.StrengthGroup.Controls.Add(this.numericUpDown1);
            this.StrengthGroup.Controls.Add(this.StrengthLabel);
            this.StrengthGroup.Location = new System.Drawing.Point(85, 89);
            this.StrengthGroup.Name = "StrengthGroup";
            this.StrengthGroup.Size = new System.Drawing.Size(166, 42);
            this.StrengthGroup.TabIndex = 3;
            this.StrengthGroup.TabStop = false;
            this.StrengthGroup.Text = "StrengthGroup";
            // 
            // numericUpDown1
            // 
            this.numericUpDown1.Location = new System.Drawing.Point(116, 14);
            this.numericUpDown1.Name = "numericUpDown1";
            this.numericUpDown1.Size = new System.Drawing.Size(43, 20);
            this.numericUpDown1.TabIndex = 3;
            // 
            // StrengthLabel
            // 
            this.StrengthLabel.AutoSize = true;
            this.StrengthLabel.Location = new System.Drawing.Point(17, 16);
            this.StrengthLabel.Name = "StrengthLabel";
            this.StrengthLabel.Size = new System.Drawing.Size(84, 13);
            this.StrengthLabel.TabIndex = 2;
            this.StrengthLabel.Text = "Character Name";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(79, 167);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(213, 13);
            this.label1.TabIndex = 4;
            this.label1.Text = "IGNORE THOSE ABOVE, NOT WORKING";
            // 
            // OpenWeaponCreatorButton
            // 
            this.OpenWeaponCreatorButton.AutoSize = true;
            this.OpenWeaponCreatorButton.Location = new System.Drawing.Point(144, 328);
            this.OpenWeaponCreatorButton.Name = "OpenWeaponCreatorButton";
            this.OpenWeaponCreatorButton.Size = new System.Drawing.Size(124, 23);
            this.OpenWeaponCreatorButton.TabIndex = 5;
            this.OpenWeaponCreatorButton.Text = "Open Weapon Creator";
            this.OpenWeaponCreatorButton.UseVisualStyleBackColor = true;
            this.OpenWeaponCreatorButton.Click += new System.EventHandler(this.OpenWeaponCreatorButton_Click);
            // 
            // TSHCreator
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(529, 478);
            this.Controls.Add(this.OpenWeaponCreatorButton);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.StrengthGroup);
            this.Controls.Add(this.NameGroup);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "TSHCreator";
            this.Text = "TSHCreator";
            this.NameGroup.ResumeLayout(false);
            this.NameGroup.PerformLayout();
            this.StrengthGroup.ResumeLayout(false);
            this.StrengthGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.numericUpDown1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

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
    }
}

