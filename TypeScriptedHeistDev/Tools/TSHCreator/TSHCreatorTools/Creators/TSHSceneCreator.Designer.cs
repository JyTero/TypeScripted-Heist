namespace TSHCreatorTools.Creators
{
    partial class TSHSceneCreator
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
            SceneNameGB = new GroupBox();
            textBox1 = new TextBox();
            SceneNameLabel = new Label();
            SceneTypeGB = new GroupBox();
            SceneTypeCB = new ComboBox();
            ColorPicker = new ColorDialog();
            Metadata = new MetadataCreator();
            Colorpick = new TSHCreatorTools.WindowComponents.Colorpicker();
            SceneNameGB.SuspendLayout();
            SceneTypeGB.SuspendLayout();
            SuspendLayout();
            // 
            // SceneNameGB
            // 
            SceneNameGB.Controls.Add(textBox1);
            SceneNameGB.Controls.Add(SceneNameLabel);
            SceneNameGB.Location = new Point(59, 79);
            SceneNameGB.Name = "SceneNameGB";
            SceneNameGB.Size = new Size(193, 54);
            SceneNameGB.TabIndex = 0;
            SceneNameGB.TabStop = false;
            SceneNameGB.Text = "Scene Name";
            // 
            // textBox1
            // 
            textBox1.Location = new Point(85, 16);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(100, 23);
            textBox1.TabIndex = 1;
            // 
            // SceneNameLabel
            // 
            SceneNameLabel.AutoSize = true;
            SceneNameLabel.Location = new Point(6, 19);
            SceneNameLabel.Name = "SceneNameLabel";
            SceneNameLabel.RightToLeft = RightToLeft.Yes;
            SceneNameLabel.Size = new Size(73, 15);
            SceneNameLabel.TabIndex = 0;
            SceneNameLabel.Text = "Scene Name";
            // 
            // SceneTypeGB
            // 
            SceneTypeGB.Controls.Add(SceneTypeCB);
            SceneTypeGB.Location = new Point(65, 150);
            SceneTypeGB.Name = "SceneTypeGB";
            SceneTypeGB.Size = new Size(164, 77);
            SceneTypeGB.TabIndex = 1;
            SceneTypeGB.TabStop = false;
            SceneTypeGB.Text = "Scene Type";
            // 
            // SceneTypeCB
            // 
            SceneTypeCB.FormattingEnabled = true;
            SceneTypeCB.Location = new Point(6, 22);
            SceneTypeCB.Name = "SceneTypeCB";
            SceneTypeCB.Size = new Size(121, 23);
            SceneTypeCB.TabIndex = 0;
            // 
            // Metadata
            // 
            Metadata.Location = new Point(394, 262);
            Metadata.Name = "Metadata";
            Metadata.Size = new Size(263, 167);
            Metadata.TabIndex = 3;
            // 
            // Colorpick
            // 
            Colorpick.Location = new Point(59, 251);
            Colorpick.Name = "Colorpick";
            Colorpick.Size = new Size(248, 194);
            Colorpick.TabIndex = 4;
            // 
            // TSHSceneCreator
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 503);
            Controls.Add(Colorpick);
            Controls.Add(Metadata);
            Controls.Add(SceneTypeGB);
            Controls.Add(SceneNameGB);
            Name = "TSHSceneCreator";
            Text = "SceneCreator";
            SceneNameGB.ResumeLayout(false);
            SceneNameGB.PerformLayout();
            SceneTypeGB.ResumeLayout(false);
            ResumeLayout(false);
        }

        #endregion

        private GroupBox SceneNameGB;
        private Label SceneNameLabel;
        private TextBox textBox1;
        private GroupBox SceneTypeGB;
        private ComboBox SceneTypeCB;
        private ColorDialog ColorPicker;
        private MetadataCreator Metadata;
        private WindowComponents.Colorpicker Colorpick;
    }
}