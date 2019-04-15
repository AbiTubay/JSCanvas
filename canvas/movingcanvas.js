// DRAW LINES, RECTANGLE AND CIRCLES;

//create canvas variable
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//content canvas
let c = canvas.getContext("2d");

function Circle(x, y, dx, dy, rad) {
    this.rad = rad;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    //draw circle
    this.draw = function(){
        let red = Math.random() * 255;
        let blue = Math.random() * 255;
        let green = Math.random() * 255;
        let opacity = 1;

        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        c.strokeStyle = `rgba(${red}, ${blue}, ${green}, ${opacity}`;
        c.stroke();
        //c.fill();
    }

    //update x, y values of the circle and redraw
    this.update = function() {
        if(this.x > innerWidth-this.rad || this.x<this.rad){
            this.dx = -this.dx;
        }
        if(this.y > innerHeight-this.rad || this.y<this.rad){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

//instantiate circles
let circleArray = [];
for (let i=0; i<50; i++){
    //variables
    let rad = Math.random() * 50;
    let x = Math.random() * (innerWidth - rad*2)+rad;
    let y = Math.random() * (innerHeight - rad*2) + rad;
    let dx = (Math.random()-0.5) * 8;
    let dy = (Math.random()-0.5) * 8;
    //instantiate circle
    let o = new Circle(x, y, dx, dy, rad);
    //add to circleArray
    circleArray.push(o);
}

//animating the circles
function animate() {
    requestAnimationFrame(animate);
    //clear canvas
    c.clearRect(0,0, innerWidth, innerHeight);
    
    circleArray.forEach(circle => {
        circle.update();
    });
}

animate();
