document.addEventListener('DOMContentLoaded', () => {
    const inventoryTableBody = document.querySelector('#inventoryTable tbody');

    const loadInventory = () => {
        fetch('path/to/inventory') // Substitua pelo caminho real do arquivo ou endpoint
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na resposta da rede');
                }
                return response.json();
            })
            .then(data => {
                inventoryTableBody.innerHTML = ''; // Limpar tabela existente
                if (Array.isArray(data) && data.length > 0) {
                    data.forEach(item => {
                        // Verifica se o item possui as propriedades esperadas
                        if (item.equipment && item.new !== undefined && item.semiNew !== undefined && item.total !== undefined) {
                            const row = document.createElement('tr');
                            row.innerHTML = `
                                <td>${item.equipment}</td>
                                <td>${item.new}</td>
                                <td>${item.semiNew}</td>
                                <td>${item.total}</td>
                            `;
                            inventoryTableBody.appendChild(row);
                        } else {
                            console.error('Dados inválidos recebidos do servidor:', item);
                        }
                    });
                } else {
                    inventoryTableBody.innerHTML = '<tr><td colspan="4">Nenhum dado disponível</td></tr>';
                }
            })
            .catch(error => {
                console.error('Erro ao carregar dados do estoque:', error);
                inventoryTableBody.innerHTML = '<tr><td colspan="4">Erro ao carregar dados do estoque</td></tr>';
            });
    };

    loadInventory(); // Carregar estoque ao iniciar

    // Atualização periódica a cada 5 minutos (opcional)
    // setInterval(loadInventory, 5 * 60 * 1000);
});