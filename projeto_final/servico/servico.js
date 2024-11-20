
    // Função para salvar serviços no LocalStorage
    function salvarServicos() {
        let servicos = JSON.parse(localStorage.getItem("servicos")) || [];
        console.log(servicos);
        const novoServico = {
            nomeCliente: document.getElementById("cliente").value,
            preco: document.getElementById("preco").value,
            endereco: document.getElementById("endereco").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            tipoServico: document.getElementById("tipoServico").value,
            descricaoServico: document.getElementById("descricaoServico").value,
        };
        servicos.push(novoServico);

        localStorage.setItem("servicos", JSON.stringify(servicos));
    }

 

