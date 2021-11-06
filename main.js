noseX = 0;

noseY = 0;

function preload() {
  sun_glasses = loadImage(
    "https://i.postimg.cc/fRzVH30B/deal-with-it-sunglasses-8-removebg-preview.png"
  );
}

function setup() {
  Canvas = createCanvas(300, 300);
  Canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("poseNet is Initialized ");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    noseX = results[0].pose.nose.x - 100;
    noseY = results[0].pose.nose.y - 95;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(sun_glasses, noseX, noseY, 200, 150);
}

function take_snapshot() {
  save("yourmom.png");
}
