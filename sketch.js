
var imgTorre,torre;
var imgFantasma,fantasma;
var chaoinvisivel;
var estadoJogo = "JOGAR";
var obstaculo, imgObstaculo, grupoObstaculos;








function preload(){
 imgTorre = loadImage("tower.png");
 imgFantasma = loadAnimation("ghost-jumping.png","ghost-standing.png");
 imgObstaculo = loadImage("door.png");
}

function setup(){
  createCanvas(600,600);

  torre = createSprite(300,300,10,10);
  torre.addImage("tower.png", imgTorre);
  torre.velocityY = -3;

  fantasma = createSprite(250,300,10,10);
  fantasma.addAnimation("ghost-jumping.png ghost-standing.png",imgFantasma);
  fantasma.scale = 0.5;


  grupoObstaculos = createGroup();
  }


function draw(){
  background(200);
  textSize(20);

estadoJogo = "JOGAR";



if (estadoJogo == "JOGAR"){
  gerarObstaculo();
  if(keyDown("space")){
    fantasma.velocityY = -10; 
  
  }
    
    fantasma.velocityY += 0.5;   

    if(fantasma.isTouching(grupoObstaculos) ){
      estadoJogo = "ENCERRAR";
      }

  fantasma.x = World.mouseX;

  if(torre.y <= 0){
    torre.y = 300;
  }

}
if(estadoJogo == "ENCERRAR"){
  //grupoObstaculos.destroyEach();
  grupoObstaculos.setVelocityYEach(0);
  torre.velocityY = 0;
  fantasma.destroy();
  text("voce perdeu haha", 300, 300);
}






chaoinvisivel = createSprite(300,590,600,30);
chaoinvisivel.visible = false;
fantasma.collide(chaoinvisivel);

drawSprites();
}

function gerarObstaculo(){
if(frameCount%100 == 0){
obstaculo = createSprite(random(100,500),0,10,10);
obstaculo.addImage("door.png", imgObstaculo);
obstaculo.velocityY = 4;
obstaculo.lifetime = 400;
grupoObstaculos.add(obstaculo);

}
}
