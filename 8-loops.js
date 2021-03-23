console.log(`Trabalhando com loops\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 17;
const menorDeIdadeAcompanhado = false;
const maiorDeIdade = idadeComprador >= 18;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);
const podeComprar = maiorDeIdade || menorDeIdadeAcompanhado == true;

let contador = 0;
let destinoExiste = false;
while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        console.log(`Destino existe`);
        destinoExiste = true;
        break;
    }
    contador++;
}

console.log(`Destino: ${destinoExiste ? 'sim' : 'não'}`);
if (podeComprar && destinoExiste) {
    console.log('Boa viagem');
} else {
    console.log('Desculpe, tivemos um erro');
}


for (let i = 0; i < listaDeDestinos.length; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    }
}