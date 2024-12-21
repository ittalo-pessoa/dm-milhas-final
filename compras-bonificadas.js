function calcularTotais() {
    // Captura e converte os valores dos inputs para números
    let CompraValor = parseFloat(document.getElementById('CompraValor').value) || 0;
    let PontosToReal = parseFloat(document.getElementById('PontosToReal').value) || 0;
    let DolarValor = parseFloat(document.getElementById('DolarValor').value) || 0;
    let FatorPointCartao = parseFloat(document.getElementById('FatorPointCartao').value) || 0;
    let TransfBoniCo = parseFloat(document.getElementById('TransfBoniCo').value) || 0;
    let TransfBoniCar = parseFloat(document.getElementById('TransfBoniCar').value) || 0;
    let ValorCusMedMil = parseFloat(document.getElementById('ValorCusMedMil').value) || 0;

    // Validação dos valores
    if (
        CompraValor <= 0 || 
        PontosToReal <= 0 || 
        DolarValor <= 0 || 
        FatorPointCartao <= 0 ||    
        ValorCusMedMil <= 0
    ) {
        // Exibe mensagens de erro se os valores forem inválidos
        document.getElementById('resultadoPontosCredi').innerText = "Digite todos os valores válidos!";
        document.getElementById('resultadoPontosCard').innerText = "Digite todos os valores válidos!";
        document.getElementById('resultadoTotGPontos').innerText = "Digite todos os valores válidos!";
        document.getElementById('resultadoTotMilBuy').innerText = "Digite todos os valores válidos!";
        document.getElementById('resultadoTotalMilCard').innerText = "Digite todos os valores válidos!";
        document.getElementById('resultadoTotGerMil').innerText = "Digite todos os valores válidos!";
        document.getElementById('resultadoValorMilAcu').innerText = "Digite todos os valores válidos!";
        document.getElementById('resultadoPercentDesconto').innerText = "Digite todos os valores válidos!";
        return;
    }

    // Cálculos (todas as variáveis já estão convertidas para números)
    let resultadoPontosCredi = PontosToReal * CompraValor;
    let resultadoPontosCard = (CompraValor / DolarValor) * FatorPointCartao;

    let resultadoTotGPontos = resultadoPontosCredi + resultadoPontosCard;
    let resultadoTotMilBuy = resultadoPontosCredi + (resultadoPontosCredi * (TransfBoniCo / 100));
    let resultadoTotalMilCard = resultadoPontosCard + (resultadoPontosCard * (TransfBoniCar / 100));

    let resultadoTotGerMil = resultadoTotMilBuy + resultadoTotalMilCard;
    let resultadoValorMilAcu = (ValorCusMedMil / 1000) * resultadoTotGerMil;

    let resultadoPercentDesconto = (resultadoValorMilAcu / CompraValor) * 100;

    // Exibe os resultados nos spans correspondentes (já formatados)
    document.getElementById('resultadoPontosCredi').innerText = resultadoPontosCredi.toFixed(2);
    document.getElementById('resultadoPontosCard').innerText = resultadoPontosCard.toFixed(2);
    document.getElementById('resultadoTotGPontos').innerText = resultadoTotGPontos.toFixed(2);
    document.getElementById('resultadoTotMilBuy').innerText = resultadoTotMilBuy.toFixed(2);
    document.getElementById('resultadoTotalMilCard').innerText = resultadoTotalMilCard.toFixed(2);
    document.getElementById('resultadoTotGerMil').innerText = resultadoTotGerMil.toFixed(2);
    document.getElementById('resultadoValorMilAcu').innerText ="R$ " + resultadoValorMilAcu.toFixed(2);
    document.getElementById('resultadoPercentDesconto').innerText = resultadoPercentDesconto.toFixed(2)+"%";
}   