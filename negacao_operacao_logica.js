
var teste,prova,media,nome

passou = false;

nome = prompt("Digite o nome do aluno")

teste = prompt("Digite a nota do teste do aluno ")
prova = prompt("Digite a nota da prova do aluno ")

media = parseInt(teste) + parseInt(prova)/2

if (media >= 5)
    passou = true;
if (!passou)
alert ("Aluno reprovado! " + nome)
else
alert ("Aluno aprovado! " + nome)