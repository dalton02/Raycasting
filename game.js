
function radians(val){
        return ((Math.PI / 180) * val);
 }
class Player{
	
	constructor(xpos,ypos,size){
		this.xpos = xpos;
		this.ypos = ypos;
		this.size = size;this.dist = 500;
		this.angle=20; //No need to rotate the 2d cube (Too much work)
		this.lookY = 1000;
		this.ray = [];
		this.tam = 550;  //200 is optimal 600 is HD QUALITY
		this.division = 19; //3.5 is optimal 20 is for pixel precision
		this.keys = {
			up: 0,
			down:0,
			left:0,
			right:0
		};
	}
	
	draw(){
        ctx.strokeStyle = 'white';            
		ctx.beginPath();
		
        for(let i=0;i<this.ray.length;i++){
		ctx.moveTo(this.ray[i].x1,this.ray[i].y1);
		ctx.lineTo(this.ray[i].x2,this.ray[i].y2);
		}
		
		ctx.stroke();
		ctx.closePath();
		
		
		ctx.fillStyle = "green";
		ctx.fillRect(this.xpos,this.ypos,this.size,this.size);  
	}
	

};


var FRAME = 1000 / 60 ;

const selector = document.querySelector(".clickDiv");

const fullScreen = document.querySelector(".material-icons");

const canvas = document.querySelector(".tela");
const width = (canvas.width = 1024);
const height = (canvas.height =1024);
const ctx = canvas.getContext("2d");

let canvasC = document.querySelector(".casting");


selector.onclick = () =>{
		document.body.requestPointerLock();
}
fullScreen.onclick = () =>{
	selector.requestFullscreen();
}

