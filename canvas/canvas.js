// DRAW LINES, RECTANGLE AND CIRCLES;

//create canvas variable
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//content canvas
let content = canvas.getContext("2d");

//RECTANGLE
let number = 0;
let red, blue, green, opacity;
let x, y, height, width;
const end = 255;
const num = 200;
while(number<=5){
    red = Math.random() * end;
    blue = Math.random() * end;
    green = Math.random() * end;
    width = Math.random() * num;
    height = Math.random() * num;
    x = Math.random() * (window.innerWidth-width);
    y = Math.random() * (window.innerHeight-height);

    content.fillStyle = `rgba(${red}, ${blue}, ${green}`;
    content.fillRect(x, y, width, height);
    number++;
}

//LINE
let tempx = 50, tempy=50;
for(let i = 0; i<5; i++){
    red = Math.random() * end;
    blue = Math.random() * end;
    green = Math.random() * end;
    opacity = Math.random();
    x = Math.random() * (window.innerWidth-num);
    y = Math.random() * (window.innerHeight-num);

    content.beginPath();
    content.moveTo(tempx,tempy);
    content.lineTo(x, y);
    //add color
    content.strokeStyle = `rgba(${red}, ${blue}, ${green}, ${opacity}`;
    //draw strokelines
    content.stroke();
    tempx = x;
    tempy = y;
}


// ARC/CIRCLE
let rad;
const startA = 0;
const endA= Math.PI * 2;
for(let i=0; i<20; i++){
    red = Math.random() * end;
    blue = Math.random() * end;
    green = Math.random() * end;
    opacity = Math.random();
    rad = Math.random() * 100;
    x = Math.random() * (window.innerWidth-rad);
    y = Math.random() * (window.innerHeight-rad);

    content.beginPath();
    content.arc(x, y, rad, startA, endA, false);
    content.strokeStyle = `rgba(${red}, ${blue}, ${green}, ${opacity}`;
    content.stroke();
}