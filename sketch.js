// let xoff1 = 0;
// let xoff2 = 10000;

var inc = 0.01;

var start = 0;

function setup() {
  createCanvas(400,500);
  
}

function draw() {
  background(51);  

  stroke(255);
  noFill();
  beginShape();

  var xoff = start;

  //x = random(width);


  for (var  x = 0; x < width; x++ ){
    stroke(255);
    //var y = random(height);
    var y = noise(xoff) * width;
    vertex(x,y);

    xoff += inc;

  }
  
  endShape();

  start += inc;

  //noLoop();
  
  // let x = map(noise(xoff1), 0, 1, 0, 400);
  // let y = map(noise(xoff2), 0, 1, 0, 500);

  // xoff1 += 0.01;
  // xoff2 += 0.01;

  // fill(255);
  // ellipse(x, y, 24, 24);
 
}