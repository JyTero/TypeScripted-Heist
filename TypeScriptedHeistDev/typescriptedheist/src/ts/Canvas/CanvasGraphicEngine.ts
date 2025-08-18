export class CanvasGraphicsEngine{
    private canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
    private ctx = this.canvas.getContext("2d");
    private canvasWidth: number = this.canvas.width;
    private canvasHeight:number = this.canvas.height;

    constructor(){
    }

    public DrawImage(sprite:HTMLImageElement, positionX:number, positionY:number, scaleX:number, scaleY:number){

        if (this.ctx != null && sprite != undefined)
            this.ctx.drawImage(sprite, this.GetTrueX(positionX), this.GetTrueY(positionY), this.ScaleXSize(scaleX, sprite), this.ScaleYSize(scaleY, sprite)); // Draw the image at x:100, y:100

    }

    public ClearCanvas(){
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
       //y = this.canvasHeight-y;
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