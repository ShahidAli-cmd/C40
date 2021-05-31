var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var track;
var car1img,car2img,car3img,car4img,ground;

var cars, car1, car2, car3, car4;

function preload(){
track = loadImage("../image/track.jpg");
car1img = loadImage("../image/car1.png");
car2img = loadImage("../image/car2.png");
car3img = loadImage("../image/car3.png");
car4img = loadImage("../image/car4.png");
ground = loadImage("../image/ground.png");


}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();

  }
  
}
