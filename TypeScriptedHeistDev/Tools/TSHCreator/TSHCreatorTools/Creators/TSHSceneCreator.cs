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
using TSHCreatorTools.CreatorBackend;
using TSHCreatorTools.WindowComponents;

namespace TSHCreatorTools.Creators
{
    public partial class TSHSceneCreator : CreatorBaseForm
    {
        private SceneCreator sceneCreator;

        private Colorpicker colorpicker;

        public TSHSceneCreator()
        {
            InitializeComponent();
            metadataCreator = Metadata;
            colorpicker = Colorpick;
        }

        public override void OnCreatorWindowOpen()
        {
            base.OnCreatorWindowOpen();

            sceneCreator = new SceneCreator(this, metadataCreator);



            //private void ColorpickerButton_Click(object sender, EventArgs e)
            //{
            //    ColorPicker.ShowDialog();
            //    var v = ColorPreview;

            //}
        }
    }
}

