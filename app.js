var limpar = document.getElementById("oqueEscrevi");
var pegartweet =  document.getElementById("oqueEscrevi");
var atual = document.getElementById('oqueEscrevi');

//funcao pegar tweet, imprimir no HTML e limpar textArea
function Twittar() {
  pegartweet =  document.getElementById("oqueEscrevi").value;
  var resposta = document.createElement('p');
  resposta.textContent = pegartweet;
  var postar =   document.getElementById("aparecerAqui");
  postar.appendChild(resposta);
  event.preventDefault();
  limpar.value = "";
}

//funcao contar caractere, desativar botao e alterar cores dos caracteres restantes
function caractere(){
  var max = new Number();
  max = 140;
  atual = document.getElementById('oqueEscrevi').value.length;
  var contagem = new Number();
  contagem = max - atual;
  document.getElementById('restante').innerHTML = contagem;
  if(contagem >= 0){
    if (contagem <20 && contagem >10){
      document.getElementById('restante').style.color='#F1D30A'; 
	  }
      if (contagem <10 && contagem >=0){
      document.getElementById('restante').style.color='#E02525'; 
    }
    document.getElementById('botao').disabled="";
    }else{
      document.getElementById('botao').disabled="disabled"; 
     }
}

//função acrescentar linha na textarea se teclar Enter ou se texto maior que o espaço da textArea
function autoSize() {
	atual = document.getElementById('oqueEscrevi').value.length;
	console.log(atual);
    if(event.keyCode==13 ){
		document.getElementById('oqueEscrevi').rows += 1;
	}
	if( atual > 140){
		document.getElementById('oqueEscrevi').rows += 1;
	}
}
// funcao aumentar height do textarea com scrollHeight
function setFunction() {
     pegartweet.style.height = "";
    pegartweet.style.height = pegartweet.scrollHeight + "px";
}