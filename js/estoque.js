document.addEventListener('DOMContentLoaded', () => {
    const inventoryTableBody = document.querySelector('#inventoryTable tbody');

    const loadInventory = () => {
        fetch('path/to/inventory') // Substitua pelo caminho real do arquivo ou endpoint
            .then(response => response.json())
            .then(data => {
                inventoryTableBody.innerHTML = ''; // Limpar tabela existente
                data.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.equipment}</td>
                        <td>${item.new}</td>
                        <td>${item.semiNew}</td>
                        <td>${item.total}</td>
                    `;
                    inventoryTableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Erro ao carregar dados do estoque:', error));
    };

    loadInventory(); // Carregar estoque ao iniciar
});
