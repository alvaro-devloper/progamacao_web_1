/*
 operadores logicos

 && -> (and/E)logico
 || ->(or/OU) logico
 ! -> (NOT/NÃO)logico
*/

//exemplos

let num1 = 10
let num2 = 15
let num3 = 2

if(num1 >= num2){
    console.log("ENTROU no IF")
}
else{
console.log("(FALSO!)NAO ENTROU NO IF")
}


//exemplo composto

console.log("Condiçoes compostas")

if((num1 >= num2)&&(num1 != num3)){
    console.log("ENTROU no IF")
}
else{
console.log("(FALSO!)NAO ENTROU NO IF")
}

//exemplo 3 condiçoes

console.log("3 condiçoes")

if((num1 >= num2) && (num1 != num3) || (num1 != num3)){
    console.log("ENTROU no IF")
}
else{
console.log("(FALSO!)NAO ENTROU NO IF")
}

//condiçoes simples negada

if(!(num1 >= num2)){
    console.log("ENTROU no IF")
}
else{
console.log("(FALSO!)NAO ENTROU NO IF")
}
