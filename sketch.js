var canvas;
var music;
var Yellow;
var Blue;
var Black;
var Green;
var Striker;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    Striker=createSprite(random(20,750),100,20,20);
    Striker.shapeColor="White";
    Striker.velocityX=4;
    Striker.velocityY=9;   
 




    Yellow=createSprite(60,590,180,20);
    Yellow.shapeColor="Yellow";

    Blue=createSprite(280,590,180,20);
    Blue.shapeColor="Blue";
    //create box sprite and give velocity

    Black=createSprite(500,590,180,20);
    Black.shapeColor="Black";

    Green=createSprite(720,590,180,20);
    Green.shapeColor="Green";

    

}


function draw() {
    background("Grey");
    //create edgeSprite
 
    edges=createEdgeSprites();
    Striker.bounceOff(edges);
    if(Striker.isTouching(Yellow) && Striker.bounceOff(Yellow) ){
  
        Striker.shapeColor="Yellow"

    }
    if(Striker.isTouching(Blue) && Striker.bounceOff(Blue) ){
  
        Striker.shapeColor="Blue"

    }
    if(Striker.isTouching(Black ) && Striker.bounceOff(Black) ){
  
        Striker.shapeColor="Black"

    }

    if(Striker.isTouching(Green) && Striker.bounceOff(Green) ){
  
        Striker.shapeColor="Green"

    }

drawSprites();

    //add condition to check if box touching surface and make it box
}
