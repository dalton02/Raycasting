class Enemy
{

    radians(val){
        return ((Math.PI / 180) * val);
    }

    constructor(coord){
        this.aX = 0;
        this.aV = 6;
        this.speed = 1;
        this.acel = 1;
        this.move=[true,true];
        this.lastK;
        this.width = coord[0].x2-coord[0].x1;
        this.height = coord[1].y2-coord[1].y1;
        this.distanceView = 750;
        this.laser = 150;
        this.enemy=[];
        for(let i=0;i<coord.length;i++){
            this.enemy[i] = {
            x1: coord[i].x1,
            y1: coord[i].y1,
            x2: coord[i].x2,
            y2: coord[i].y2};
        }
        this.visao = [];
        //Initiate Array
        for(let i=0;i<this.laser;i++){
            this.visao[i] = {x1: 0,y1: 0,x2:0,y2:0,z1:0,z2:0};
        }
        this.desenho = canvas.getContext("2d");
    }

    
    rotationMath(point, centro,vel) {
        let x = centro.x + (point.x - centro.x) * Math.cos(this.radians(vel)) - (point.y - centro.y) * Math.sin(this.radians(vel));
        let y = centro.y + (point.x - centro.x) * Math.sin(this.radians(vel)) + (point.y - centro.y) * Math.cos(this.radians(vel));
        return { x, y };
    }
        

        draw(){

            //enemy
            this.desenho.clearRect(0,0,this.desenho.width,this.desenho.height);
            this.desenho.beginPath();
            this.desenho.strokeStyle = 'black';            
            for (let i = 0; i < this.enemy.length; i++) {
                this.desenho.moveTo(this.enemy[i].x1, this.enemy[i].y1);
                this.desenho.lineTo(this.enemy[i].x2, this.enemy[i].y2);
            }
            this.desenho.stroke();
            this.desenho.closePath();
            
}


        }
        


