console.log(`Trabalhando com condicionais\n`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`,
);

const idadeComprador = 18;
const menorDeIdadeAcompanhado = true;
const maiorDeIdade = idadeComprador >= 18;
const temPassagemComprada = true;

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);



// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idade`);
//     console.log(listaDeDestinos);
// } else if (estaAcompanhada) {
//     console.log(`Comprador está acompanhado`);
//     console.log(listaDeDestinos.splice(1, 1));
// } else {
//     console.log(`Comprador menor de idade e não posso vender`);

// }

if ((maiorDeIdade) || (menorDeIdadeAcompanhado)) {
    console.log(`Pode comprar, boa viagem`);
    console.log(listaDeDestinos.splice(2, 1));
} else {
    console.log(`Comprador não pode comprar`);

}
console.log("Embarque:\n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Não pode embarcar");
}


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
