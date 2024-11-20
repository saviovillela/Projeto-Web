document.getElementById("form-produto").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let tipoProduto = document.getElementById("tipo-produto").value;
    let nomeProduto = document.getElementById("nome-produto").value;
    let precoProduto = document.getElementById("preco-produto").value;

    // Validação simples
    if (nomeProduto && precoProduto && tipoProduto) {
        let produto = { nome: nomeProduto, preco: precoProduto, tipo: tipoProduto };
        let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
        produtos.push(produto);
        localStorage.setItem("produtos", JSON.stringify(produtos));

        alert("Produto cadastrado com sucesso!");
        document.getElementById("form-produto").reset();
    } else {
        alert("Preencha todos os campos!");
    }
});
