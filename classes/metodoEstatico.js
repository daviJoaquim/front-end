class Carro {
    constructor(nome){
        this.nome = nome;
    }
    static alo(){
        return "Alô!";
    }
}


const meuCarro = new Carro("Porsche");
console.log(Carro.alo());