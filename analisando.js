document.getElementById("calculate").addEventListener("click", function () {
    
    const boleto = parseFloat(document.getElementById("boleto").value); 
    const taxa = parseFloat(document.getElementById("taxa").value); 
    const dolar = parseFloat(document.getElementById("dolar").value); 
    const fator = parseFloat(document.getElementById("fator").value); 
    const percentual = parseFloat(document.getElementById("percentual").value); 
    const custoMedio = parseFloat(document.getElementById("custoMedio").value);
    
    if (isNaN(boleto) || isNaN(taxa) || isNaN(dolar) || isNaN(fator) || isNaN(percentual)|| isNaN(custoMedio)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }
    if (boleto<=0||taxa<=0||dolar<=0||fator<=0||percentual<=0||custoMedio<=0){
        alert("Todos os números tem que ser maior do que zero");
        return;

    }
    const percentTaxa= taxa/100
    const valorDaTaxa=percentTaxa*boleto;
    const valorEmDolar=(boleto+valorDaTaxa)/dolar;
    const percentCalc= percentual/100
    const quantPontos=fator*valorEmDolar;
    const totalMilhasAposTransf=(percentCalc*quantPontos)+quantPontos;
    const calcMilhas=0.001*custoMedio
    const valorMilhas=totalMilhasAposTransf*calcMilhas;
    const resultadoFinal=valorMilhas-valorDaTaxa;
    const custoMilhasCompraIndireta= valorDaTaxa/totalMilhasAposTransf*1000;

    document.getElementById("custoTaxa").innerHTML = "R$ " + valorDaTaxa.toFixed(2);
    document.getElementById("custoDolar").innerHTML = valorEmDolar.toFixed(2);
    document.getElementById("custoPontos").innerHTML = quantPontos.toFixed(2);
    document.getElementById("custoTransferencia").innerHTML = "R$ " + totalMilhasAposTransf.toFixed(2);
    document.getElementById("valorMilhas").innerHTML = "R$ " + valorMilhas.toFixed(2);
    document.getElementById("resultadoFinal").innerHTML = resultadoFinal.toFixed(2);
    document.getElementById("custoCompraIndireta").innerHTML = custoMilhasCompraIndireta.toFixed(2);
    //Colocar tela de aviso vermelha,não um simples alert
    //Parte de input na esquerda e saída na direita

});;
            