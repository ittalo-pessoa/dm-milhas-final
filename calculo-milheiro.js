function calcularTotais() {
    // Pegar os valores dos inputs
    let valPointMil = document.getElementById('valPointMil').value;
    let quantiPointMil = document.getElementById('quantiPointMil').value;

    // Substituir vírgula por ponto e garantir formato numérico
    valPointMil = parseFloat(valPointMil.replace(',', '.')) || 0;
    quantiPointMil = parseFloat(quantiPointMil.replace(',', '.')) || 0;

    // Verificar se os inputs são válidos para o cálculo
    if (valPointMil > 0 && quantiPointMil > 0) {
        // Fórmula do custo do milheiro
        let custoMilheiro = (valPointMil / quantiPointMil) * 1000;

        // Formatando o resultado como moeda brasileira (R$)
        let formatado = custoMilheiro.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        // Atualizar o resultado no span
        document.getElementById('resultadoCusMil').textContent = formatado;
    } else {
        // Exibir mensagem de erro
        document.getElementById('resultadoCusMil').textContent = "Digite valores válidos!";
    }
}