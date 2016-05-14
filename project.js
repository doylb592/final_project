//*****************//
// 		VARIABLES		 //
//*****************//

var myFont;

var units = 0;

var fruit = {units:0, unitType: "cups"};
var apple = {price: 1.89, units: 2, unitType: "cups"};
var strawberry = {price: 3, units: 2, unitType: "cups"};

var veggies = {units:0, unitType: "cups"};
var broccoli = {price: 2, units: 1, unitType: "cups"};
var carrots = {price: 1.49, units: 2, unitType: "cups"};
var onions = {price: 1.49, units: 2, unitType: "cups"};
var potatoes = {price: 3, units: 4, unitType: "cups"};
var spinach = {price: 11, units: 2, unitType: "cups"};
var lettuce = {price: 2.75, units: 2, unitType: "cups"};

var protein = {units:0, unitType: "cups"};
var groundBeef = {price: 5.98, units: 2, unitType: "cups"};
var ham = {price: 6.49, units: 2, unitType: "cups"};
var chickenBreast = {price: 10, units: 2, unitType: "cups"};
var chickenDrum = {price: 5, units: 2, unitType: "cups"};
var eggs = {price: 3.7, units: 2.5, unitType: "cups"};

var dairy = {units:0, unitType: "cups"};
var milk = {price: 8, units: 16, unitType: "cups"};

var money = 64.02;
var moneyPrinted;
var fruitScore = 0;
var veggiesScore = 0;
var proteinScore = 0;
var dairyScore = 0;

var mode = "menu";

var seagull;

var soundIcon;
var soundCircle;
var soundy = ["soundIcon","soundCircle"];

var player;

//*****************//
// 		ASSETS   		 //
//*****************//

function preload(){

	//BACKGROUNDS

	menuImage = loadImage("images/baltimore.jpg");
	gameImage = loadImage("images/baltimore2.jpg");

	//FONTS

	myFont = loadFont("fonts/ComingSoon.ttf");

	//SOUNDS

	seagull = loadSound("sounds/seagulls.mp3");
	citySound = loadSound("sounds/citySounds.mp3");

	//ICONS

	playerIcon = loadImage("images/shopping-cart.png")

	fruitIcon = loadImage("images/fruit/fruitIcon.png");
	appleIcon = loadImage("images/fruit/apples.png");
	strawberryIcon = loadImage("images/fruit/strawberries.png");

	veggiesIcon = loadImage("images/veggies/veggiesIcon.png");
	broccoliIcon = loadImage("images/veggies/broccoli.png");
	carrotsIcon = loadImage("images/veggies/carrots.png");
	onionsIcon = loadImage("images/veggies/onions.png");
	potatoesIcon = loadImage("images/veggies/potatoes.png");
	spinachIcon = loadImage("images/veggies/spinach.png");
	lettuceIcon = loadImage("images/veggies/lettuce.png");

	proteinIcon = loadImage("images/protein/proteinIcon.png");
	groundBeefIcon = loadImage("images/protein/groundBeef.png");
	hamIcon = loadImage("images/protein/ham.png");
	chickenBreastIcon = loadImage("images/protein/chickenBreast.png");
	chickenDrumIcon = loadImage("images/protein/chickenDrums.png");
	eggsIcon = loadImage("images/protein/eggs.png");

	dairyIcon = loadImage("images/dairy/dairyIcon.png");
	milkIcon = loadImage("images/dairy/milk.png");
}

//*****************//
// 		 SETUP   		 //
//*****************//

function setup(){
	createCanvas(menuImage.width/4,menuImage.height/4);
	frameRate(30);

	//*****************//
	// 		 PLAYER   	 //
	//*****************//

	player = createSprite(1000);
	player.addImage(playerIcon);

//*****************//
//  DEFAULT SOUND  //
//*****************//

	seagull.setVolume(2);
	seagull.loop();
}

//*****************//
// 		GROUPS   		 //
//*****************//

function createFruit(){
			fruit = new Group();
				for(var i = 0;i<10;i++){
					if (mode == "fruitilicious") {
						apple = createSprite(660,225);
						apple.addImage(appleIcon);
						fruit.add(apple);
						strawberry = createSprite(660,480);
						strawberry.addImage(strawberryIcon);
						fruit.add(strawberry);
				}
				else {
					fruit.remove();
				}
		}
}

