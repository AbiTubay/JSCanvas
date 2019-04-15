// DRAW LINES, RECTANGLE AND CIRCLES;

//create canvas variable
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//content canvas
let c = canvas.getContext("2d");

let mouse = {
    x: undefined,
    y: undefined
}

const maxRad = 40;

//find where the mouse is
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

//auto resize of canvas if window is resized
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

function Circle(x, y, dx, dy, rad, color) {
    //variables
    this.rad = rad;
    this.minRad = rad;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;

    //draw circle
    this.draw = function(){
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
        c.fill();
    }

    //update x, y values of the circle and redraw
    this.update = function() {
        //bounce circles in the canvas
        if(this.x > innerWidth-this.rad || this.x<this.rad){
            this.dx = -this.dx;
        }
        if(this.y > innerHeight-this.rad || this.y<this.rad){
            this.dy = -this.dy;
        }
        
        //changing coordinates to give off a moving animation
        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if(mouse.x-this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50){
            if(this.rad < maxRad){
                this.rad += 1;
            }
        }else if(this.rad > rad){
            this.rad -=1;
        }

        this.draw();
    }
}

//instantiate circles
let circleArray = [];
function init(){  
    //clear array to generate new ones
    circleArray = [];

    for (let i=0; i<500; i++){
        //variables
        let rad = Math.random() * 10 + 3;
        let x = Math.random() * (innerWidth - rad*2) + rad;
        let y = Math.random() * (innerHeight - rad*2) + rad;
        let dx = (Math.random()-0.5) * 4;
        let dy = (Math.random()-0.5) * 4;
        
        //randomising color
        let red = Math.random() * 255;
        let blue = Math.random() * 255;
        let green = Math.random() * 255;
        let opacity = 1;
        let color = `rgba(${red}, ${blue}, ${green}, ${opacity}`;
    
        //instantiate circle
        let o = new Circle(x, y, dx, dy, rad, color);
        //add to circleArray
        circleArray.push(o);
    }
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

init();
animate();
