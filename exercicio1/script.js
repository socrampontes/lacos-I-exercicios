/* # Exercício 1

Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta. */

let coxinha = prompt("você deseja comer mais coxinha?\n S para sim\n N para não").toUpperCase()
let conta = 0
while(coxinha!=="N"){
    conta +=2.5
    coxinha = prompt("você deseja comer mais coxinha?\n S para sim\n N para não").toUpperCase()
}
console.log(conta);