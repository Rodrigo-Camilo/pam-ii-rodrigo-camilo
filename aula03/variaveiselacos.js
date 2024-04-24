let n = 2;
let t = "oi";

console.log(typeof n);
console.log(typeof t);

let a = [0, 1, 1, 2, 3, 5, 8, 13, 21];

console.log(typeof a);

let o = {
    nome: "João",
    telefone: "(55) 11 98974-4324",
    idade: 36
};

console.log(typeof o);

console.log(a);
console.log(a[6]);

a.forEach((el) => 
    console.log(`Elemento: ${el}`)
);

console.log(o);
console.log(`O telefone de ${o.nome} de ${o.idade} anos é: ${o.telefone}`);