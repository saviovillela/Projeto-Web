function carregarFuncionarios() {
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    
    const tabela = document.getElementById('tabela-funcionarios');
    tabela.innerHTML = '';  

    funcionarios.forEach((funcionario, index) => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${funcionario.nome}</td>
            <td>${funcionario.email}</td>
            <td>${funcionario.cargo}</td>
            <td>
                <button class="btn btn-warning" onclick="editarFuncionario(${index})">Editar</button>
                <button class="btn btn-danger" onclick="excluirFuncionario(${index})">Excluir</button>
            </td>
        `;
        
        tabela.appendChild(tr);
    });
}

function excluirFuncionario(index) {
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios.splice(index, 1);  
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
    carregarFuncionarios(); 
}

function editarFuncionario(index) {
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    const funcionario = funcionarios[index];

    document.getElementById('nome').value = funcionario.nome;
    document.getElementById('email').value = funcionario.email;
    document.getElementById('senha').value = funcionario.senha;
    document.getElementById('cargo').value = funcionario.cargo;

    document.getElementById('nome').setAttribute('data-index', index);
    document.getElementById('email').setAttribute('data-index', index);
    document.getElementById('senha').setAttribute('data-index', index);
    document.getElementById('cargo').setAttribute('data-index', index);

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.innerText = 'Atualizar';
    
    submitButton.onclick = function() {
        atualizarFuncionario(index);
    };
}

function atualizarFuncionario(index) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cargo = document.getElementById('cargo').value;

    // Atualiza os dados no array de funcionários
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios[index] = { nome, email, senha, cargo };
    
    // Salva novamente no localStorage
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    // Recarrega a lista de funcionários e reseta o formulário
    carregarFuncionarios();
    document.querySelector('form').reset();
    
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.innerText = 'Cadastrar';
    
    alert('Funcionário atualizado com sucesso!');
}

// Inicializa a lista de funcionários ao carregar a página
window.onload = carregarFuncionarios;
