status="";
function setup()
{
    canvas=createCanvas(450,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size();
    video.hide();
}
function start()
{
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Object Detecting";
    document.getElementById("object_name").value;
}
function modelLoaded()
{
    console.log("model loaded");
    status=true;

}
function draw()
{
    image(video,0,0,450,350);
}