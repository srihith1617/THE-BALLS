var ball, ballsGroup, randomness, ballState, thebackground, ballanimation,edges;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function preload() {
  ballanimation = loadImage("ball.png");
}

function setup() {
  edges=createEdgeSprites();
  ballsGroup = new Group();
  thebackground = createSprite(200, 200, 400, 400);
  thebackground.shapeColor = "yellow";
  randomness = 1;
  ballState = "attract";
  for (var i = 0; i < 100; i++) {
    ball = createSprite(random(0, 400), random(0, 400), 20, 20);
    ball.addAnimation("Bani", ballanimation);
    ball.scale = 0.5;
    ballsGroup.add(ball);
  }
}

function draw() {
  drawSprites();
  text("Press 'r' for the balls to repel", 200, 200);
  text("Press 'a' for the balls to attract", 200, 300);
  text("Press a number from 1-9 to change randomness", 100, 100);
  text("Press 'e' to reset balls", 100, 150);
  theballs();
  if (keyDown(49)) {
    randomness = 1;
  } else if (keyDown(50)) {
    randomness = 2;
  } else if (keyDown(51)) {
    randomness = 3;
  } else if (keyDown(52)) {
    randomness = 4;
  } else if (keyDown(53)) {
    randomness = 5;
  } else if (keyDown(54)) {
    randomness = 6;
  } else if (keyDown(55)) {
    randomness = 7;
  } else if (keyDown(56)) {
    randomness = 8;
  } else if (keyDown(57)) {
    randomness = 9;
  } else if (keyDown("r")) {
    ballState = "repel";
  } else if (keyDown("a")) {
    ballState = "attract";
  } else if (keyDown("e")) {
    for (var i = 0; i < 100; i++) {
    ball = ballsGroup.get(i);
      ball.x=random(0,400);
      ball.y=random(0,400);
    }
  }
  console.log(randomness);
}

function theballs() {
  for (var i = 0; i < 100; i++) {
    ball = ballsGroup.get(i);
    ball.bounceOff(edges);
    if (ballState === "attract") {
      ball.setVelocity((mouseX - ball.x) / random(90 - (randomness * 10), 100), (mouseY - ball.y) / random(90 - (randomness * 10), 100));
    } else {
      ball.setVelocity((ball.x-mouseX) / random(90 - (randomness * 10), 100), (ball.y-mouseY) / random(90 - (randomness * 10), 100));
    }
  }
}
