// Inicializa o gráfico com valores do localStorage
let receita = parseFloat(localStorage.getItem('receita')) || 0;
let despesa = parseFloat(localStorage.getItem('despesa')) || 0;
let investimento = parseFloat(localStorage.getItem('investimento')) || 0;

// Configuração do gráfico
const ctx = document.getElementById('balancoChart').getContext('2d');
let balancoChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Receita', 'Despesa', 'Investimento'],
        datasets: [{
            label: 'Valores em R$',
            data: [receita, despesa, investimento], // Inicializa com os valores do localStorage
            backgroundColor: ['#39ff14', '#ff5733', '#c70039'],
            borderColor: ['#28a745', '#dc3545', '#e03e40'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function atualizarGrafico() {
    receita = parseFloat(localStorage.getItem('receita')) || 0;
    despesa = parseFloat(localStorage.getItem('despesa')) || 0;
    investimento = parseFloat(localStorage.getItem('investimento')) || 0;

    balancoChart.data.datasets[0].data = [receita, despesa, investimento];
    balancoChart.update();
}

function atualizarListaClientes() {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    let listaClientes = $('#listaClientes');
    listaClientes.empty(); // Limpa a lista antes de atualizar

    // Adiciona cada cliente à lista
    clientes.forEach(function(cliente) {
        listaClientes.append(`
            <li>${cliente.nome} - R$ ${cliente.valor.toFixed(2)}</li>
        `);
    });
}

// Atualiza o gráfico e a lista de clientes ao carregar a página
atualizarGrafico();
atualizarListaClientes();
