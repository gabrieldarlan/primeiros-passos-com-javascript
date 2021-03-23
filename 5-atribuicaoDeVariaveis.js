console.log("Trabalhando com atribuição de variáveis");
//quando a variavel é declarada com "let" ela pode sofrer alteração durante o processamento
//quando a variável é declarada com "const" ela não poderá mudar durante o processamento ela é imutavel

const idade = 29;
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";


// console.log(nome + " " + sobrenome);
// console.log(nome, sobrenome);
console.log(`${primeiroNome} ${sobrenome}`);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//sobrescrita
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);
