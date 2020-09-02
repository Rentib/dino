function Plant(){
	this.x = width;
	this.y = 0;
	this.w = 50;
	this.show = function(){
		fill(0, 250, 0);
		rect(this.x, this.y, this.w, 300 - this.y);
	};
	this.update = function(){
		this.x += v;
	};
	this.hit = function(dino){
		return this.x <= dino.x + dino.w && this.x + this.w >= dino.x + dino.w / 2 && this.y <= dino.y;
	};
}