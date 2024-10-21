function calcularTotais() {
    let totalCusto = 0;
    let totalAcumulo = 0;
    let isValid = true;

    // Selecionar todos os campos de custo e acúmulo
    const custos = document.querySelectorAll(".custo");
    const acumulos = document.querySelectorAll(".acumulo");

    // Limpar status de erro e mensagens
    custos.forEach(input => {
        input.classList.remove('error', 'valid');
        document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`).innerText = '';
    });

    acumulos.forEach(input => {
        input.classList.remove('error', 'valid');
        document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`).innerText = '';
    });

    // Calcular os totais
    custos.forEach(input => {
        const custoValue = parseFloat(input.value) || 0;
        if (custoValue < 0) {
            input.classList.add('error');  // Borda vermelha para negativos
            document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`).innerText = 'Valor não pode ser negativo';
            isValid = false;
        } else {
            input.classList.add('valid'); // Borda branca para válidos
            totalCusto += custoValue;
        }
    });

    acumulos.forEach(input => {
        const acumuloValue = parseFloat(input.value) || 0;
        if (acumuloValue < 0) {
            input.classList.add('error');  // Borda vermelha para negativos
            document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`).innerText = 'Valor não pode ser negativo';
            isValid = false;
        } else {
            input.classList.add('valid'); // Borda branca para válidos
            totalAcumulo += acumuloValue;
        }
    });

    // Atualizar os totais somente se todos os valores forem válidos
    if (isValid) {
        document.getElementById("totalCusto").innerText = totalCusto;
        document.getElementById("totalAcumulo").innerText = totalAcumulo;
    }
}