const mapSize = 32;
const mapTest = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
[1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
[1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];
const mapX = mapTest.length;
const mapY = mapTest[0].length;
console.log(mapTest);
var player = new Player(450,180,1);
checkHits();
var caster = new MyCaster(player);
window.addEventListener("keydown", (e) => myKeyEvents(e)); 
window.addEventListener("mousemove", (e) => myMouseEvents(e)); 
window.addEventListener("keyup", (e) => myKeyEventsRelease(e)); 

function myMouseEvents(event){
	
		player.angle+=(event.movementX/28);
		player.lookY-=(event.movementY*1.5);
        if(player.angle<0)player.angle=player.angle+360;
		else if(player.angle>360)player.angle=player.angle-360;
		if(player.lookY>1500) player.lookY = 1500;
		else if (player.lookY<0) player.lookY=0;
}
function myKeyEventsRelease(event){
        if(event.code=="KeyW"){
            player.keys.up = 0;			
		}
        if(event.code=="KeyS"){
            player.keys.down = 0;
		}
        if(event.code=="KeyA"){
            player.keys.left = 0;
		}
        if(event.code=="KeyD"){
            player.keys.right = 0;
		}
            
    
}
function myKeyEvents(event){
		
        if(event.code=="KeyW"){
            player.keys.up = 1;		
		}
        if(event.code=="KeyS"){
            player.keys.down = 1;
		}
        if(event.code=="KeyA"){
            player.keys.left = 1;
		}
        if(event.code=="KeyD"){
            player.keys.right = 1;
		}
            
        if(event.code=="KeyH"){
		
		for(let i=0;i<player.ray.length;i++){		
		console.log(player.lookY);
		}
		
		}
            
	
}

function checkKeys(){
	
	let checkX = parseInt(((player.xpos+20*Math.cos(radians(player.angle)))/mapSize));
	let checkXY = parseInt((player.ypos+10*Math.sin(radians(player.angle)))/mapSize);
	let checkY = parseInt(((player.ypos+20*Math.sin(radians(player.angle)))/mapSize));
	let checkYX = parseInt((player.xpos+10*Math.cos(radians(player.angle)))/mapSize);
	
	if(player.keys.up==1){
			if( mapTest[checkXY][checkX]!=1 )	player.xpos+= 6*Math.cos(radians(player.angle));
			if( mapTest[checkY][checkYX]!=1 ) player.ypos+= 6*Math.sin(radians(player.angle));
	}
	
	checkX = parseInt(((player.xpos-20*Math.cos(radians(player.angle)))/mapSize));
	checkXY = parseInt((player.ypos-10*Math.sin(radians(player.angle)))/mapSize);
	checkY = parseInt(((player.ypos-20*Math.sin(radians(player.angle)))/mapSize));
	checkYX = parseInt((player.xpos-10*Math.cos(radians(player.angle)))/mapSize);
	
	
	if(player.keys.down==1){
			if( mapTest[checkXY][checkX]!=1 )	player.xpos-= 2*Math.cos(radians(player.angle));
		if( mapTest[checkY][checkYX]!=1 )	player.ypos-= 2*Math.sin(radians(player.angle));
	}
}

function loop(){
  erase(); 
  
  checkKeys();
  mapProj();
  checkHits();		
  player.draw();
  caster.draw();
	
  window.requestAnimationFrame(loop);

};

window.requestAnimationFrame(loop);


function erase(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mapProj(){
	for(let i=0;i<mapX;i++){
		for(let j=0;j<mapY;j++){
		if(mapTest[i][j] == 1)	ctx.strokeRect(j*mapSize,i*mapSize,mapSize,mapSize);
		}
	}
}


function checkHits(){
	
		let cX = player.xpos+player.size/2;
		let cY = player.ypos+player.size/2;
		
		let anguloM = player.angle - player.tam/(player.division*2); // times 2 is optimal
		for(let i=0;i<player.tam;i++){	
		
			player.ray[i]={
			x1:cX,
			y1:cY,
			x2:cX+player.dist*Math.cos(radians( (anguloM+(i/player.division)))),
			y2:cY+player.dist*Math.sin(radians( (anguloM+(i/player.division)))),
			type: 0,
			angle:anguloM+i/player.division,
			perc:0,
			side: ""
		};
			
		if(anguloM+(i/player.division)>360)		player.ray[i].angle-=360;	

		else if(anguloM+(i/player.division)<0)		player.ray[i].angle+=360;				
		
	
		let perc;
		let sidesH,sidesV;
		let sides = {x: 0,y: 0,xP:0,yP:0};
		let dV,dH;
		let currentX,currentY;
		
		sides.x = cX;sides.y = cY;
		let a=0;
		while(a<50){
			
		
		sidesV = calculateSideV(player.ray[i].angle,sides.x,sides.y);
		sidesH = calculateSideH(player.ray[i].angle,sides.x,sides.y);
		
		dV = distance(cX,cY,sidesV.x,sidesV.y);
		dH = distance(cX,cY,sidesH.x,sidesH.y);	
		
		if(dV>dH){
			sides = sidesH;
			perc = sidesH.xP;	
		}
		else{ 
			sides= sidesV;
			perc = sidesV.yP;
		}
		
		currentY = parseInt(sides.x/mapSize);
		currentX = parseInt(sides.y/mapSize);
		if(currentX>=mapX)	currentX = (mapX-1);
		if(currentX<0) currentX = 0;
		if(currentY>=mapY)	currentY = (mapY-1);
		if(currentY<0) currentY = 0;
		
		
		if(mapTest[currentX][currentY]==1){
			
			if(dV>dH)player.ray[i].side = "horizontal";
			else	 player.ray[i].side = "vertical";
			
			player.ray[i].x2 = sides.x;
			player.ray[i].y2 = sides.y;
			player.ray[i].type = 1;
			player.ray[i].perc = perc;
			a = 50;
		}
		
		a++;
		
		
		}
		
}
}


function calculateSideH(angle,cX,cY){
	let xPerc,yPerc;
	let sideX,sideY;
	
	//Y HORIZONTAL
	if(Math.sin(radians(angle))>0){
	yPerc = cY/mapSize - parseInt(cY/mapSize);
	sideY =  mapSize - (mapSize*yPerc);	
	sideY += cY+0.0000001;
	sideX = cX+ ((sideY-cY)/(Math.tan(radians(angle))));
	
	//When looking down i want to know what % of the cube i am looking at
	//sideX is the position in x that i stop some
	xPerc =  1- (sideX/mapSize - parseInt(sideX/mapSize));
	
	}
	
	else{
	yPerc = 1 - (cY/mapSize - parseInt(cY/mapSize));		
	sideY =  (mapSize*yPerc)-mapSize;	
	sideY += cY-0.0000001;
	sideX = cX+ ((sideY-cY)/(Math.tan(radians(angle))));
	xPerc = sideX/mapSize - parseInt(sideX/mapSize);
	}


	//Returns always xperc
	return {x: sideX,y: sideY,xP:xPerc,yP:yPerc};
}

function calculateSideV(angle,cX,cY){
	let xPerc,yPerc;
	let sideX,sideY;
	
	//X VERTICAL
	if(Math.cos(radians(angle))>0){
	xPerc = cX/mapSize - parseInt(cX/mapSize);
	sideX =  mapSize - (mapSize*xPerc);	
	sideX += cX + 0.0000001;
	sideY = cY+ ((sideX-cX)*(Math.tan(radians(angle))));
	
	//When looking down i want to know what % of the cube i am looking at
	//sideX is the position in x that i stop some
	yPerc = sideY/mapSize - parseInt(sideY/mapSize);
	}
	
	else{
	xPerc = 1 - (cX/mapSize - parseInt(cX/mapSize));		
	sideX =  (mapSize*xPerc)-mapSize;	
	sideX +=cX -0.0000001;
	sideY= cY+ ((sideX-cX)*(Math.tan(radians(angle))));
	yPerc = 1-(sideY/mapSize - parseInt(sideY/mapSize));
	}

	return {x: sideX,y: sideY,xP:xPerc,yP:yPerc};
}

function rotationMath(point, centro,vel) {
        let x = centro.x + (point.x - centro.x) * Math.cos(radians(vel)) - (point.y - centro.y) * Math.sin(radians(vel));
        let y = centro.y + (point.x - centro.x) * Math.sin(radians(vel)) + (point.y - centro.y) * Math.cos(radians(vel));
        return { x, y };
}

function distance(x1,y1,x2,y2){
	return Math.abs(Math.sqrt( ((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1))));
}
