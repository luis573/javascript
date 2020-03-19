document.write("<h1>Olá mundo </h1><hr></br>");

function clicar(){
try
{
    mostrar();
}
catch(erro)
{
  document.write(erro);
}
}
function mostrar() {
    var valor = document.getElementById("zona");
    valor.innerHTML = "Nada a assinalar";
}
