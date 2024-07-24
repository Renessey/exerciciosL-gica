class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
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
                ataque = "usou um ataque desconhecido";
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

const heroi1 = new Heroi("Gandalf", 1000, "guerreiro");
console.log(heroi1.atacar());
