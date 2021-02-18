var person , personImage;
var doctor , doctorImage;
var virus , virusImage;

function preload(){
personImage.loadImage = "person.png";
doctorImage.loadImage = "doctor.png";
virusImage.loadImage = "virus.png";
}

function setup(){
createCanvas(800,800);
person = createSprite(400,750);
person.addImage(personImage);
doctor = createSprite(400,50);
doctor.addImage(doctorImage);
virus = createSprite(400,400);
virus.addImage(virusImage);
}