function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById('calculate').addEventListener('click',function(){



    let pontosCar = parseFloat(document.getElementById('pontos-cartao').value);
    let promo = parseFloat(document.getElementById('promocao').value);
    let milhasDesej = parseFloat(document.getElementById('milhas-desej').value);
    let promo2 = parseFloat(document.getElementById('promo2').value);


    let quantBonus = (promo * pontosCar) / 100;


    let totAcu = parseInt(quantBonus) + parseInt(pontosCar);

    
    document.getElementById('total1').innerHTML = (quantBonus.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));
    document.getElementById('total2').innerHTML = (totAcu.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));


    if (
        isNaN(pontosCar) || isNaN(promo) || isNaN(milhasDesej) || isNaN(promo2) ||
        pontosCar <= 0 || promo <= 0 || milhasDesej <= 0 || promo2 <= 0 
    ) {
        document.getElementById('total1').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('total2').innerHTML = "Digite todos os valores válidos!";
        document.getElementById('total3').innerHTML ="Digite todos os valores válidos!";
        document.getElementById('total4').innerHTML ="Digite todos os valores válidos!";
        return;
    }

    let quantBonus2 = (milhasDesej * ((promo2 / 100) * 100)) / (100 + ((promo2 / 100) * 100));

    let pontosTrans = parseInt(milhasDesej) - parseInt(quantBonus2);
    
    document.getElementById('total3').innerHTML = (quantBonus2.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));
    document.getElementById('total4').innerHTML = (pontosTrans.toLocaleString("pt-BR", { minimumFractionDigits: 2 }));
});