function createVeggies(){
		veggies = new Group();
			for(var i = 0;i<10;i++){
				if (mode == "veggieTales") {
					potatoes = createSprite(490, 200);
					potatoes.addImage(potatoesIcon);
					potatoes.setCollider(150,150);
					veggies.add(potatoes)
					carrots = createSprite(650, 200, 40, 40);
					carrots.addImage(carrotsIcon);
					carrots.setCollider(150,150);
					veggies.add(carrots)
					onions = createSprite(820, 200,40, 40);
					onions.addImage(onionsIcon);
					onions.setCollider(150,150);
					veggies.add(onions)
					broccoli = createSprite(490, 450,40, 40);
					broccoli.addImage(broccoliIcon);
					broccoli.setCollider(150,150);
					veggies.add(broccoli)
					lettuce = createSprite(655, 450, 40, 40);
					lettuce.addImage(lettuceIcon);
					lettuce.setCollider(150,150);
					veggies.add(lettuce)
					spinach = createSprite(820, 450,40, 40);
					spinach.addImage(spinachIcon);
					spinach.setCollider(150,150);
					veggies.add(spinach)
				}
				else {
					veggies.remove();
				}
		}
}

function createProtein(){
		protein = new Group();
			for(var i = 0;i<10;i++){
				if (mode == "powerProtein") {
					groundBeef = createSprite(490, 210,40,40);
					groundBeef.addImage(groundBeefIcon);
					protein.add(groundBeef);
					ham = createSprite(670, 200, 40, 40);
					ham.addImage(hamIcon);
					protein.add(ham);
					chickenBreast = createSprite(840, 200,40, 40);
					chickenBreast.addImage(chickenBreastIcon);
					protein.add(chickenBreast);
					chickenDrum = createSprite(560, 450, 40, 40);
					chickenDrum.addImage(chickenDrumIcon);
					protein.add(chickenDrum);
					eggs = createSprite(760, 460,40, 40);
					eggs.addImage(eggsIcon);
					protein.add(eggs);
			}
			else {
				veggies.remove();
			}
		}
}

function createDairy(){
		dairy = new Group();
			for(var i = 0;i<10;i++){
				if (mode == "dairyQueen") {
					milk = createSprite(540,200);
					milk.addImage(milkIcon);
					dairy.add(milk);
				}
				else {
					veggies.remove();
				}
	}
}

//*****************//
// 		MODES   		 //
//*****************//

function keyPressed() {

	if (key == " ") {
			mode = "game"
	}
	if (key == 'm' || key == 'M') {
  	mode = "menu"
  }
	if (key == 'r' || key == 'R') {
		mode = "rules"
	}
	if (key == 's' || key == 'S') {
		mode = "shop"
	}
	if (key == 'f' || key == 'F') {
		mode = "fruitilicious"
	}
	if (key == 'v' || key == 'V') {
		mode = "veggieTales"
	}
	if (key == 'p' || key == 'P') {
		mode = "powerProtein"
	}
	if (key == 'd' || key == 'D') {
		mode = "dairyQueen"
  }

//*****************//
// 		SOUNDS  		 //
//*****************//

if (mode == "game"){
	seagull.pause();
	citySound.pause();
	citySound.setVolume(1);
	citySound.loop();
}if (mode == "menu") {
	citySound.pause();
	seagull.setVolume(2);
	seagull.loop();
}else {
	seagull.pause();
	citySound.pause();
	citySound.setVolume(1);
	citySound.loop();
}

}

