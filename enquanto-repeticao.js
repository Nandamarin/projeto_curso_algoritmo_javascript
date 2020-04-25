/*Var
// Seção de Declarações das variáveis 
   idade, limite, contador:inteiro
   nome:caracter

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite a quantidade de vezes que será verificado a idade: ")
leia(limite)

contador := 0

enquanto contador < limite faca
escreval("Digite o nome: ")
leia(nome)
escreval("Digite a idade da pessoa ")
leia(idade)

se idade > 18 entao
escreval(nome, " é maior de idade")
senao
escreval(nome, " é menor de idade")
fimse

contador := contador + 1
fimenquanto

Fimalgoritmo*/
function acaobtn(){
    var idade,nome, limite, contador

    limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade: ")
    contador = 0
    
    while(contador<limite){
    
    nome = prompt("Digite o nome: ")
    idade = prompt("Digite a idade: ")
    
    if (idade >18)
        document.getElementById("paragraf").innerText = nome+" é maior de idade"
        else
        document.getElementById("paragraf").innerText = nome+" é menor de idade"
    
        contador++
    }
    

}

