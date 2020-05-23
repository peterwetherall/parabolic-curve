let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");
//Line function
let ii = function (isX, coOrd) {
	if (isX) {
		this.x = coOrd;
		this.y = Math.round(window.innerHeight) - 1;
		this.colour = "rgba(255,255,255,0.5)";
	} else {
		this.x = window.innerWidth - 1;
		this.y = coOrd;
	}
	this.draw = function () {
		c.fillStyle = "#FFFFFF";
		c.fillRect(this.x, this.y, 1, 1);
	}
}
let iiiy = [];
let iiix = [];
//Setup function
function i() {
	iiiy = [];
	iiix = [];
	iiiz = [];
	h = window.innerHeight;
	w = window.innerWidth;
	dh = h / 16;
	dw = w / 16;
	for (j = -1; j < 17; j++) {
		iiiy.push(new ii(false, dh * j));
		iiix.push(new ii(true, dw * j));
	}
}
window.addEventListener("resize", function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	i();
});
//Animation loop
function iv () {
	requestAnimationFrame(iv);
	c.clearRect(0, 0, canvas.width, canvas.height);
	for (j in iiix) {
		iiix[j].x += window.innerWidth / 512;
		if (iiix[j].x > window.innerWidth) {
			iiix[j].x = -(window.innerWidth / 16);
		}
	}	
	for (j in iiiy) {
		iiiy[j].y += window.innerHeight / 512;
		if (iiiy[j].y > window.innerHeight) {
			iiiy[j].y = -(window.innerHeight / 32);
		}
	}
	for (j = 0; j < 18; j++) {
		c.strokeStyle = iiix[j].colour;
		c.beginPath();
		c.moveTo(iiix[j].x, iiix[j].y);
		c.lineTo(iiiy[17 - j].x,iiiy[17 - j].y);
		c.stroke();
	}
}
i();
iv();