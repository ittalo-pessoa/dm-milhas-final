function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}

document.getElementById("calculate").addEventListener("click", function () {
    let mensalidade = parseFloat(document.getElementById("mensalidade").value); 
    let quantMeses = parseFloat(document.getElementById("quantMeses").value); 
    let quantPontosMes = parseFloat(document.getElementById("quantPontosMes").value); 
    let bonusAdocao = parseFloat(document.getElementById("bonusAdocao").value);
    let bonusTransfClubesBancarios = parseFloat(document.getElementById("bonusTransfClubesBancarios").value); 
    
    
    if (
        isNaN(mensalidade) || 
        isNaN(quantMeses) || 
        isNaN(quantPontosMes) || 
        isNaN(bonusAdocao) || 
        isNaN(bonusTransfClubesBancarios) || 
        mensalidade <= 0 || 
        quantMeses <= 0 || 
        quantPontosMes <= 0 || 
        bonusAdocao <= 0 || 
        bonusTransfClubesBancarios <= 0
    ) {
        document.getElementById('resultadoCustoDoMilheiro').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('resultadoTotalPontosAnoClube').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('resultadoTotalPontosPosTransfBonificada').innerHTML ="Digite todos os valores válidos!";
        document.getElementById('custoFinalDoMilheiro').innerHTML = "Digite todos os valores válidos!";
        return;
    }


    const custoDoMilheiro = (mensalidade * quantMeses) / ((quantPontosMes * quantMeses) + bonusAdocao) * 1000;
    const totalPontosAnoClube = quantMeses * quantPontosMes + bonusAdocao;
    const percentBonusTransfClubesBancarios= bonusTransfClubesBancarios/100
    const totalPontosPosTransfBonificada = totalPontosAnoClube + (percentBonusTransfClubesBancarios * totalPontosAnoClube);
    const custoFinalDoMilheiro = ((mensalidade * quantMeses) / totalPontosPosTransfBonificada) * 1000;

    document.getElementById("resultadoCustoDoMilheiro").innerHTML = "R$ " + custoDoMilheiro.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoTotalPontosAnoClube").innerHTML = totalPontosAnoClube.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoTotalPontosPosTransfBonificada").innerHTML = totalPontosPosTransfBonificada.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoFinalDoMilheiro").innerHTML = "R$ " +  custoFinalDoMilheiro.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
});
