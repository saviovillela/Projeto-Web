const icones = {
    "configuracao": "configuracao.html",
    "cadastro de pessoas": "/cadastro/cadastro.html",
    "cadastro de produtos": "/cadastro_produtos/cadastro_produtos.html",
    "financeiro": "/financeiro/financeiro.html",
    "estoque": "/estoque/estoque.html",
    "serviços": "/servico/servico.html"
};

function validarPesquisa() {
    let pesquisa = document.getElementById("campo-pesquisa").value;
    let mensagemErro = document.getElementById("mensagem-erro");
    let regex = /^[a-zA-Z\s]*$/;

    if (!regex.test(pesquisa)) {
        mensagemErro.text }
};
