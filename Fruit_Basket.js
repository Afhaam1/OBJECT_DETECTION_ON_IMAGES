img = ""
status_1 = ""
object = []
function setup(){;
 canvas = createCanvas(500, 400);
 canvas.center();
 objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
 document.getElementById("status").innerHTML = "Status : Dectecting Objects";
};
function modelLoaded(){
    objectDetector.detect(img ,gotResult);
    status_1 = true;
    console.log("modelLoaded")
}
function gotResult(error , result){
    if(error){
        console.error(error)
    }console.log(result)
    object = result
}
function draw(){
    image(img, 0, 0, 500, 400);
    if( status_1 != ""){
        for ( i=0;i < object.length ;i++){
        document.getElementById("status").innerHTML = "status: object detected"
    fill("red");
     percent = floor(object[i].confidence*100)
    text( object[i].label + " " + percent + "%" ,object[i].x + 15 , object[i].y + 15)
    stroke("red");
    noFill();
    rect( object[i].x, object[i].y, object[i].width, object[i].height);
    }
    }

}
function preload(){
    img = loadImage("Fruit Basket.jpg");
}
function Back() {
    window.location = "Index.html"
}
