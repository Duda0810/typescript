var leitor = require('readline-sync')

class Produtos {
    nome: string
    preco: number
    marca: string
    memoria: number
    precoAtacado: number


    constructor(nome: string, preco: number, marca: string,  memoria: number, precoAtacado: number){
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.memoria = memoria
        this.precoAtacado = precoAtacado
    }
    getProdutos(){
        console.log(`Nome: ${this.nome} Preco:${this.preco} Marca: ${this.marca} Memoria:${this.memoria} Preco de Atacado: ${this.precoAtacado} `)
    }

    setProdutos(){
        let nomeUpdate = leitor.question("Qual o nome do produto desejado?")
        let precoUpdate = leitor.question("qual o preco maximo?")
        let marcaUpdate = leitor.question("Qual a marca do produto desejado?")
        let memoriaUpdate = leitor.question("Quantos GBs deseja?")
        let precoAtacadoUpdate = leitor.question("Qual o preco de atacado deste produto?")
        this.nome = nomeUpdate
        this.preco = precoUpdate
        this.marca = marcaUpdate
        this. memoria = memoriaUpdate
        this. precoAtacado = precoAtacadoUpdate
    }

    calcularLucro(){
        let lucro = this.preco - this.precoAtacado
        console.log(`O lucro é ${lucro}`)
    }

}

class Venda {
    produto: Produtos
    quantidade: number
    dataVenda: number
    metodoPagamento: string

    constructor(produto: Produtos, quantidade: number, dataVenda: number, metodoPagamento: string){
        this.produto = produto
        this.quantidade =  quantidade
        this.dataVenda = dataVenda
        this.metodoPagamento = metodoPagamento    
    }

    getVendas(){
        console.log(`Produto: ${this.produto.nome} Quantidade: ${this.quantidade} valor Total da Compra: ${this.calcularValorVenda()} Data da Compra: ${this.dataVenda} Metodo de Pagamento: ${this.metodoPagamento}`)
    }
    setVendas(){
        this.produto.setProdutos()
        let quantidadeUpdate = leitor.questionInt("Qual a quantidade comprada? ")
        this.quantidade = quantidadeUpdate
        let dataVendaUpdatee = leitor.question("Qual a data da venda?")
        this.dataVenda = dataVendaUpdatee
        let metodoPagamentoUpdate = leitor.question("Qual o metodo do pagamento?")
        this.metodoPagamento = metodoPagamentoUpdate
    }

    calcularValorVenda(): number{
        let valorFinal = this.produto.preco * this.quantidade
        return valorFinal
    }
}

let menu = true
let produto = new Produtos("", 0, "", 0, 0)
let vendas = new Venda(produto, 2, 0, "")


while(menu){
    let opcao = leitor.questionInt("1-Criar produto \n 2- Abrir uma venda \n 3- Modificar Produto \n 4-Modificar venda \n 5- Visualizar produto \n 6- Visualizar Venda \n 0- Sair")

    switch(opcao){
        case 1:
            produto.setProdutos()
             break
        case 2:
            vendas.setVendas()
            break
        case 3:
            produto.setProdutos()
            break
        case 4: 
            vendas.setVendas()
            break
        case 5:
            produto.getProdutos()
            break
        case 6:
            vendas.getVendas()
            break
        case 0: 
        !menu
        process.exit(0)
    }
}

