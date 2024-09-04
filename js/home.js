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
        .then(() => {
            alert('Equipamento adicionado com sucesso!');
            addEquipmentForm.reset();
        })
        .catch(error => console.error('Erro ao adicionar equipamento:', error));
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
        .then(() => {
            alert('Equipamento removido com sucesso!');
            removeEquipmentForm.reset();
        })
        .catch(error => console.error('Erro ao remover equipamento:', error));
    });
});
