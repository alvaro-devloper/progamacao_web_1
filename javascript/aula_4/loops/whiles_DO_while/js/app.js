/*
 A diferença do while e do while
 1 - while
 1.1- while verifica a condiçao antes de entrar no loop
 1.2- tem um contador e variavel de escape do loop

 2 - Do while
 1.1- Primeiro executa o loop, depois testa 
 1.2- usado quando se precisa executar um loop pelo menos 1 vez
 1.3- escapa do loop apenas se a variavel atender a condição

*/
/*
//while
let num1 = 0
while(num1 <= 5){
    console.log(`${(num1 +1)}° rodada`)
    num1++ 
}
*/

//exemplo tabuada
let num1 = 0
let numfixo = Number(prompt("digite um tabuada"))
while(num1 <= 10){
    console.log(`${(numfixo)} X ${num1} = ${numfixo * num1}\n`)
    num1++ 
}