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
    public partial class MetadataCreator : UserControl
    {
        public TextBox MetadataDevNameInputField;
        public TextBox MetadataTypeField;

        public MetadataCreator()
        {
            InitializeComponent();
            MetadataDevNameInputField = MetadataDevNameInput;
            MetadataTypeField = MetadataTypeInput;
        }

        public bool IsMetadataValid()
        {
            if (MetadataDevNameInput.Text == "")
                return false;
            else if (MetadataTypeInput.Text == "")
                return false;
            else
                return true;

        }

    }
}
