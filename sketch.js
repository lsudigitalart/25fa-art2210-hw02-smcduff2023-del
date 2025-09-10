function setup() {
  createCanvas(950, 642);
}

function draw() {
  background(125);
  fill(208, 204,187);
  rect(0,0, 950, 642); // Draws a rectangle

  fill(215,180,62)
  ellipse(325, 250, 1000, 990); // Draws a circle
  fill(225)
  ellipse(700, 650, 150, 150);

  // Draw thick straight lines
  strokeWeight(20); // Set line thickness to 20 pixels
  stroke(0); // Set line color (optional)
  line(400, 100, 0, 100); // Horizontal line
  line(400, 100, 1000, 100); // connecting line
  strokeWeight(10)
  line(400, 150, 5, 150); // Horizontal line
  line(50,350,1000,350);//horizontal line
  line(50,380,1000,380)
strokeWeight(20)
  line(5,550,1000,550)
    // Draw a black spline curve.
  noFill();
  strokeWeight(10);
  stroke(0);
    noFill();
  strokeWeight(70);
  stroke(0);
  arc(255,270, 870,785, PI * 1.7, PI * 3.0); // Adjust center and angles as needed
strokeWeight(50);
arc(45,170, 600, 800, PI * 2.1, PI * 2.5); // Adjust center and angles as needed
strokeWeight(30);
arc(80,190, 890, 830, PI * 2.0, PI * 2.5); // Adjust center and angles as needed
strokeWeight(10)
arc(45,128,580, 800, PI * 2.3, PI * 2.6); // Adjust center and angles as needed
strokeWeight(30)
arc(50,-70,680,700, PI * 2.0, PI * 2.6); // Adjust center and angles as needed
arc(50,5,680,850, PI * 2.0, PI * 2.6); // Adjust center and angles as needed
strokeWeight(50)
arc(50,-10,680,850, PI * 2.0, PI * 2.6); // Adjust center and angles as needed
arc(50,-50,680,850, PI * 2.0, PI * 2.6); // Adjust center and angles as needed
arc(50,-100,680,850, PI * 2.0, PI * 2.6); // Adjust center and angles as needed
arc(50,45,680,850, PI * 2.0, PI * 2.6); // Adjust center and angles as needed
strokeWeight(20)
triangle(5, 60,70, 150,160,180);
arc(70,54, 150, 200, PI * 2.5, PI * 1.6); // Mirrored arc
arc(70,24, 180, 220, PI * 2.5, PI * 1.6); // Mirrored arc
strokeWeight(30)
arc(80,34, 120, 200, PI * 2.5, PI * 1.6); // Mirrored arc
arc(110,54, 150, 200, PI * 2.5, PI * 1.6); // Mirrored arc
arc(70,54, 150, 200, PI * 2.5, PI * 1.6); // Mirrored arc
strokeWeight(40)
arc(145,54, 155, 250, PI * 2.5, PI * 1.6); // Mirrored arc
arc(30,54, 160, 200, PI * 2.3, PI * 1.7); // Mirrored arc
strokeWeight(20)
arc(150,-40, 20, 400, PI * 1.8, PI * 2.5); // Mirrored arc
strokeWeight(40)
arc(140,105, 250, 150, PI * 2.5, PI * 1.2); // Mirrored arc
arc(150,-40, 20, 400, PI * 1.8, PI * 2.5); // Mirrored arc
strokeWeight(20)
arc(270,-40, 100, 350, PI * 1.8, PI * 2.5); // Mirrored arc
arc(225,-40, 100, 350, PI * 1.8, PI * 2.5); // Mirrored arc
arc(500,410, 350, 650, PI * 1.8, PI * 2.4); // Mirrored arc
stroke(255)
strokeWeight(30)
line(0, 200, 1000, 200);
strokeWeight(15)
line(0,450,1000,450);
stroke(0)


}