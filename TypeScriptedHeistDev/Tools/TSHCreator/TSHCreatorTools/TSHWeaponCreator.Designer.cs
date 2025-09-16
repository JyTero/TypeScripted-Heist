namespace TSHCreatorTools
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
            NameGroup = new GroupBox();
            WeaponNameInput = new TextBox();
            NameLabel = new Label();
            WeaponHitGroup = new GroupBox();
            WeaponHitInput = new NumericUpDown();
            WeaponHitLabel = new Label();
            BatlemovesLabel = new Label();
            WeaponDamageGroup = new GroupBox();
            WeaponDamageInput = new NumericUpDown();
            WeaponDamageLabel = new Label();
            CreateWeaponDataButton = new Button();
            Metadata = new MetadataCreator();
            battleMovesCheckedList = new CheckedListBox();
            checkBox1 = new CheckBox();
            NameGroup.SuspendLayout();
            WeaponHitGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)WeaponHitInput).BeginInit();
            WeaponDamageGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)WeaponDamageInput).BeginInit();
            SuspendLayout();
            // 
            // NameGroup
            // 
            NameGroup.Controls.Add(WeaponNameInput);
            NameGroup.Controls.Add(NameLabel);
            NameGroup.Location = new Point(14, 12);
            NameGroup.Margin = new Padding(4, 3, 4, 3);
            NameGroup.Name = "NameGroup";
            NameGroup.Padding = new Padding(4, 3, 4, 3);
            NameGroup.Size = new Size(233, 48);
            NameGroup.TabIndex = 0;
            NameGroup.TabStop = false;
            NameGroup.Text = "NameGroup";
            // 
            // WeaponNameInput
            // 
            WeaponNameInput.Location = new Point(106, 15);
            WeaponNameInput.Margin = new Padding(4, 3, 4, 3);
            WeaponNameInput.Name = "WeaponNameInput";
            WeaponNameInput.Size = new Size(116, 23);
            WeaponNameInput.TabIndex = 1;
            // 
            // NameLabel
            // 
            NameLabel.AutoSize = true;
            NameLabel.Location = new Point(7, 18);
            NameLabel.Margin = new Padding(4, 0, 4, 0);
            NameLabel.Name = "NameLabel";
            NameLabel.Size = new Size(86, 15);
            NameLabel.TabIndex = 0;
            NameLabel.Text = "Weapon Name";
            // 
            // WeaponHitGroup
            // 
            WeaponHitGroup.Controls.Add(WeaponHitInput);
            WeaponHitGroup.Controls.Add(WeaponHitLabel);
            WeaponHitGroup.Location = new Point(14, 226);
            WeaponHitGroup.Margin = new Padding(4, 3, 4, 3);
            WeaponHitGroup.Name = "WeaponHitGroup";
            WeaponHitGroup.Padding = new Padding(4, 3, 4, 3);
            WeaponHitGroup.Size = new Size(163, 48);
            WeaponHitGroup.TabIndex = 2;
            WeaponHitGroup.TabStop = false;
            WeaponHitGroup.Text = "WeaponHitGroup";
            // 
            // WeaponHitInput
            // 
            WeaponHitInput.Location = new Point(117, 16);
            WeaponHitInput.Margin = new Padding(4, 3, 4, 3);
            WeaponHitInput.Name = "WeaponHitInput";
            WeaponHitInput.Size = new Size(47, 23);
            WeaponHitInput.TabIndex = 1;
            // 
            // WeaponHitLabel
            // 
            WeaponHitLabel.AutoSize = true;
            WeaponHitLabel.Location = new Point(7, 18);
            WeaponHitLabel.Margin = new Padding(4, 0, 4, 0);
            WeaponHitLabel.Name = "WeaponHitLabel";
            WeaponHitLabel.Size = new Size(70, 15);
            WeaponHitLabel.TabIndex = 0;
            WeaponHitLabel.Text = "Weapon Hit";
            // 
            // BatlemovesLabel
            // 
            BatlemovesLabel.AutoSize = true;
            BatlemovesLabel.Location = new Point(14, 79);
            BatlemovesLabel.Margin = new Padding(4, 0, 4, 0);
            BatlemovesLabel.Name = "BatlemovesLabel";
            BatlemovesLabel.Size = new Size(75, 15);
            BatlemovesLabel.TabIndex = 3;
            BatlemovesLabel.Text = "Battle Moves";
            // 
            // WeaponDamageGroup
            // 
            WeaponDamageGroup.Controls.Add(WeaponDamageInput);
            WeaponDamageGroup.Controls.Add(WeaponDamageLabel);
            WeaponDamageGroup.Location = new Point(14, 281);
            WeaponDamageGroup.Margin = new Padding(4, 3, 4, 3);
            WeaponDamageGroup.Name = "WeaponDamageGroup";
            WeaponDamageGroup.Padding = new Padding(4, 3, 4, 3);
            WeaponDamageGroup.Size = new Size(163, 48);
            WeaponDamageGroup.TabIndex = 3;
            WeaponDamageGroup.TabStop = false;
            WeaponDamageGroup.Text = "WeaponDamageGroup";
            // 
            // WeaponDamageInput
            // 
            WeaponDamageInput.Location = new Point(117, 16);
            WeaponDamageInput.Margin = new Padding(4, 3, 4, 3);
            WeaponDamageInput.Name = "WeaponDamageInput";
            WeaponDamageInput.Size = new Size(47, 23);
            WeaponDamageInput.TabIndex = 1;
            // 
            // WeaponDamageLabel
            // 
            WeaponDamageLabel.AutoSize = true;
            WeaponDamageLabel.Location = new Point(7, 18);
            WeaponDamageLabel.Margin = new Padding(4, 0, 4, 0);
            WeaponDamageLabel.Name = "WeaponDamageLabel";
            WeaponDamageLabel.Size = new Size(98, 15);
            WeaponDamageLabel.TabIndex = 0;
            WeaponDamageLabel.Text = "Weapon Damage";
            // 
            // CreateWeaponDataButton
            // 
            CreateWeaponDataButton.Anchor = AnchorStyles.Bottom | AnchorStyles.Left | AnchorStyles.Right;
            CreateWeaponDataButton.AutoSize = true;
            CreateWeaponDataButton.Location = new Point(191, 300);
            CreateWeaponDataButton.Margin = new Padding(4, 3, 4, 3);
            CreateWeaponDataButton.Name = "CreateWeaponDataButton";
            CreateWeaponDataButton.Size = new Size(138, 27);
            CreateWeaponDataButton.TabIndex = 4;
            CreateWeaponDataButton.Text = "Create Weapon Data";
            CreateWeaponDataButton.UseVisualStyleBackColor = true;
            CreateWeaponDataButton.Click += CreateWeaponData_Click;
            // 
            // Metadata
            // 
            Metadata.Location = new Point(254, 30);
            Metadata.Name = "Metadata";
            Metadata.Size = new Size(263, 225);
            Metadata.TabIndex = 5;
            // 
            // battleMovesCheckedList
            // 
            battleMovesCheckedList.FormattingEnabled = true;
            battleMovesCheckedList.Location = new Point(14, 97);
            battleMovesCheckedList.Name = "battleMovesCheckedList";
            battleMovesCheckedList.Size = new Size(233, 94);
            battleMovesCheckedList.TabIndex = 6;
            // 
            // checkBox1
            // 
            checkBox1.AutoSize = true;
            checkBox1.Location = new Point(388, 274);
            checkBox1.Name = "checkBox1";
            checkBox1.Size = new Size(82, 19);
            checkBox1.TabIndex = 7;
            checkBox1.Text = "checkBox1";
            checkBox1.UseVisualStyleBackColor = true;
            // 
            // TSHWeaponCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(521, 341);
            Controls.Add(checkBox1);
            Controls.Add(battleMovesCheckedList);
            Controls.Add(Metadata);
            Controls.Add(CreateWeaponDataButton);
            Controls.Add(WeaponDamageGroup);
            Controls.Add(BatlemovesLabel);
            Controls.Add(WeaponHitGroup);
            Controls.Add(NameGroup);
            Margin = new Padding(4, 3, 4, 3);
            Name = "TSHWeaponCreator";
            Text = "TSHWeaponCreator";
            NameGroup.ResumeLayout(false);
            NameGroup.PerformLayout();
            WeaponHitGroup.ResumeLayout(false);
            WeaponHitGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)WeaponHitInput).EndInit();
            WeaponDamageGroup.ResumeLayout(false);
            WeaponDamageGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)WeaponDamageInput).EndInit();
            ResumeLayout(false);
            PerformLayout();

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
        private System.Windows.Forms.Button CreateWeaponDataButton;
        private MetadataCreator Metadata;
        private CheckedListBox battleMovesCheckedList;
        private CheckBox checkBox1;
    }
}