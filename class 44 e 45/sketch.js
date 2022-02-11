var bibliotecaimg, biblioteca, garotadeipanema, garotadeipanemaimg, estanteimg, estante;
var balaofala, balaoimg;
var book1,bookimg1,book2,bookimg2,book3,bookimg3,book4,bookimg4,book5,bookimg5,book6,bookimg6,book7,bookimg7,book8,bookimg8,book9,bookimg9;
var book10,bookimg10,book11,bookimg11,book12,bookimg12,book13,bookimg13,book14,bookimg14,book15,bookimg15,book16,bookimg16,book17,bookimg17,book18,bookimg18,book19,bookimg19;

function preload(){



  bibliotecaimg = loadImage("img/biblioteca.jpg");
  garotadeipanemaimg = loadImage("img/boneca.png");
  estanteimg = loadImage("img/estante.png");
  bookimg1 = loadImage("img/books2.jpg");
  bookimg2 = loadImage("img/books3.jpg");
  bookimg3 = loadImage("img/books4.jpg");
  bookimg4 = loadImage("img/books5.jpg");
  bookimg5 = loadImage("img/books6.jpg");
  bookimg6 = loadImage("img/books7.jpg");
  bookimg7 = loadImage("img/books8.jpg");
  bookimg8 = loadImage("img/books9.jpg");
  bookimg9 = loadImage("img/books10.jpg");
  bookimg10 = loadImage("img/books11.jpg");
  bookimg11 = loadImage("img/books12.jpg");
  bookimg12 = loadImage("img/books13.jpg");
  bookimg13 = loadImage("img/books14.jpg");
  bookimg14 = loadImage("img/books15.jpg");
  bookimg15 = loadImage("img/books16.jpg");
  bookimg16 = loadImage("img/books17.jpg");
  bookimg17 = loadImage("img/books18.jpg");
  bookimg18 = loadImage("img/books19.jpg");
  bookimg19 = loadImage("img/books20.jpg");
  balaoimg = loadImage("img/balaoANA.png")
}

function setup(){
createCanvas(1200,800);

//biblioteca = createSprite(600,400);
garotadeipanema = createSprite(500,650);
estante = createSprite(950,510);
book1 = createSprite(980,545);
book2 = createSprite(980,545);
book3 = createSprite(980,545);
book4 = createSprite(980,545);
book5 = createSprite(980,545);
book6 = createSprite(980,545);
book7 = createSprite(980,545);
book8 = createSprite(980,545);
book9 = createSprite(980,545);
book10 = createSprite(980,545);
book11= createSprite(980,545);
book12 = createSprite(980,545);
book13= createSprite(980,545);
book14 = createSprite(980,545);
book15 = createSprite(980,545);
book16 = createSprite(980,545);
book17 = createSprite(980,545);
book18 = createSprite(980,545);
book19 = createSprite(818,370);
balaofala = createSprite(570,370);



garotadeipanema.addImage("boneca",garotadeipanemaimg);
garotadeipanema.scale = 0.2;
//biblioteca.addImage ("biblioteca", bibliotecaimg);
//biblioteca.scale = 4;
estante.addImage ("estante", estanteimg);
estante.scale = 0.6;

fill("green")
textSize(20);
text("oi, será que você poderia me ajudar a achar meu livro preferido?",570,370);


book1.addImage ("book1", bookimg1);
book1.scale = 0.4;
book2.addImage ("book2", bookimg2);
book2.scale = 0.5;
book3.addImage ("book3", bookimg3);
book3.scale = 0.5;
book4.addImage ("book4", bookimg4);
book4.scale = 0.5;
book5.addImage ("book5", bookimg5);
book5.scale = 0.5;
book6.addImage ("book6", bookimg6);
book6.scale = 0.5;
book7.addImage ("book7", bookimg7);
book7.scale = 0.5;
book8.addImage ("book8", bookimg8);
book8.scale = 0.5;
book9.addImage ("book9", bookimg9);
book9.scale = 0.5;
book10.addImage ("book10", bookimg10);
book10.scale = 0.5;
book11.addImage ("book11", bookimg11);
book11.scale = 0.5;
book12.addImage ("book12", bookimg12);
book12.scale = 0.5;
book13.addImage ("book13", bookimg13);
book13.scale = 0.5;
book14.addImage ("book14", bookimg14);
book14.scale = 0.5;
book15.addImage ("book15", bookimg15);
book15.scale = 0.5;
book16.addImage ("book16", bookimg16);
book16.scale = 0.5;
book17.addImage ("book17", bookimg17);
book17.scale = 0.5;
book18.addImage ("book18", bookimg18);
book18.scale = 0.5;
book19.addImage ("book19", bookimg19);
book19.scale = 0.4;
balaofala.addImage("balao", balaoimg);
balaofala.scale = 0.4;


}

function draw(){
  background(bibliotecaimg);

  mouse()
  
  
  drawSprites();
}

function mouse() {
  var posx,posy;
  posx = mouseX;
  posy = mouseY;

  

   console.log("posição X = "+posx);
   console.log("posição Y = "+posy);
  
}
