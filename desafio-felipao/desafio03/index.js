class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso iterando sobre uma lista de heróis
const herois = [
  new Heroi("Gandalf", 1000, "mago"),
  new Heroi("Arthur", 30, "guerreiro"),
  new Heroi("Aang", 112, "monge"),
  new Heroi("Hanzo", 25, "ninja")
];

for (const heroi of herois) {
  heroi.atacar();
}