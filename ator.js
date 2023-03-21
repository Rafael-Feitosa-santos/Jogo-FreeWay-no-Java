//Codigo do Ator

let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor,xAtor,yAtor,30,30);
}

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor +=3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i+= 1){
 colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor,yAtor,15);
  if (colisao){   
    voltaAtorParaInicio();
    somDaColisao.play();
    if(pontosMaiorQueZero()){
      meusPontos -=1;
   }
  }
 }
}  

function voltaAtorParaInicio(){
  yAtor = 366;
}

function incluiPontos(){
  textSize(25);
  textAlign(CENTER);
  fill(color(0,270,0))
  text(meusPontos, width / 5, 27);
  
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos +=1;
    somDoPonto.play();
    voltaAtorParaInicio();
  }
}

function pontosMaiorQueZero(){
 return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 366;
}







