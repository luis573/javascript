
//eventos do elemento div

var elemento=document.getElementById("div1");
var mensagem=document.getElementById("mensagem");

//elemento.onclick=function(){funcaoClick()};
elemento.ondblclick=function(){funcaoDoubleClick()};
elemento.onmouseover=function(){funcaoOnMouseOver()};
elemento.onmouseout=function(){funcaoOnMouseOut()};
elemento.onmousedown=function(){funcaoOnMouseDown()};
elemento.onmouseup=function(){funcaoOnMouseUp()};


function funcaoClick(){
    mensagem.innerHTML="clicou no div";

}

function funcaoDoubleClick(){
    mensagem.innerHTML="Fez duplo-click no DIV";
}

function funcaoOnMouseOver(){
    mensagem.innerHTML="mouse in";
}

function funcaoOnMouseOut(){
    mensagem.innerHTML="mouse out";
}

function funcaoOnMouseDown(){
    mensagem.innerHTML="rato pressionado";
}

function funcaoOnMouseUp(){
    funcaoOnMouseOver();
}