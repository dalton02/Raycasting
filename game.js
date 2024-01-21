
var FRAME = 1000 / 60 ;

const canvas = document.querySelector(".tela");
const width = (canvas.width = 500);
const height = (canvas.height = 500);
const ctx = canvas.getContext("2d");



let coord2 = [
  {x1:200,y1:0,x2: 0,y2:0},
  {x1:0,y1:0,x2: 0,y2:500},
  {x1:200,y1:40,x2: 460,y2:40},
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
  {x1:400,y1:90,x2: 400,y2:70},
  {x1:0,y1:40,x2: 100,y2:40},
  {x1:40,y1:40,x2: 40,y2:200},
  {x1:40,y1:200,x2: 400,y2:200},
  {x1:40,y1:40,x2: 40,y2:200},
  {x1:200,y1:100,x2: 200,y2:190},
  {x1:200,y1:100,x2: 300,y2:100},
  {x1:200,y1:190,x2: 300,y2:190},
  {x1:300,y1:100,x2: 300,y2:130},
  {x1:330,y1:90,x2: 330,y2:190},
  {x1:330,y1:190,x2: 300,y2:190},
  {x1:400,y1:200,x2: 400,y2:400},
  {x1:400,y1:400,x2: 500,y2:400},
  {x1:500,y1:0,x2: 500,y2:500}
];

let coord = [
{x1:100,y1:100,x2:110,y2:100},
{x1:110,y1:100,x2:110,y2:110},
{x1:110,y1:110,x2:100,y2:110},
{x1:100,y1:110,x2:100,y2:100}
];

let coordChave = [
  {x1:260,y1:134,x2:266,y2:134},
  {x1:266,y1:134,x2:266,y2:142},
  {x1:266,y1:142,x2:260,y2:142},
  {x1:260,y1:142,x2:260,y2:134}
  ];

  let coordPorta = [
    {x1:430,y1:350,x2:480,y2:350},
    {x1:430,y1:350,x2:430,y2:400},
    {x1:430,y1:400,x2:480,y2:400},
    {x1:480,y1:400,x2:480,y2:350}
    ];
let walk = new Walker(5,5);
let wall2 = new Wall(coord2);
let item1 = new Item(coordChave,0); //Chave
let porta = new Item(coordPorta,1); //Porta
let level=0;
window.addEventListener("keydown", (e) => myKeyEvents(e)); 
window.addEventListener("keyup", (s) => myKeyEvents(s)); 
window.addEventListener("click",(s) => myMouseEvents(s));
//Collection of objects
let collectionWall = new Array();
collectionWall.push(wall2);
let collectionEnemys = new Array();
let collectionItens = new Array();
collectionItens.push(item1);
collectionItens.push(porta);
let colisor = new Colision(collectionWall,walk,collectionEnemys,collectionItens);
let casting = new CastingView(colisor.listCollision,walk);

let menu = new Menu();

var backLoop1 = new Audio('vento.mp3');
backLoop1.play();
backLoop1.addEventListener("ended", function(){
  backLoop1.currentTime = 7;
  backLoop1.play();
  console.log("ended");
});

function myKeyEvents(event){

  if(!menu.showPrincipal){
  walk.move = colisor.stuckWalls();
  walk.myKey(event);
  colisor.step(event); 
}
}
function myMouseEvents(event){
  menu.step(event); 
}

function loop(){

  erase(); 

  
  viewport();
  walk.powers();
  draw();
  
  var effect = colisor.hitPlayer();
  
  if(walk.powers()==69){
    menu.showEnd=true;
  }
  
  if(effect!=-1){
    walk.effect[effect]=1;
  }
    window.requestAnimationFrame(loop);

};

window.requestAnimationFrame(loop);


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
  collectionWall[level].draw();
  
 for(let i=0;i<collectionEnemys.length;i++){
    collectionEnemys[i].draw();
  }
 
  casting.draw();
  colisor.draw();

  menu.draw();
  
}

