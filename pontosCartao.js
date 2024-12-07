function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById('calculate').addEventListener('click',function(){

    let valorFat = parseFloat(document.getElementById('valor-fatura').value);
    let cartao = parseFloat(document.getElementById('cartao').value);
    let dolar = parseFloat(document.getElementById('dolar').value);
    let totalMilhas = parseFloat(document.getElementById('tot-milhas').value);
    let cartao2 = parseFloat(document.getElementById('cartao2').value);
    let dolar2 = parseFloat(document.getElementById('dolar2').value);
    let bonus = parseFloat(document.getElementById('bonus').value);

    const creditados = valorFat / dolar * cartao;

    document.getElementById('total').innerHTML = (creditados.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));

    const totPontos = totalMilhas / ( 1 + bonus);
    const gastoCartao = (totPontos / cartao2) * dolar2

    if (
        isNaN(valorFat) || isNaN(cartao) || isNaN(dolar) || isNaN(totalMilhas) || isNaN(cartao2) || isNaN(dolar2) || isNaN(bonus) ||
        valorFat <= 0 || cartao <= 0 || dolar <= 0 || totalMilhas <= 0 || cartao2 <= 0 || dolar2 <= 0 || bonus < 0
    ) {
        
        document.getElementById('total').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('total2').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('total3').innerHTML ="Digite todos os valores válidos!";
        return;
    }

    document.getElementById('total2').innerHTML = (totPontos.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));
    document.getElementById('total3').innerHTML = "R$ " + (gastoCartao.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));
});


