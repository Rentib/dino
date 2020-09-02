function Dinozaur(){
	this.x = 1/10 * width;
	this.y = 300;
	this.h = 80;
	this.w = 40;
	this.v = 0;
	this.g = 1.3;
	this.show = function(){
		fill(250, 0, 0);
		rect(this.x, this.y - this.h, this.w, this.h);
	};
	this.update = function(){
		this.v += this.g;
		this.y += this.v;
		this.y = min(300, this.y);
	}
}