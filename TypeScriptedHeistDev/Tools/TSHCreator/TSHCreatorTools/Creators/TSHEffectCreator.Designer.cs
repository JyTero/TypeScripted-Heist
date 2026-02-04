
namespace TSHCreatorTools.Creators
{
    partial class TSHEffectCreator
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
            EffectNameInput = new TextBox();
            NameLabel = new Label();
            metadataCreator1 = new MetadataCreator();
            EffectTargetStatComboBox = new ComboBox();
            targetStatLabel = new Label();
            CreateDataButton = new Button();
            PotencyNumericUpDown = new NumericUpDown();
            DurationNumericUpDown = new NumericUpDown();
            PotencyLabel = new Label();
            DurationLabel = new Label();
            EffectTypeComboBox = new ComboBox();
            EffectTypeLabel = new Label();
            LoadEffectDataButton = new Button();
            NameGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)PotencyNumericUpDown).BeginInit();
            ((System.ComponentModel.ISupportInitialize)DurationNumericUpDown).BeginInit();
            SuspendLayout();
            // 
            // NameGroup
            // 
            NameGroup.Controls.Add(EffectNameInput);
            NameGroup.Controls.Add(NameLabel);
            NameGroup.Location = new Point(35, 34);
            NameGroup.Margin = new Padding(4, 3, 4, 3);
            NameGroup.Name = "NameGroup";
            NameGroup.Padding = new Padding(4, 3, 4, 3);
            NameGroup.Size = new Size(233, 48);
            NameGroup.TabIndex = 1;
            NameGroup.TabStop = false;
            NameGroup.Text = "NameGroup";
            // 
            // EffectNameInput
            // 
            EffectNameInput.Location = new Point(106, 15);
            EffectNameInput.Margin = new Padding(4, 3, 4, 3);
            EffectNameInput.Name = "EffectNameInput";
            EffectNameInput.Size = new Size(116, 23);
            EffectNameInput.TabIndex = 1;
            // 
            // NameLabel
            // 
            NameLabel.AutoSize = true;
            NameLabel.Location = new Point(8, 18);
            NameLabel.Margin = new Padding(4, 0, 4, 0);
            NameLabel.Name = "NameLabel";
            NameLabel.Size = new Size(70, 15);
            NameLabel.TabIndex = 0;
            NameLabel.Text = "Effect name";
            // 
            // metadataCreator1
            // 
            metadataCreator1.Location = new Point(481, 152);
            metadataCreator1.Name = "metadataCreator1";
            metadataCreator1.Size = new Size(263, 225);
            metadataCreator1.TabIndex = 2;
            // 
            // EffectTargetStatComboBox
            // 
            EffectTargetStatComboBox.FormattingEnabled = true;
            EffectTargetStatComboBox.Location = new Point(141, 105);
            EffectTargetStatComboBox.Name = "EffectTargetStatComboBox";
            EffectTargetStatComboBox.Size = new Size(121, 23);
            EffectTargetStatComboBox.TabIndex = 3;
            // 
            // targetStatLabel
            // 
            targetStatLabel.AutoSize = true;
            targetStatLabel.Location = new Point(35, 108);
            targetStatLabel.Name = "targetStatLabel";
            targetStatLabel.Size = new Size(93, 15);
            targetStatLabel.TabIndex = 4;
            targetStatLabel.Text = "Effect target stat";
            // 
            // CreateDataButton
            // 
            CreateDataButton.Anchor = AnchorStyles.Bottom | AnchorStyles.Left | AnchorStyles.Right;
            CreateDataButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            CreateDataButton.Location = new Point(150, 370);
            CreateDataButton.Name = "CreateDataButton";
            CreateDataButton.Size = new Size(112, 23);
            CreateDataButton.TabIndex = 7;
            CreateDataButton.Text = "Create Effect Data";
            CreateDataButton.UseVisualStyleBackColor = true;
            CreateDataButton.Click += CreateDataButton_Click;
            // 
            // PotencyNumericUpDown
            // 
            PotencyNumericUpDown.Location = new Point(256, 232);
            PotencyNumericUpDown.Name = "PotencyNumericUpDown";
            PotencyNumericUpDown.Size = new Size(38, 23);
            PotencyNumericUpDown.TabIndex = 8;
            // 
            // DurationNumericUpDown
            // 
            DurationNumericUpDown.Location = new Point(256, 279);
            DurationNumericUpDown.Name = "DurationNumericUpDown";
            DurationNumericUpDown.Size = new Size(38, 23);
            DurationNumericUpDown.TabIndex = 9;
            // 
            // PotencyLabel
            // 
            PotencyLabel.AutoSize = true;
            PotencyLabel.Location = new Point(136, 240);
            PotencyLabel.Name = "PotencyLabel";
            PotencyLabel.Size = new Size(83, 15);
            PotencyLabel.TabIndex = 10;
            PotencyLabel.Text = "Effect potency";
            // 
            // DurationLabel
            // 
            DurationLabel.AutoSize = true;
            DurationLabel.Location = new Point(136, 287);
            DurationLabel.Name = "DurationLabel";
            DurationLabel.Size = new Size(85, 15);
            DurationLabel.TabIndex = 11;
            DurationLabel.Text = "Effect duration";
            // 
            // EffectTypeComboBox
            // 
            EffectTypeComboBox.FormattingEnabled = true;
            EffectTypeComboBox.Location = new Point(141, 148);
            EffectTypeComboBox.Name = "EffectTypeComboBox";
            EffectTypeComboBox.Size = new Size(121, 23);
            EffectTypeComboBox.TabIndex = 5;
            EffectTypeComboBox.SelectedIndexChanged += TargetComboBox_SelectedIndexChanged;
            // 
            // EffectTypeLabel
            // 
            EffectTypeLabel.AutoSize = true;
            EffectTypeLabel.Location = new Point(35, 151);
            EffectTypeLabel.Name = "EffectTypeLabel";
            EffectTypeLabel.Size = new Size(63, 15);
            EffectTypeLabel.TabIndex = 6;
            EffectTypeLabel.Text = "Effect type";
            // 
            // LoadEffectDataButton
            // 
            LoadEffectDataButton.AutoSize = true;
            LoadEffectDataButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            LoadEffectDataButton.Location = new Point(154, 399);
            LoadEffectDataButton.Name = "LoadEffectDataButton";
            LoadEffectDataButton.Size = new Size(103, 25);
            LoadEffectDataButton.TabIndex = 12;
            LoadEffectDataButton.Text = "Load Effect Data";
            LoadEffectDataButton.UseVisualStyleBackColor = true;
            LoadEffectDataButton.Click += LoadEffectDataButton_Click;
            // 
            // TSHEffectCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(LoadEffectDataButton);
            Controls.Add(DurationLabel);
            Controls.Add(PotencyLabel);
            Controls.Add(DurationNumericUpDown);
            Controls.Add(PotencyNumericUpDown);
            Controls.Add(CreateDataButton);
            Controls.Add(EffectTypeLabel);
            Controls.Add(EffectTypeComboBox);
            Controls.Add(targetStatLabel);
            Controls.Add(EffectTargetStatComboBox);
            Controls.Add(metadataCreator1);
            Controls.Add(NameGroup);
            Name = "TSHEffectCreator";
            Text = "TSHEffectCreator";
            Load += TSHEffectCreator_Load;
            NameGroup.ResumeLayout(false);
            NameGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)PotencyNumericUpDown).EndInit();
            ((System.ComponentModel.ISupportInitialize)DurationNumericUpDown).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private GroupBox NameGroup;
        private TextBox EffectNameInput;
        private Label NameLabel;
        private MetadataCreator metadataCreator1;
        private ComboBox EffectTargetStatComboBox;
        private Label targetStatLabel;
        private Button CreateDataButton;
        private NumericUpDown PotencyNumericUpDown;
        private NumericUpDown DurationNumericUpDown;
        private Label PotencyLabel;
        private Label DurationLabel;
        private ComboBox EffectTypeComboBox;
        private Label EffectTypeLabel;
        private Button LoadEffectDataButton;
    }
}