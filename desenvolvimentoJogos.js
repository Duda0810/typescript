var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var leitor = require("readline-sync");
var Jogo = /** @class */ (function () {
    function Jogo(titulo, genero, classificacaoEtaria) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
    }
    Jogo.prototype.mostrartitulo = function () {
        console.log(this.titulo);
    };
    Jogo.prototype.getDetalhes = function () {
        console.log("Nome: ".concat(this.titulo, " Genero: ").concat(this.genero, " Classificacao de Faixa Etaria: ").concat(this.classificacaoEtaria, " "));
    };
    Jogo.prototype.setDetalhes = function () {
        var tituloUpdate = leitor.question("Qual o nome do jogo?");
        var generoUpdate = leitor.question("qual o genero deste jogo?");
        var classificacaosEtariaUpdate = leitor.questionInt("Qual a faixa etaria?");
        this.titulo = tituloUpdate;
        this.genero = generoUpdate;
        this.classificacaoEtaria = classificacaosEtariaUpdate;
    };
    return Jogo;
}());
var JogoEletronico = /** @class */ (function (_super) {
    __extends(JogoEletronico, _super);
    function JogoEletronico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JogoEletronico.prototype.super = function (titulo, genero, classificacaoEtaria, plataforma) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.plataforma = plataforma;
    };
    JogoEletronico.prototype.getDetalhesJE = function () {
        console.log("Nome: ".concat(this.titulo, " Genero: ").concat(this.genero, " Classificacao de Faixa Etaria: ").concat(this.classificacaoEtaria, " Plataforma: ").concat(this.plataforma, " "));
    };
    JogoEletronico.prototype.setDetalhesJE = function () {
        var tituloUpdate = leitor.question("Qual o nome do jogo?");
        var generoUpdate = leitor.question("qual o genero deste jogo?");
        var classificacaosEtariaUpdate = leitor.questionInt("Qual a faixa etaria?");
        var plataformaUpdate = leitor.question("Em qual plataforma este jogo  roda?");
        this.titulo = tituloUpdate;
        this.genero = generoUpdate;
        this.classificacaoEtaria = classificacaosEtariaUpdate;
        this.plataforma = plataformaUpdate;
    };
    return JogoEletronico;
}(Jogo));
var JogoTabuleiro = /** @class */ (function (_super) {
    __extends(JogoTabuleiro, _super);
    function JogoTabuleiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JogoTabuleiro.prototype.super = function (titulo, genero, classificacaoEtaria, numerodeJogadores) {
        this.titulo = titulo;
        this.genero = genero;
        this.classificacaoEtaria = classificacaoEtaria;
        this.numeroDeJogadores = numerodeJogadores;
    };
    JogoTabuleiro.prototype.getdetalhesJT = function () {
        console.log("Nome: ".concat(this.titulo, " Genero: ").concat(this.genero, " Classificacao de Faixa Etaria: ").concat(this.classificacaoEtaria, " Numero De Jogadores: ").concat(this.numeroDeJogadores, " "));
    };
    JogoTabuleiro.prototype.setdetalhesJT = function () {
        var tituloUpdate = leitor.question("Qual o nome do jogo?");
        var generoUpdate = leitor.question("qual o genero deste jogo?");
        var classificacaosEtariaUpdate = leitor.questionInt("Qual a faixa etaria?");
        var numeroDeJogadoresUpdate = leitor.question("Quantos jogadores vao jogar?");
        this.titulo = tituloUpdate;
        this.genero = generoUpdate;
        this.classificacaoEtaria = classificacaosEtariaUpdate;
        this.numeroDeJogadores = numeroDeJogadoresUpdate;
    };
    return JogoTabuleiro;
}(Jogo));
var BiblotecaDeJogos = /** @class */ (function () {
    function BiblotecaDeJogos() {
        this.jogos = [];
    }
    BiblotecaDeJogos.prototype.mostrarTitulo = function () {
        console.log(this.jogos);
    };
    BiblotecaDeJogos.prototype.adicionarJogo = function (jogo) {
        this.jogos.push(jogo);
    };
    BiblotecaDeJogos.prototype.removerJogo = function (jogoDeletar) {
        this.jogos = this.jogos.filter(function (jogo) { return jogo.titulo !== jogoDeletar; });
    };
    return BiblotecaDeJogos;
}());
var menu = true;
var estante = new BiblotecaDeJogos();
var jogoUm = new JogoEletronico("teste", "teste", 12);
var jogoDois = new JogoTabuleiro("", "", 0);
estante.adicionarJogo(jogoUm);
console.log(estante.jogos);
while (menu) {
    var opcao = leitor.questionInt("1- Criar jogo eletronico \n 2- Criar jogo de tabuleiro \n 3- Adicionar jogos a biblioteca \n 4- Modificar Jogo eletronico  \n 5- Modificar jogo de tabuleiro \n 6- Visualizar jogo eletronico \n 7- Visualizar jogo de tabuleiro \n 8- visualizar biblioteca de jogos \n 9- Deletar jogo: \n 0- sair ");
    switch (opcao) {
        case 1:
            jogoUm.setDetalhesJE();
            break;
        case 2:
            jogoDois.setdetalhesJT();
            break;
        case 3:
            estante.adicionarJogo(jogoUm);
            estante.adicionarJogo(jogoDois);
            break;
        case 4:
            jogoUm.setDetalhesJE();
            break;
        case 5:
            jogoDois.setdetalhesJT();
            break;
        case 6:
            jogoUm.getDetalhesJE();
            break;
        case 7:
            jogoDois.getdetalhesJT();
            break;
        case 8:
            estante.mostrarTitulo();
            break;
        case 9:
            console.log(estante.jogos);
            var jogoDeletar = leitor.question("Insira o nome do jogo a ser deletado: ");
            estante.removerJogo(jogoDeletar);
            break;
        case 0:
            !menu;
            process.exit(0);
    }
}
/*
function adicionarJogo(): void {
    let tipoDeJogo = leitor.question('Qual o tipo de jogo?').toLowerCase();
    let jogo;
    
    if (tipoDeJogo === 'eletronico')  {
        jogo = new JogoEletronico("", "", 0);
    } else if (tipoDeJogo === 'tabuleiro') {
        jogo = new JogoTabuleiro("", "", 0);
    } else {
        console.error('Tipo de jogo inválido');
        return;
    }

    jogo.setDetalhes();
    estante.adicionarJogo(jogo);
}*/
