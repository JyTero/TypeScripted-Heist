import { SpriteLocationDataType } from "../DataTypes/SpriteLocationDataType";

export class Sprite {
    private spriteImage:HTMLImageElement;
    public GetSpriteImage():HTMLImageElement{
        return this.spriteImage;
    }
    
    public SpriteOffsetX:number = 0;
    public SpriteOfffsetY:number = 0;

    public SpritePosScaleData:SpriteLocationDataType;

    // constructor(image:HTMLImageElement){
    //     this.spriteImage = image;
    //     this.CalculateSpriteOffset();
    // }

    private CalculateSpriteOffset(){
        this.SpriteOffsetX = this.spriteImage.width / 2;
        this.SpriteOfffsetY = -this.spriteImage.height
    }

    public SetSpriteImage(image:HTMLImageElement){
        this.spriteImage = image;
        this.CalculateSpriteOffset();
    }

    public SetSpritePosScaleDataValues(_positionX: number, _positionY: number, _scaleX: number, _scaleY: number) {
        this.SpritePosScaleData = {
            positionX: _positionX,
            positionY: _positionY,
            scaleX: _scaleX,
            scaleY: _scaleY
        }
    }

    public AdjustXPos(adjust:number){
        this.SpritePosScaleData.positionX += adjust;
    }
        public AdjustyPos(adjust:number){
        this.SpritePosScaleData.positionY += adjust;
    }
        public AdjustXScale(adjust:number){
        this.SpritePosScaleData.scaleX += adjust;
    }
        public AdjustYScale(adjust:number){
        this.SpritePosScaleData.scaleY += adjust;
    }
    
}