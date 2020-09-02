function Bird(){
	this.x = width;
	this.y = 0;
	this.w = 60;
	this.h = 40;
	this.show = function(){
		fill(0, 0, 250);
		rect(this.x, this.y, this.w, this.h);
	};
	this.update = function(){
		this.x += v;
	}
	this.hit = function(bird){
		return this.x <= dino.x + dino.w && this.x + this.w >= dino.x + dino.w / 2 && this.y <= dino.y && this.y + this.h >= dino.y - dino.h;
	}
}