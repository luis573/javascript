document.write("<h1>eventos </h1><hr></br>");



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