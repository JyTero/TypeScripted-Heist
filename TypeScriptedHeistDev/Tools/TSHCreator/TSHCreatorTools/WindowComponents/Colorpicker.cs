using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace TSHCreatorTools.WindowComponents
{
    public partial class Colorpicker : UserControl
    {

        private CreatorBaseForm window;
        private Color chosenColor;

        public Colorpicker()
        {
            InitializeComponent();
        }

        private void ColorpickerButton_Click(object sender, EventArgs e)
        {
            Debug.WriteLine("Opening colorpicker");
            ColorDialog.ShowDialog();

            chosenColor = ColorDialog.Color;
            ColorPreview.BackColor = chosenColor;

            ColorRValue.Value = chosenColor.R;
            ColorGValue.Value = chosenColor.G;
            ColorBValue.Value = chosenColor.B;
            ColorAValue.Value = chosenColor.A;

        }
        private void OnRGBAValueChange()
        {

            Color newColor = Color.FromArgb((int)ColorAValue.Value, (int)ColorRValue.Value, (int)ColorGValue.Value, (int)ColorBValue.Value);
            ColorPreview.BackColor = newColor;
        }

        private void ColorRValue_ValueChanged(object sender, EventArgs e)
        {
            OnRGBAValueChange();
        }

        private void ColorGValue_ValueChanged(object sender, EventArgs e)
        {
            OnRGBAValueChange();
        }

        private void ColorBValue_ValueChanged(object sender, EventArgs e)
        {
            OnRGBAValueChange();
        }

        private void ColorAValue_ValueChanged(object sender, EventArgs e)
        {
            OnRGBAValueChange();
        }


    }
}
