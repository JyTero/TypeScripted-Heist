using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TSHCreatorTools.Creators;

namespace TSHCreatorTools.CreatorBackend
{
    internal class SceneCreator: CreatorCore
    {
        private TSHSceneCreator sceneCreatorWindow;
        public SceneCreator(TSHSceneCreator sceneCreatorWindow, MetadataCreator metadataCreator)
        : base(metadataCreator)
        {
            this.sceneCreatorWindow = sceneCreatorWindow;
        }


        //handling colorpicking
        //ON button open picker window. When picked, write into the component fields,  update preview .
        //When adjusting components, update preview
        public void OnColorpickSelect(Color color)
        {
            //sceneCreatorWindow.ColorR

        }
        protected override void OnCreateData()
        {
            base.OnCreateData();
        }
    }
}
