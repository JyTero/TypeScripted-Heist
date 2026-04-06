export class AudioEngine{
    private audioPath:string = "src\\Assets\\Audio\\";
    public PlaySFX(sfxName:string){
        const path = this.audioPath+sfxName;
        const sfx = new Audio(path);
        sfx.play();
    }
}