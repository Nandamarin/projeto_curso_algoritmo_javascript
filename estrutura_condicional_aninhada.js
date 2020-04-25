/*Var
// Seção de Declarações das variáveis 
valor1, valor2, resultado: real
operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("Digite o primeiro valor: ")
    leia(valor1)
    escreval("Digite a operação a ser realizada +,/,*,-...")
    leia(operacao)
    escreval("Digite o segundo valor: ")
    leia(valor2)
    
    se operacao = "+" entao
       resultado := valor1 + valor2
    senao
         se operacao = "-" entao
            resultado := valor1 - valor2
            senao
                 se operacao = "*" entao
                    resultado := valor1 * valor2
                    senao
                         se operacao = "/" entao
                         resultado := valor1 / valor2
                         fimse
                 fimse
         fimse
    fimse

    escreval("Resultado do cálculo é: ", resultado)
    
            

Fimalgoritmo*/


function acaobtn(param){

var valor1, valor2, resultado, operacao 

valor1 = prompt("Digite o primeiro valor: ")
operacao = prompt("Digite qual das operações irá executar: +,-,* ou / ")
valor2 = prompt("Digite o segundo valor: ")


if (operacao == "+"){
    resultado = parseInt(valor1) + parseInt(valor2)
}else if(operacao == "-"){
        resultado = parseInt(valor1) - parseInt(valor2)
}else if(operacao == "*"){
        resultado = parseInt(valor1) * parseInt(valor2)
}else if(operacao == "/"){
        resultado = parseInt(valor1) / parseInt(valor2)
}

document.getElementById("paragraf").innerText = resultado

}