function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById('calculate').addEventListener('click',function(){

    let quantPontos = parseFloat(document.getElementById('quantPontos').value);
    let valPontos = parseFloat(document.getElementById('valPontos').value);
    let conversor = parseFloat(document.getElementById('conversor').value);
    let valAllEuro = parseFloat(document.getElementById('valAllEuro').value);
    let valEuroMer = parseFloat(document.getElementById('valEuroMer').value);

    if (
        isNaN(quantPontos) || isNaN(valPontos) || isNaN(conversor) || isNaN(valAllEuro) || isNaN(valEuroMer) ||
        quantPontos <= 0 || valPontos <= 0 || conversor <= 0 || valAllEuro <= 0 || valEuroMer <= 0
    ) {
        document.getElementById('res1').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('res2').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('res3').innerHTML ="Digite todos os valores válidos!";
        document.getElementById('res4').innerHTML ="Digite todos os valores válidos!";
        return;
    }

    let pontosAll = quantPontos / conversor;
    let valTotAllEuro = (2 / 100) * pontosAll;
    let valEuroGasto = ((quantPontos * valPontos) / 1000) / valTotAllEuro;
    let percentualDesconto = (((valEuroGasto / valEuroMer) - 1) * (-1) * 100);

    document.getElementById("res1").innerHTML =  pontosAll.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("res2").innerHTML =  valTotAllEuro.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("res3").innerHTML =  valEuroGasto.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
    document.getElementById("res4").innerHTML =  percentualDesconto.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) + "%";

    document.getElementById('calculate2').addEventListener('click',function(){

        let quantPontos2 = parseFloat(document.getElementById('quantPontos2').value);
        let valPontos2 = parseFloat(document.getElementById('valPontos2').value);
        let conversor2 = parseFloat(document.getElementById('conversor2').value);
        let valAllEuro2 = parseFloat(document.getElementById('valAllEuro2').value);
        let valEuroMer2 = parseFloat(document.getElementById('valEuroMer2').value);

        if (
            isNaN(quantPontos2) || isNaN(valPontos2) || isNaN(conversor2) || isNaN(valAllEuro2) || isNaN(valEuroMer2) ||
            quantPontos2 <= 0 || valPontos2 <= 0 || conversor2 <= 0 || valAllEuro2 <= 0 || valEuroMer2 <= 0
        ) {
            document.getElementById('res5').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('res6').innerHTML = "Digite todos os valores válidos!";
            document.getElementById('res7').innerHTML ="Digite todos os valores válidos!";
            document.getElementById('res8').innerHTML ="Digite todos os valores válidos!";
            return;
        }
    
        let pontosAll2 = quantPontos2 / conversor2;
        let valTotAllEuro2 = (2 / 100) * pontosAll2;
        let valEuroGasto2 = ((quantPontos2 * valPontos2) / 1000) / valTotAllEuro2;
        let percentualDesconto2 = (((valEuroGasto2 / valEuroMer2) - 1) * (-1) * 100);
    
        document.getElementById("res5").innerHTML =  pontosAll2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
        document.getElementById("res6").innerHTML =  valTotAllEuro2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
        document.getElementById("res7").innerHTML =  valEuroGasto2.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
        document.getElementById("res8").innerHTML =  percentualDesconto2.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) + "%";

        document.getElementById('calculate3').addEventListener('click',function(){

            let quantPontos3 = parseFloat(document.getElementById('quantPontos3').value);
            let valPontos3 = parseFloat(document.getElementById('valPontos3').value);
            let conversor3 = parseFloat(document.getElementById('conversor3').value);
            let valAllEuro3 = parseFloat(document.getElementById('valAllEuro3').value);
            let valEuroMer3 = parseFloat(document.getElementById('valEuroMer3').value);

            if (
                isNaN(quantPontos3) || isNaN(valPontos3) || isNaN(conversor3) || isNaN(valAllEuro3) || isNaN(valEuroMer3) ||
                quantPontos3 <= 0 || valPontos3 <= 0 || conversor3 <= 0 || valAllEuro3 <= 0 || valEuroMer3 <= 0
            ) {
                document.getElementById('res9').innerHTML = "Digite todos os valores válidos!";
                document.getElementById('res10').innerHTML = "Digite todos os valores válidos!";
                document.getElementById('res11').innerHTML ="Digite todos os valores válidos!";
                document.getElementById('res12').innerHTML ="Digite todos os valores válidos!";
                return;
            }
        
            let pontosAll3 = quantPontos3 / conversor3;
            let valTotAllEuro3 = (2 / 100) * pontosAll3;
            let valEuroGasto3 = ((quantPontos3 * valPontos3) / 1000) / valTotAllEuro3;
            let percentualDesconto3 = (((valEuroGasto3 / valEuroMer3) - 1) * (-1) * 100);
        
            document.getElementById("res9").innerHTML =  pontosAll3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
            document.getElementById("res10").innerHTML =  valTotAllEuro3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
            document.getElementById("res11").innerHTML =  valEuroGasto3.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
            document.getElementById("res12").innerHTML =  percentualDesconto3.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) + "%";

            document.getElementById('calculate4').addEventListener('click',function(){

                let quantPontos4 = parseFloat(document.getElementById('quantPontos4').value);
                let valPontos4 = parseFloat(document.getElementById('valPontos4').value);
                let conversor4 = parseFloat(document.getElementById('conversor4').value);
                let valAllEuro4 = parseFloat(document.getElementById('valAllEuro4').value);
                let valEuroMer4 = parseFloat(document.getElementById('valEuroMer4').value);

                if (
                    isNaN(quantPontos4) || isNaN(valPontos4) || isNaN(conversor4) || isNaN(valAllEuro4) || isNaN(valEuroMer4) ||
                    quantPontos4 <= 0 || valPontos4 <= 0 || conversor4 <= 0 || valAllEuro4 <= 0 || valEuroMer4 <= 0
                ) {
                    document.getElementById('res13').innerHTML = "Digite todos os valores válidos!";
                    document.getElementById('res14').innerHTML = "Digite todos os valores válidos!";
                    document.getElementById('res15').innerHTML ="Digite todos os valores válidos!";
                    document.getElementById('res16').innerHTML ="Digite todos os valores válidos!";
                    return;
                }
            
                let pontosAll4 = quantPontos4 / conversor4;
                let valTotAllEuro4 = (2 / 100) * pontosAll4;
                let valEuroGasto4 = ((quantPontos4 * valPontos4) / 1000) / valTotAllEuro4;
                let percentualDesconto4 = (((valEuroGasto4 / valEuroMer4) - 1) * (-1) * 100);
            
                document.getElementById("res13").innerHTML =  pontosAll4.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
                document.getElementById("res14").innerHTML =  valTotAllEuro4.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
                document.getElementById("res15").innerHTML =  valEuroGasto4.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
                document.getElementById("res16").innerHTML =  percentualDesconto4.toLocaleString("pt-BR", { minimumFractionDigits: 2 }) + "%";
            })
        })
    })
})