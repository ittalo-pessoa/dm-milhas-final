function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById("calculate").addEventListener("click", function () {
    let mensalidade1Plano = parseFloat(document.getElementById("mensalidade1Plano").value); 
    let milhas1Plano = parseFloat(document.getElementById("milhas1Plano").value); 
    let quantMeses1Plano = parseFloat(document.getElementById("quantMeses1Plano").value); 
    let bonus1Plano = parseFloat(document.getElementById("bonus1Plano").value);
    let mensalidade2Plano = parseFloat(document.getElementById("mensalidade2Plano").value); 
    let milhas2Plano = parseFloat(document.getElementById("milhas2Plano").value); 
    let quantMeses2plano = parseFloat(document.getElementById("quantMeses2plano").value); 
    let bonus2Plano = parseFloat(document.getElementById("bonus2Plano").value);


    if (
        isNaN(mensalidade1Plano) || isNaN(milhas1Plano) || isNaN(quantMeses1Plano) || isNaN(bonus1Plano) ||
        isNaN(mensalidade2Plano) || isNaN(milhas2Plano) || isNaN(quantMeses2plano) || isNaN(bonus2Plano) ||
        mensalidade1Plano <= 0 || milhas1Plano <= 0 
        || quantMeses1Plano <= 0 ||  bonus1Plano <= 0 || 
        mensalidade2Plano <= 0 || milhas2Plano <= 0 
        || quantMeses2plano <= 0 ||  bonus2Plano  < 0 
    ) {
        document.getElementById('resultadoAnuidade').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('resultadoPontosMilhasAno').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('resultadoCustoMilheiro').innerHTML ="Digite todos os valores válidos!";
        return;
    }

    let anuidadeDosPlanos = (mensalidade1Plano*quantMeses1Plano)+(mensalidade2Plano*quantMeses2plano);
    let totalPontosMilhasAno = (milhas1Plano*quantMeses1Plano)+bonus1Plano+(milhas2Plano*quantMeses2plano)+bonus2Plano;
    let custoDoMilheiro = (anuidadeDosPlanos/totalPontosMilhasAno)*1000;

    document.getElementById("resultadoAnuidade").innerHTML = "R$ " + anuidadeDosPlanos.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoPontosMilhasAno").innerHTML = totalPontosMilhasAno.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("resultadoCustoMilheiro").innerHTML = "R$ " + custoDoMilheiro.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

    
});