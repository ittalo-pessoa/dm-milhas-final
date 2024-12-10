function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById("calculate").addEventListener("click", function () {
    let precoPagante = parseFloat(document.getElementById("precoPagante1").value); 
    let pontAcumulo = parseFloat(document.getElementById("pontAcumulo").value); 
    let transfBonificada = parseFloat(document.getElementById("transfBonificada").value); 
    let valorMedioMilheiro = parseFloat(document.getElementById("valorMedioMilheiro").value);

    if (
        isNaN(precoPagante) || isNaN(pontAcumulo) || isNaN(transfBonificada) || isNaN(valorMedioMilheiro) ||
        transfBonificada <= 0 || valorMedioMilheiro <= 0 
        || precoPagante <= 0 ||  pontAcumulo <= 0 
    ) {
            document.getElementById('resultadoDesconto').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('resultadoDesconto2').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('resultadoDesconto3').innerHTML ="Digite todos os valores válidos!";
           
        return;
    }

    let percentTransfBonificada = transfBonificada / 100;
    let descontoIndireto = (pontAcumulo + (pontAcumulo * percentTransfBonificada)) * valorMedioMilheiro / 1000;
    let custoFinalHotel = precoPagante - descontoIndireto;
    let totalPontosMilhas = (pontAcumulo + (pontAcumulo * percentTransfBonificada));

    document.getElementById("resultadoDesconto").innerHTML = "R$ " + descontoIndireto.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoDesconto2").innerHTML = "R$ " + custoFinalHotel.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoDesconto3").innerHTML = totalPontosMilhas.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

    
});
document.getElementById("calculate2").addEventListener("click", function () {
    let valorHospedagemMilhas = parseFloat(document.getElementById("valorHospedagemMilhas").value); 
    let custoMilheiro = parseFloat(document.getElementById("custoMilheiro").value); 
    let precoPagante2 = parseFloat(document.getElementById("precoPagante2").value); 

    if (
        isNaN(valorHospedagemMilhas) || isNaN(custoMilheiro) || isNaN(precoPagante2)  ||
        valorHospedagemMilhas <= 0 || custoMilheiro <= 0 
        || precoPagante2 <= 0
    ) {
        document.getElementById('resultadoHospedagemMilhas1').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('resultadoMelhorOpcao').innerHTML = "Digite todos os valores válidos!";
        return;
    }

    const custoHospedagemPagandoComMilhas = valorHospedagemMilhas*custoMilheiro / 1000;
   

    document.getElementById("resultadoHospedagemMilhas1").innerHTML = "R$ " + custoHospedagemPagandoComMilhas.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    if (precoPagante2 < custoHospedagemPagandoComMilhas) {
        document.getElementById("resultadoMelhorOpcao").innerHTML = "PAGANTE";
    } else {
        document.getElementById("resultadoMelhorOpcao").innerHTML = "MILHAS";
    }

    
});
document.getElementById("calculate3").addEventListener("click", function () {
    let valorHospedagemReais = parseFloat(document.getElementById("valorHospedagemReais").value); 
    let quantPontosAll = parseFloat(document.getElementById("quantPontosAll").value); 
    let milhasGerarPontosAll = parseFloat(document.getElementById("milhasGerarPontosAll").value); 
    let valorMilheiro = parseFloat(document.getElementById("valorMilheiro").value);

    if (
        isNaN(valorHospedagemReais) || isNaN(quantPontosAll) || isNaN(milhasGerarPontosAll)||isNaN(valorMilheiro)  ||
        valorHospedagemReais <= 0 || quantPontosAll <= 0 
        || milhasGerarPontosAll <= 0 || valorMilheiro <= 0
    ) {
        document.getElementById('percentEconomia').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('hospedagemMilhasAll').innerHTML = "Digite todos os valores válidos!";
        return;
    }

    const custodaHospedagemEmMilhasAll = milhasGerarPontosAll*valorMilheiro / 1000;
    const percentEconomiaUsandoPontosAll = (100-((custodaHospedagemEmMilhasAll/valorHospedagemReais)*100))
   

    document.getElementById("hospedagemMilhasAll").innerHTML = "R$ " + custodaHospedagemEmMilhasAll.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
   
    document.getElementById("percentEconomia").innerHTML = percentEconomiaUsandoPontosAll.toLocaleString("pt-BR", { minimumFractionDigits: 2 })+"%";
    

    
});
document.getElementById("calculate4").addEventListener("click", function () {
    let paganteSemAcumulo = parseFloat(document.getElementById("paganteSemAcumulo").value); 
    let paganteComAcumuloLivelo = parseFloat(document.getElementById("paganteComAcumuloLivelo").value); 
    let paganteComAcumuloEsfera = parseFloat(document.getElementById("paganteComAcumuloEsfera").value); 
    let paganteComAcumuloSmiles = parseFloat(document.getElementById("paganteComAcumuloSmiles").value);
    let paganteComAcumuloAzul = parseFloat(document.getElementById("paganteComAcumuloAzul").value); 
    let paganteComAcumuloLatamPass = parseFloat(document.getElementById("paganteComAcumuloLatamPass").value);
    let pagandoComMilhasSmiles = parseFloat(document.getElementById("pagandoComMilhasSmiles").value); 
    let pagandoComMilhasAZUL = parseFloat(document.getElementById("pagandoComMilhasAZUL").value); 
    let paganteComPontosALL = parseFloat(document.getElementById("pagandoComPontosALL").value);

    if (
        isNaN(paganteSemAcumulo ) || isNaN(paganteComAcumuloLivelo) || isNaN(paganteComAcumuloEsfera)||isNaN(paganteComAcumuloSmiles)  || 
        isNaN(paganteComAcumuloAzul)||isNaN(paganteComAcumuloLatamPass)||isNaN(pagandoComMilhasSmiles)||isNaN(pagandoComMilhasAZUL)||isNaN(paganteComPontosALL)||
        paganteSemAcumulo <= 0 || paganteComAcumuloLivelo <= 0 
        || paganteComAcumuloEsfera <= 0 || paganteComAcumuloSmiles <= 0||paganteComAcumuloAzul<=0||paganteComAcumuloLatamPass<=0|| pagandoComMilhasSmiles<=0
        || pagandoComMilhasAZUL<=0||paganteComPontosALL<=0
    ) {
        document.getElementById('resultadoVantajoso').innerHTML ="Digite todos os valores válidos!";
        return;
    }
    let menorValor = Math.min(
        paganteSemAcumulo, 
        paganteComAcumuloLivelo, 
        paganteComAcumuloEsfera, 
        paganteComAcumuloSmiles, 
        paganteComAcumuloAzul, 
        paganteComAcumuloLatamPass, 
        pagandoComMilhasSmiles, 
        pagandoComMilhasAZUL, 
        paganteComPontosALL
    );
    
    if (menorValor === paganteSemAcumulo) {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANTE SEM ACÚMULO";
    } else if (menorValor === paganteComAcumuloLivelo) {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANTE COM ACÚMULO NO LIVELO";
    } else if (menorValor === paganteComAcumuloEsfera) {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANTE COM ACÚMULO NO ESFERA";
    } else if (menorValor === paganteComAcumuloSmiles) {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANTE COM ACÚMULO NO SMILES";
    } else if (menorValor === paganteComAcumuloAzul) {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANTE COM ACÚMULO NO AZUL";
    } else if (menorValor === paganteComAcumuloLatamPass) {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANTE COM ACÚMULO NO LATAM PASS";
    } else if (menorValor === pagandoComMilhasSmiles) {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANDO COM MILHAS SMILES";
    } else if (menorValor === pagandoComMilhasAZUL) {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANDO COM MILHAS AZUL";
    } else {
        document.getElementById("resultadoVantajoso").innerHTML = "PAGANDO COM PONTOS ALL";
    }
});    