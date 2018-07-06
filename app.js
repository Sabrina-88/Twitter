var limpar = document.getElementById("oqueEscrevi");
function Twittar() {

var pegartweet =  document.getElementById("oqueEscrevi").value;
console.log(pegartweet);//pegar todos os elementos
var resposta = document.createElement('p');
	resposta.textContent = pegartweet;
var postar =   document.getElementById("aparecerAqui");
postar.appendChild(resposta);

event.preventDefault();
limpar.value = "";
}
 