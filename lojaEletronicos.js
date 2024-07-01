var leitor = require('readline-sync');
var Produtos = /** @class */ (function () {
    function Produtos(nome, preco, marca, memoria, precoAtacado) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.memoria = memoria;
        this.precoAtacado = precoAtacado;
    }
    Produtos.prototype.getProdutos = function () {
        console.log("Nome: ".concat(this.nome, " Preco:").concat(this.preco, " Marca: ").concat(this.marca, " Memoria:").concat(this.memoria, " Preco de Atacado: ").concat(this.precoAtacado, " "));
    };
    Produtos.prototype.setProdutos = function () {
        var nomeUpdate = leitor.question("Qual o nome do produto desejado?");
        var precoUpdate = leitor.question("qual o preco maximo?");
        var marcaUpdate = leitor.question("Qual a marca do produto desejado?");
        var memoriaUpdate = leitor.question("Quantos GBs deseja?");
        var precoAtacadoUpdate = leitor.question("Qual o preco de atacado deste produto?");
        this.nome = nomeUpdate;
        this.preco = precoUpdate;
        this.marca = marcaUpdate;
        this.memoria = memoriaUpdate;
        this.precoAtacado = precoAtacadoUpdate;
    };
    Produtos.prototype.calcularLucro = function () {
        var lucro = this.preco - this.precoAtacado;
        console.log("O lucro \u00E9 ".concat(lucro));
    };
    return Produtos;
}());
var Venda = /** @class */ (function () {
    function Venda(produto, quantidade, dataVenda, metodoPagamento) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.dataVenda = dataVenda;
        this.metodoPagamento = metodoPagamento;
    }
    Venda.prototype.getVendas = function () {
        console.log("Produto: ".concat(this.produto.nome, " Quantidade: ").concat(this.quantidade, " valor Total da Compra: ").concat(this.calcularValorVenda(), " Data da Compra: ").concat(this.dataVenda, " Metodo de Pagamento: ").concat(this.metodoPagamento));
    };
    Venda.prototype.setVendas = function () {
        this.produto.setProdutos();
        var quantidadeUpdate = leitor.questionInt("Qual a quantidade comprada? ");
        this.quantidade = quantidadeUpdate;
        var dataVendaUpdatee = leitor.question("Qual a data da venda?");
        this.dataVenda = dataVendaUpdatee;
        var metodoPagamentoUpdate = leitor.question("Qual o metodo do pagamento?");
        this.metodoPagamento = metodoPagamentoUpdate;
    };
    Venda.prototype.calcularValorVenda = function () {
        var valorFinal = this.produto.preco * this.quantidade;
        return valorFinal;
    };
    return Venda;
}());
var menu = true;
var produto = new Produtos("", 0, "", 0, 0);
var vendas = new Venda(produto, 2, 0, "");
while (menu) {
    var opcao = leitor.questionInt("1-Criar produto \n 2- Abrir uma venda \n 3- Modificar Produto \n 4-Modificar venda \n 5- Visualizar produto \n 6- Visualizar Venda \n 0- Sair");
    switch (opcao) {
        case 1:
            produto.setProdutos();
            break;
        case 2:
            vendas.setVendas();
            break;
        case 3:
            produto.setProdutos();
            break;
        case 4:
            vendas.setVendas();
            break;
        case 5:
            produto.getProdutos();
            break;
        case 6:
            vendas.getVendas();
            break;
        case 0:
            !menu;
            process.exit(0);
    }
}
