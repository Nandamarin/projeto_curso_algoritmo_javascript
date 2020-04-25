var teste,prova,media,nome

nome = prompt("Digite o nome do aluno")

teste = prompt("Digite a nota do teste do aluno ")
prova = prompt("Digite a nota da prova do aluno ")

media = parseInt(teste) + parseInt(prova)/2

if (media >= 6) 
alert ("Aluno aprovado! " + nome)
else
alert ("Aluno reprovado! " + nome)


