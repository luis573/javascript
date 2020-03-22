
// varios eventos para os mesmo botão
var botao=document.getElementById("botao");
botao.onclick=function(){mostrarCaixa()};
botao.onmouseover=function(){mostrarCaixa()};
botao.onmouseout=function(){mostrarCaixa()};

function mostrarCaixa(){
    alert("ola a todos");
}

function outraFuncao(){
    var valor=document.getElementById("paragrafo");
    if (valor.innerHTML=="puxa")
        valor.innerHTML="Alterado";
    else
        valor.innerHTML="puxa";
}