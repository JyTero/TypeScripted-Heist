export class Sprite {
    private spriteImage:HTMLImageElement;
    public GetSpriteImage():HTMLImageElement{
        return this.spriteImage;
    }
    
    public SpriteOffsetX:number = 0;
    public SpriteOfffsetY:number = 0;

    constructor(image:HTMLImageElement){
        this.spriteImage = image;
        this.CalculateSpriteOffset();
    }

    private CalculateSpriteOffset(){
        this.SpriteOffsetX = this.spriteImage.width / 2;
        this.SpriteOfffsetY = -this.spriteImage.height
    }
}