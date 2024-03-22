

var paint1=[   
 [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
 
 [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
 
 [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1],
 [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
 
 [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0, 0,1,1,1,1,1,1,1, 1,1,1,1,1,1,1,0],
 [0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0],
];
var tamanhoPaint1 = paint1.length+paint1[0].length;
class MyCaster{

constructor(player){

this.tick = 2;
//Cool effects with tick
//Drug world with 0.5;
this.player = player;
this.canvasCast = document.querySelector(".casting");
this.widthCast = (this.canvasCast.width = parseInt( this.player.ray.length*this.tick) );
this.heightCast = (this.canvasCast.height = 720);
this.ctxCast = this.canvasCast.getContext("2d");
this.effectDistance = 3;
window.addEventListener("keydown", (e) => this.myKeyEvents(e)); 
	
	
}
draw(){
  this.erase();
  this.drawCast();
  
};

erase(){
  this.ctxCast.clearRect(0, 0, this.canvasCast.width, this.canvasCast.height);
}

drawCast(){
	
		let perc=0;
		
		this.ctxCast.fillStyle = "rgb(0,101,179)";	
		this.ctxCast.fillRect(0,0,this.canvasCast.width,this.canvasCast.height);
		
		for(let i=0;i<this.player.ray.length;i++){
			perc=-1;
			let distance = this.distance(player.ray[i].x1,player.ray[i].y1,player.ray[i].x2,player.ray[i].y2);
			let fixEye = this.player.angle - this.player.ray[i].angle;
			distance = distance * Math.cos(radians(fixEye));
			let height = (320*64)/(distance/this.effectDistance);
			let stepLimit = height/tamanhoPaint1;
			let offsetH = (this.player.lookY)/2 -height/2;
			
			let r = 200/(distance/80);let b = 155/(distance/40);let g = 155/(distance/40);
			if(r>200)	r=200;		  if(b>155)	b=155;			if(g>155)	g=155;
		
			let currentSide = this.player.ray[i].side;
		
			if(height>320*64)
				height = 320*64;
			
			
			if(player.ray[i].type==1){
			let color;
			let step = 0;
			
			//Still here the problem
			perc = parseInt( (this.player.ray[i].perc) * (paint1[0].length));
			
			
			let shader = 1;
			if(currentSide=="horizontal")
				shader = 0.5;
			shader = shader / (distance/250);
			
			
			//How to handle distance and draw x-asis
			for(let j=0;j<paint1.length;j++){
				color = paint1[j][perc];
				//color = 1;
				this.ctxCast.fillStyle = "rgb("+(color*200*shader)+","+(color*80*shader)+","+color+")";
				this.ctxCast.fillRect(i*this.tick,offsetH+step,this.tick,height/paint1.length+1);
				
				//Reflection

				step+= height/paint1.length; //that is correct okay
				
			}

			
			this.ctxCast.fillStyle = "rgb(140,70,40)";
			this.ctxCast.fillRect(i*this.tick,height+offsetH,this.tick,1500);
					
			
			
			}
			
			
		}
	
}


myKeyEvents(event){
	
        if(event.code=="KeyV"){
			this.effectDistance = 3;
		}
       
            
	
}

distance(x1,y1,x2,y2){
	return Math.abs(Math.sqrt( ((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1))));
}

}

