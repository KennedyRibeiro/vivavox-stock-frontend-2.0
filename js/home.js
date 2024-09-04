document.addEventListener('DOMContentLoaded', () => {
    const addEquipmentForm = document.getElementById('addEquipmentForm');
    const removeEquipmentForm = document.getElementById('removeEquipmentForm');

    addEquipmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const type = document.getElementById('equipmentType').value;
        const condition = document.getElementById('condition').value;
        const quantity = parseInt(document.getElementById('quantity').value, 10);

        fetch('path/to/addEquipment', { // Substitua pelo endpoint real
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type, condition, quantity })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Equipamento adicionado com sucesso!');
                addEquipmentForm.reset();
                // Atualize a interface do usuário aqui, se necessário
            } else {
                alert(data.message || 'Falha ao adicionar equipamento.');
            }
        })
        .catch(error => {
            console.error('Erro ao adicionar equipamento:', error);
            alert('Ocorreu um erro ao adicionar o equipamento. Tente novamente.');
        });
    });

    removeEquipmentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const type = document.getElementById('equipmentTypeRemove').value;
        const condition = document.getElementById('conditionRemove').value;
        const quantity = parseInt(document.getElementById('quantityRemove').value, 10);

        fetch('path/to/removeEquipment', { // Substitua pelo endpoint real
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type, condition, quantity })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Equipamento removido com sucesso!');
                removeEquipmentForm.reset();
                // Atualize a interface do usuário aqui, se necessário
            } else {
                alert(data.message || 'Falha ao remover equipamento.');
            }
        })
        .catch(error => {
            console.error('Erro ao remover equipamento:', error);
            alert('Ocorreu um erro ao remover o equipamento. Tente novamente.');
        });
    });
});