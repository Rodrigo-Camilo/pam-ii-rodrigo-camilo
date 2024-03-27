let num1 = 1;
const num2 = 2;
var msg = "Ola amigos! Esse é o meu número:";

console.log(msg, num1);
console.log(num1 + num2);
console.log(typeof num1);
console.log(typeof msg);

//Métodos são funcionalidades prontas da linguagem e que podem receber parâmetros 

function somar(){
    let n1 = 2;
    let n2 = 5;
    console.log('O resultado da function é:', n1+n2);
}; //função é algo que eu crio! mas... tudo no js é função

somar(); //Aqui ela é executada

function somarComParametros(n1, n2) {
    let resultado = `O resultado é: ${n1+n2}`
    console.log(resultado);
};

somarComParametros(5, 5);

const teste = (n) => {
    let result = n % 2;
    if(result == 1){
        return "Número impar"
    }
    return "Número par"
};
console.log(teste(5));