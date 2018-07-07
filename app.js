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

//funcao contar caractere e desativar 
function caractere(){
	var max = new Number();
	max = 10;
	var atual = document.getElementById('oqueEscrevi').value.length;
	var contagem = new Number();
	contagem = max - atual;
	document.getElementById('restante').innerHTML = contagem;
	if(contagem >= 0){
		document.getElementById('botao').disabled="";
		}else{
			document.getElementById('botao').disabled="disabled";
			}

}