namespace TSHCreatorTools
{
    partial class MetadataCreator
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

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            MetadataHeader = new Label();
            MetadataDevNameInput = new TextBox();
            MetadataDataDevNameLabel = new Label();
            MetadataDevNameGroup = new GroupBox();
            MetadataDataTypeGroup = new GroupBox();
            MetadataTypeInput = new TextBox();
            MetadataTypeLabel = new Label();
            MetadataDevNameGroup.SuspendLayout();
            MetadataDataTypeGroup.SuspendLayout();
            SuspendLayout();
            // 
            // MetadataHeader
            // 
            MetadataHeader.AutoSize = true;
            MetadataHeader.Font = new Font("Segoe UI", 10F, FontStyle.Bold);
            MetadataHeader.Location = new Point(28, 11);
            MetadataHeader.Name = "MetadataHeader";
            MetadataHeader.RightToLeft = RightToLeft.Yes;
            MetadataHeader.Size = new Size(73, 19);
            MetadataHeader.TabIndex = 0;
            MetadataHeader.Text = "Metadata";
            // 
            // MetadataDevNameInput
            // 
            MetadataDevNameInput.Location = new Point(93, 16);
            MetadataDevNameInput.Name = "MetadataDevNameInput";
            MetadataDevNameInput.Size = new Size(100, 23);
            MetadataDevNameInput.TabIndex = 1;
            // 
            // MetadataDataDevNameLabel
            // 
            MetadataDataDevNameLabel.AutoSize = true;
            MetadataDataDevNameLabel.Location = new Point(6, 19);
            MetadataDataDevNameLabel.Name = "MetadataDataDevNameLabel";
            MetadataDataDevNameLabel.Size = new Size(86, 15);
            MetadataDataDevNameLabel.TabIndex = 2;
            MetadataDataDevNameLabel.Text = "Data dev name";
            // 
            // MetadataDevNameGroup
            // 
            MetadataDevNameGroup.Controls.Add(MetadataDataDevNameLabel);
            MetadataDevNameGroup.Controls.Add(MetadataDevNameInput);
            MetadataDevNameGroup.Location = new Point(3, 42);
            MetadataDevNameGroup.Name = "MetadataDevNameGroup";
            MetadataDevNameGroup.Size = new Size(214, 51);
            MetadataDevNameGroup.TabIndex = 3;
            MetadataDevNameGroup.TabStop = false;
            // 
            // MetadataDataTypeGroup
            // 
            MetadataDataTypeGroup.Controls.Add(MetadataTypeInput);
            MetadataDataTypeGroup.Controls.Add(MetadataTypeLabel);
            MetadataDataTypeGroup.Location = new Point(3, 99);
            MetadataDataTypeGroup.Name = "MetadataDataTypeGroup";
            MetadataDataTypeGroup.Size = new Size(208, 57);
            MetadataDataTypeGroup.TabIndex = 4;
            MetadataDataTypeGroup.TabStop = false;
            // 
            // MetadataTypeInput
            // 
            MetadataTypeInput.Location = new Point(102, 16);
            MetadataTypeInput.Name = "MetadataTypeInput";
            MetadataTypeInput.Size = new Size(100, 23);
            MetadataTypeInput.TabIndex = 1;
            // 
            // MetadataTypeLabel
            // 
            MetadataTypeLabel.AutoSize = true;
            MetadataTypeLabel.Location = new Point(6, 19);
            MetadataTypeLabel.Name = "MetadataTypeLabel";
            MetadataTypeLabel.Size = new Size(57, 15);
            MetadataTypeLabel.TabIndex = 0;
            MetadataTypeLabel.Text = "Data type";
            // 
            // MetadataCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            Controls.Add(MetadataDataTypeGroup);
            Controls.Add(MetadataDevNameGroup);
            Controls.Add(MetadataHeader);
            Name = "MetadataCreator";
            Size = new Size(263, 225);
            MetadataDevNameGroup.ResumeLayout(false);
            MetadataDevNameGroup.PerformLayout();
            MetadataDataTypeGroup.ResumeLayout(false);
            MetadataDataTypeGroup.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label MetadataHeader;
        private TextBox MetadataDevNameInput;
        private Label MetadataDataDevNameLabel;
        private GroupBox MetadataDevNameGroup;
        private GroupBox MetadataDataTypeGroup;
        private TextBox MetadataTypeInput;
        private Label MetadataTypeLabel;
    }
}
