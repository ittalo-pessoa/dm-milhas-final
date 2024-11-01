document.getElementById('calculate').addEventListener('click',function(){
    const valorFat = document.getElementById('valor-fatura').value;
    const cartao = document.getElementById('cartao').value;
    const dolar = document.getElementById('dolar').value;

    const creditados = valorFat / dolar * cartao;

    document.getElementById('total').innerHTML = (creditados.toFixed(2));

    const totalMilhas = document.getElementById('tot-milhas').value;
    const cartao2 = document.getElementById('cartao2').value;
    const dolar2 = document.getElementById('dolar2').value;
    const bonus = document.getElementById('bonus').value;

    const totPontos = totalMilhas / ( 1 + bonus);
    const gastoCartao = (totPontos / cartao2) * dolar2

    document.getElementById('total2').innerHTML = (totPontos.toFixed(2));
    document.getElementById('total3').innerHTML = (gastoCartao.toFixed(2));
});