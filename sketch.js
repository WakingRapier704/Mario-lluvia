var amigosGroup;
var enemyGroup;
var score=0;
var vidas=3;
var vidaGroup;
var vida;

function preload(){
  fondoImg = loadImage("fondo.jpg");
  bombaImg = loadImage("bomba.png")
  estrellaImg = loadImage("estrella.png");
  florImg = loadImage("flor.png");
  goombaImg = loadImage("goomba.png");
  hongoImg = loadImage("hongo.png");
  marioImg =loadImage("mario.png");
  monedaImg =loadImage("moneda.png");
  vidaImg =loadImage("vida.png");
  tortugaImg =loadImage("tortuga.png");
  fantasmaImg = loadImage("fantasma.png");

}

function setup(){  
  createCanvas(500,600);

  fondo=createSprite(250,200);
  fondo.addImage(fondoImg);
  fondo.scale=1;

  mario=createSprite(60,310)
  mario.addImage(marioImg)
  mario.scale=0.1

  suelo=createSprite(60,360,1000,30)
  suelo.visible=false

  amigosGroup=new Group()
  enemyGroup=new Group()
  vidaGroup=new Group()
}

function draw() {

  if(mario.x<24){
    mario.x=24
  }

  if(mario.x>480){
    mario.x=480
  }
  
  if(keyDown("left_arrow")){
    mario.x=mario.x-9
  }
  if(keyDown("right_arrow")){
    mario.x=mario.x+9
  }

  generaAmigos()
   generaEnemigos()
   generaVidas()

   if(keyDown("space")){
    window.location.reload()
   }

  if(amigosGroup.isTouching(suelo)){
    amigo.destroy()
  }
  
  if(vidaGroup.isTouching(suelo)){
    vida.destroy()
  }

  if(enemyGroup.isTouching(suelo)){
    enemy.destroy()
  }

  if(enemyGroup.isTouching(mario)){
    vidas=vidas-1;
    enemy.destroy()  
    }

  if(amigosGroup.isTouching(mario)){
  score=score+10;
  amigo.destroy()  
   }

   if(vidaGroup.isTouching(mario)){
    vidas=vidas+1;
    vida.destroy()  
   }

   

  drawSprites()
  
  if(vidas===0){
    mario.destroy()
    amigo.destroy()
    enemy.destroy()
   

    textSize(50)
    fill("GREEN")
    text("GAME OVER",100,200)
    textSize(20)
    text("Presiona espacio para reiniciar",110,150)

    
   }

  textSize(20)
  fill("BROWN")
  text("Puntuacion "+score,350,50)

  text("Vidas "+vidas,350,100)


}

function generaAmigos() {

  if(frameCount%200===0){
    amigo=createSprite(580,0,10,40)
    amigo.x=Math.round(random(20,450))

    amigo.velocityY=10

    var rand=Math.round(random(1,4))

    switch(rand){
      case 1:amigo.addImage(florImg)
      break;
      case 2:amigo.addImage(hongoImg)
      break;
      case 3:amigo.addImage(estrellaImg)
      break;
      case 4:amigo.addImage(monedaImg)
      break;
     default:break;
    }

    amigo.scale=0.1
    amigo.lifetime=200

    amigosGroup.add(amigo)
  }
}

function generaEnemigos() {
  if(frameCount%80===0){
    enemy=createSprite(580,0,10,40)
    enemy.x=Math.round(random(20,450))

    enemy.velocityY=9

    var rand=Math.round(random(1,4))

    switch(rand){
      case 1:enemy.addImage(bombaImg)
      enemy.scale=0.1
      break;
      case 2:enemy.addImage(fantasmaImg)
      enemy.scale=0.1
      break;
      case 3:enemy.addImage(goombaImg)
      enemy.scale=0.1
      break;
      case 4:enemy.addImage(tortugaImg)
      enemy.scale=0.2
      break;
     default:break;
    }

    
    enemy.lifetime=200

    enemyGroup.add(enemy)
  }
}

function generaVidas(){
  if(frameCount%360===0){
    vida=createSprite(580,0,10,40)
    vida.x=Math.round(random(20,450))
    vida.velocityY=12
    vida.addImage(vidaImg)
    vida.scale=0.1
    vidaGroup.add(vida)
  }
}


