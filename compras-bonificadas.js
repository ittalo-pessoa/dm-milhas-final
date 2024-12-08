function calcularTotais() {
    // Captura os valores dos inputs
    let CompraValor = parseFloat(document.getElementById('CompraValor').value);
    let PontosToReal = parseFloat(document.getElementById('PontosToReal').value);
    let DolarValor = parseFloat(document.getElementById('DolarValor').value);
    let FatorPointCartao = parseFloat(document.getElementById('FatorPointCartao').value);
    let TransfBoniCo = parseFloat(document.getElementById('TransfBoniCo').value);
    let TransfBoniCar = parseFloat(document.getElementById('TransfBoniCar').value);
    let ValorCusMedMil = parseFloat(document.getElementById('ValorCusMedMil').value);
    if (
        isNaN(CompraValor) || CompraValor <= 0 || 
    isNaN(PontosToReal) || PontosToReal <= 0 || 
    isNaN(DolarValor) || DolarValor <= 0 || 
    isNaN(FatorPointCartao) || FatorPointCartao <= 0 || 
    isNaN(TransfBoniCo) || TransfBoniCo <= 0 || 
    isNaN(TransfBoniCar) || TransfBoniCar <= 0 || 
    isNaN(ValorCusMedMil) || ValorCusMedMil <= 0 
    ) {
            document.getElementById('resultadoPontosCredi').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('resultadoPontosCard').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('resultadoTotGPontos').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('resultadoTotMilBuy').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('resultadoTotalMilCard').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('resultadoTotGerMil').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('resultadoValorMilAcu').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('resultadoPercentDesconto').innerHTML = "Digite todos os valores válidos!";
            
           
        return;
    }


    // Cálculos dos resultados
    let resultadoPontosCredi = PontosToReal * CompraValor;
    let resultadoPontosCard = (CompraValor / DolarValor) * FatorPointCartao;

    let resultadoTotGPontos = resultadoPontosCredi + resultadoPontosCard;
    let resultadoTotMilBuy = resultadoPontosCredi + (resultadoPontosCredi * (TransfBoniCo / 100));
    let resultadoTotalMilCard = resultadoPontosCard + (resultadoPontosCard * (TransfBoniCar / 100));

    let resultadoTotGerMil = resultadoTotMilBuy + resultadoTotalMilCard;
    let resultadoValorMilAcu = (ValorCusMedMil / 1000) * resultadoTotGerMil;

    let resultadoPercentDesconto = (resultadoValorMilAcu / CompraValor) * 100;

    // Exibe os resultados nos spans correspondentes
    document.getElementById('resultadoPontosCredi').innerText = resultadoPontosCredi.toFixed(2);
    document.getElementById('resultadoPontosCard').innerText = resultadoPontosCard.toFixed(2);
    document.getElementById('resultadoTotGPontos').innerText = resultadoTotGPontos.toFixed(2);
    document.getElementById('resultadoTotMilBuy').innerText = resultadoTotMilBuy.toFixed(2);
    document.getElementById('resultadoTotalMilCard').innerText = resultadoTotalMilCard.toFixed(2);
    document.getElementById('resultadoTotGerMil').innerText = resultadoTotGerMil.toFixed(2);
    document.getElementById('resultadoValorMilAcu').innerText = resultadoValorMilAcu.toFixed(2);
    document.getElementById('resultadoPercentDesconto').innerText = resultadoPercentDesconto.toFixed(2);
}