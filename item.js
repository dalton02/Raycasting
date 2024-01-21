class Item{


    constructor(coord,tipo){

        //z is just used in the raycasting itself
        this.item =[];

       for(let i=0;i<coord.length;i++){
        this.item[i] = {
        x1: coord[i].x1,
        y1: coord[i].y1,
        x2: coord[i].x2,
        y2: coord[i].y2};
       }
       this.tipo = tipo;
       this.power = canvas.getContext("2d");
    }

    draw(){

        this.power.beginPath();
        this.power.strokeStyle = "rgb(0, 0,0)";

        for (let i = 0; i < this.item.length; i++) {
            this.power.moveTo(this.item[i].x1, this.item[i].y1);
            this.power.lineTo(this.item[i].x2, this.item[i].y2);
        }
        this.power.stroke();
        this.power.closePath();
        
    
    }
    destroy(){
        this.power.clearRect(0,0,900,900);
        this.item=null;
    }


}