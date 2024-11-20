let servicos = JSON.parse(localStorage.getItem('servicos')) || []; // Pega os dados do localStorage

function carregarServicos() {
    const listaServicos = document.getElementById("accordionServicos");
    listaServicos.innerHTML = ''; 

    servicos.forEach(servico => {
        const servicoCard = document.createElement("div");
        servicoCard.classList.add("accordion-item");
        servicoCard.innerHTML = `
            <h2 class="accordion-header" id="heading${servico.nomeCliente}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${servico.nomeCliente}" aria-expanded="true" aria-controls="collapse${servico.nomeCliente}">
                    ${servico.nomeCliente}
                </button>
            </h2>
            <div id="collapse${servico.nomeCliente}" class="accordion-collapse collapse" aria-labelledby="heading${servico.nomeCliente}" data-bs-parent="#accordionServicos">
                <div class="accordion-body">
                    <p><strong>Descrição:</strong> ${servico.descricaoServico}</p>
                    <p><strong>Tipo de Produto:</strong> ${servico.tipoServico}</p>
                    <p><strong>Preço:</strong> ${servico.preco}</p>
                    <p><strong>WhatsApp:</strong> ${servico.telefone}</p>
                    <a href="https://wa.me/${servico.telefone}" target="_blank" class="btn btn-success">Enviar via WhatsApp</a>
                    <button onclick="abrirPagamento(\'${servico.nomeCliente}\')"class="btn btn-info mt-2">Fazer Pagamento</button>
                    <button onclick="excluirServico(\'${servico.nomeCliente}\')"class="btn btn-danger mt-2">Excluir Serviço</button>
                </div>
            </div>
        `;
        listaServicos.appendChild(servicoCard);
    });
}

function abrirPagamento(servicoId) {
   window.location = "/pagamento/pagamento.html?nome="+servicoId;
}

function excluirServico(id) {
    servicos = servicos.filter(servico => servico.nomeCliente !== id); 
    localStorage.setItem('servicos', JSON.stringify(servicos)); 
    carregarServicos();
}

document.addEventListener("DOMContentLoaded", function() {
    carregarServicos();
});
