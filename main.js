const height = 450;
const width = 800;
var dino;
var plant = [];
var bird = [];
var bg;
var v = -10;
var score = 0;
//-------------------------------------
function setup(){
	createCanvas(700, 450);
	scaleToFit: true;
	textSize(30);
	dino = new Dinozaur();
	bg = new Bg();
}
//-------------------------------------
function draw(){
	background(0);
	bg.show();
	//-------------------------------------
	dino.show();
	dino.update();
	//-------------------------------------
	if(frameCount % 60 == 0){
		var type = round(random(0, 1));
		//-------------------------------------
		if(type == 0){
			plant.push(new Plant);
			plant[plant.length - 1].y = 140 + round(random(0, 1)) * 40;
		}
		//-------------------------------------
		if(type == 1){
			bird.push(new Bird);
			bird[bird.length - 1].y = 140 - round(random(0, 1)) * 100;
		}
	}
	//-------------------------------------
	for (var i = plant.length - 1; i >= 0; i--) {
		plant[i].update();
		plant[i].show();
		if(plant[i].hit(dino)){
			gameOver();
		}
		if(plant[i].x < -width){
			plant.splice(i,1); //remove from array
		}
	}
	//-------------------------------------
	for (var i = bird.length - 1; i >= 0; i--) {
		bird[i].update();
		bird[i].show();
		if(bird[i].hit(dino)){
			gameOver();
		}
		if(bird[i].x < -width){
			bird.splice(i,1); //remove from array
		}
	}
	//-------------------------------------
	if(frameCount % 10 == 0){
		v -= 0.0001;
		score -= 1 * round(v / 10);
	}
	fill(250);
	text("SCORE: " + score + "", 50, 400);
}
//-------------------------------------
function keyPressed(){
	if(key == ' ' || keyCode == UP_ARROW){
		if(dino.y == 300){
			dino.v = -24;
		}
	}
}
//-------------------------------------
function touchStarted() {
	if(dino.y == 300)
		dino.v = -24;
}
//-------------------------------------
function gameOver(){
	background(0);
	bg.show();
	dino.show();
	//-------------------------------------
	for (var i = plant.length - 1; i >= 0; i--)
		plant[i].show();
	//-------------------------------------
	for (var i = bird.length - 1; i >= 0; i--)
		bird[i].show();
	//-------------------------------------
	fill(250);
	text("SCORE: " + score + "", 50, 400);
	//-------------------------------------
	exit(0);
}
