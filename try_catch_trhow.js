document.write("<h1>Exercicio try catch trhow</h1><hr><br>")

var numero=prompt("escreva um número:");

try{

    if(numero==100)throw "erro1";
    if(numero==200)throw "erro2";
    if(numero==300)throw "erro3";

}
catch(erro){
    
    if(erro=="erro1")
        document.write("a mensagem é 1");

    if(erro=="erro2")
        document.write("a mensagem é 2");

    if(erro=="erro3")
        document.write("a mensagem é 3");

}