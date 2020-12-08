var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(1000,1000);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
}