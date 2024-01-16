noseX=0;
noseY=0;

function preload() {
 clown_nose=loadImage('https://i.postimg.cc/hthmVxVr/e5cdf354fc1fa8e51163f45dbc17d0e4-removebg-preview.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{  
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{  
    if(results.length > 0)  {    console.log(results);   
         console.log("nose x = " + noseX);   
          console.log("nose y = " + noseY);  
          noseX= results[0].pose.nose.x -10;
          noseY= results[0].pose.nose.y -10;
        }
    }