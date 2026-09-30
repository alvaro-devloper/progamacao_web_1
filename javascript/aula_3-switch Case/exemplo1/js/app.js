alert ("bem vindo a aula de switch case")
let num1= Number(prompt("digite o primeiro numero "))
let num2= Number(prompt("digite o segundo numero "))

let escolha = Number(prompt("Digite 1 para soma e 2 para multiplicaçao"))

//console.log(num1, num2, escolha)

switch (escolha){
case 1:
    let soma = num1 + num2
    console.log(`voce escolheu soma. O valor da soma é: ${soma}`)
    break

    case 2:
     let mult = num1 * num2
    console.log(`voce escolheu multiplicação. O valor da multiplicação é: ${mult}`)
    break
    default:
        console.log("ERRO! Escolha invalida ")
}
