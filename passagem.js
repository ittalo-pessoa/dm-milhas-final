function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById("calculate").addEventListener("click", function () {
    let passagemMilhas = parseFloat(document.getElementById("passagemMilhas").value); 
    let taxaEmbarque = parseFloat(document.getElementById("taxaEmbarque").value); 
    let custoMilheiroOuMedio = parseFloat(document.getElementById("custoMilheiroOuMedio").value); 
    let valorPassagemDinheiro = parseFloat(document.getElementById("valorPassagemDinheiro").value); 
    


    if (
        isNaN(passagemMilhas) || isNaN(taxaEmbarque) || isNaN(custoMilheiroOuMedio) ||
        isNaN(valorPassagemDinheiro)   ||
        passagemMilhas <= 0 || taxaEmbarque <= 0 
        || custoMilheiroOuMedio <= 0 ||  
        valorPassagemDinheiro <= 0 
    ) {
        mostrarErro("errorpassagemMilhas", "Todos os valores numéricos válidos devem ser preenchidos.");
        return;
    }

    let custoReaisDaPassagemComMilhas = (passagemMilhas*custoMilheiroOuMedio/1000)+taxaEmbarque;
    let resultadoEmitindoComMilhas = valorPassagemDinheiro-custoReaisDaPassagemComMilhas;
    

    document.getElementById("resultadoCustoReaisMilhas").innerHTML = "R$ " + custoReaisDaPassagemComMilhas.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoEmitidoComMilhas").innerHTML = "R$ " + resultadoEmitindoComMilhas.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
   if(resultadoEmitindoComMilhas>0){
    document.getElementById("resultadoVantagem").innerHTML = "VANTAJOSO EMITIR COM MILHAS";

   }
   else{
    document.getElementById("resultadoVantagem").innerHTML = "VANTAJOSO EMITIR PAGANTE";
   }

    
});