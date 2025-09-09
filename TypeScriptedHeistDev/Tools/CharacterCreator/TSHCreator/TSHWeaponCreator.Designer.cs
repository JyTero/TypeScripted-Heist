namespace TSHCreator
{
    partial class TSHWeaponCreator
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
            this.NameGroup = new System.Windows.Forms.GroupBox();
            this.NameLabel = new System.Windows.Forms.Label();
            this.WeaponNameInput = new System.Windows.Forms.TextBox();
            this.WeaponHitGroup = new System.Windows.Forms.GroupBox();
            this.WeaponHitLabel = new System.Windows.Forms.Label();
            this.BatlemovesLabel = new System.Windows.Forms.Label();
            this.WeaponHitInput = new System.Windows.Forms.NumericUpDown();
            this.WeaponDamageGroup = new System.Windows.Forms.GroupBox();
            this.WeaponDamageInput = new System.Windows.Forms.NumericUpDown();
            this.WeaponDamageLabel = new System.Windows.Forms.Label();
            this.CreateWeaponData = new System.Windows.Forms.Button();
            this.NameGroup.SuspendLayout();
            this.WeaponHitGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.WeaponHitInput)).BeginInit();
            this.WeaponDamageGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.WeaponDamageInput)).BeginInit();
            this.SuspendLayout();
            // 
            // NameGroup
            // 
            this.NameGroup.Controls.Add(this.WeaponNameInput);
            this.NameGroup.Controls.Add(this.NameLabel);
            this.NameGroup.Location = new System.Drawing.Point(12, 12);
            this.NameGroup.Name = "NameGroup";
            this.NameGroup.Size = new System.Drawing.Size(200, 42);
            this.NameGroup.TabIndex = 0;
            this.NameGroup.TabStop = false;
            this.NameGroup.Text = "NameGroup";
            // 
            // NameLabel
            // 
            this.NameLabel.AutoSize = true;
            this.NameLabel.Location = new System.Drawing.Point(6, 16);
            this.NameLabel.Name = "NameLabel";
            this.NameLabel.Size = new System.Drawing.Size(79, 13);
            this.NameLabel.TabIndex = 0;
            this.NameLabel.Text = "Weapon Name";
            // 
            // WeaponNameInput
            // 
            this.WeaponNameInput.Location = new System.Drawing.Point(91, 13);
            this.WeaponNameInput.Name = "WeaponNameInput";
            this.WeaponNameInput.Size = new System.Drawing.Size(100, 20);
            this.WeaponNameInput.TabIndex = 1;
            // 
            // WeaponHitGroup
            // 
            this.WeaponHitGroup.Controls.Add(this.WeaponHitInput);
            this.WeaponHitGroup.Controls.Add(this.WeaponHitLabel);
            this.WeaponHitGroup.Location = new System.Drawing.Point(12, 95);
            this.WeaponHitGroup.Name = "WeaponHitGroup";
            this.WeaponHitGroup.Size = new System.Drawing.Size(140, 42);
            this.WeaponHitGroup.TabIndex = 2;
            this.WeaponHitGroup.TabStop = false;
            this.WeaponHitGroup.Text = "WeaponHitGroup";
            // 
            // WeaponHitLabel
            // 
            this.WeaponHitLabel.AutoSize = true;
            this.WeaponHitLabel.Location = new System.Drawing.Point(6, 16);
            this.WeaponHitLabel.Name = "WeaponHitLabel";
            this.WeaponHitLabel.Size = new System.Drawing.Size(64, 13);
            this.WeaponHitLabel.TabIndex = 0;
            this.WeaponHitLabel.Text = "Weapon Hit";
            // 
            // BatlemovesLabel
            // 
            this.BatlemovesLabel.AutoSize = true;
            this.BatlemovesLabel.Location = new System.Drawing.Point(43, 70);
            this.BatlemovesLabel.Name = "BatlemovesLabel";
            this.BatlemovesLabel.Size = new System.Drawing.Size(131, 13);
            this.BatlemovesLabel.TabIndex = 3;
            this.BatlemovesLabel.Text = "Battle Moves, Placeholder";
            // 
            // WeaponHitInput
            // 
            this.WeaponHitInput.Location = new System.Drawing.Point(100, 14);
            this.WeaponHitInput.Name = "WeaponHitInput";
            this.WeaponHitInput.Size = new System.Drawing.Size(40, 20);
            this.WeaponHitInput.TabIndex = 1;
            // 
            // WeaponDamageGroup
            // 
            this.WeaponDamageGroup.Controls.Add(this.WeaponDamageInput);
            this.WeaponDamageGroup.Controls.Add(this.WeaponDamageLabel);
            this.WeaponDamageGroup.Location = new System.Drawing.Point(12, 143);
            this.WeaponDamageGroup.Name = "WeaponDamageGroup";
            this.WeaponDamageGroup.Size = new System.Drawing.Size(140, 42);
            this.WeaponDamageGroup.TabIndex = 3;
            this.WeaponDamageGroup.TabStop = false;
            this.WeaponDamageGroup.Text = "WeaponDamageGroup";
            // 
            // WeaponDamageInput
            // 
            this.WeaponDamageInput.Location = new System.Drawing.Point(100, 14);
            this.WeaponDamageInput.Name = "WeaponDamageInput";
            this.WeaponDamageInput.Size = new System.Drawing.Size(40, 20);
            this.WeaponDamageInput.TabIndex = 1;
            // 
            // WeaponDamageLabel
            // 
            this.WeaponDamageLabel.AutoSize = true;
            this.WeaponDamageLabel.Location = new System.Drawing.Point(6, 16);
            this.WeaponDamageLabel.Name = "WeaponDamageLabel";
            this.WeaponDamageLabel.Size = new System.Drawing.Size(91, 13);
            this.WeaponDamageLabel.TabIndex = 0;
            this.WeaponDamageLabel.Text = "Weapon Damage";
            // 
            // CreateWeaponData
            // 
            this.CreateWeaponData.AutoSize = true;
            this.CreateWeaponData.Location = new System.Drawing.Point(69, 262);
            this.CreateWeaponData.Name = "CreateWeaponData";
            this.CreateWeaponData.Size = new System.Drawing.Size(118, 23);
            this.CreateWeaponData.TabIndex = 4;
            this.CreateWeaponData.Text = "Create Weapon Data";
            this.CreateWeaponData.UseVisualStyleBackColor = true;
            this.CreateWeaponData.Click += new System.EventHandler(this.CreateWeaponData_Click);
            // 
            // TSHWeaponCreator
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(256, 297);
            this.Controls.Add(this.CreateWeaponData);
            this.Controls.Add(this.WeaponDamageGroup);
            this.Controls.Add(this.BatlemovesLabel);
            this.Controls.Add(this.WeaponHitGroup);
            this.Controls.Add(this.NameGroup);
            this.Name = "TSHWeaponCreator";
            this.Text = "TSHWeaponCreator";
            this.NameGroup.ResumeLayout(false);
            this.NameGroup.PerformLayout();
            this.WeaponHitGroup.ResumeLayout(false);
            this.WeaponHitGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.WeaponHitInput)).EndInit();
            this.WeaponDamageGroup.ResumeLayout(false);
            this.WeaponDamageGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.WeaponDamageInput)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.GroupBox NameGroup;
        private System.Windows.Forms.TextBox WeaponNameInput;
        private System.Windows.Forms.Label NameLabel;
        private System.Windows.Forms.GroupBox WeaponHitGroup;
        private System.Windows.Forms.Label WeaponHitLabel;
        private System.Windows.Forms.Label BatlemovesLabel;
        private System.Windows.Forms.NumericUpDown WeaponHitInput;
        private System.Windows.Forms.GroupBox WeaponDamageGroup;
        private System.Windows.Forms.NumericUpDown WeaponDamageInput;
        private System.Windows.Forms.Label WeaponDamageLabel;
        private System.Windows.Forms.Button CreateWeaponData;
    }
}