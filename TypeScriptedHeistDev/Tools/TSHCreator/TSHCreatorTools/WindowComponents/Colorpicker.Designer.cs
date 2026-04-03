namespace TSHCreatorTools.WindowComponents
{
    partial class Colorpicker
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
            ColorAValue = new NumericUpDown();
            ColorPreview = new PictureBox();
            ColorpickerButton = new Button();
            ColorBValue = new NumericUpDown();
            ColorGValue = new NumericUpDown();
            ColorRValue = new NumericUpDown();
            ColorDialog = new ColorDialog();
            ((System.ComponentModel.ISupportInitialize)ColorAValue).BeginInit();
            ((System.ComponentModel.ISupportInitialize)ColorPreview).BeginInit();
            ((System.ComponentModel.ISupportInitialize)ColorBValue).BeginInit();
            ((System.ComponentModel.ISupportInitialize)ColorGValue).BeginInit();
            ((System.ComponentModel.ISupportInitialize)ColorRValue).BeginInit();
            SuspendLayout();
            // 
            // ColorAValue
            // 
            ColorAValue.Location = new Point(101, 154);
            ColorAValue.Maximum = new decimal(new int[] { 255, 0, 0, 0 });
            ColorAValue.Name = "ColorAValue";
            ColorAValue.Size = new Size(120, 23);
            ColorAValue.TabIndex = 26;
            ColorAValue.ValueChanged += ColorAValue_ValueChanged;
            // 
            // ColorPreview
            // 
            ColorPreview.Location = new Point(31, 81);
            ColorPreview.Name = "ColorPreview";
            ColorPreview.Size = new Size(42, 42);
            ColorPreview.TabIndex = 25;
            ColorPreview.TabStop = false;
            // 
            // ColorpickerButton
            // 
            ColorpickerButton.Location = new Point(101, 36);
            ColorpickerButton.Name = "ColorpickerButton";
            ColorpickerButton.Size = new Size(120, 23);
            ColorpickerButton.TabIndex = 24;
            ColorpickerButton.Text = "Open Colorpicker";
            ColorpickerButton.UseVisualStyleBackColor = true;
            ColorpickerButton.Click += ColorpickerButton_Click;
            // 
            // ColorBValue
            // 
            ColorBValue.Location = new Point(101, 125);
            ColorBValue.Maximum = new decimal(new int[] { 255, 0, 0, 0 });
            ColorBValue.Name = "ColorBValue";
            ColorBValue.Size = new Size(120, 23);
            ColorBValue.TabIndex = 23;
            ColorBValue.ValueChanged += ColorBValue_ValueChanged;
            // 
            // ColorGValue
            // 
            ColorGValue.Location = new Point(101, 96);
            ColorGValue.Maximum = new decimal(new int[] { 255, 0, 0, 0 });
            ColorGValue.Name = "ColorGValue";
            ColorGValue.Size = new Size(120, 23);
            ColorGValue.TabIndex = 22;
            ColorGValue.ValueChanged += ColorGValue_ValueChanged;
            // 
            // ColorRValue
            // 
            ColorRValue.Location = new Point(101, 67);
            ColorRValue.Maximum = new decimal(new int[] { 255, 0, 0, 0 });
            ColorRValue.Name = "ColorRValue";
            ColorRValue.Size = new Size(120, 23);
            ColorRValue.TabIndex = 21;
            ColorRValue.ValueChanged += ColorRValue_ValueChanged;
            // 
            // Colorpicker
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            Controls.Add(ColorAValue);
            Controls.Add(ColorPreview);
            Controls.Add(ColorpickerButton);
            Controls.Add(ColorBValue);
            Controls.Add(ColorGValue);
            Controls.Add(ColorRValue);
            Name = "Colorpicker";
            Size = new Size(252, 212);
            ((System.ComponentModel.ISupportInitialize)ColorAValue).EndInit();
            ((System.ComponentModel.ISupportInitialize)ColorPreview).EndInit();
            ((System.ComponentModel.ISupportInitialize)ColorBValue).EndInit();
            ((System.ComponentModel.ISupportInitialize)ColorGValue).EndInit();
            ((System.ComponentModel.ISupportInitialize)ColorRValue).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private NumericUpDown ColorAValue;
        private PictureBox ColorPreview;
        private Button ColorpickerButton;
        private NumericUpDown ColorBValue;
        private NumericUpDown ColorGValue;
        private NumericUpDown ColorRValue;
        private ColorDialog ColorDialog;
    }
}
