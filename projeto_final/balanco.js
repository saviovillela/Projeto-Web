$(document).ready(function() {
    // Dados fictícios para o gráfico
    const entradas = [500, 800, 400, 600, 700];
    const saidas = [300, 200, 100, 50, 150];

    const ctx = $('#balancoChart');

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
            datasets: [{
                label: 'Entradas (R$)',
                data: entradas,
                backgroundColor: 'rgba(57, 255, 20, 0.5)',
                borderColor: 'rgba(57, 255, 20, 1)',
                borderWidth: 1
            },
            {
                label: 'Saídas (R$)',
                data: saidas,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
