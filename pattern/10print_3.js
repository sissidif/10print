let x = 0;
let y = 0;
let size = 30;
let spacing = 50;

function setup() {
   createCanvas(windowWidth, windowWidth);
  background(255)
}

function draw() {
  noFill(); //no rimepimento
  strokeWeight(2);

  if(random(1) < 0.7) {
  
    circle(x, y, size);
  }  else {
    triangle(x, y, x+size, y+size, x+size, y);
  }
  
  x += spacing; 
  
  if(x > width) {   
    x = 0;
    y += spacing;
  }
  
}
