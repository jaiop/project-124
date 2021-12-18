difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
  video = createCapture(VIDEO);
  video.size(550,500);

  canvas = createCanvas(550,450);
  canvas.position(650,100);

  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("model is loaded");
}
function gotPoses(results)
{
    console.log(results);
}
function draw()
{
    background("#f0f7df");
}