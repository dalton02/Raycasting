class Colision{

//Receber todas as instancias do ambiente
    constructor(vectorWalls,vectorPlayer,vectorEnemys,vectorItens){
        this.vectorEnemys = vectorEnemys;
        this.vectorWalls = vectorWalls;
        this.vectorPlayerAtt = vectorPlayer;
        this.vectorPlayer = vectorPlayer.player;
        this.vectorVisionPlayer = vectorPlayer.visao;
        this.vectorItens = vectorItens
        this.listCollision = [];
        this.vara = {x1:0,y1:0,x2:0,y2:0};


        this.desenho = canvas.getContext("2d");
     }

    radians(val){
        return ((Math.PI / 180) * val);
    }



    mathViewThings(coord,coord2,coord3,viewC){

    let lastColision = [];
    
    //Verifica todas as paredes
    for(let j=0;j<coord.length;j++){

    //Verificando todos os 4 lados da parede
        for(let i=0;i<coord[j].parede.length;i++){ 
            
            var x1 = coord[j].parede[i].x1;
            var y1 = coord[j].parede[i].y1;
    
            var x2 = coord[j].parede[i].x2;
            var y2 = coord[j].parede[i].y2;
            var wall = {x1: x1,y1:y1, x2:x2 ,y2:y2};
            //Guarda ponto de encontro,qual visao acertou,qual parede acertou
            var temp = this.lineCheckBox(x1,y1,x2,y2,viewC.x1,viewC.y1,viewC.x2,viewC.y2,viewC,wall,1);
            if(temp!=null) lastColision.push(temp);
            
        }
    }

        //Verifica todos os inimigos
        for(let j=0;j<coord2.length;j++){
    
        //Verificando todos os 4 lados do inimigo
            for(let i=0;i<coord2[j].enemy.length;i++){ 
                
                var x1 = coord2[j].enemy[i].x1;
                var y1 = coord2[j].enemy[i].y1;
        
                var x2 = coord2[j].enemy[i].x2;
                var y2 = coord2[j].enemy[i].y2;
                var enemy = {x1:x1,y1:y1,x2:x2,y2:y2};
                //Guarda ponto de encontro,qual visao acertou,qual parede acertou
            var temp = this.lineCheckBox(x1,y1,x2,y2,viewC.x1,viewC.y1,viewC.x2,viewC.y2,viewC,enemy,2);

                if(temp!=null) lastColision.push(temp);
                
            }
        } 
        
        //Verifica todos os itens
        for(let j=0;j<coord3.length;j++){
    
        //Verificando todos os 4 lados do inimigo
            for(let i=0;i<coord3[j].item.length;i++){ 
                
                var x1 = coord3[j].item[i].x1;
                var y1 = coord3[j].item[i].y1;
        
                var x2 = coord3[j].item[i].x2;
                var y2 = coord3[j].item[i].y2;
                var item = {x1:x1,y1:y1,x2:x2,y2:y2};
                //Guarda ponto de encontro,qual visao acertou,qual parede acertou
            var temp = this.lineCheckBox(x1,y1,x2,y2,viewC.x1,viewC.y1,viewC.x2,viewC.y2,viewC,item,3);

                if(temp!=null) lastColision.push(temp);
                
            }
        }
    
        return lastColision;
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
    removeBlinds() {
        let myFinal = [];
        
        for (let i = 0; i < this.listCollision.length; i++) {

        //skippando objetos vazios
            if(this.listCollision[i].length==0) continue;
        
            //Primeiro objeto parede
            myFinal[i] = {
            x: this.listCollision[i][0].x,
            y: this.listCollision[i][0].y,
            ray: this.listCollision[i][0].ray,
            line:this.listCollision[i][0].line,
            type: this.listCollision[i][0].type
            };    


            for (let j = 1; j < this.listCollision[i].length; j++) {
                
                   
                   var distanciaAnt = this.distanceC(
                    myFinal[i].ray.x1, 
                    myFinal[i].ray.y1,
                    myFinal[i].x,
                    myFinal[i].y
                   )
                    var distanciaAtual = this.distanceC(
                    this.listCollision[i][j].ray.x1, 
                    this.listCollision[i][j].ray.y1, 
                    this.listCollision[i][j].x, 
                    this.listCollision[i][j].y,this.vectorPlayerAtt.aX);

                if (distanciaAnt  > distanciaAtual) 
                {
                    myFinal[i] = {
                    x: this.listCollision[i][j].x,
                    y: this.listCollision[i][j].y,
                    ray: this.listCollision[i][j].ray,
                    line: this.listCollision[i][j].line,
                    type: this.listCollision[i][j].type    
                };
                
        }
        
        }
    }
        for(let i=0;i<this.listCollision.length;i++){
            this.listCollision[i] = {...myFinal[i]};        
        }


   
}

    lineCheckBox(x1,y1,x2,y2,x3,y3,x4,y4,viewC,coord,type){
        var A1 = y2-y1,
        B1 = x1-x2,
        C1 = A1 * x1 + B1 * y1,
        A2 = y4-y3,
        B2 = x3-x4,
        C2 = A2 * x3 + B2 * y3,
        denominador = A1 * B2 - A2 * B1;

        if(denominador==0){
            return null;
        }
        
        var intersecaoX = (B2*C1 - B1*C2)/denominador;
        var intersecaoY = (A1*C2 -A2*C1)/denominador;
        var rx0 = (intersecaoX - x1) / (x2-x1);
        var ry0 = (intersecaoY-y1) / (y2-y1);
        var rx1 = (intersecaoX - x3) / (x4-x3);
        var ry1 = (intersecaoY-y3) / (y4-y3);
        

        if( ((rx0>0 && rx0<1) || (ry0>0 && ry0<1))  && ((rx1>0 && rx1<1) || (ry1>0 && ry1<1) ) ){
       
            if(type==0)
            return {x:intersecaoX,y:intersecaoY};
       
            if(type==1)
            return {x: intersecaoX,y: intersecaoY,ray: viewC,line:coord,type:1};   
            else if(type==2)
            return {x: intersecaoX,y: intersecaoY,ray: viewC,line:coord,type:2};  
            else if(type==3)
            return {x: intersecaoX,y: intersecaoY,ray: viewC,line:coord,type:3};
            
        }
        else{
            return null;
        }
    }


    step(event){

        if(event.code=="KeyJ"){
    
            console.log("Segue informações de Colisão Atual:");
            //lastColision guarda informações de por onde o campo de visão acabou acertando e em quem foi
           console.log(this.vara); 
           

        }
    }

    


    
    stuckWalls(){
     
        var move = [true,true];
        
        var anguloAtual = this.vectorPlayerAtt.aX;

        var box = this.vectorPlayer;
        
        var normalizar=[];
        this.desenho.fillStyle = "red";
        this.desenho.fillRect(0,0,900,900);


        normalizar[0] = {x1:box[0].x,y1:box[0].y,x2:box[1].x,y2:box[1].y};
        normalizar[1] = {x1:box[0].x,y1:box[0].y,x2:box[2].x,y2:box[2].y};
        normalizar[2] = {x1:box[2].x,y1:box[2].y,x2:box[3].x,y2:box[3].y};
        normalizar[3] = {x1:box[3].x,y1:box[3].y,x2:box[1].x,y2:box[1].y};
        //0 a 2 é a bunda;/;
        var colidiu=false;
        
        var x1 = (normalizar[1].x1+normalizar[1].x2)/2;
        var y1 = (normalizar[1].y1+normalizar[1].y2)/2;
        
        x1 = x1+1*Math.cos(this.radians(anguloAtual));
        y1 = y1+1*Math.sin(this.radians(anguloAtual));
        this.vara = {
        x1: x1,
        y1: y1,
        x2: x1+10*Math.cos(this.radians(anguloAtual)),
        y2: y1+10*Math.sin(this.radians(anguloAtual))};
        

        for(let i=0;i<this.vectorWalls.length;i++){


        for(let j=0;j<this.vectorWalls[i].parede.length;j++){

        var wall = this.vectorWalls[i].parede[j];
        
        var colidiu = this.lineCheckBox(this.vara.x1,this.vara.y1,this.vara.x2,this.vara.y2,wall.x1,wall.y1,wall.x2,wall.y2,null,null,0);
   
        //UP VISION FIX
        if(anguloAtual==270){
            if(colidiu!=null) move[1]=false;

        }
        //DOWN VISION
        else if(anguloAtual==90){
            if(colidiu!=null) move[1]=false;
        }
        //RIGHT VISION FIX
        else if(anguloAtual==0 || anguloAtual==360){
            if(colidiu!=null) move[0]=false;
        }
        //LEFT VISION
        else if(anguloAtual==180){
            if(colidiu!=null) move[0]=false;
        }
    
    }
}
        return move;

}

    hitPlayer(){
        var box = this.vectorPlayerAtt.collision;
        //Para todo item
        for(let i=0;i<this.vectorItens.length;i++){

            var x = this.vectorItens[i];
            for(let j=0;j<x.item.length;j++){

                var itemV = x.item[j];
                var tamanhoW = itemV.x2 - itemV.x1;
                var tamanhoH = itemV.y2 - itemV.y1;
                    if (
                        box[4].x < itemV.x1 + 2*tamanhoW &&
                        box[4].x + 20 > itemV.x1  &&
                        box[4].y < itemV.y1 + 2*tamanhoH &&
                        box[4].y + 20 > itemV.y1
                    ) {
                        var tipo = x.tipo;
                        x.destroy();
                        this.vectorItens.splice(i,1);
                        return tipo;
                    }
            }
    }
    return -1;
}   

    draw(){
        this.desenho.strokeStyle = "black";
        this.desenho.moveTo(this.vara.x1,this.vara.y1);
        this.desenho.lineTo(this.vara.x2,this.vara.y2);
        this.desenho.stroke();
    }   

    viewThings(){
    
        //Checar se existe colisão com view do jogador
        for(let i=0;i<this.vectorVisionPlayer.length;i++){
            this.listCollision[i] = this.mathViewThings(this.vectorWalls,this.vectorEnemys,this.vectorItens,this.vectorVisionPlayer[i]);   
        }
      }





}