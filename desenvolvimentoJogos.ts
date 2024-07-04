var leitor = require("readline-sync")

abstract class Jogo {
    public titulo: string
    protected genero: string
    protected classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }
    protected mostrartitulo(){
        console.log(this.titulo);
    }

    getDetalhes(){
      console.log(`Nome: ${this.titulo} Genero: ${this.genero} Classificacao de Faixa Etaria: ${this.classificacaoEtaria} `);
    }

    setDetalhes(){
        let tituloUpdate = leitor.question("Qual o nome do jogo?")
        let generoUpdate = leitor.question("qual o genero deste jogo?")
        let classificacaosEtariaUpdate = leitor.questionInt("Qual a faixa etaria?")
        this.titulo = tituloUpdate
        this.genero =generoUpdate
        this.classificacaoEtaria=classificacaosEtariaUpdate
    }
}

class JogoEletronico extends Jogo{
    private plataforma: string

    super(titulo: string, genero: string, classificacaoEtaria: number, plataforma: string ){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
        this.plataforma = plataforma
    }

    getDetalhesJE(){
        console.log(`Nome: ${this.titulo} Genero: ${this.genero} Classificacao de Faixa Etaria: ${this.classificacaoEtaria} Plataforma: ${this.plataforma} `);
          
      }
      setDetalhesJE(){
        let tituloUpdate = leitor.question("Qual o nome do jogo?")
        let generoUpdate = leitor.question("qual o genero deste jogo?")
        let classificacaosEtariaUpdate = leitor.questionInt("Qual a faixa etaria?")
        let plataformaUpdate = leitor.question("Em qual plataforma este jogo  roda?")
        this.titulo = tituloUpdate
        this.genero =generoUpdate
        this.classificacaoEtaria=classificacaosEtariaUpdate
        this.plataforma = plataformaUpdate
      }
}

class JogoTabuleiro extends Jogo{
    public titulo: string
    public genero: string
    public classificacaoEtaria: number
    public numeroDeJogadores: number

    super(titulo: string, genero: string, classificacaoEtaria: number, numerodeJogadores: number ){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
        this.numeroDeJogadores = numerodeJogadores
    }
    getdetalhesJT(){
        console.log(`Nome: ${this.titulo} Genero: ${this.genero} Classificacao de Faixa Etaria: ${this.classificacaoEtaria} Numero De Jogadores: ${this.numeroDeJogadores} `);
    }
    setdetalhesJT(){
        let tituloUpdate = leitor.question("Qual o nome do jogo?")
        let generoUpdate = leitor.question("qual o genero deste jogo?")
        let classificacaosEtariaUpdate = leitor.questionInt("Qual a faixa etaria?")
        let numeroDeJogadoresUpdate = leitor.question("Quantos jogadores vao jogar?")
        this.titulo = tituloUpdate
        this.genero =generoUpdate
        this.classificacaoEtaria=classificacaosEtariaUpdate
        this.numeroDeJogadores = numeroDeJogadoresUpdate
    }
}

class BiblotecaDeJogos {
    jogos: Jogo[]

    constructor(){
        this.jogos = []
    }

    mostrarTitulo(){
        console.log(this.jogos)
    }

    adicionarJogo(jogo: Jogo): void{
        this.jogos.push(jogo)
    }

    removerJogo(jogoDeletar: string){
        this.jogos = this.jogos.filter(jogo => jogo.titulo !== jogoDeletar)
    }
}

let menu = true
let estante = new BiblotecaDeJogos()
let jogoUm = new JogoEletronico("teste", "teste", 12)
let jogoDois = new JogoTabuleiro("", "", 0)
estante.adicionarJogo(jogoUm)

console.log(estante.jogos);

while (menu){
    let opcao = leitor.questionInt("1- Criar jogo eletronico \n 2- Criar jogo de tabuleiro \n 3- Adicionar jogos a biblioteca \n 4- Modificar Jogo eletronico  \n 5- Modificar jogo de tabuleiro \n 6- Visualizar jogo eletronico \n 7- Visualizar jogo de tabuleiro \n 8- visualizar biblioteca de jogos \n 9- Deletar jogo: \n 0- sair ")

    switch(opcao){
        case 1:
            jogoUm.setDetalhesJE()
             break
        case 2: 
            jogoDois.setdetalhesJT()
            break
        case 3: 
            estante.adicionarJogo(jogoUm)
            estante.adicionarJogo(jogoDois)
            break
        case 4: 
            jogoUm.setDetalhesJE()
            break
        case 5:
            jogoDois.setdetalhesJT()
            break
        case 6 :
            jogoUm.getDetalhesJE()
            break
        case 7: 
            jogoDois.getdetalhesJT()
            break
        case 8: 
            estante.mostrarTitulo()
            break
        case 9:
            console.log(estante.jogos)

            let jogoDeletar = leitor.question("Insira o nome do jogo a ser deletado: ")

            estante.removerJogo(jogoDeletar)
            break
        case 0 :
            !menu
            process.exit(0)
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
