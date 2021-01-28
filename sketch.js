var dog,dogi, happydogi;
var database, foodS, foodStock;

function preload()
{
  dogi = loadImage("Dog.png");
  happydogi = loadImage("happy dog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200);
  dog.addImage(dogi);
  foodStock.database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogi)
  }
  drawSprites();
  textSize(30);
  fill(blue);
  stroke();
  text("note: use UP-ARROW to feed the dog!!")

}
function readStock(){
foodS = data.val();
}
function writeStock(){
database.ref('/').update({
 food:x
})}



