class Walker
{

    radians(val){
        return ((Math.PI / 180) * val);
    }

    constructor(width,height){
        this.aX = 0;
        this.aV = 90;
        this.speed = 5;
        this.acel = 2;
        //Configurations of FOV
        this.spreed = .6;
        this.limit = 55;
        this.laser = 200;
        
        //Effects
        this.effect = [];
        for(let i=0;i<5;i++){
            this.effect[i]=0;
        }
        this.move=[true,true];
        this.lastK;
        this.width = width;
        this.height = height;
        this.distanceView = 750;

        this.sons = [];
        this.sons[0] = new Audio('passos.mp3');

        this.player = [
            {x: 50,y: 30}, //FACE
            {x: 50+width,y: 30}, //BUTT 
            {x: 50,y: 30+height}, //FACE
            {x: 50+width,y: 30+height},
            {x: 50+width/2,y: 30+height/2} //CENTER
        ];
        height *=3;
        width*=3;
        this.collision = [
            {x: 52-width,y:32-height}, //FACE
            {x: 52+width,y: 32-height}, //BUTT 
            {x: 52-width,y: 32+height}, //FACE
            {x: 52+width,y: 32+height},
            {x: 52,y: 32} 
        ];
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


    sounds(init,keep,audio){
        if(init==1)
            audio.play();
        else if(keep==0){
            audio.pause();
            audio.currentTime =0;
        }

    }

    myKey(event){
    


    if(event.type=="keydown"){
        //Info about variables
    if(event.code=="KeyH"){
        console.log(this.effect);
    }

    if(event.code=="ArrowRight" || event.code=="ArrowLeft"){
    
        this.lastK = 0;
        var vel = this.aV;
        if(event.code=="ArrowRight"){
            
            this.aX += this.aV;  
            if(this.aX>360){this.aX=this.aX-360;}    
        }
            
        else if(event.code=="ArrowLeft"){
                this.aX -= this.aV;
                if(this.aX<0){this.aX=this.aX+360;}
                vel = -vel;
        }

        for (let i = 0; i < 4; i++) {
               this.player[i] = this.rotationMath(this.player[i],this.player[4],vel);
               this.collision[i] = this.rotationMath(this.collision[i],this.collision[4],vel);
        }

    }
        if(event.code=="ArrowUp"){
                    
            if(this.lastK==1){
                this.sounds(0,1,this.sons[0]);
            }
            else{   
                this.sounds(1,1,this.sons[0]);
            }
            this.lastK = 1;
            
            let dx=0,dy=0;
            
            
            this.move = colisor.stuckWalls();
        
            if(this.move[0]==true)
            dx = Math.cos(this.radians(this.aX)) * this.speed;    
            if(this.move[1]==true)
            dy = Math.sin(this.radians(this.aX)) * this.speed;
        
            
            for (let i = 0; i < 5; i++) {
                    this.player[i].x += dx;
                    this.player[i].y += dy;
                    this.collision[i].x += dx;
                    this.collision[i].y += dy;
                }
        }else{
            this.sounds(0,0,this.sons[0]);
        }

        }  

        else if(event.type=="keyup"){

            if(event.code=="ArrowUp"){  
            this.sounds(0,0,this.sons[0]);
            }

        } 
    
    
    }
    
        draw(){

            //Player
           this.desenho.clearRect(0,0,this.desenho.width,this.desenho.height);
            
            this.desenho.fillStyle = "rgb(0,0,0)";
            this.desenho.fillRect(0,0,900,900);

            this.desenho.beginPath();
            this.desenho.strokeStyle = 'white';            
            this.desenho.moveTo(this.player[0].x,this.player[0].y);
            this.desenho.lineTo(this.player[1].x,this.player[1].y);
            this.desenho.moveTo(this.player[0].x,this.player[0].y);
            this.desenho.lineTo(this.player[2].x,this.player[2].y);
            this.desenho.moveTo(this.player[2].x,this.player[2].y);
            this.desenho.lineTo(this.player[3].x,this.player[3].y);
            this.desenho.moveTo(this.player[1].x,this.player[1].y);
            this.desenho.lineTo(this.player[3].x,this.player[3].y);
            this.desenho.stroke();
            this.desenho.closePath();
           
           // this.desenho.beginPath();
            this.desenho.strokeStyle = 'black';            
            this.desenho.moveTo(this.collision[0].x,this.collision[0].y);
            this.desenho.lineTo(this.collision[1].x,this.collision[1].y);
            this.desenho.moveTo(this.collision[0].x,this.collision[0].y);
            this.desenho.lineTo(this.collision[2].x,this.collision[2].y);
            this.desenho.moveTo(this.collision[2].x,this.collision[2].y);
            this.desenho.lineTo(this.collision[3].x,this.collision[3].y);
            this.desenho.moveTo(this.collision[3].x,this.collision[3].y);
            this.desenho.lineTo(this.collision[1].x,this.collision[1].y);



            //this.desenho.stroke();
            this.drawViewport();
        }


        powers(){

            //0 == KEY
            //1 == DOR

            if(this.effect[0]==1 && this.effect[1]==1){
                return 69;
            }
            return 0;
        }

        distanceC(x1, y1, x2, y2, angulo) {
    
            if(angulo<360 && angulo>180){
    
                if(angulo>90 && angulo<270)
                return Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
                else
                return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y1-y2,2));
                
            }
            return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
        
        }
        

        limitDistance(listCollision) {   
        
            for(let i=0;i<this.laser;i++){
                if(listCollision[i].x== null) continue;
                this.visao[i].x2 = listCollision[i].x;
                this.visao[i].y2 = listCollision[i].y;
            
            }

        }
        
        calculateViewport(FOV){
            if(FOV==null){
            var intervaloX = (this.player[3].x - this.player[1].x)/(this.laser-1);
            var intervaloY = (this.player[3].y - this.player[1].y)/(this.laser-1);
            var adjustedAngle= -this.limit;
            
            //Modificar para deixar os raios do centro em linha reta e quanto mais no canto mais aberto por angulo

                for(let i=0;i<this.laser;i++){ 
                    
                    adjustedAngle += this.spreed;
                    if(adjustedAngle>this.limit)
                        adjustedAngle==this.limit;
                    var centroX = (this.player[1].x+this.player[3].x)/2;
                    var centroY = (this.player[1].y+this.player[3].y)/2;
                    this.visao[i].x1 = centroX + 1 * Math.cos(this.radians(this.aX));
                    this.visao[i].y1 = centroY + 1 * Math.sin(this.radians(this.aX));
                    
                    this.visao[i].x2 = this.visao[i].x1 + this.distanceView * Math.cos(this.radians(this.aX+adjustedAngle)) + i * intervaloX;
                    this.visao[i].y2 = this.visao[i].y1  + this.distanceView * Math.sin(this.radians(this.aX+adjustedAngle)) + i * intervaloY;

                
            }

        }else{
            this.limitDistance(FOV);
        }
        
        }



        drawViewport(){  
            this.desenho.strokeStyle = 'rgb(255,255,255)';

            for(let i=0;i<this.laser;i++){    
    
                this.desenho.beginPath();
                if(i > this.laser)
                this.desenho.strokeStyle = 'blue';

            this.desenho.moveTo(this.visao[i].x1,this.visao[i].y1);    
            this.desenho.lineTo(this.visao[i].x2,this.visao[i].y2);            
            this.desenho.stroke();    
        
            this.desenho.closePath();
        }

        }
        
}

