var sandy=0
var donald=0

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background('#FF4E45'); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  strokeWeight(1);
  fill('#B20E0E'); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse('#FF4040'); // center of canvas, 20px dia
  stroke(300.450,470);
  strokeWeight(5);
  triangle(500,500,450,470,395,499);
  line(220,281,69,12);
  line(49,457,457,49);
  fill(109,189,113,255);
  rect(50,50, sandy,sandy);
  
  fill(sandy,100,200);
  ellipse('#B20E0E');

  ellipse(150,160,20,20);

  textFont('Menlo')
  textSize(65);
  text("Yeet", 150,150);
  strokeWeight(1);
  ellipse(random(width),random(height),450,10);



}
function mousePressed(){
if (sandy>=255) {
  sandy=0;
} else {
  sandy=sandy+5;
}

if (donald=0) {
  donald=150;
} else {
  donald=donald+2;
}

}



