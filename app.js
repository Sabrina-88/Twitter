var clear = document.getElementById("tweet");
var getTweet =  document.getElementById("tweet");
var quant = document.getElementById('tweet');
var toPost =   document.getElementById("showIt");
var timeline = document.createElement('p');

//funcao gettweet, imprimir no HTML e limpar textArea
function Twittar() {
  getTweet =  document.getElementById("tweet").value;
  timeline = document.createElement('p');
  timeline.textContent = getTweet;
 toPost =   document.getElementById("showIt");
  toPost.appendChild(timeline);
  
  event.preventDefault();

 
   clear.value = "";
   hour();
   
   function hour() {
		var p = document.createElement("p");
		hour = Date();
		p.setAttribute("class", "postDate");
		p.innerHTML = hour;
		timeline.appendChild(p);
	}
	}

//funcao contar caractere, desativar buttonTweet e alterar cores dos caracteres restantes
function caractere(){
  var max = new Number();
  max = 140;
  quant = document.getElementById('tweet').value.length;
  var count = new Number();
  count = max - quant;
  document.getElementById('rest').innerHTML = count;
  if(count >= 0){
    if (count <20 && count >10){
      document.getElementById('rest').style.color='#F1D30A'; 
	  }
      if (count <10 && count >=0){
      document.getElementById('rest').style.color='#E02525'; 
    }
    document.getElementById('buttonTweet').disabled="";
    }else{
      document.getElementById('buttonTweet').disabled="disabled"; 
     }
}

//função acrescentar linha na textarea se teclar Enter ou se texto maior que o espaço da textArea
function autoSize() {
	quant = document.getElementById('tweet').value.length;
    if(event.keyCode==13 ){
		document.getElementById('tweet').rows += 1;
	}
	if( quant > 140){
		document.getElementById('tweet').rows += 1;
	}
}
// funcao aumentar height do textarea com scrollHeight
function setFunction() {
     getTweet.style.height = "";
    getTweet.style.height = getTweet.scrollHeight + "px";
}
