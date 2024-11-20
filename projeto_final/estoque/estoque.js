window.onload = function() {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    let tabela = document.getElementById('estoque-table').getElementsByTagName('tbody')[0];

    if (produtos.length === 0) {
        let row = tabela.insertRow();
        let cell = row.insertCell();
        cell.colSpan = 3;
        cell.textContent = "Nenhum produto cadastrado ainda!";
        cell.style.textAlign = "center";
        cell.style.color = "#39ff14";
    }

    produtos.forEach(function(produto) {
        let row = tabela.insertRow();
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.tipo}</td>
        `;
    });
};

window.onload = function() {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    let tabela = document.getElementById('estoque-table').getElementsByTagName('tbody')[0];

    if (produtos.length === 0) {
        let row = tabela.insertRow();
        let cell = row.insertCell();
        cell.colSpan = 4; 
        cell.textContent = "Nenhum produto cadastrado ainda!";
        cell.style.textAlign = "center";
        cell.style.color = "#39ff14";
    }

    produtos.forEach(function(produto, index) {
        let row = tabela.insertRow();
        
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.tipo}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="modificarProduto(${index})">Modificar</button>
                <button class="btn btn-danger btn-sm" onclick="excluirProduto(${index})">Excluir</button>
            </td>
        `;
    });
};

function modificarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    let produto = produtos[index];

    let novoNome = prompt("Novo nome do produto:", produto.nome);
    let novoPreco = prompt("Novo preço do produto:", produto.preco);
    let novoTipo = prompt("Novo tipo do produto:", produto.tipo);

    if (novoNome && novoPreco && novoTipo) {
        produto.nome = novoNome;
        produto.preco = novoPreco;
        produto.tipo = novoTipo;

        // Atualiza o localStorage
        localStorage.setItem('produtos', JSON.stringify(produtos));
        location.reload();
    }
}

// Função para excluir um produto
function excluirProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos.splice(index, 1);

    // Atualiza o localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));
    location.reload();
}

