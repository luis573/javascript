document.write("<h1>Olá mundo </h1><hr></br>");

function MostrarCaixa()
{
    //alert("Olá pessoal");
    var resultado=confirm("Então?");
    if (resultado==true)
        document.getElementById("zona").innerHTML="Tudo Ok";
    else
        document.getElementById("zona").innerHTML="Cancel";



}