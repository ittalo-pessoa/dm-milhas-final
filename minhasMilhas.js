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
    const acumuloEsfera = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasEs'));
    const custoMedioEsfera = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasEs'));
    const acumuloOu = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasOu'));
    const custoMedioOu = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasOu'));
    const acumuloSmiles = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasSmiles'));
    const custoMedioSmiles = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasSmiles'));
    const acumuloAzul = parseFloat(localStorage.getItem('saldoAposUsoDeMilhas'));
    const custoMedioAzul = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodas'));
    const acumuloLatam = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasLatam'));
    const custoMedioLatam = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasLatam'));
    const acumuloTapMilesGo = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasTapMilesGo'));
    const custoMedioTapMilesGo = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasTapMilesGo'));
    const acumuloIberia = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasIberia'));
    const custoMedioIberia = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasIberia'));
    let acumuloOutrosProgramas = parseFloat(document.getElementById('custo1').value);
    let custoMedioProgramas = parseFloat(document.getElementById('custo2').value);
   

   
    document.getElementById('acumuloLivelo').innerHTML = "R$ " + acumuloLivelo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('custoMedioLivelo').innerHTML = "R$ " + custoMedioLivelo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });


  document.getElementById('acumuloEsfera').innerHTML = "R$ " + acumuloEsfera.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('custoMedioEsfera').innerHTML = "R$ " + custoMedioEsfera.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('acumuloOutros').innerHTML = "R$ " + acumuloOu.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('custoMedioOutros').innerHTML = "R$ " + custoMedioOu.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('acumuloSmiles').innerHTML = "R$ " + acumuloSmiles.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('custoMedioSmiles').innerHTML = "R$ " + custoMedioSmiles.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
   
  document.getElementById('acumuloAzul').innerHTML = "R$ " + acumuloAzul.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('custoMedioAzul').innerHTML = "R$ " + custoMedioAzul.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('acumuloLatamPass').innerHTML = "R$ " + acumuloLatam.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('custoMedioLatamPass').innerHTML = "R$ " + custoMedioLatam.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('acumuloLatamPass').innerHTML = "R$ " + acumuloLatam.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('custoMedioLatamPass').innerHTML = "R$ " + custoMedioLatam.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  document.getElementById('acumuloIberiaPlus').innerHTML = "R$ " + acumuloIberia.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('custoMedioIberiaPlus').innerHTML = "R$ " + custoMedioIberia.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const calc1=acumuloLivelo+acumuloEsfera+acumuloOu+acumuloSmiles+acumuloAzul+acumuloLatam+acumuloIberia+acumuloTapMilesGo
  +acumuloOutrosProgramas
  const calc2=custoMedioLivelo+custoMedioEsfera+custoMedioOu+custoMedioSmiles+custoMedioAzul+custoMedioLatam+
  custoMedioProgramas+custoMedioTapMilesGo

  document.getElementById('resultadoAcumuloTotal').innerHTML = "R$ " + calc1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('resultadoCustoMedio').innerHTML = "R$ " + calc2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
   
   




 


});

