//classe abstração
function Animal(tipo, cor) {
    this.tipo = tipo;
    this.cor = cor;
}

//classes herdeiras
function Cat(tipo, cor, vacinado) {
    Animal.call(this, tipo, cor);
    this.vacinado = vacinado;
}

function Dog(tipo, cor, valor) {
    Animal.call(this, tipo, cor);
    this.valor = valor;
}

//Instâncias
const dog = new Dog("vira-lata", "preto", 200);
const dog2 = new Dog("spitz", "azul", 7000);
const cat = new Cat("siamês", "branco", "sim");

console.log(dog);
console.log(dog2);
console.log(cat);



