$(document).ready(function() {
    $('#confirmPaymentButton').click(function() {
        const nomeCliente = $('#nomeCliente').val();
        const tipoPagamento = $('#tipoPagamento').val();
        const valor = parseFloat($('#valor').val());

        if (!nomeCliente || isNaN(valor) || valor <= 0) {
            alert('Por favor, preencha todos os campos corretamente!');
            return;
        }

        // Salvar o valor pago e o nome do cliente no localStorage
        salvarPagamento(nomeCliente, valor);
        
        // Atualizar o gráfico financeiro após pagamento
        alert('Pagamento efetuado com sucesso!');
        atualizarFinanceiro();
    });

    // Função para salvar o pagamento no localStorage
    function salvarPagamento(nomeCliente, valorPago) {
       
        let receita = parseFloat(localStorage.getItem('receita')) || 0;
        let despesa = parseFloat(localStorage.getItem('despesa')) || 0;
        let investimento = parseFloat(localStorage.getItem('investimento')) || 0;

        // Atualiza a receita com o valor pago
        receita += valorPago;

        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

        // Adiciona o novo pagamento à lista de clientes
        clientes.push({ nome: nomeCliente, valor: valorPago });

        // Salva os novos valores no localStorage
        localStorage.setItem('receita', receita);
        localStorage.setItem('despesa', despesa);
        localStorage.setItem('investimento', investimento);
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }

    // Função para atualizar o gráfico financeiro
    function atualizarFinanceiro() {
        // Recupera os valores do localStorage
        let receita = parseFloat(localStorage.getItem('receita')) || 0;
        let despesa = parseFloat(localStorage.getItem('despesa')) || 0;
        let investimento = parseFloat(localStorage.getItem('investimento')) || 0;

        // Atualizar o gráfico financeiro
        if (typeof balancoChart !== 'undefined') {
            balancoChart.data.datasets[0].data = [receita, despesa, investimento];
            balancoChart.update();
        }

        atualizarListaClientes();
    }

    function atualizarListaClientes() {
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        let listaClientes = $('#listaClientes');
        listaClientes.empty(); 

        clientes.forEach(function(cliente) {
            listaClientes.append(`
                <li>${cliente.nome} - R$ ${cliente.valor.toFixed(2)}</li>
            `);
        });
    }

    // Atualizar a lista de clientes ao carregar a página
    atualizarListaClientes();
});
