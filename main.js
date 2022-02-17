song1="";
song2="";
function setup()
{
    canvas=createCanvas(500,420);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,500,420);
}
function preload()
{
    song1=loadSound()
}