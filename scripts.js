var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//Circle function which defined the circle object
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
    c.beginPath(); 
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.fillText("test");
    c.fill();
    c.strokeStyle = randomHue;
    c.stroke();
        }

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x+= this.dx;
        this.y+= this.dy;

        this.draw();
    }
}

//two circles
var circle = new Circle(100, 300, .5, .5, 100); //instantiate object
var circle1 = new Circle(400, 100, .5, .5, 100);

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = .5; //velocity
var dy = .5;
var radius = 100


var randomHue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

//recursive loop so arc refreshes giving the illusion of animation
//this also creates the initial circle
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circle.update();
    circle1.update();

    c.beginPath(); 
    c.arc(x, y, radius, 0, 2 * Math.PI, false);

    c.fill();
    c.strokeStyle = randomHue;
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x+= dx;
    y+= dy;
}

animate();
