class Menu{

    constructor(){

        const canvas = document.querySelector(".casting");
        this.w = window.innerWidth;
        this.h= window.innerHeight;
        canvas.width = this.w;
        canvas.height = this.h;
        this.gui = canvas.getContext("2d");
        this.showPrincipal = true;
        this.showEnd = false;
    }

step(event){

    if(
    event.offsetX < this.w/1.8 && event.offsetX > this.w/2.8 &&
    event.offsetY < this.h/1.8 && event.offsetY > this.h/2.5
    ){
        this.showPrincipal=false;
    }


}
draw(){
    
    if(this.showPrincipal){
    this.gui.fillStyle = "rgba(0,0,0, 0.8)";
    this.gui.fillRect(0,0,this.w,this.h);
    this.gui.font = "40px Courier New";
    this.gui.fillStyle = "rgb(255,255,255)";
    this.gui.fillText("INSIDE YOUR MIND",this.w/3.2,this.h/5);
    this.gui.fillText("PLAY",this.w/2.2,this.h/2);
    }
    
    if(this.showEnd){
        this.gui.fillStyle = "rgba(0,0,0, 0.8)";
        this.gui.fillRect(0,0,this.w,this.h);
        this.gui.font = "40px Courier New";
        this.gui.fillStyle = "rgb(255,255,255)";
        this.gui.font = "35px Courier New";
        this.gui.fillText("CONGRATULATIONS YOU FUCKING WON",this.w/6,this.h/2.2);

    }
}
    
}