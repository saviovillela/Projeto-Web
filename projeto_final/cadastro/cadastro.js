function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cargo = document.getElementById('cargo').value;

    const funcionario = {
        nome,
        email,
        senha,
        cargo
    };

    // Armazena o novo funcionário no localStorage
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios.push(funcionario);
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    document.querySelector('form').reset();

    alert('Funcionário cadastrado com sucesso!');
    
    return false;
}

function editarFuncionario(index) {
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    const funcionario = funcionarios[index];

    const accordionCollapse = document.getElementById('collapseEdit');
    const accordionButton = document.querySelector('.accordion-button');
    
    accordionCollapse.classList.add('show');
    accordionButton.setAttribute('aria-expanded', 'true');

    document.getElementById('nomeEdit').value = funcionario.nome;
    document.getElementById('emailEdit').value = funcionario.email;
    document.getElementById('senhaEdit').value = funcionario.senha;
    document.getElementById('cargoEdit').value = funcionario.cargo;

    document.getElementById('nomeEdit').setAttribute('data-index', index);
    document.getElementById('emailEdit').setAttribute('data-index', index);
    document.getElementById('senhaEdit').setAttribute('data-index', index);
    document.getElementById('cargoEdit').setAttribute('data-index', index);
}

function atualizarFuncionario() {
    const index = document.getElementById('nomeEdit').getAttribute('data-index');
    const nome = document.getElementById('nomeEdit').value;
    const email = document.getElementById('emailEdit').value;
    const senha = document.getElementById('senhaEdit').value;
    const cargo = document.getElementById('cargoEdit').value;

    // Atualiza os dados no array de funcionários
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios[index] = { nome, email, senha, cargo };
    
    // Salva novamente no localStorage
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    // Recarrega a lista de funcionários
    carregarFuncionarios();

    // Limpa o formulário e oculta o accordion
    document.querySelector('form').reset();
    const accordionCollapse = document.getElementById('collapseEdit');
    accordionCollapse.classList.remove('show');
    
    alert('Funcionário atualizado com sucesso!');
}

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

window.onload = carregarFuncionarios;
