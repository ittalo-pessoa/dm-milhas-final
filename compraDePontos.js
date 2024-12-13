function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}

document.getElementById('calculate').addEventListener('click', function () {

    let quantPontCom = parseFloat(document.getElementById('quantPontCom').value) || 0;
    let valComMil = parseFloat(document.getElementById('valComMil').value) || 0;
    let percenBonus = parseFloat(document.getElementById('percenBonus').value) || 0;
    let valTotPontCom = parseFloat(document.getElementById('valTotPontCom').value) || 0;
    let valComMil2 = parseFloat(document.getElementById('valComMil2').value) || 0;
    let percenBonus2 = parseFloat(document.getElementById('percenBonus2').value) || 0;

    if (
        quantPontCom < 0 || valComMil < 0 || percenBonus < 0 || valTotPontCom < 0 || valComMil2 < 0 || percenBonus2 < 0 ||
        quantPontCom === 0 || valComMil === 0 || percenBonus === 0 || valTotPontCom === 0 || valComMil2 === 0 || percenBonus2 === 0
    ) {
        document.getElementById('valTotCom').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('saldoTotMil').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('custoFinalMil').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('quantTotPont').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('saldoTotMil2').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('custoFinalMil2').innerHTML = "Digite todos os valores válidos!";
        return;
    }

    let valTotCom = (quantPontCom * valComMil) / 1000;
    let saldoTotMil = ((percenBonus / 100) * quantPontCom) + quantPontCom;
    let custoFinalMil = (valTotCom / saldoTotMil) * 1000;
    let quantTotPont = (valTotPontCom / valComMil2) * 1000;
    let saldoTotMil2 = quantTotPont + (quantTotPont * (percenBonus2 / 100));
    let custoFinalMil2 = (valTotPontCom / saldoTotMil2) * 1000;

    document.getElementById("valTotCom").innerHTML = "R$ " + valTotCom.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("saldoTotMil").innerHTML = saldoTotMil.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoFinalMil").innerHTML = "R$ " + custoFinalMil.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("quantTotPont").innerHTML = quantTotPont.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("saldoTotMil2").innerHTML = saldoTotMil2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("custoFinalMil2").innerHTML = "R$ " + custoFinalMil2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
});