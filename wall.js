class Wall{


    constructor(coord){

        //z is just used in the raycasting itself
        this.parede =[];

       for(let i=0;i<coord.length;i++){
        this.parede[i] = {
        x1: coord[i].x1,
        y1: coord[i].y1,
        x2: coord[i].x2,
        y2: coord[i].y2};
       }

       this.obstaculo = canvas.getContext("2d");
    }

    draw(){

        this.obstaculo.beginPath();
        this.obstaculo.strokeStyle = "rgb(0,0,0)";

        for (let i = 0; i < this.parede.length; i++) {
            this.obstaculo.moveTo(this.parede[i].x1, this.parede[i].y1);
            this.obstaculo.lineTo(this.parede[i].x2, this.parede[i].y2);
        }
        this.obstaculo.stroke();
        this.obstaculo.closePath();
        
    
    }


}