
function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}

document.getElementById("calculate").addEventListener("click", function () {
    let gastoMensalCartao = parseFloat(document.getElementById("gastoMensalCartao").value); 
    let quantMeses = parseFloat(document.getElementById("quantMeses").value); 
    let cotacaoDolar = parseFloat(document.getElementById("cotacaoDolar").value); 
    let conversorDoCartao = parseFloat(document.getElementById("conversorDoCartao").value);
    let transfBonificada = parseFloat(document.getElementById("transfBonificada").value);  
    let valorCustoMedioMilheiro = parseFloat(document.getElementById("valorCustoMedioMilheiro").value);
    let anuidadeDoCartao= parseFloat(document.getElementById("anuidadeDoCartao").value)
    

    if (
        isNaN(gastoMensalCartao ) || isNaN(quantMeses) || isNaN(cotacaoDolar)||isNaN(conversorDoCartao)  || 
    
        gastoMensalCartao <= 0 || quantMeses <= 0 
        || cotacaoDolar <= 0 || conversorDoCartao <= 0 ||isNaN(transfBonificada )  || isNaN(valorCustoMedioMilheiro)||
        isNaN(anuidadeDoCartao)
        || valorCustoMedioMilheiro <= 0 ||anuidadeDoCartao<=0  ) {
        mostrarErro("errorgastoMensalCartao", "Todos os valores numéricos válidos devem ser preenchidos.");
        mostrarErro("errortransfBonificada", "Todos os valores numéricos válidos devem ser preenchidos.");
        mostrarErro("erroranuidadeDoCartao","Todos os valores numéricos válidos devem ser preenchidos.");
        return;
    }
    const gastoAnual= gastoMensalCartao*quantMeses
    const valorDolar= gastoAnual/cotacaoDolar
    const totalPontos= conversorDoCartao*valorDolar
    document.getElementById("resultadoGastoAnual").innerHTML = "R$ " + gastoAnual.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
   
    document.getElementById("resultadoValorEmDolar").innerHTML = "R$ " + valorDolar.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoTotalDePontos").innerHTML = "R$ " + totalPontos.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    
 
    {
     
    const percentTransfBonificada= transfBonificada/100
    const totalMilhasNoAno=totalPontos+(percentTransfBonificada*totalPontos)
    const valorMilhasNoAno=(0.001*valorCustoMedioMilheiro)*totalMilhasNoAno
    const lucro=valorMilhasNoAno-anuidadeDoCartao

    document.getElementById("resultadoMilhasNoAno").innerHTML = "R$ " + totalMilhasNoAno.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
   
    document.getElementById("resultadovalorMilhasNoAno").innerHTML = "R$ " + valorMilhasNoAno.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoLucro").innerHTML = "R$ " + lucro.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    
   }});      