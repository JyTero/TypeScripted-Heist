using System.Diagnostics;

namespace TSHCreatorTools
{
    partial class SelectImage
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
            GroupBox ImagePathGroup;
            FindImageButton = new Button();
            FindJsonsRootButton = new Button();
            ImagePrevieBox = new PictureBox();
            ImagePathLabel = new Label();
            ImagePathInput = new TextBox();
            ImagePathGroup = new GroupBox();
            ImagePathGroup.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)ImagePrevieBox).BeginInit();
            SuspendLayout();
            // 
            // ImagePathGroup
            // 
            ImagePathGroup.Controls.Add(FindImageButton);
            ImagePathGroup.Controls.Add(FindJsonsRootButton);
            ImagePathGroup.Controls.Add(ImagePrevieBox);
            ImagePathGroup.Controls.Add(ImagePathLabel);
            ImagePathGroup.Controls.Add(ImagePathInput);
            ImagePathGroup.Location = new Point(4, 3);
            ImagePathGroup.Margin = new Padding(4, 3, 4, 3);
            ImagePathGroup.Name = "ImagePathGroup";
            ImagePathGroup.Padding = new Padding(4, 3, 4, 3);
            ImagePathGroup.Size = new Size(541, 172);
            ImagePathGroup.TabIndex = 20;
            ImagePathGroup.TabStop = false;
            ImagePathGroup.Text = "Path to Image";
            // 
            // FindImageButton
            // 
            FindImageButton.Location = new Point(242, 46);
            FindImageButton.Name = "FindImageButton";
            FindImageButton.Size = new Size(75, 23);
            FindImageButton.TabIndex = 20;
            FindImageButton.Text = "Browse...";
            FindImageButton.UseVisualStyleBackColor = true;
            FindImageButton.Click += button1_Click;
            // 
            // FindJsonsRootButton
            // 
            FindJsonsRootButton.Anchor = AnchorStyles.Top | AnchorStyles.Right;
            FindJsonsRootButton.AutoSize = true;
            FindJsonsRootButton.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            FindJsonsRootButton.Location = new Point(891, 44);
            FindJsonsRootButton.Name = "FindJsonsRootButton";
            FindJsonsRootButton.Size = new Size(64, 25);
            FindJsonsRootButton.TabIndex = 7;
            FindJsonsRootButton.Text = "Browse...";
            FindJsonsRootButton.UseVisualStyleBackColor = true;
            // 
            // ImagePrevieBox
            // 
            ImagePrevieBox.Location = new Point(49, 44);
            ImagePrevieBox.Name = "ImagePrevieBox";
            ImagePrevieBox.Size = new Size(125, 125);
            ImagePrevieBox.TabIndex = 18;
            ImagePrevieBox.TabStop = false;
            // 
            // ImagePathLabel
            // 
            ImagePathLabel.AutoSize = true;
            ImagePathLabel.Location = new Point(10, 19);
            ImagePathLabel.Margin = new Padding(4, 0, 4, 0);
            ImagePathLabel.Name = "ImagePathLabel";
            ImagePathLabel.Size = new Size(81, 15);
            ImagePathLabel.TabIndex = 2;
            ImagePathLabel.Text = "Path to Image";
            // 
            // ImagePathInput
            // 
            ImagePathInput.Location = new Point(125, 17);
            ImagePathInput.Margin = new Padding(4, 3, 4, 3);
            ImagePathInput.Name = "ImagePathInput";
            ImagePathInput.Size = new Size(408, 23);
            ImagePathInput.TabIndex = 1;
            // 
            // SelectImage
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            Controls.Add(ImagePathGroup);
            Name = "SelectImage";
            Size = new Size(602, 225);
            ImagePathGroup.ResumeLayout(false);
            ImagePathGroup.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)ImagePrevieBox).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private Button FindImageButton;
        private Button FindJsonsRootButton;
        private PictureBox ImagePrevieBox;
        private Label ImagePathLabel;
        private TextBox ImagePathInput;
    }
}
