const form = document.getElementById('formulario');
const inputCampoA = document.getElementById('campoA');
const inputCampoB = document.getElementById('campoB');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const valorCampoA = parseFloat(inputCampoA.value);
    const valorCampoB = parseFloat(inputCampoB.value);

    if (isNaN(valorCampoA) || isNaN(valorCampoB)) {
        alert("Por favor, preencha ambos os campos.");
        return; // Impede o envio do formulário
    }

    // Verificando se A é maior que B
    if (valorCampoA > valorCampoB) {
        alert("Acesso Negado!");
    } else {
        alert("Acesso Concedido!");
    }
});