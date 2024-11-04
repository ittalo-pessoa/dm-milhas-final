
function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById("calculate").addEventListener("click", function () {
    let valorDoBoleto = parseFloat(document.getElementById("valorDoBoleto").value); 
    let taxaCobradaPeloAplicativo = parseFloat(document.getElementById("taxaCobradaPeloAplicativo").value); 
    let valorDoDolar = parseFloat(document.getElementById("valorDoDolar").value); 
    let fatorDeConversaoDoCartao = parseFloat(document.getElementById("fatorDeConversaoDoCartao").value);
    let percentTransfBonificada = parseFloat(document.getElementById("percentTransfBonificada").value); 
     
    let valorDoCustoMedioDoMilheiro = parseFloat(document.getElementById("valorDoCustoMedioDoMilheiro").value); 
    

    if (
        isNaN(valorDoBoleto ) || isNaN(taxaCobradaPeloAplicativo) || isNaN(valorDoDolar)||isNaN(fatorDeConversaoDoCartao)  || 
        isNaN(percentTransfBonificada)||isNaN(valorDoCustoMedioDoMilheiro)||
        valorDoBoleto <= 0 || taxaCobradaPeloAplicativo <= 0 
        || valorDoDolar <= 0 || fatorDeConversaoDoCartao <= 0||percentTransfBonificada<=0
        || valorDoCustoMedioDoMilheiro<=0
    ) {
        mostrarErro("errorvalorDoBoleto", "Todos os valores numéricos válidos devem ser preenchidos.");
        return;
    }
    let percentTaxaCobradaPeloAplicativo=taxaCobradaPeloAplicativo/100
    let valorDaTaxa=percentTaxaCobradaPeloAplicativo*valorDoBoleto
    let valorEmDolar=(valorDoBoleto+valorDaTaxa)/valorDoDolar
    let quantDePontos=fatorDeConversaoDoCartao*valorEmDolar
    let percentualTransfBonificada=percentTransfBonificada/100
    let totalMilhasAposTransf=(percentualTransfBonificada*quantDePontos)+quantDePontos
    let valorDasMilhas=totalMilhasAposTransf*(0.001*valorDoCustoMedioDoMilheiro)
    let resultadoFinal=valorDasMilhas-valorDaTaxa
    let custoDoMilheiroNaCompraIndiretaDeMilhas=valorDaTaxa/totalMilhasAposTransf*1000
    let calculador =valorDasMilhas-valorDaTaxa

    document.getElementById("resultadovalorDaTaxa").innerHTML = "R$ " + valorDaTaxa.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
   
    document.getElementById("resultadoValorEmDolar").innerHTML = "R$ " + valorEmDolar.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoQuantidadeDePontos").innerHTML = "R$ " + quantDePontos.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
   
    document.getElementById("resultadoTotalEmMilhasAposTransf").innerHTML = "R$ " + totalMilhasAposTransf.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadovalorDasMilhas").innerHTML = "R$ " + valorDasMilhas.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
   
    document.getElementById("resultadoresultadoFinal").innerHTML = "R$ " + resultadoFinal.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadocustoDoMilheiroNaCompraIndiretaDasMilhas").innerHTML = "R$ " + custoDoMilheiroNaCompraIndiretaDeMilhas.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    if (calculador < valorDaTaxa) {
        document.getElementById("resultadoanaliseFinalDaOperacao").style.backgroundColor = "rgb(185, 255, 23)";
        
        document.getElementById("resultadoanaliseFinalDaOperacao").innerHTML = "<strong>LUCRO</strong>";
        
    }else{
        document.getElementById("resultadoanaliseFinalDaOperacao").style.backgroundColor = "rgb(255, 111, 67)";
        document.getElementById("resultadoanaliseFinalDaOperacao").innerHTML = "<strong>PREJUÍZO</strong>";
    }
});