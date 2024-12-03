function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}

document.getElementById('calculate').addEventListener('click',function(){

    let quantPontCom = parseFloat(document.getElementById('quantPontCom').value);

    let valComMil = parseFloat(document.getElementById('valComMil').value);

    let percenBonus = parseFloat(document.getElementById('percenBonus').value);

    let valTotPontCom = parseFloat(document.getElementById('valTotPontCom').value);

    let valComMil2 = parseFloat(document.getElementById('valComMil2').value);

    let percenBonus2 = parseFloat(document.getElementById('percenBonus2').value);

    if (
        quantPontCom < 0 || valComMil < 0 || percenBonus < 0 || valTotPontCom < 0 || valComMil2 < 0 || percenBonus2 < 0 ||
        quantPontCom == 0 || valComMil == 0 || percenBonus == 0 || valTotPontCom == 0 || valComMil2 == 0 || percenBonus2 == 0 
    ){
        mostrarErro("errorquantPontCom", "Todos os valores numéricos válidos devem ser preenchidos .");
        mostrarErro("errorvalTotPontCom", "Todos os valores numéricos válidos devem ser preenchidos .");
        return;
    }

    valTotCom = quantPontCom * valComMil / 1000

    saldoTotMil = (((percenBonus / 100) * quantPontCom) + quantPontCom)

    custoFinalMil = valTotCom / saldoTotMil * 1000

    quantTotPont = valTotPontCom / valComMil2 * 1000

    saldoTotMil2 = (quantTotPont + (quantTotPont * (percenBonus2 / 100)))

    custoFinalMil2 = valTotPontCom / saldoTotMil2 * 1000

    document.getElementById("valTotCom").innerHTML = "R$ " + valTotCom.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("saldoTotMil").innerHTML = saldoTotMil.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoFinalMil").innerHTML = "R$ " + custoFinalMil.toLocaleString("pt-BR", { minimumFractionDigits: 2 }); 
    document.getElementById("quantTotPont").innerHTML = quantTotPont.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("saldoTotMil2").innerHTML = saldoTotMil2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoFinalMil2").innerHTML = "R$ " + custoFinalMil2.toLocaleString("pt-BR", { minimumFractionDigits: 2 }); 

});