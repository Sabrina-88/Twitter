var limpar = document.getElementById("oqueEscrevi");
var pegartweet =  document.getElementById("oqueEscrevi");

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
  var atual = document.getElementById('oqueEscrevi').value.length;
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