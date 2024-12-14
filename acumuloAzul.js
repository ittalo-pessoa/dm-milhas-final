function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}
document.getElementById('calculate').addEventListener('click',function(){


const custoJan1 = isNaN(parseFloat(document.getElementById('custoJan1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJan1').value.replace(/\./g, ""));
const acumuloJan1 = isNaN(parseFloat(document.getElementById('acumuloJan1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJan1').value.replace(/\./g, ""));
const custoFev1 = isNaN(parseFloat(document.getElementById('custoFev1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoFev1').value.replace(/\./g, ""));
const acumuloFev1 = isNaN(parseFloat(document.getElementById('acumuloFev1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloFev1').value.replace(/\./g, ""));
const custoMar1 = isNaN(parseFloat(document.getElementById('custoMar1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMar1').value.replace(/\./g, ""));
const acumuloMar1 = isNaN(parseFloat(document.getElementById('acumuloMar1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMar1').value.replace(/\./g, ""));
const custoAbr1 = isNaN(parseFloat(document.getElementById('custoAbr1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAbr1').value.replace(/\./g, ""));
const acumuloAbr1 = isNaN(parseFloat(document.getElementById('acumuloAbr1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAbr1').value.replace(/\./g, ""));
const custoMai1 = isNaN(parseFloat(document.getElementById('custoMai1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMai1').value.replace(/\./g, ""));
const acumuloMai1 = isNaN(parseFloat(document.getElementById('acumuloMai1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai1').value.replace(/\./g, ""));
const custoJun1 = isNaN(parseFloat(document.getElementById('custoJun1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJun1').value.replace(/\./g, ""));
const acumuloJun1 = isNaN(parseFloat(document.getElementById('acumuloJun1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJun1').value.replace(/\./g, ""));
const custoJul1 = isNaN(parseFloat(document.getElementById('custoJul1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJul1').value.replace(/\./g, ""));
const acumuloJul1 = isNaN(parseFloat(document.getElementById('acumuloJul1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJul1').value.replace(/\./g, ""));
const custoAgo1 = isNaN(parseFloat(document.getElementById('custoAgo1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAgo1').value.replace(/\./g, ""));
const acumuloAgo1 = isNaN(parseFloat(document.getElementById('acumuloAgo1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAgo1').value.replace(/\./g, ""));
const custoSet1 = isNaN(parseFloat(document.getElementById('custoSet1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoSet1').value.replace(/\./g, ""));
const acumuloSet1 = isNaN(parseFloat(document.getElementById('acumuloSet1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloSet1').value.replace(/\./g, ""));
const custoOut1 = isNaN(parseFloat(document.getElementById('custoOut1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOut1').value.replace(/\./g, ""));
const acumuloOut1 = isNaN(parseFloat(document.getElementById('acumuloOut1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOut1').value.replace(/\./g, ""));
const custoNov1 = isNaN(parseFloat(document.getElementById('custoNov1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoNov1').value.replace(/\./g, ""));
const acumuloNov1 = isNaN(parseFloat(document.getElementById('acumuloNov1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloNov1').value.replace(/\./g, ""));
const custoDez1 = isNaN(parseFloat(document.getElementById('custoDez1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoDez1').value.replace(/\./g, ""));
const acumuloDez1 = isNaN(parseFloat(document.getElementById('acumuloDez1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloDez1').value.replace(/\./g, ""));

    if (
        custoJan1 == 0 && acumuloJan1 == 0 &&
        custoFev1 == 0 && acumuloFev1 == 0 &&
        custoMar1 == 0 && acumuloMar1 == 0 &&
        custoAbr1 == 0 && acumuloAbr1 == 0 &&
        custoMai1 == 0 && acumuloMai1 == 0 &&
        custoJun1 == 0 && acumuloJun1 == 0 &&
        custoJul1 == 0 && acumuloJul1 == 0 &&
        custoAgo1 == 0 && acumuloAgo1 == 0 &&
        custoSet1 == 0 && acumuloSet1 == 0 &&
        custoOut1 == 0 && acumuloOut1 == 0 &&
        custoNov1 == 0 && acumuloNov1 == 0 &&
        custoDez1 == 0 && acumuloDez1 == 0||custoJan1 < 0 || acumuloJan1 < 0 ||
        custoFev1 < 0 || acumuloFev1 < 0 ||
        custoMar1 < 0 || acumuloMar1 < 0 ||
        custoAbr1 < 0 || acumuloAbr1 < 0 ||
        custoMai1 < 0 || acumuloMai1 < 0 ||
        custoJun1 < 0 || acumuloJun1 < 0 ||
        custoJul1 < 0 || acumuloJul1 < 0 ||
        custoAgo1 < 0 || acumuloAgo1 < 0 ||
        custoSet1 < 0 || acumuloSet1 < 0 ||
        custoOut1 < 0 || acumuloOut1 < 0 ||
        custoNov1 < 0 || acumuloNov1 < 0 ||
        custoDez1 < 0 || acumuloDez1 < 0
    ) 
    
     {
        mostrarErro("errorCustoJan", "Todos os valores numéricos válidos devem ser preenchidos.");
        mostrarErro("errorCustoJul", "Todos os valores numéricos válidos devem ser preenchidos.");
        return;
    }
    


    const totalCusto1 = custoJan1 + custoFev1 + custoMar1 + custoAbr1 + custoMai1 + custoJun1 + custoJul1 + custoAgo1 + custoSet1 + custoOut1 + custoNov1 + custoDez1;
    const totalAcumulo1 = acumuloJan1 + acumuloFev1 + acumuloMar1 + acumuloAbr1 + acumuloMai1 + acumuloJun1 + acumuloJul1 + acumuloAgo1 + acumuloSet1 + acumuloOut1 +
     acumuloNov1 + acumuloDez1;
    const acumuloAnual= totalCusto1/totalAcumulo1*1000;

    document.getElementById('totalCusto1').innerHTML = "R$ " + totalCusto1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('totalAcumulo1').innerHTML = "R$ " + totalAcumulo1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });


   




 document.getElementById('calculate2').addEventListener('click',function(){

    const custoJan2 = isNaN(parseFloat(document.getElementById('custoJan2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJan2').value.replace(/\./g, ""));
const acumuloJan2 = isNaN(parseFloat(document.getElementById('acumuloJan2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJan2').value.replace(/\./g, ""));
const custoFev2 = isNaN(parseFloat(document.getElementById('custoFev2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoFev2').value.replace(/\./g, ""));
const acumuloFev2 = isNaN(parseFloat(document.getElementById('acumuloFev2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloFev2').value.replace(/\./g, ""));
const custoMar2 = isNaN(parseFloat(document.getElementById('custoMar2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMar2').value.replace(/\./g, ""));
const acumuloMar2 = isNaN(parseFloat(document.getElementById('acumuloMar2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMar2').value.replace(/\./g, ""));
const custoAbr2 = isNaN(parseFloat(document.getElementById('custoAbr2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAbr2').value.replace(/\./g, ""));
const acumuloAbr2 = isNaN(parseFloat(document.getElementById('acumuloAbr2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAbr2').value.replace(/\./g, ""));
const custoMai2 = isNaN(parseFloat(document.getElementById('custoMai2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMai2').value.replace(/\./g, ""));
const acumuloMai2 = isNaN(parseFloat(document.getElementById('acumuloMai2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai2').value.replace(/\./g, ""));
const custoJun2 = isNaN(parseFloat(document.getElementById('custoJun2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJun2').value.replace(/\./g, ""));
const acumuloJun2 = isNaN(parseFloat(document.getElementById('acumuloJun2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJun2').value.replace(/\./g, ""));
const custoJul2 = isNaN(parseFloat(document.getElementById('custoJul2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJul2').value.replace(/\./g, ""));
const acumuloJul2 = isNaN(parseFloat(document.getElementById('acumuloJul2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJul2').value.replace(/\./g, ""));
const custoAgo2 = isNaN(parseFloat(document.getElementById('custoAgo2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAgo2').value.replace(/\./g, ""));
const acumuloAgo2 = isNaN(parseFloat(document.getElementById('acumuloAgo2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAgo2').value.replace(/\./g, ""));
const custoSet2 = isNaN(parseFloat(document.getElementById('custoSet2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoSet2').value.replace(/\./g, ""));
const acumuloSet2 = isNaN(parseFloat(document.getElementById('acumuloSet2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloSet2').value.replace(/\./g, ""));
const custoOut2 = isNaN(parseFloat(document.getElementById('custoOut2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOut2').value.replace(/\./g, ""));
const acumuloOut2 = isNaN(parseFloat(document.getElementById('acumuloOut2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOut2').value.replace(/\./g, ""));
const custoNov2 = isNaN(parseFloat(document.getElementById('custoNov2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoNov2').value.replace(/\./g, ""));
const acumuloNov2 = isNaN(parseFloat(document.getElementById('acumuloNov2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloNov2').value.replace(/\./g, ""));
const custoDez2 = isNaN(parseFloat(document.getElementById('custoDez2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoDez2').value.replace(/\./g, ""));
const acumuloDez2 = isNaN(parseFloat(document.getElementById('acumuloDez2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloDez2').value.replace(/\./g, ""));

    
        if (
            
                custoJan2 == 0 && acumuloJan2 == 0 &&
                custoFev2 == 0 && acumuloFev2 == 0 &&
                custoMar2 == 0 && acumuloMar2 == 0 &&
                custoAbr2 == 0 && acumuloAbr2 == 0 &&
                custoMai2 == 0 && acumuloMai2 == 0 &&
                custoJun2 == 0 && acumuloJun2 == 0 &&
                custoJul2 == 0 && acumuloJul2 == 0 &&
                custoAgo2 == 0 && acumuloAgo2 == 0 &&
                custoSet2 == 0 && acumuloSet2 == 0 &&
                custoOut2 == 0 && acumuloOut2 == 0 &&
                custoNov2 == 0 && acumuloNov2 == 0 &&
                custoDez2 == 0 && acumuloDez2 == 0
             || 
            custoJan2 < 0 || acumuloJan2 < 0 ||
            custoFev2 < 0 || acumuloFev2 < 0 ||
            custoMar2 < 0 || acumuloMar2 < 0 ||
            custoAbr2 < 0 || acumuloAbr2 < 0 ||
            custoMai2 < 0 || acumuloMai2 < 0 ||
            custoJun2 < 0 || acumuloJun2 < 0 ||
            custoJul2 < 0 || acumuloJul2 < 0 ||
            custoAgo2 < 0 || acumuloAgo2 < 0 ||
            custoSet2 < 0 || acumuloSet2 < 0 ||
            custoOut2 < 0 || acumuloOut2 < 0 ||
            custoNov2 < 0 || acumuloNov2 < 0 ||
            custoDez2 < 0 || acumuloDez2 < 0
        ) {
            mostrarErro("errorCustoJan2", "Todos os valores numéricos válidos devem ser preenchidos.");
            mostrarErro("errorCustoJul2", "Todos os valores numéricos válidos devem ser preenchidos.");
            return;
        }

        const totalCusto2 = (custoJan2 + custoFev2 + custoMar2 + custoAbr2 + custoMai2 + custoJun2 + custoJul2 + custoAgo2 + custoSet2 + custoOut2 + custoNov2 + custoDez2);
        const totalAcumulo2 = (acumuloJan2 + acumuloFev2 + acumuloMar2 + acumuloAbr2 + acumuloMai2 + acumuloJun2 + acumuloJul2 + acumuloAgo2 + acumuloSet2 + acumuloOut2 + acumuloNov2 + acumuloDez2);

        document.getElementById('totalCusto2').innerHTML = "R$ " + totalCusto2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('totalAcumulo2').innerHTML = "R$ " + totalAcumulo2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

document.getElementById('calculate3').addEventListener('click',function(){

    const custoJan3 = isNaN(parseFloat(document.getElementById('custoJan3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJan3').value.replace(/\./g, ""));
const acumuloJan3 = isNaN(parseFloat(document.getElementById('acumuloJan3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJan3').value.replace(/\./g, ""));
const custoFev3 = isNaN(parseFloat(document.getElementById('custoFev3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoFev3').value.replace(/\./g, ""));
const acumuloFev3 = isNaN(parseFloat(document.getElementById('acumuloFev3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloFev3').value.replace(/\./g, ""));
const custoMar3 = isNaN(parseFloat(document.getElementById('custoMar3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMar3').value.replace(/\./g, ""));
const acumuloMar3 = isNaN(parseFloat(document.getElementById('acumuloMar3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMar3').value.replace(/\./g, ""));
const custoAbr3 = isNaN(parseFloat(document.getElementById('custoAbr3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAbr3').value.replace(/\./g, ""));
const acumuloAbr3 = isNaN(parseFloat(document.getElementById('acumuloAbr3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAbr3').value.replace(/\./g, ""));
const custoMai3 = isNaN(parseFloat(document.getElementById('custoMai3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMai3').value.replace(/\./g, ""));
const acumuloMai3 = isNaN(parseFloat(document.getElementById('acumuloMai3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai3').value.replace(/\./g, ""));
const custoJun3 = isNaN(parseFloat(document.getElementById('custoJun3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJun3').value.replace(/\./g, ""));
const acumuloJun3 = isNaN(parseFloat(document.getElementById('acumuloJun3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJun3').value.replace(/\./g, ""));
const custoJul3 = isNaN(parseFloat(document.getElementById('custoJul3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJul3').value.replace(/\./g, ""));
const acumuloJul3 = isNaN(parseFloat(document.getElementById('acumuloJul3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJul3').value.replace(/\./g, ""));
const custoAgo3 = isNaN(parseFloat(document.getElementById('custoAgo3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAgo3').value.replace(/\./g, ""));
const acumuloAgo3 = isNaN(parseFloat(document.getElementById('acumuloAgo3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAgo3').value.replace(/\./g, ""));
const custoSet3 = isNaN(parseFloat(document.getElementById('custoSet3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoSet3').value.replace(/\./g, ""));
const acumuloSet3 = isNaN(parseFloat(document.getElementById('acumuloSet3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloSet3').value.replace(/\./g, ""));
const custoOut3 = isNaN(parseFloat(document.getElementById('custoOut3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOut3').value.replace(/\./g, ""));
const acumuloOut3 = isNaN(parseFloat(document.getElementById('acumuloOut3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOut3').value.replace(/\./g, ""));
const custoNov3 = isNaN(parseFloat(document.getElementById('custoNov3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoNov3').value.replace(/\./g, ""));
const acumuloNov3 = isNaN(parseFloat(document.getElementById('acumuloNov3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloNov3').value.replace(/\./g, ""));
const custoDez3 = isNaN(parseFloat(document.getElementById('custoDez3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoDez3').value.replace(/\./g, ""));
const acumuloDez3 = isNaN(parseFloat(document.getElementById('acumuloDez3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloDez3').value.replace(/\./g, ""));

    
    if (
        custoJan3 == 0 && acumuloJan3 == 0 &&
        custoFev3 == 0 && acumuloFev3 == 0 &&
        custoMar3 == 0 && acumuloMar3 == 0 &&
        custoAbr3 == 0 && acumuloAbr3 == 0 &&
        custoMai3 == 0 && acumuloMai3 == 0 &&
        custoJun3 == 0 && acumuloJun3 == 0 &&
        custoJul3 == 0 && acumuloJul3 == 0 &&
        custoAgo3 == 0 && acumuloAgo3 == 0 &&
        custoSet3 == 0 && acumuloSet3 == 0 &&
        custoOut3 == 0 && acumuloOut3 == 0 &&
        custoNov3 == 0 && acumuloNov3 == 0 &&
        custoDez3 == 0 && acumuloDez3 == 0
        || 
        custoJan3 < 0 || acumuloJan3 < 0 ||
        custoFev3 < 0 || acumuloFev3 < 0 ||
        custoMar3 < 0 || acumuloMar3 < 0 ||
        custoAbr3 < 0 || acumuloAbr3 < 0 ||
        custoMai3 < 0 || acumuloMai3 < 0 ||
        custoJun3 < 0 || acumuloJun3 < 0 ||
        custoJul3 < 0 || acumuloJul3 < 0 ||
        custoAgo3 < 0 || acumuloAgo3 < 0 ||
        custoSet3 < 0 || acumuloSet3 < 0 ||
        custoOut3 < 0 || acumuloOut3 < 0 ||
        custoNov3 < 0 || acumuloNov3 < 0 ||
        custoDez3 < 0 || acumuloDez3 < 0
    ) {
        mostrarErro("errorCustoJan3", "Todos os valores numéricos válidos devem ser preenchidos.");
        mostrarErro("errorCustoJul3", "Todos os valores numéricos válidos devem ser preenchidos.");
        return;
    }
    

            const totalCusto3 = (custoJan3 + custoFev3 + custoMar3 + custoAbr3 + custoMai3 + custoJun3 + custoJul3 + custoAgo3 + custoSet3 + custoOut3 + custoNov3 + custoDez3);
            const totalAcumulo3 = (acumuloJan3 + acumuloFev3 + acumuloMar3 + acumuloAbr3 + acumuloMai3 + acumuloJun3 + acumuloJul3 + acumuloAgo3 + acumuloSet3 + acumuloOut3 + acumuloNov3 + acumuloDez3);

            document.getElementById('totalCusto3').innerHTML = "R$ " + totalCusto3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            document.getElementById('totalAcumulo3').innerHTML = "R$ " + totalAcumulo3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            document.getElementById('calculate4').addEventListener('click',function(){

                // IDs dos campos de custo
// IDs dos campos de custo
const custoOpera11 = isNaN(parseFloat(document.getElementById('custoOpera11').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOpera11').value.replace(/\./g, ""));
const custoJan21 = isNaN(parseFloat(document.getElementById('custoJan21').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJan21').value.replace(/\./g, ""));
const custoFev21 = isNaN(parseFloat(document.getElementById('custoFev21').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoFev21').value.replace(/\./g, ""));
const custoMar31 = isNaN(parseFloat(document.getElementById('custoMar31').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMar31').value.replace(/\./g, ""));
const custoAbr41 = isNaN(parseFloat(document.getElementById('custoAbr41').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAbr41').value.replace(/\./g, ""));
const custoMai51 = isNaN(parseFloat(document.getElementById('custoMai51').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMai51').value.replace(/\./g, ""));
const custoJun61 = isNaN(parseFloat(document.getElementById('custoJun61').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJun61').value.replace(/\./g, ""));
const custoJul71 = isNaN(parseFloat(document.getElementById('custoJul71').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJul71').value.replace(/\./g, ""));
const custoAgo81 = isNaN(parseFloat(document.getElementById('custoAgo81').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAgo81').value.replace(/\./g, ""));
const custoSet91 = isNaN(parseFloat(document.getElementById('custoSet91').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoSet91').value.replace(/\./g, ""));
const custoOut101 = isNaN(parseFloat(document.getElementById('custoOut101').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOut101').value.replace(/\./g, ""));
const custoNov111 = isNaN(parseFloat(document.getElementById('custoNov111').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoNov111').value.replace(/\./g, ""));
const custoDez121 = isNaN(parseFloat(document.getElementById('custoDez121').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoDez121').value.replace(/\./g, ""));

// IDs dos campos de acúmulo
const acumuloOpera12 = isNaN(parseFloat(document.getElementById('acumuloOpera12').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOpera12').value.replace(/\./g, ""));
const acumuloOpera13 = isNaN(parseFloat(document.getElementById('acumuloOpera13').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOpera13').value.replace(/\./g, ""));
const acumuloJan22 = isNaN(parseFloat(document.getElementById('acumuloJan22').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJan22').value.replace(/\./g, ""));
const acumuloJan23 = isNaN(parseFloat(document.getElementById('acumuloJan23').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJan23').value.replace(/\./g, ""));
const acumuloFev22 = isNaN(parseFloat(document.getElementById('acumuloFev22').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloFev22').value.replace(/\./g, ""));
const acumuloFev23 = isNaN(parseFloat(document.getElementById('acumuloFev23').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloFev23').value.replace(/\./g, ""));
const acumuloMar32 = isNaN(parseFloat(document.getElementById('acumuloMar32').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMar32').value.replace(/\./g, ""));
const acumuloMar33 = isNaN(parseFloat(document.getElementById('acumuloMar33').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMar33').value.replace(/\./g, ""));
const acumuloAbr42 = isNaN(parseFloat(document.getElementById('acumuloAbr42').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAbr42').value.replace(/\./g, ""));
const acumuloAbr43 = isNaN(parseFloat(document.getElementById('acumuloAbr43').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAbr43').value.replace(/\./g, ""));
const acumuloMai52 = isNaN(parseFloat(document.getElementById('acumuloMai52').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai52').value.replace(/\./g, ""));
const acumuloMai53 = isNaN(parseFloat(document.getElementById('acumuloMai53').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai53').value.replace(/\./g, ""));
const acumuloJun62 = isNaN(parseFloat(document.getElementById('acumuloJun62').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJun62').value.replace(/\./g, ""));
const acumuloJun63 = isNaN(parseFloat(document.getElementById('acumuloMai63').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai63').value.replace(/\./g, ""));
const acumuloJul72 = isNaN(parseFloat(document.getElementById('acumuloJul72').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJul72').value.replace(/\./g, ""));
const acumuloJul73 = isNaN(parseFloat(document.getElementById('acumuloJul73').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJul73').value.replace(/\./g, ""));
const acumuloAgo82 = isNaN(parseFloat(document.getElementById('acumuloAgo82').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAgo82').value.replace(/\./g, ""));
const acumuloAgo83 = isNaN(parseFloat(document.getElementById('acumuloAgo83').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAgo83').value.replace(/\./g, ""));
const acumuloSet92 = isNaN(parseFloat(document.getElementById('acumuloSet92').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloSet92').value.replace(/\./g, ""));
const acumuloSet93 = isNaN(parseFloat(document.getElementById('acumuloSet93').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloSet93').value.replace(/\./g, ""));
const acumuloOut102 = isNaN(parseFloat(document.getElementById('acumuloOut102').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOut102').value.replace(/\./g, ""));
const acumuloOut103 = isNaN(parseFloat(document.getElementById('acumuloOut103').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOut103').value.replace(/\./g, ""));
const acumuloNov112 = isNaN(parseFloat(document.getElementById('acumuloNov112').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloNov112').value.replace(/\./g, ""));
const acumuloNov113 = isNaN(parseFloat(document.getElementById('acumuloNov113').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloNov113').value.replace(/\./g, ""));
const acumuloDez122 = isNaN(parseFloat(document.getElementById('acumuloDez122').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloDez122').value.replace(/\./g, ""));
const acumuloDez123 = isNaN(parseFloat(document.getElementById('acumuloDez123').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloDez123').value.replace(/\./g, ""));

const usoMilhas = isNaN(parseFloat(document.getElementById('usoDasMilhas').value.replace(/\./g, ""))) 
    ? 0 
    : parseFloat(document.getElementById('usoDasMilhas').value.replace(/\./g, ""));

if (
    custoOpera11 == 0 && acumuloOpera12 == 0 && acumuloOpera13 == 0 &&
    custoJan21 == 0 && acumuloJan22 == 0 && acumuloJan23 == 0 &&
    custoFev21 == 0 && acumuloFev22 == 0 && acumuloFev23 == 0 &&
    custoMar31 == 0 && acumuloMar32 == 0 && acumuloMar33 == 0 &&
    custoAbr41 == 0 && acumuloAbr42 == 0 && acumuloAbr43 == 0 &&
    custoMai51 == 0 && acumuloMai52 == 0 && acumuloMai53 == 0 &&
    custoJun61 == 0 && acumuloJun62 == 0 && acumuloJun63 == 0 &&
    custoJul71 == 0 && acumuloJul72 == 0 && acumuloJul73 == 0 &&
    custoAgo81 == 0 && acumuloAgo82 == 0 && acumuloAgo83 == 0 &&
    custoSet91 == 0 && acumuloSet92 == 0 && acumuloSet93 == 0 &&
    custoOut101 == 0 && acumuloOut102 == 0 && acumuloOut103 == 0 &&
    custoNov111 == 0 && acumuloNov112 == 0 && acumuloNov113 == 0 &&
    custoDez121 == 0 && acumuloDez122 == 0 && acumuloDez123 == 0 &&
    usoMilhas == 0
    ||
    custoOpera11 < 0 || acumuloOpera12 < 0 || acumuloOpera13 < 0 ||
    custoJan21 < 0 || acumuloJan22 < 0 || acumuloJan23 < 0 ||
    custoFev21 < 0 || acumuloFev22 < 0 || acumuloFev23 < 0 ||
    custoMar31 < 0 || acumuloMar32 < 0 || acumuloMar33 < 0 ||
    custoAbr41 < 0 || acumuloAbr42 < 0 || acumuloAbr43 < 0 ||
    custoMai51 < 0 || acumuloMai52 < 0 || acumuloMai53 < 0 ||
    custoJun61 < 0 || acumuloJun62 < 0 || acumuloJun63 < 0 ||
    custoJul71 < 0 || acumuloJul72 < 0 || acumuloJul73 < 0 ||
    custoAgo81 < 0 || acumuloAgo82 < 0 || acumuloAgo83 < 0 ||
    custoSet91 < 0 || acumuloSet92 < 0 || acumuloSet93 < 0 ||
    custoOut101 < 0 || acumuloOut102 < 0 || acumuloOut103 < 0 ||
    custoNov111 < 0 || acumuloNov112 < 0 || acumuloNov113 < 0 ||
    custoDez121 < 0 || acumuloDez122 < 0 || acumuloDez123 < 0 ||
    usoMilhas < 0
) 
            {
   

    mostrarErro("errorUsoMilhas4", "Todos os valores numéricos válidos devem ser preenchidos .");
    return;

 }
            
 let clubesDeMilhas1= totalCusto1+0
 let clubesDeMilhas2= acumuloJan1+0
 let clubesDeMilhas3= acumuloFev1+0
 let clubesDeMilhas4= acumuloMar1+0
 let clubesDeMilhas5= acumuloAbr1+0
 let clubesDeMilhas6= acumuloMai1+0
 let clubesDeMilhas7= acumuloJun1+0
 let clubesDeMilhas8= acumuloJul1+0
 let clubesDeMilhas9= acumuloAgo1+0
 let clubesDeMilhas10= acumuloSet1+0
 let clubesDeMilhas11= acumuloOut1+0
 let clubesDeMilhas12= acumuloNov1+0
 let clubesDeMilhas13= acumuloDez1+0

 let comprasBonificadas1= totalCusto2+0
 let comprasBonificadas2= acumuloJan2+0
 let comprasBonificadas3= acumuloFev2+0
 let comprasBonificadas4= acumuloMar2+0
 let comprasBonificadas5= acumuloAbr2+0
 let comprasBonificadas6= acumuloMai2+0
 let comprasBonificadas7= acumuloJun2+0
 let comprasBonificadas8= acumuloJul2+0
 let comprasBonificadas9= acumuloAgo2+0
 let comprasBonificadas10= acumuloSet2+0
 let comprasBonificadas11= acumuloOut2+0
 let comprasBonificadas12= acumuloNov2+0
 let comprasBonificadas13= acumuloDez2+0
 
 let comprasDeMilhas1= totalCusto3+0
 let comprasDeMilhas2= acumuloJan3+0
 let comprasDeMilhas3= acumuloFev3+0
 let comprasDeMilhas4= acumuloMar3+0
 let comprasDeMilhas5= acumuloAbr3+0
 let comprasDeMilhas6= acumuloMai3+0
 let comprasDeMilhas7= acumuloJun3+0
 let comprasDeMilhas8= acumuloJul3+0
 let comprasDeMilhas9= acumuloAgo3+0
 let comprasDeMilhas10= acumuloSet3+0
 let comprasDeMilhas11= acumuloOut3+0
 let comprasDeMilhas12= acumuloNov3+0
 let comprasDeMilhas13= acumuloDez3+0
 
// Clubes de Milhas
document.getElementById('resultadoacumuloOpera1').innerHTML = "R$ " + clubesDeMilhas1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoacumuloOpera12').innerHTML = "R$ " + comprasBonificadas1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoacumuloOpera13').innerHTML = "R$ " + comprasDeMilhas1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJan1').innerHTML = "R$ " + acumuloJan1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJan12').innerHTML = "R$ " + acumuloJan2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJan13').innerHTML = "R$ " + acumuloJan3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoFev1').innerHTML = "R$ " + acumuloFev1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoFev2').innerHTML = "R$ " + acumuloFev2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoFev3').innerHTML = "R$ " + acumuloFev3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMarco1').innerHTML = "R$ " + acumuloMar1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMarco2').innerHTML = "R$ " + acumuloMar2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMarco3').innerHTML = "R$ " + acumuloMar3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoAbril1').innerHTML = "R$ " + acumuloAbr1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Compras Bonificadas
document.getElementById('resultadoAbril2').innerHTML = "R$ " + acumuloAbr2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoAbril3').innerHTML = "R$ " + acumuloAbr3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMai1').innerHTML = "R$ " + acumuloMai1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMai2').innerHTML = "R$ " + acumuloMai2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMai3').innerHTML = "R$ " + acumuloMai3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJun1').innerHTML = "R$ " + acumuloJun1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJun2').innerHTML = "R$ " + acumuloJun2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJun3').innerHTML = "R$ " + acumuloJun3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJul1').innerHTML = "R$ " + acumuloJul1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJul2').innerHTML = "R$ " + acumuloJul2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJul3').innerHTML = "R$ " + acumuloJul3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoAgosto1').innerHTML = "R$ " + acumuloAgo1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Compras de Milhas
document.getElementById('resultadoAgosto2').innerHTML = "R$ " + acumuloAgo2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoAgosto3').innerHTML = "R$ " + acumuloAgo3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoSet1').innerHTML = "R$ " + acumuloSet1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoSet2').innerHTML = "R$ " + acumuloSet2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoSet3').innerHTML = "R$ " + acumuloSet3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoOut1').innerHTML = "R$ " + acumuloOut1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoOut2').innerHTML = "R$ " + acumuloOut2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoOut3').innerHTML = "R$ " + acumuloOut3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoNov1').innerHTML = "R$ " + acumuloNov1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoNov2').innerHTML = "R$ " + acumuloNov2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoNov3').innerHTML = "R$ " + acumuloNov3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoDez1').innerHTML = "R$ " + acumuloDez1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoDez2').innerHTML = "R$ " + acumuloDez2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoDez3').innerHTML = "R$ " + acumuloDez3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoDez2').innerHTML = "R$ " + comprasDeMilhas12.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoDez3').innerHTML = "R$ " + comprasDeMilhas13.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const custoAnualTodasAplicacoes= custoOpera11+acumuloOpera12+acumuloOpera13+clubesDeMilhas1+comprasBonificadas1+comprasDeMilhas1
const acumuloAnualTodasAplicacoes=  custoJan21 + acumuloJan22 + acumuloJan23 + acumuloJan1 + acumuloJan2 + acumuloJan3 +
custoFev21 + acumuloFev22 + acumuloFev23 + acumuloFev1 + acumuloFev2 + acumuloFev3 +
custoMar31 + acumuloMar32 + acumuloMar33 + acumuloMar1 + acumuloMar2 + acumuloMar3 +
custoAbr41 + acumuloAbr42 + acumuloAbr43 + acumuloAbr1 + acumuloAbr2 + acumuloAbr3 +
custoMai51 + acumuloMai52 + acumuloMai53 + acumuloMai1 + acumuloMai2 + acumuloMai3 +
custoJun61 + acumuloJun62 + acumuloJun63 + acumuloJun1 + acumuloJun2 + acumuloJun3 +
custoJul71 + acumuloJul72 + acumuloJul73 + acumuloJul1 + acumuloJul2 + acumuloJul3 +
custoAgo81 + acumuloAgo82 + acumuloAgo83 + acumuloAgo1 + acumuloAgo2 + acumuloAgo3 +
custoSet91 + acumuloSet92 + acumuloSet93 + acumuloSet1 + acumuloSet2 + acumuloSet3 +
custoOut101 + acumuloOut102 + acumuloOut103 + acumuloOut1 + acumuloOut2 + acumuloOut3 +
custoNov111 + acumuloNov112 + acumuloNov113 + acumuloNov1 + acumuloNov2 + acumuloNov3 +
custoDez121 + acumuloDez122 + acumuloDez123 + acumuloDez1 + acumuloDez2 + acumuloDez3

document.getElementById('custoAnualTodasAplicacoes').innerHTML = "R$ " + custoAnualTodasAplicacoes.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('acumuloAnualTodasAplicacoes').innerHTML = "R$ " + acumuloAnualTodasAplicacoes.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });


if (acumuloAnualTodasAplicacoes === 0) {
    document.getElementById("custoMedioDoMilheiroTodas").innerHTML = "0";
}
 else {
    const calc=custoAnualTodasAplicacoes/acumuloAnualTodasAplicacoes*1000
    document.getElementById('custoMedioDoMilheiroTodas').innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    localStorage.setItem('custoMedioDoMilheiroTodas', calc);
}

const saldoAposUsoDeMilhas=acumuloAnualTodasAplicacoes-usoMilhas

document.getElementById('saldoAposUsoDeMilhas').innerHTML = "R$ " + saldoAposUsoDeMilhas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const pantasTrans1 = parseFloat(document.getElementById('pantasTrans1').value);

const pORCENTA = parseFloat(document.getElementById('pancartualPro').value);

const pancartualPro = pORCENTA / 100;

const totAcumuloAnual03 = pantasTrans1 + (pantasTrans1*pancartualPro);

const custoMedioMilheiroSmiles = ((custoMedioDoMilheiroTodas * pantasTrans1) / 1000)/totAcumuloAnual03 * 1000;

document.getElementById('totAcumuloAnual03').innerHTML = totAcumuloAnual03.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('custoMedioMilheiroSmiles').innerHTML = "R$ " + custoMedioMilheiroSmiles.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

localStorage.setItem('saldoAposUsoDeMilhas', saldoAposUsoDeMilhas);


});

})

}) 

})
