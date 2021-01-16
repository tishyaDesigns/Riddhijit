//Create variables here
var dog,dogImg,happyDogImg,foodS,foodStock,milkImg;
var database
var count=2;
var feed,lastFed
function preload()
{
  happyDogImg=loadImage("Dog .png")
  dogImg=loadImage("happydog .png")
  milkImg=loadImage("Milk.png")
	//load images here
}

function setup() {

  createCanvas(500,500);
  database = firebase.database();

  //Create an object of Food Class

 foodStock=database.ref('Food')
 foodStock.on("value",readStock)

 dog=createSprite(250,400)
dog.addImage(dogImg)
dog.scale=0.20;

nameDog=createInput("Enter Dog's name")
nameDog.position(600,120)

//The 2 buttons should be Feed Dog and Add Food
//Last Fed time is just text not a button
//There should be 2 mousepressed event(call functions) 1 for Add Food(addFood---function name(addFoods)) and One for feed dog(feedDog---function name(writestock))

feedDog=createButton("LastFed")
feedDog.position(600,95)

feed=createButton("Add Food")
feed.position(700,95)
feed.mousePressed(feedDog)
}


function draw() {  
  background(46,139,87)

  //Read the last feed time value from Database using fedTime=database.ref('FeedTime') where FeedTime stores FeedTime
  //Display the time as text AM/PM diving the number by 12
  //Below code is not needed as writeStock/Feed Dog(both r same) function should be called on button pressed
  /*if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg)
  }*/
  drawSprites();
 
}

//function to read food Stock
function readStock(data){
foodS=data.val();
//Call updateFoodStock(foodS) from Food Class to update value in the class
}
//function to add food in stock
function addFoods(){
  // Increase foodCount(foodS) and update in database accordinly
}
//function to update food stock and last fed time(use hour()) in database 
//add happy dog image
//Call updateFoodStock(foodS) from Food Class to update value in the class using getFoodStock()
//foodObj.updateFoodStock(foodObj.getFoodStock()-1);

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
database.ref('/').update({
  Food:x
})
}