function draw(){

//**************************************************************************//
// 																MENU    																	//
//**************************************************************************//

if (mode == "menu"){

background(menuImage, 0,0, menuImage.width/4,menuImage.height/4);

stroke("blue");
strokeWeight(7);
fill("white");
textFont(myFont);
textSize(70);
text("Shopping Baltimore",200,300);
textSize(20);
text("PRESS SPACE TO START",menuImage.width/8-100,menuImage.height/8+50);

text("designed & coded by",200,500);
text("bridget doyle",230,530);

text("illustrations by",627,505);
text("isaac livengood",630,535);

//*****************//
// 		GAME CODE		 //
//*****************//

//**************************************************************************//
// 															PAGE 1    																	//
//**************************************************************************//

}if (mode == "game"){
background(gameImage, 0,0, menuImage.width/4,menuImage.height/4);

//*****************//
// 	GROCERY LIST	 //
//*****************//

rect(30, 20, 240, 240, 20);
stroke("blue");
line(270,70,30,70);
line(270,110,30,110);
line(270,150,30,150);
line(270,190,30,190);
line(270,230,30,230);
stroke("red");
line(70,20,70,260);

fill("black");
noStroke();
textSize(20);
textFont(myFont);
text("Fruit: "+fruitScore+"/32 Cups",80,100);
text("Veggies: "+veggiesScore+"/49 Cups",80,140);
text("Protein: "+proteinScore+"/13 Cups",80,180);
text("Dairy: "+dairyScore+"/63 Cups",80,220);

//*****************//
//  		INTRO			 //
//*****************//

fill("white");
stroke("black");
rect(400, 50, 520, 570, 20);

fill("black");
noStroke();
textSize(16);
textLeading(40);
textFont(myFont);
text("Baltimore City has been in the news a lot in the last few years. It’s an amazing city filled with beautiful hardworking people, but it’s got its problems. In a city of about 621,000 people, nearly a quarter of the population lives below the poverty line. 84% of Baltimore public school students qualify for free or reduced meals, and, according to Business Insider, 24% of Baltimoreans receive SNAP benefits – including 42% of children in the city. People living in poverty have limited access to healthy meals and although there is a growing trend of farmers markets accepting SNAP, the price of food is often still completely inaccessible for these benefit recipients. ",430,150,460);
fill("blue");

fill("white");
stroke("black");
rect(530, 20, 130, 80, 20);
rect(660, 20, 130, 80, 20);
rect(790, 20, 130, 80, 20);

fill("orange");
rect(400, 20, 130, 80, 20);

fill("black");
noStroke();
textSize(20);
text("Info",450,60);
text("Rules",575,60);
text("Shop",705,60);
text("Main Menu",805,60);
text("$"+moneyPrinted,80,60);

textSize(15);
text("(space)",445,80);
text("(r)",590,80);
text("(s)",720,80);
text("(m)",845,80);

//**************************************************************************//
// 													 		RULES    													  				//
//**************************************************************************//

}if (mode == "rules"){
background(gameImage, 0,0, menuImage.width/4,menuImage.height/4);

//*****************//
// 	GROCERY LIST	 //
//*****************//

rect(30, 20, 240, 240, 20);
stroke("blue");
line(270,70,30,70);
line(270,110,30,110);
line(270,150,30,150);
line(270,190,30,190);
line(270,230,30,230);
stroke("red");
line(70,20,70,260);

fill("black");
noStroke();
textSize(20);
textFont(myFont);
text("Fruit: "+fruitScore+"/32 Cups",80,100);
text("Veggies: "+veggiesScore+"/49 Cups",80,140);
text("Protein: "+proteinScore+"/13 Cups",80,180);
text("Dairy: "+dairyScore+"/63 Cups",80,220);

//*****************//
// 	    BOX     	 //
//*****************//

fill("white");
stroke("black");
rect(400, 50, 520, 570, 20);

fill("black");
noStroke();
textSize(16);
textLeading(40);
textFont(myFont);
text("A majority of households recieving SNAP benefits are single mother, two children homes. In a month, households recieve about $256 on average. Using one week's worth of that money — $64.02 — try to buy a week's worth of food at our farmers market.",430,150,460);
text("The grocery list on the side is based on the dietary needs of a single mother, two child household using national averages to determine a weekly recommendation from MyPlate.org.",430,365,460);
text("Price data courtesy of the Maryland Department of Argriculture; grains are not included in this simulation due to lack of price data.",430,500,460);

fill("white");
stroke("black");
rect(400, 20, 130, 80, 20);
rect(660, 20, 130, 80, 20);
rect(790, 20, 130, 80, 20);

fill("pink");
rect(530, 20, 130, 80, 20);

fill("black");
noStroke();
textSize(20);
text("Info",450,60);
text("Rules",575,60);
text("Shop",705,60);
text("Main Menu",805,60);
text("$"+moneyPrinted,80,60);

textSize(15);
text("(space)",445,80);
text("(r)",590,80);
text("(s)",720,80);
text("(m)",845,80);

//**************************************************************************//
// 																SHOP    																	//
//**************************************************************************//

}if (mode == "shop"){
background(gameImage, 0,0, menuImage.width/4,menuImage.height/4);

//*****************//
// 	GROCERY LIST	 //
//*****************//

rect(30, 20, 240, 240, 20);
stroke("blue");
line(270,70,30,70);
line(270,110,30,110);
line(270,150,30,150);
line(270,190,30,190);
line(270,230,30,230);
stroke("red");
line(70,20,70,260);

fill("black");
noStroke();
textSize(20);
textFont(myFont);
text("Fruit: "+fruitScore+"/32 Cups",80,100);
text("Veggies: "+veggiesScore+"/49 Cups",80,140);
text("Protein: "+proteinScore+"/13 Cups",80,180);
text("Dairy: "+dairyScore+"/63 Cups",80,220);

//*****************//
// 		  MARKET		 //
//*****************//

fill("white");
stroke("black");
rect(400, 50, 520, 570, 20);

fill("white");
stroke("black");
rect(400, 20, 130, 80, 20);
rect(530, 20, 130, 80, 20);
rect(790, 20, 130, 80, 20);

fill("green");
rect(660, 20, 130, 80, 20);

fill("black");
noStroke();
textSize(20);
text("Info",450,60);
text("Rules",575,60);
text("Shop",705,60);
text("Main Menu",805,60);
text("$"+moneyPrinted,80,60);

textSize(15);
text("(space)",445,80);
text("(r)",590,80);
text("(s)",720,80);
text("(m)",845,80);

text("(f)",518, 368);
text("(v)",770, 372);
text("(p)",515, 580);
text("(d)",770, 580);

fill("black");
noStroke();
textSize(25);
textLeading(0);
textFont(myFont);
text("Farmers Market",430,150);

image(fruitIcon, 450,170);
image(veggiesIcon, 700,170);
image(proteinIcon, 450,400);
image(dairyIcon, 700,400);

textSize(18);
text("Fruits",500, 350);
text("Veggies",750, 350);
text("Protein",495, 560);
text("Dairy",755, 560);

//**************************************************************************//
// 															FRUITS    																	//
//**************************************************************************//

}if (mode == "fruitilicious"){
background(gameImage, 0,0, menuImage.width/4,menuImage.height/4);

//*****************//
// 	GROCERY LIST	 //
//*****************//

rect(30, 20, 240, 240, 20);
stroke("blue");
line(270,70,30,70);
line(270,110,30,110);
line(270,150,30,150);
line(270,190,30,190);
line(270,230,30,230);
stroke("red");
line(70,20,70,260);

fill("black");
noStroke();
textSize(20);
textFont(myFont);
text("Fruit: "+fruitScore+"/32 Cups",80,100);
text("Veggies: "+veggiesScore+"/49 Cups",80,140);
text("Protein: "+proteinScore+"/13 Cups",80,180);
text("Dairy: "+dairyScore+"/63 Cups",80,220);

fill("white");
stroke("black");
rect(400, 50, 520, 570, 20);

fill("black");
noStroke();
textSize(18);
textLeading(40);
textFont(myFont);

fill("white");
stroke("black");
rect(400, 20, 130, 80, 20);

//*****************//
// 	   	FOOD     	 //
//*****************//

fill("white");
stroke("black");
rect(400, 50, 520, 570, 20);

fill("white");
stroke("black");
rect(400, 20, 130, 80, 20);
rect(530, 20, 130, 80, 20);
rect(790, 20, 130, 80, 20);

fill("DarkSeaGreen");
rect(660, 20, 130, 80, 20);

fill("black");
noStroke();
textSize(20);
text("Info",450,60);
text("Rules",575,60);
text("Shop",705,60);
text("Main Menu",805,60);
text("$"+moneyPrinted,80,60);

textSize(15);
text("(space)",445,80);
text("(r)",590,80);
text("(s)",720,80);
text("(m)",845,80);

textSize(18);
text("2 Cups of Apples: $1.89", 560,370);
text("2 Cups of Strawberries: $3",560,600);

drawSprites();

player.position.x = mouseX;
player.position.y = mouseY;

//**************************************************************************//
// 															VEGGIES    																	//
//**************************************************************************//

}if (mode == "veggieTales"){
background(gameImage, 0,0, menuImage.width/4,menuImage.height/4);


//*****************//
// 	GROCERY LIST	 //
//*****************//

rect(30, 20, 240, 240, 20);
stroke("blue");
line(270,70,30,70);
line(270,110,30,110);
line(270,150,30,150);
line(270,190,30,190);
line(270,230,30,230);
stroke("red");
line(70,20,70,260);

fill("black");
noStroke();
textSize(20);
textFont(myFont);
text("Fruit: "+fruitScore+"/32 Cups",80,100);
text("Veggies: "+veggiesScore+"/49 Cups",80,140);
text("Protein: "+proteinScore+"/13 Cups",80,180);
text("Dairy: "+dairyScore+"/63 Cups",80,220);

fill("white");
stroke("black");
rect(400, 50, 520, 570, 20);

fill("black");
noStroke();
textSize(18);
textLeading(40);
textFont(myFont);

//*****************//
// 		   FOOD 		 //
//*****************//

fill("white");
stroke("black");
rect(400, 20, 130, 80, 20);
rect(530, 20, 130, 80, 20);
rect(790, 20, 130, 80, 20);

fill("DarkSeaGreen");
rect(660, 20, 130, 80, 20);

fill("black");
noStroke();
textSize(20);
text("Info",450,60);
text("Rules",575,60);
text("Shop",705,60);
text("Main Menu",805,60);
text("$"+moneyPrinted,80,60);

textSize(15);
text("(space)",445,80);
text("(r)",590,80);
text("(s)",720,80);
text("(m)",845,80);

textSize(15);
text("1 Cup of", 465,560);
text("Broccoli: $2",460,580);
text("2 Cups of",610,300);
text("Carrots: $1.49",600,320);
text("2 Cups of",780,300);
text("Onions: $1.49",770,320);
text("4 Cups of",450,300);
text("Potatoes: $3",445,320);
text("2 Cups of",780,560);
text("Spinach: $11",775,580);
text("2 Cups of",610,560);
text("Lettuce: $2.75",600,580);

drawSprites();

player.position.x = mouseX;
player.position.y = mouseY;

//**************************************************************************//
// 																PROTEIN    																//
//**************************************************************************//

}if (mode == "powerProtein"){
background(gameImage, 0,0, menuImage.width/4,menuImage.height/4);

//*****************//
// 	GROCERY LIST	 //
//*****************//

rect(30, 20, 240, 240, 20);
stroke("blue");
line(270,70,30,70);
line(270,110,30,110);
line(270,150,30,150);
line(270,190,30,190);
line(270,230,30,230);
stroke("red");
line(70,20,70,260);

fill("black");
noStroke();
textSize(20);
textFont(myFont);
text("Fruit: "+fruitScore+"/32 Cups",80,100);
text("Veggies: "+veggiesScore+"/49 Cups",80,140);
text("Protein: "+proteinScore+"/13 Cups",80,180);
text("Dairy: "+dairyScore+"/63 Cups",80,220);

fill("white");
stroke("black");
rect(400, 50, 520, 570, 20);

fill("black");
noStroke();
textSize(18);
textLeading(40);
textFont(myFont);

//*****************//
// 		   FOOD 		 //
//*****************//

fill("white");
stroke("black");
rect(400, 20, 130, 80, 20);
rect(530, 20, 130, 80, 20);
rect(790, 20, 130, 80, 20);

fill("DarkSeaGreen");
rect(660, 20, 130, 80, 20);

fill("black");
noStroke();
textSize(20);
text("Info",450,60);
text("Rules",575,60);
text("Shop",705,60);
text("Main Menu",805,60);
text("$"+moneyPrinted,80,60);

textSize(15);
text("(space)",445,80);
text("(r)",590,80);
text("(s)",720,80);
text("(m)",845,80);

textSize(18);
text("2 Cups (1 lb)",445,300);
text("Ground Beef: $5.98",425,320);
text("2 Cups (1 lb)",613,300);
text("Ham: $6.49",615,320);
text("2 Cups (1 lb)",780,300);
text("Chicken Breast: $10",760,320);
text("2 Cups (1 lb)", 510,560);
text("Chicken Drum: $5",490,579);
text("2 . 5 Cups",720,560);
text("(1 Dozen) Eggs: $3.70",675,579);

drawSprites();

player.position.x = mouseX;
player.position.y = mouseY;

//**************************************************************************//
// 																DAIRY    																	//
//**************************************************************************//

}if (mode == "dairyQueen"){
background(gameImage, 0,0, menuImage.width/4,menuImage.height/4);

//*****************//
// 	GROCERY LIST	 //
//*****************//

rect(30, 20, 240, 240, 20);
stroke("blue");
line(270,70,30,70);
line(270,110,30,110);
line(270,150,30,150);
line(270,190,30,190);
line(270,230,30,230);
stroke("red");
line(70,20,70,260);

fill("black");
noStroke();
textSize(20);
textFont(myFont);
text("Fruit: "+fruitScore+"/32 Cups",80,100);
text("Veggies: "+veggiesScore+"/49 Cups",80,140);
text("Protein: "+proteinScore+"/13 Cups",80,180);
text("Dairy: "+dairyScore+"/63 Cups",80,220);

//*****************//
// 		  MARKET		 //
//*****************//

fill("white");
stroke("black");
rect(400, 50, 520, 570, 20);

fill("white");
stroke("black");
rect(400, 20, 130, 80, 20);
rect(530, 20, 130, 80, 20);
rect(790, 20, 130, 80, 20);

fill("black");
noStroke();
textSize(20);
text("Info",450,60);
text("Rules",575,60);
text("Shop",705,60);
text("Main Menu",805,60);
text("$"+moneyPrinted,80,60);

textSize(15);
text("(space)",445,80);
text("(r)",590,80);
text("(s)",720,80);
text("(m)",845,80);


//*****************//
// 		   FOOD 		 //
//*****************//

fill("white");
stroke("black");
rect(400, 20, 130, 80, 20);
rect(530, 20, 130, 80, 20);
rect(790, 20, 130, 80, 20);

fill("DarkSeaGreen");
rect(660, 20, 130, 80, 20);

fill("black");
noStroke();
textSize(20);
text("Info",450,60);
text("Rules",575,60);
text("Shop",705,60);
text("Main Menu",805,60);
text("$"+moneyPrinted,80,60);

textSize(15);
text("(space)",445,80);
text("(r)",590,80);
text("(s)",720,80);
text("(m)",845,80);

textSize(20);
text("16 Cups (1 Gallon) of Milk : $8", 530,520);

drawSprites();

player.position.x = mouseX;
player.position.y = mouseY;


//**************************************************************************//
// 																MONEY    																	//
//**************************************************************************//

	}if (money>=0){
	moneyPrinted = money
	}else {
	moneyPrinted = 0
	}
}

//score
function buyFruit(spriteA, spriteB, spriteC) {
  spriteB.remove();
	spriteC.remove();
  if (money >= 0){
  fuitScore++;
  }
}

function buyVeggies(spriteA, spriteD,spriteE,spriteF,spriteG,spriteH,spriteI) {
  spriteD.remove();
	spriteE.remove();
	spriteF.remove();
	spriteG.remove();
	spriteH.remove();
	spriteI.remove();
  if (money >= 0){
  veggiesScore++;
  }
}

function buyProtein(spriteA, spriteJ,spriteK,spriteL,spriteM,spriteN) {
  spriteJ.remove();
	spriteK.remove();
	spriteL.remove();
	spriteM.remove();
	spriteN.remove();
  if (money >= 0){
  proteinScore++;
  }
}

function buyDairy(spriteA, spriteO) {
  spriteO.remove();
  if (money >= 0){
  dairyScore++;
  }
}
