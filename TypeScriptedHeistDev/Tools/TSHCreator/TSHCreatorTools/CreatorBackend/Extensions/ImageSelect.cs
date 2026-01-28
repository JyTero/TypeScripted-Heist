using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TSHCreatorTools
{
    internal class ImageSelect
    {
        public string SelectedImageName;
        private string lastImagePath = "";

        private SelectImage ImageSelectWindow;
        private CancellationTokenSource? imageSearchCts;

        public ImageSelect(SelectImage _imageSelect)
        {
            this.ImageSelectWindow = _imageSelect;
        }

        public void FindImage()
        {
            using (var openFileDialog = new OpenFileDialog())
            {
                //LoadData from save json

                openFileDialog.Filter = "Image files(*.png)|*.png|All files (*.*)|*.*";
                //openFileDialog.FilterIndex = 2;
                //openFileDialog.RestoreDirectory = true;

                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    if (lastImagePath != "")
                        openFileDialog.InitialDirectory = lastImagePath;

                    try
                    {
                        ImageSelectWindow.DisposeOldPreviewImage();

                        //if (imagePrevieBox.Image != null)
                        //    imagePrevieBox.Image.Dispose();

                        ImageSelectWindow.DisplayImage(openFileDialog.FileName);
                        //ImagePrevieBox.Image = new Bitmap(openFileDialog.FileName);
                        //ImagePrevieBox.SizeMode = PictureBoxSizeMode.Zoom;

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

        public string FindImagePath(string imageName)
        {
            imageSearchCts = new CancellationTokenSource();
            var token = imageSearchCts.Token;

            int i = 0;
            foreach (string file in Directory.EnumerateFiles(Paths.Instance.SpriteFolderPath(), "*.png", SearchOption.AllDirectories))
            {
                token.ThrowIfCancellationRequested();
                i++;

                if (Path.GetFileName(file) == imageName)
                {
                    Debug.WriteLine($"Found the image. Searched {i} files.");
                    return file;
                }
            }

            Debug.WriteLine($"DId not find the image. Searched {i} files.");
            return null;
        }

        public void LoadSavedImage(string imagePath)
        {
            
        }
    }

}
