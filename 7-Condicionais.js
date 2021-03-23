console.log(`Trabalhando com condicionais\n`);

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`,
);

const idadeComprador = 18;
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);



if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade`);
    console.log(listaDeDestinos);
} else {
    console.log(`Comprador menor de idade e não posso vender`);
}

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
