function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000); 
}
document.getElementById('calculate').addEventListener('click',function(){


    const acumuloLivelo = parseFloat(localStorage.getItem('saldoAposTransf'));
    const custoMedioLivelo = parseFloat(localStorage.getItem('custoMedioDoMilheiroDoLivelo'));
    const acumuloAzul = parseFloat(localStorage.getItem('saldoAposUsoDeMilhas'));
    const custoMedioAzul = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodas'));
    prompt(custoMedioLivelo)

    if (
        custoJan1 == 0 && acumuloJan1 == 0 &&
        custoFev1 == 0 && acumuloFev1 == 0 &&
        custoMar1 == 0 && acumuloMar1 == 0 &&
        custoAbr1 == 0 && acumuloAbr1 == 0 &&
        custoMai1 == 0 && acumuloMai1 == 0 &&
        custoJun1 == 0 && acumuloJun1 == 0 &&
        custoJul1 == 0 && acumuloJul1 == 0 &&
        custoAgo1 == 0 && acumuloAgo1 == 0 &&
        custoSet1 == 0 && acumuloSet1 == 0 &&
        custoOut1 == 0 && acumuloOut1 == 0 &&
        custoNov1 == 0 && acumuloNov1 == 0 &&
        custoDez1 == 0 && acumuloDez1 == 0||custoJan1 < 0 || acumuloJan1 < 0 ||
        custoFev1 < 0 || acumuloFev1 < 0 ||
        custoMar1 < 0 || acumuloMar1 < 0 ||
        custoAbr1 < 0 || acumuloAbr1 < 0 ||
        custoMai1 < 0 || acumuloMai1 < 0 ||
        custoJun1 < 0 || acumuloJun1 < 0 ||
        custoJul1 < 0 || acumuloJul1 < 0 ||
        custoAgo1 < 0 || acumuloAgo1 < 0 ||
        custoSet1 < 0 || acumuloSet1 < 0 ||
        custoOut1 < 0 || acumuloOut1 < 0 ||
        custoNov1 < 0 || acumuloNov1 < 0 ||
        custoDez1 < 0 || acumuloDez1 < 0
    ) 
    
     {
        mostrarErro("errorCustoJan", "Todos os valores numéricos válidos devem ser preenchidos.");
        mostrarErro("errorCustoJul", "Todos os valores numéricos válidos devem ser preenchidos.");
        return;
    }
    


    const totalCusto1 = custoJan1 + custoFev1 + custoMar1 + custoAbr1 + custoMai1 + custoJun1 + custoJul1 + custoAgo1 + custoSet1 + custoOut1 + custoNov1 + custoDez1;
    const totalAcumulo1 = acumuloJan1 + acumuloFev1 + acumuloMar1 + acumuloAbr1 + acumuloMai1 + acumuloJun1 + acumuloJul1 + acumuloAgo1 + acumuloSet1 + acumuloOut1 +
     acumuloNov1 + acumuloDez1;
    const acumuloAnual= totalCusto1/totalAcumulo1*1000;

    document.getElementById('totalCusto1').innerHTML = "R$ " + totalCusto1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('totalAcumulo1').innerHTML = "R$ " + totalAcumulo1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('acumuloAnual1').innerHTML = "R$ " + acumuloAnual.toLocaleString("pt-BR", {maximumFractionDigits:2, minimumFractionDigits: 2 });

   




 


});

