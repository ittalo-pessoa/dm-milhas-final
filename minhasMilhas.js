function mostrarErro(campoId, mensagem) {
  const elementoErro = document.getElementById(campoId);
  elementoErro.textContent = mensagem;
  elementoErro.style.display = "block";
  setTimeout(() => {
      elementoErro.style.display = "none";
    }, 3000); 
}
document.getElementById('calculate').addEventListener('click',function(){

const acumuloLivelo = parseFloat(localStorage.getItem('saldoAposTransf')) || 0;
const custoMedioLivelo = parseFloat(localStorage.getItem('custoMedioDoMilheiroDoLivelo')) || 0;
const acumuloEsfera = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasEs')) || 0;
const custoMedioEsfera = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasEs')) || 0;
const acumuloOu = parseFloat(localStorage.getItem('saldoAposTransfOu')) || 0;
const custoMedioOu = parseFloat(localStorage.getItem('custoMedioDoMilheiroDoLiveloOu')) || 0;
const acumuloSmiles = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasSmiles')) || 0;
const custoMedioSmiles = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasSmiles')) || 0;
const acumuloAzul = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasAzul')) || 0;
const custoMedioAzul = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasAzul')) || 0;
const acumuloLatam = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasLatam')) || 0;
const custoMedioLatam = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasLatam')) || 0;
const acumuloTapMilesGo = parseFloat(localStorage.getItem('saldoAposTransfTapMiles')) || 0;
const custoMedioTapMilesGo = parseFloat(localStorage.getItem('custoMedioDoMilheiroTapMiles')) || 0;
const acumuloIberia = parseFloat(localStorage.getItem('saldoAposUsoDeMilhasIberia')) || 0;
const custoMedioIberia = parseFloat(localStorage.getItem('custoMedioDoMilheiroTodasIberia')) || 0;
let acumuloOutrosProgramas = parseFloat(document.getElementById('custo1').value) || 0;
let custoMedioProgramas = parseFloat(document.getElementById('custo2').value) || 0;


const livelo = acumuloLivelo + custoMedioLivelo;
const esfera = acumuloEsfera + custoMedioEsfera;
const ou = acumuloOu + custoMedioOu;
const smiles = acumuloSmiles + custoMedioSmiles;
const azul = acumuloAzul + custoMedioAzul; 
const latam = acumuloLatam + custoMedioLatam;
const tapMilesGo = acumuloTapMilesGo + custoMedioTapMilesGo;
const iberia = acumuloIberia + custoMedioIberia;
const outrosProgramas = acumuloOutrosProgramas + custoMedioProgramas;
localStorage.setItem('livelo', livelo);
localStorage.setItem('esfera', esfera);
localStorage.setItem('ou', ou);
localStorage.setItem('smiles', smiles);
localStorage.setItem('azul', azul);
localStorage.setItem('latam', latam);
localStorage.setItem('tapMilesGo', tapMilesGo);
localStorage.setItem('iberia', iberia);
localStorage.setItem('outrosProgramas', outrosProgramas);
 

 
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

document.getElementById('acumuloTapMilesGo').innerHTML = "R$ " + acumuloTapMilesGo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('custoMedioTapMilesGo').innerHTML = "R$ " + custoMedioTapMilesGo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });


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


