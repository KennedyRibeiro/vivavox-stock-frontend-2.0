document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validação básica (você pode adicionar lógica de autenticação real aqui)
        if (username && password) {
            fetch('path/to/login', { // Substitua pelo endpoint real
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = 'home.html'; // Redireciona para a página inicial
                } else {
                    errorMsg.textContent = 'Credenciais inválidas. Tente novamente.';
                }
            })
            .catch(error => console.error('Erro ao fazer login:', error));
        } else {
            errorMsg.textContent = 'Por favor, preencha todos os campos.';
        }
    });
});
