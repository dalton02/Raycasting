class CastingView{

    radians(val){
        return ((Math.PI / 180) * val);
    }
    constructor(collisionView,player){
        this.collisionView = collisionView;
        this.player = player;
        this.vectors = [];
        const canvas = document.querySelector(".casting");
        this.w = window.innerWidth;
        this.h= window.innerHeight;
        canvas.width = this.w;
        canvas.height = this.h;
        
        this.casting = canvas.getContext("2d");    
        
    }

    draw(){

        
        this.casting.clearRect(0,0,this.w,this.h);   
        this.casting.fillStyle = "rgb(0, 0, 0)";
        this.casting.fillRect(0, 0, this.w,this.h);
        
        for(let i=0;i<50;i++){
        this.casting.fillStyle = "rgb("+(70+i)+", "+(50+i)+", "+(10+i)+")";
        this.casting.fillRect(0,this.h/2+i,this.w,this.h);

        }

        this.calculateHeight();
    }
       

    
    distanceC(x1,y1,x2,y2){
        return Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
    }



    calculateHeight(){

        var size = [];

        
        for(let i=0;i<this.collisionView.length;i++){

        if(this.collisionView[i].x==null)
            continue;

        
        var currentDistance = this.distanceC(this.collisionView[i].ray.x1,this.collisionView[i].ray.y1,this.collisionView[i].x,this.collisionView[i].y);
            //DistanciaAngle = playerAngle - rayAngle
        var distanceAngle = ((this.player.aX)*(Math.PI / 180)) - 
        Math.atan2(this.collisionView[i].ray.y2-this.collisionView[i].ray.y1,this.collisionView[i].ray.x2-this.collisionView[i].ray.x1);
        currentDistance = currentDistance * Math.cos(distanceAngle);
        

        var limite = this.h;
        var constante;
        var fimH = this.h*2;
        var tickness=7;
        
        if(this.collisionView[i].type==1){
        constante = 12000;
        var alturaAtual = constante/currentDistance;
        if(alturaAtual>limite) alturaAtual=limite;
        if(alturaAtual<0) alturaAtual=0;
        var offsetH = fimH/4 - alturaAtual/2;
        var b=(alturaAtual/10)*1;
        var g=(alturaAtual/3)*5;
        var r=(alturaAtual/1)*3;
        this.casting.fillStyle =  'rgb('+r+','+g+','+b+')'; 
        this.casting.fillRect(i*tickness,offsetH,tickness,alturaAtual);
    }
        //casting the enemy
        else if(this.collisionView[i].type==2){
        constante = 12000;
        var alturaAtual = constante/(currentDistance);
        if(alturaAtual>limite) alturaAtual=limite;
        if(alturaAtual<0) alturaAtual=0;
        var offsetH = fimH/4 - alturaAtual/2; 
        var b=alturaAtual/10;
        var g=alturaAtual/8;
        var r=alturaAtual/1;
        
        this.casting.fillStyle =  'rgb('+r+','+g+','+b+')'; 
        this.casting.fillRect(i*tickness,offsetH,tickness,alturaAtual);
        

        }
        
        else if(this.collisionView[i].type==3){
            constante = 12000;
            var alturaAtual = constante/(currentDistance);
            if(alturaAtual>limite) alturaAtual=limite;
            if(alturaAtual<0) alturaAtual=0;
            var offsetH = fimH/4 - alturaAtual/4; 
            var b=alturaAtual/5;
            var g=alturaAtual/8;
            var r=alturaAtual/1;
            
            this.casting.fillStyle =  'rgb('+r+','+g+','+b+')'; 
            this.casting.fillRect(i*tickness,offsetH,tickness,alturaAtual);
            
        }
    

        }

        return size;

    }

}