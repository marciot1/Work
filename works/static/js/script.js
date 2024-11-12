document.getElementById('backButton').addEventListener('click', function() {
    alert('Back button clicked');
});

document.getElementById('registerButton').addEventListener('click', function() {
    const status = document.getElementById('statusSelect').value;
    const description = document.getElementById('description').value;

    if (status === "") {
        alert('Por favor, selecione um status.');
        return;
    }

    if (description.trim() === "") {
        alert('Por favor, insira uma descrição.');
        return;
    }

    alert('Tarefa registrada com sucesso!');
});