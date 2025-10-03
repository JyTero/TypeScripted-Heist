using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TSHCreatorTools
{
    public partial class SelectImage : UserControl
    {
        public TextBox ImagePathInputField;
        public string SelectedImageName;
        private string lastImagePath = "";

        public SelectImage()
        {
            InitializeComponent();
            ImagePathInputField = ImagePathInput;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            FindImage();
            LoadLastImagePath();
        }

        private void FindImage()
        {
            using (var openFileDialog = new OpenFileDialog())
            {
                //LoadData from save json

                openFileDialog.Filter = "Image files(*.png)|*.png|All files (*.*)|*.*";
                //openFileDialog.FilterIndex = 2;
                //openFileDialog.RestoreDirectory = true;

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    if(lastImagePath != "")
                        openFileDialog.InitialDirectory = lastImagePath;

                    try
                    {

                        if (ImagePrevieBox.Image != null)
                            ImagePrevieBox.Image.Dispose();

                        ImagePrevieBox.Image = new Bitmap(openFileDialog.FileName);
                        ImagePrevieBox.SizeMode = PictureBoxSizeMode.Zoom;

                        SelectedImageName = openFileDialog.SafeFileName;
                    }
                    catch (Exception exception)
                    {
                        MessageBox.Show($"Couldn't load image: {exception.Message}");
                    }

                    ToolSaveDataManager.Instance.SetRecentImagePath(openFileDialog.FileName);
                }
            }

        }

        private void LoadLastImagePath()
        {
            lastImagePath = ToolSaveDataManager.Instance.GetRecentImagePath();
            ImagePathInputField.Text = lastImagePath;
        }
    }
}
