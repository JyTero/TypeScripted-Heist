import { Delay } from "../../Tools";
import { FrameTimeMS } from "../initialisation";
import { Color } from "../Tools/Color";
import { Sprite } from "./Sprite";

export class CanvasGraphicEngine{
    private canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
    private ctx = this.canvas.getContext("2d");
    private canvasWidth: number = this.canvas.width;
    private canvasHeight:number = this.canvas.height;

    private backgroundColor:Color = new Color(0,0,0,255);
    private spritesToDraw:Sprite[] = [];
    private unreadySprites:Sprite[] = []; 

    private engineMustRun:boolean = false;
    constructor(){
    }

    public async StartGraphicEngine(){
       // await this.FrameTimer();
    }
    private async FrameTimer() {
        while (this.engineMustRun) {
          //  this.DrawFrame();
          //  this.DrawGrid();
          this.UnreadySprites();
            await Delay(FrameTimeMS);
           // this.ClearCanvas();
        }
    }
    private DrawFrame() {
        this.DrawBackground();
        this.DrawGrid();
        this.spritesToDraw.forEach(sprite => {
            this.DrawSprite(sprite);
        });
    }
    private DrawGrid(){
        if(this.ctx){

            this.ctx.moveTo(0, this.canvas.height/2);
            this.ctx.lineTo(this.canvas.width, this.canvas.height/2);
            
            this.ctx.moveTo(0, this.canvas.height/4);
            this.ctx.lineTo(this.canvas.width, this.canvas.height/4);
            
            this.ctx.moveTo(0, (this.canvas.height/4*3));
            this.ctx.lineTo(this.canvas.width, (this.canvas.height/4*3));
            
            this.ctx.moveTo(this.canvas.width/2, 0);
            this.ctx.lineTo(this.canvas.width/2, this.canvas.height);
            
            this.ctx.moveTo(this.canvas.width/4, 0);
            this.ctx.lineTo(this.canvas.width/4, this.canvas.height);
            
            
            this.ctx.moveTo((this.canvas.width/4*3), 0);
            this.ctx.lineTo((this.canvas.width/4*3), this.canvas.height);   
            
            this.ctx.stroke();
        }
            
        }
       
    // public AddSpriteToList(sprite:Sprite, positionX:number, positionY:number, scaleX:number, scaleY:number)
    // {
    //     if(!this.SpriteIsReady(sprite))
    //         this.AddUnreadySprite(sprite);
    //     else {

    //         sprite.SetSpritePosScaleDataValues(positionX,positionY, scaleX, scaleY);
    //         this.spritesToDraw.push(sprite);
    //         this.DrawFrame();
    //     }
    // }
    public AddSpritesToList(sprites:Sprite[], positionX:number[], positionY:number[], scaleX:number[], scaleY:number[]){
        var i = 0;
        sprites.forEach(sprite => {
            sprite.SetSpritePosScaleDataValues(positionX[i], positionY[i], scaleX[i], scaleY[i])
            this.spritesToDraw.push(sprite);
            i++;
        });
        this.DrawFrame();
    }
    public AddSpriteToListPreComp(sprite: Sprite) {
        if (!this.SpriteIsReady(sprite))
            this.AddUnreadySprite(sprite);
        else {

            this.spritesToDraw.push(sprite);
            this.DrawFrame();
        }
    }
    public RemoveSpriteFromList(sprite:Sprite){
        const i = this.spritesToDraw.indexOf(sprite);
        delete this.spritesToDraw[i];
    }
    private SpriteIsReady(sprite:Sprite):boolean{
        if(sprite === undefined)
            return false;
        else
            return true;
    }
    public ClearSpriteList(){
        this.spritesToDraw = [];
        this.DrawFrame();
    }
//occasionally, if list is not empty, go through and prepare newly available sprites
    private AddUnreadySprite(sprite:Sprite){
        this.unreadySprites.push(sprite);
        this.engineMustRun = true;
    }
    private UnreadySprites(){
         this.unreadySprites.forEach(sprite => {
            if(this.SpriteIsReady(sprite)){
                this.AddSpriteToListPreComp(sprite);
                delete this.unreadySprites[this.unreadySprites.indexOf(sprite)];
            }
         });
         if(this.unreadySprites.length == 0)
            this.engineMustRun = false;
    }
    public ChangeBackgroundColor(color:Color){
        if(this.ctx)
        {
            this.ctx.rect(0, 0, this.canvasWidth, this.canvasHeight);
            var rgba;
            if(color !== undefined){
                rgba = `rgba(${color.R}, ${color.G}, ${color.B}, ${color.A})`;
                this.ctx.fillStyle = rgba;
                this.ctx.fill();
                this.backgroundColor = color;
            }
        }
    }
    private DrawBackground(){
        this.ChangeBackgroundColor(this.backgroundColor);
    }
    private DrawSprite(sprite:Sprite){

        if (this.ctx != null && sprite != undefined){

            const spriteSizeScaleData = sprite.SpritePosScaleData;


            const displayWidth = this.ScaleXSize(spriteSizeScaleData.scaleX, sprite.GetSpriteImage());
            const displayHeight = this.ScaleYSize(spriteSizeScaleData.scaleY, sprite.GetSpriteImage());

            const finalXpos = this.GetTrueX(spriteSizeScaleData.positionX) + -(displayWidth / 2);
            const finalYpos = this.GetTrueY(spriteSizeScaleData.positionY) + (-displayHeight);

            this.ctx.drawImage(sprite.GetSpriteImage(), finalXpos, finalYpos, displayWidth, displayHeight);
        }

    }

    private ClearCanvas(){
        if(this.ctx != null)
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    private GetTrueX(positionX:number):number{
        var x = positionX / 100;
        x = x * this.canvasWidth;
        return x;
    }
    private GetTrueY(positionY:number):number{
        var y = positionY / 100;
        y = y * this.canvasHeight;
        y = this.canvasHeight-y;
        return y;
    }

    private ScaleXSize(givenSize:number, image:HTMLImageElement):number{
        var trueSizeX = givenSize /100;
        trueSizeX = trueSizeX * image.width;
        return trueSizeX;
    }
     private ScaleYSize(givenSize:number, image:HTMLImageElement):number{
        var trueSizeY = givenSize /100;
        trueSizeY = trueSizeY * image.height;
        return trueSizeY;
    }

}