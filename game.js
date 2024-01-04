
var FRAME = 1000 / 60 ;

const canvas = document.querySelector(".tela");
const width = (canvas.width = 500);
const height = (canvas.height = 500);
const ctx = canvas.getContext("2d");



let coord2 = [
  {x1:200,y1:200,x2: 300,y2:200},
  {x1:200,y1:0,x2: 0,y2:0},
  {x1:0,y1:0,x2: 0,y2:500},
  {x1:0,y1:500,x2: 500,y2:500},
  {x1:500,y1:0,x2: 0,y2:0},
  {x1:500,y1:0,x2: 500,y2:20},
  {x1:500,y1:20,x2: 100,y2:20},
  {x1:500,y1:0,x2: 500,y2:10},
  {x1:500,y1:0,x2: 500,y2:10},
  {x1:500,y1:10,x2: 500,y2:70},
  {x1:500,y1:70,x2: 200,y2:70},
  {x1:200,y1:70,x2: 200,y2:40},
  {x1:500,y1:70,x2: 200,y2:70},
  {x1:200,y1:70,x2: 100,y2:70},
  {x1:100,y1:70,x2: 100,y2:90},
  {x1:100,y1:90,x2: 400,y2:90},
  {x1:400,y1:120,x2: 100,y2:120},
  {x1:100,y1:120,x2: 100,y2:450},
  {x1:500,y1:70,x2: 200,y2:70},
  {x1:500,y1:70,x2: 200,y2:70},
];

let coord = [
{x1:100,y1:100,x2:110,y2:100},
{x1:110,y1:100,x2:110,y2:110},
{x1:110,y1:110,x2:100,y2:110},
{x1:100,y1:110,x2:100,y2:100}
];

let coordI = [
  {x1:100,y1:100,x2:104,y2:100},
  {x1:104,y1:100,x2:104,y2:104},
  {x1:104,y1:104,x2:100,y2:104},
  {x1:100,y1:104,x2:100,y2:100}
  ];

let walk = new Walker(5,5);
let wall2 = new Wall(coord2);
let item1 = new Item(coordI,1);
window.addEventListener("keydown", (e) => myKeyEvents(e)); 

//Collection of objects
let collectionWall = new Array();
collectionWall.push(wall2);
let collectionEnemys = new Array();
let collectionItens = new Array();
collectionItens.push(item1);

let colisor = new Colision(collectionWall,walk,collectionEnemys,collectionItens);
let casting = new CastingView(colisor.listCollision,walk);

function myKeyEvents(event){
    walk.myKey(event);
    colisor.step(event);
}

Sound();
function loop(){

  erase(); 
  menu();
  viewport();
  colisions();
  walk.powers();
  draw();
  var effect = colisor.hitPlayer();
  if(effect!=false)
    walk.effect = effect;
  window.requestAnimationFrame(loop);

};

window.requestAnimationFrame(loop);


function menu(){
  //Check if menu is on
  

}

function colisions(){

  walk.move = colisor.stuckWalls();
}
function erase(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function viewport(){
  walk.calculateViewport(null);
  colisor.viewThings();
  colisor.removeBlinds();
  walk.calculateViewport(colisor.listCollision);
}

function draw(){

  walk.draw();

  for(let i=0;i<collectionItens.length;i++){
    collectionItens[i].draw();
  }
  for(let i=0;i<collectionWall.length;i++){
    collectionWall[i].draw();
  }
 for(let i=0;i<collectionEnemys.length;i++){
    collectionEnemys[i].draw();
  }
 
  casting.draw();

}
function Sound()
{
  var audio = document.getElementById("vento");
  audio.addEventListener("ended", function() {
      audio.currentTime = 0; // Reinicia para o início
      audio.play(); // Inicia a reprodução novamente
  });
  audio.play();
  audio.volume = 0.3;
}

