var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//Constructor circle function which defines the circle object type
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
    c.beginPath(); 
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.fillStyle = randomHue; 
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
var circle = new Circle(100, 300, .5, .5, 100); //instantiates circle objects
var circle1 = new Circle(400, 100, .5, .5, 100);
var circle3 = new Circle(600, 500, .5, .5, 100);

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - .5); //velocity
var dy = (Math.random() - .5);
var radius = 100


var randomHue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

//recursive loop so arc refreshes giving the illusion of animation
//this also creates the initial circle
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    circle.update();
    circle1.update();
    circle3.update();

    // c.beginPath(); 
    // c.arc(x, y, radius, 0, 2 * Math.PI, false);
    // c.fill();
    // c.strokeStyle = randomHue;
    // c.stroke();

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

function collisionDetection() {
    if (circle.x < circle1.x + (circle1.radius * 2)  && circle.x + (circle.radius * 2)  > circle1.x &&
    circle.y < circle1.y + (circle1.radius * 2) && circle.y + (circle.radius * 2) > circle1.y) {
        dx = -dx;
        dy = -dy;
}
}

collisionDetection();