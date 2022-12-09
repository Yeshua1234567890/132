img="";
status="";

function preload(){
    imgloadimage('dog_cat.jpg');
}

function setUp(){
    canvas=createCanvas (640,420);
    canvas.center;
    objetDetector=ml5.objetDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detectando objetos";
}

function modelLoaded(){
    
}

function draw(){
    image(img,0,0,640,420);
    fill("cyan");
    text("perro",45,75);
    noFill();
    stroke("cyan");
    rect(30,60,150,400,350);

    fill("pink");
    text("perro",320,120);
    noFill();
    stroke("pink");
    rect(300,90,270,520)
}

