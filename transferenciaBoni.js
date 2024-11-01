document.getElementById('calculate').addEventListener('click',function(){
    const pontosCar = document.getElementById('pontos-cartao').value;
    const promo = document.getElementById('promocao').value;

    const quantBonus = (promo * pontosCar) / 100;


    const totAcu = parseInt(quantBonus) + parseInt(pontosCar);

    
    document.getElementById('total1').innerHTML = (quantBonus.toFixed(0));
    document.getElementById('total2').innerHTML = (totAcu.toFixed(0));
    

    const milhasDesej = document.getElementById('milhas-desej').value;
    const promo2 = document.getElementById('promo2').value;

    const quantBonus2 = (milhasDesej * ((promo2 / 100) * 100)) / (100 + ((promo2 / 100) * 100));

    const pontosTrans = parseInt(milhasDesej) - parseInt(quantBonus2);
    
    document.getElementById('total3').innerHTML = (quantBonus2.toFixed(0));
    document.getElementById('total4').innerHTML = (pontosTrans.toFixed(0));
});