function validarFormulario() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Validação simples
    if (usuario === "admin" && senha === "1234") {
        window.location.href = "/Pagina_inicial/pagina_inicial.html";
        return false; 
    } else {
        alert("Usuário ou senha incorretos!");
        return false; 
    }
}
