function preload() {

}

function setup() {
    NotArthu=createCapture(VIDEO);
    NotArthu.size(550,525);
    NotArthu.position(25,50);
    canvas=createCanvas(550,425);
    canvas.position(700,95);
    posenet=ml5.poseNet(NotArthu,modelLoaded);
    posenet.on('pose',gotPoses);
}

var noseX=0;
var noseY=0;

var leftWristX=0;
var rightWristX=0;
var difference=0;

function draw() {
    background("blue");
    document.getElementById("circle_radius").innerHTML="Size Of The Text = "+difference+"px"
    fill("#329ea8");
    stroke(0,0,0);
    text('Shaarav',noseX,noseY,difference)
}

function textSize() {
    
}

function modelLoaded() {
    console.log("PoseNet Has Been Initialized")
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" +noseX+ "  noseY=" +noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
