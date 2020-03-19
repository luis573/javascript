document.write("<h1>Olá mundo </h1><hr></br>");

function MostrarCaixa()
{
    //------------Alert e confirm box---------
    // alert("Olá pessoal");
    // var resultado=confirm("Então?");//devolve true ou false
    // if (resultado==true)
    //     document.getElementById("zona").innerHTML="Tudo Ok";
    // else
    //     document.getElementById("zona").innerHTML="Cancel";

    //---------------propmt box
    var nome = prompt("Qual é o teu \n nome?", "[escreva aqui]");

    if (nome!=null && nome!="" && nome!="[escreva aqui]"){
        document.getElementById("zona").innerHTML="Ola " + nome;
    }

}