function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById("calculate").addEventListener("click", function () {
    let percentProgramaAereo1 = parseFloat(document.getElementById("percentProgramaAereo1").value); 
    let percentPromocaoLivelo1 = parseFloat(document.getElementById("percentPromocaoLivelo1").value); 
    let pontosTransf1 = parseFloat(document.getElementById("pontosTransf1").value); 
    let transfRetornoLivelo = parseFloat(document.getElementById("transfRetornoLivelo").value);
    let custoDeCompraMilheiroLivelo1 = parseFloat(document.getElementById("custoDeCompraMilheiroLivelo1").value);

    if (
        isNaN(percentProgramaAereo1) || isNaN(percentPromocaoLivelo1) || isNaN(pontosTransf1) || isNaN(transfRetornoLivelo) || isNaN(custoDeCompraMilheiroLivelo1) ||
        percentProgramaAereo1 <= 0 || percentPromocaoLivelo1 <= 0 || pontosTransf1 <= 0 || transfRetornoLivelo <= 0 || custoDeCompraMilheiroLivelo1 <= 0 
    ) {
            document.getElementById('saidaProgramaAereo1').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('retornoLivelo1').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('bonusFinalProgramaAereo1').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('saldoBonusTransfLivelo1').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('saldoFinalMilhas1').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('custoTotalDosPontosCompradosNoLivelo1').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('custoMedioDoMilheiro1').innerHTML ="Digite todos os valores válidos!";
           
        return;
    }

    let saidaProgramaAereo1 = pontosTransf1+((percentProgramaAereo1/100)+((percentProgramaAereo1/100)*pontosTransf1));
    let retornoLivelo1 = (percentPromocaoLivelo1/100)*pontosTransf1;
    let bonusFinalProgramaAereo1 = ((saidaProgramaAereo1*100)/(pontosTransf1-retornoLivelo1)-100);
    

    document.getElementById("saidaProgramaAereo1").innerHTML = saidaProgramaAereo1.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("retornoLivelo1").innerHTML =  retornoLivelo1.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("bonusFinalProgramaAereo1").innerHTML = bonusFinalProgramaAereo1.toLocaleString("pt-BR", { minimumFractionDigits: 2 })+"%";
    let saldoBonusTransfLivelo1 = retornoLivelo1+((transfRetornoLivelo/100)*retornoLivelo1);
    let saldoFinalMilhas1 = saidaProgramaAereo1+saldoBonusTransfLivelo1;
    document.getElementById("saldoBonusTransfLivelo1").innerHTML = saldoBonusTransfLivelo1.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("saldoFinalMilhas1").innerHTML =  saldoFinalMilhas1.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    let custoTotalDosPontosCompradosNoLivelo1 = custoDeCompraMilheiroLivelo1*pontosTransf1/1000;
    let custoMedioDoMilheiro1 = (custoTotalDosPontosCompradosNoLivelo1/saldoFinalMilhas1)*1000;
    document.getElementById("custoTotalDosPontosCompradosNoLivelo1").innerHTML = custoTotalDosPontosCompradosNoLivelo1.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoMedioDoMilheiro1").innerHTML = "R$" + custoMedioDoMilheiro1.toLocaleString("pt-BR", { minimumFractionDigits: 2 });


    
});
document.getElementById("calculate2").addEventListener("click", function () {
    let percentProgramaAereo2 = parseFloat(document.getElementById("percentProgramaAereo2").value); 
    let percentPromocaoLivelo2 = parseFloat(document.getElementById("percentPromocaoLivelo2").value); 
    let pontosTransf2 = parseFloat(document.getElementById("pontosTransf2").value);
    let percentProgramaAereo22 = parseFloat(document.getElementById("percentProgramaAereo2").value); 
    let percentPromocaoLivelo22 = parseFloat(document.getElementById("percentPromocaoLivelo2").value); 
    let pontosTransf22 = parseFloat(document.getElementById("pontosTransf22").value);
    let custoDeCompraMilheiroLivelo2=parseFloat(document.getElementById("custoDeCompraMilheiroLivelo2").value);
    

    if (
        isNaN(percentProgramaAereo2) || isNaN(percentPromocaoLivelo2) || isNaN(pontosTransf2) || isNaN(percentProgramaAereo22) || isNaN(percentPromocaoLivelo22) || isNaN(pontosTransf22) || isNaN(custoDeCompraMilheiroLivelo2) ||
        percentProgramaAereo2 <= 0 || percentPromocaoLivelo2 <= 0 || pontosTransf2 <= 0 || percentProgramaAereo22 <= 0 || percentPromocaoLivelo22 <= 0 || pontosTransf22 <= 0 || custoDeCompraMilheiroLivelo2 <= 0
    ) {
            document.getElementById('saidaProgramaAereo2').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('retornoLivelo2').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('bonusFinalProgramaAereo2').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('saidaProgramaAereo22').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('retornoLivelo22').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('bonusFinalProgramaAereo22').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('custoTotalDosPontosCompradosNoLivelo2').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('custoMedioDoMilheiroAereo2').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('custoMedioDoMilheiroLivelo2').innerHTML ="Digite todos os valores válidos!";
           
        return;
    }







    let saidaProgramaAereo2 = pontosTransf2+((percentProgramaAereo2/100)+((percentProgramaAereo2/100)*pontosTransf2));
    let retornoLivelo2 = (percentPromocaoLivelo2/100)*pontosTransf2;
    let bonusFinalProgramaAereo2 = ((saidaProgramaAereo2*100)/(pontosTransf2-retornoLivelo2)-100);
    document.getElementById("saidaProgramaAereo2").innerHTML = saidaProgramaAereo2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("retornoLivelo2").innerHTML =  retornoLivelo2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("bonusFinalProgramaAereo2").innerHTML = bonusFinalProgramaAereo2.toLocaleString("pt-BR", { minimumFractionDigits: 2 })+"%";
    let saidaProgramaAereo22 = pontosTransf22+((percentProgramaAereo22/100)*pontosTransf22);
    let retornoLivelo22 = (percentPromocaoLivelo22/100)*pontosTransf22;
    let bonusFinalProgramaAereo22 = ((saidaProgramaAereo22*100)/(pontosTransf22-retornoLivelo22)-100);
    document.getElementById("saidaProgramaAereo22").innerHTML = saidaProgramaAereo22.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("retornoLivelo22").innerHTML =  retornoLivelo22.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("bonusFinalProgramaAereo22").innerHTML = bonusFinalProgramaAereo22.toLocaleString("pt-BR", { minimumFractionDigits: 2 })+"%";
    let custoTotalDosPontosCompradosNoLivelo2 = (custoDeCompraMilheiroLivelo2*pontosTransf2)/1000;
    let custoMedioDoMilheiroAereo2 = (custoTotalDosPontosCompradosNoLivelo2/(saidaProgramaAereo2+saidaProgramaAereo22))*1000;
    let custoMedioDoMilheiroLivelo2 = (custoTotalDosPontosCompradosNoLivelo2/(pontosTransf2+retornoLivelo22))*1000;
    document.getElementById("custoTotalDosPontosCompradosNoLivelo2").innerHTML = custoTotalDosPontosCompradosNoLivelo2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoMedioDoMilheiroAereo2").innerHTML = "R$" +  custoMedioDoMilheiroAereo2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoMedioDoMilheiroLivelo2").innerHTML = "R$" + custoMedioDoMilheiroLivelo2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  

  

    
});
document.getElementById("calculate3").addEventListener("click", function () {
    let percentProgramaAereo3 = parseFloat(document.getElementById("percentProgramaAereo3").value); 
    let percentPromocaoLivelo3 = parseFloat(document.getElementById("percentPromocaoLivelo3").value); 
    let pontosTransf3 = parseFloat(document.getElementById("pontosTransf3").value);
    let custoDeCompraMilheiroLivelo3 = parseFloat(document.getElementById("custoDeCompraMilheiroLivelo3").value);



    if (
        isNaN(percentProgramaAereo3) || isNaN(percentPromocaoLivelo3) || isNaN(pontosTransf3) || isNaN(custoDeCompraMilheiroLivelo3) ||
        percentProgramaAereo3 <= 0 || percentPromocaoLivelo3 <= 0 || pontosTransf3 <= 0 || custoDeCompraMilheiroLivelo3 <= 0
    ) {
            document.getElementById('saidaProgramaAereo3').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('retornoLivelo3').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('bonusFinalProgramaAereo3').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('custoTotalDosPontosCompradosNoLivelo3').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('custoMedioDoMilheiroAereo3').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('custoMedioDoMilheiroLivelo3').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('saldo').innerHTML ="Digite todos os valores válidos!";
           
        return;
    }

    let saidaProgramaAereo3 = pontosTransf3+((percentProgramaAereo3/100)+((percentProgramaAereo3/100)*pontosTransf3));
    let retornoLivelo3 = (percentPromocaoLivelo3/100)*pontosTransf3;
    let saldoNoLivelo = retornoLivelo3 ;
    let bonusFinalProgramaAereo3 = ((saidaProgramaAereo3*100)/(pontosTransf3-retornoLivelo3)-100);
    document.getElementById("saidaProgramaAereo3").innerHTML = saidaProgramaAereo3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("retornoLivelo3").innerHTML =  retornoLivelo3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("saldo").innerHTML =  retornoLivelo3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("bonusFinalProgramaAereo3").innerHTML = bonusFinalProgramaAereo3.toLocaleString("pt-BR", { minimumFractionDigits: 2 })+"%";
    let custoTotalDosPontosCompradosNoLivelo3 = (custoDeCompraMilheiroLivelo3*pontosTransf3)/1000;
    let custoMedioDoMilheiroAereo3 = (custoTotalDosPontosCompradosNoLivelo3/saidaProgramaAereo3)*1000;
    let custoMedioDoMilheiroLivelo3 = (custoTotalDosPontosCompradosNoLivelo3/(pontosTransf3+retornoLivelo3))*1000;
    document.getElementById("custoTotalDosPontosCompradosNoLivelo3").innerHTML = custoTotalDosPontosCompradosNoLivelo3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoMedioDoMilheiroAereo3").innerHTML = "R$" +  custoMedioDoMilheiroAereo3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoMedioDoMilheiroLivelo3").innerHTML = "R$" + custoMedioDoMilheiroLivelo3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    

    
});
