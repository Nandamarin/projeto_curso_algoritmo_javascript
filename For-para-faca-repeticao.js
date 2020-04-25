/*Algoritmo "Estrutura-Para-Faca calculando fatorial"

Var
// Seção de Declarações das variáveis 
num, fatorial,contador:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite o número que se quer o fatorial: ")
leia(num)
fatorial := 1
para contador de 1 ate num faca
     fatorial := fatorial * contador
fimpara
escreva("O fatorial do número ",num, " é: ", fatorial)

Fimalgoritmo*/


function acaobtn() {
var numero, fatorial//, contador
numero = prompt("Digite um número para calcular o fatorial ")
fatorial = 1
for(var contador = 1; contador <= numero; contador++) { //Obs: cuidado com o simbolo de maior,menor e igual,isso que nao deixou executar a conta normalmente.
    fatorial = fatorial * contador
}
document.getElementById("paragraf").innerText = "O fatorial de "+ numero +" é "+ fatorial
}