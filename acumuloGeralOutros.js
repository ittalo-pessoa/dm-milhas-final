function mostrarErro(campoId, mensagem) {
    const elementoErro = document.getElementById(campoId);
    elementoErro.textContent = mensagem;
    elementoErro.style.display = "block";
    setTimeout(() => {
        elementoErro.style.display = "none";
    }, 3000);
}

document.getElementById('calculate').addEventListener('click',function(){


    const programaUtilizado = document.getElementById('programaUtilizado').value;

const custoJan1 = isNaN(parseFloat(document.getElementById('custoJan1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJan1').value);
const acumuloJan1 = isNaN(parseFloat(document.getElementById('acumuloJan1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJan1').value);
const custoFev1 = isNaN(parseFloat(document.getElementById('custoFev1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoFev1').value);
const acumuloFev1 = isNaN(parseFloat(document.getElementById('acumuloFev1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloFev1').value);
const custoMar1 = isNaN(parseFloat(document.getElementById('custoMar1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMar1').value);
const acumuloMar1 = isNaN(parseFloat(document.getElementById('acumuloMar1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMar1').value);
const custoAbr1 = isNaN(parseFloat(document.getElementById('custoAbr1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAbr1').value);
const acumuloAbr1 = isNaN(parseFloat(document.getElementById('acumuloAbr1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAbr1').value);
const custoMai1 = isNaN(parseFloat(document.getElementById('custoMai1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMai1').value);
const acumuloMai1 = isNaN(parseFloat(document.getElementById('acumuloMai1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai1').value);
const custoJun1 = isNaN(parseFloat(document.getElementById('custoJun1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJun1').value);
const acumuloJun1 = isNaN(parseFloat(document.getElementById('acumuloJun1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJun1').value);
const custoJul1 = isNaN(parseFloat(document.getElementById('custoJul1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJul1').value);
const acumuloJul1 = isNaN(parseFloat(document.getElementById('acumuloJul1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJul1').value);
const custoAgo1 = isNaN(parseFloat(document.getElementById('custoAgo1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAgo1').value);
const acumuloAgo1 = isNaN(parseFloat(document.getElementById('acumuloAgo1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAgo1').value);
const custoSet1 = isNaN(parseFloat(document.getElementById('custoSet1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoSet1').value);
const acumuloSet1 = isNaN(parseFloat(document.getElementById('acumuloSet1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloSet1').value);
const custoOut1 = isNaN(parseFloat(document.getElementById('custoOut1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOut1').value);
const acumuloOut1 = isNaN(parseFloat(document.getElementById('acumuloOut1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOut1').value);
const custoNov1 = isNaN(parseFloat(document.getElementById('custoNov1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoNov1').value);
const acumuloNov1 = isNaN(parseFloat(document.getElementById('acumuloNov1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloNov1').value);
const custoDez1 = isNaN(parseFloat(document.getElementById('custoDez1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoDez1').value);
const acumuloDez1 = isNaN(parseFloat(document.getElementById('acumuloDez1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloDez1').value);

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
        custoNov1 == 0 && acumuloNov1 == 0 && programaUtilizado == 0 &&
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
        custoDez1 < 0 || acumuloDez1 < 0 || programaUtilizado<0 || programaUtilizado>0
    ) 
    
     {
        mostrarErro("errorCustoJan", "Todos os valores numéricos válidos devem ser preenchidos.");
        mostrarErro("errorCustoJul", "Todos os valores numéricos válidos devem ser preenchidos.");
        return;
    }
    


    const totalCusto1 = custoJan1 + custoFev1 + custoMar1 + custoAbr1 + custoMai1 + custoJun1 + custoJul1 + custoAgo1 + custoSet1 + custoOut1 + custoNov1 + custoDez1;
    const totalAcumulo1 = acumuloJan1 + acumuloFev1 + acumuloMar1 + acumuloAbr1 + acumuloMai1 + acumuloJun1 + acumuloJul1 + acumuloAgo1 + acumuloSet1 + acumuloOut1 +
     acumuloNov1 + acumuloDez1;
    const custoMedioPorPrograma1= (totalCusto1/totalAcumulo1)*1000;

    document.getElementById('totalCusto1').innerHTML = "R$ " + totalCusto1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById('totalAcumulo1').innerHTML = "R$ " + totalAcumulo1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('custoMedioPorPrograma1').innerHTML = "R$ " + custoMedioPorPrograma1.toLocaleString("pt-BR", {maximumFractionDigits:2, minimumFractionDigits: 2 });
    document.getElementById('programa').innerHTML = programaUtilizado;
   


   




 document.getElementById('calculate2').addEventListener('click',function(){
    const custoJan2 = isNaN(parseFloat(document.getElementById('custoJan2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJan2').value);
    const acumuloJan2 = isNaN(parseFloat(document.getElementById('acumuloJan2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJan2').value);
    
    const custoFev2 = isNaN(parseFloat(document.getElementById('custoFev2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoFev2').value);
    const acumuloFev2 = isNaN(parseFloat(document.getElementById('acumuloFev2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloFev2').value);
    
    const custoMar2 = isNaN(parseFloat(document.getElementById('custoMar2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMar2').value);
    const acumuloMar2 = isNaN(parseFloat(document.getElementById('acumuloMar2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMar2').value);
    
    const custoAbr2 = isNaN(parseFloat(document.getElementById('custoAbr2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAbr2').value);
    const acumuloAbr2 = isNaN(parseFloat(document.getElementById('acumuloAbr2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAbr2').value);
    
    const custoMai2 = isNaN(parseFloat(document.getElementById('custoMai2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMai2').value);
    const acumuloMai2 = isNaN(parseFloat(document.getElementById('acumuloMai2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai2').value);
    
    const custoJun2 = isNaN(parseFloat(document.getElementById('custoJun2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJun2').value);
    const acumuloJun2 = isNaN(parseFloat(document.getElementById('acumuloJun2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJun2').value);
    
    const custoJul2 = isNaN(parseFloat(document.getElementById('custoJul2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJul2').value);
    const acumuloJul2 = isNaN(parseFloat(document.getElementById('acumuloJul2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJul2').value);
    
    const custoAgo2 = isNaN(parseFloat(document.getElementById('custoAgo2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAgo2').value);
    const acumuloAgo2 = isNaN(parseFloat(document.getElementById('acumuloAgo2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAgo2').value);
    
    const custoSet2 = isNaN(parseFloat(document.getElementById('custoSet2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoSet2').value);
    const acumuloSet2 = isNaN(parseFloat(document.getElementById('acumuloSet2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloSet2').value);
    
    const custoOut2 = isNaN(parseFloat(document.getElementById('custoOut2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOut2').value);
    const acumuloOut2 = isNaN(parseFloat(document.getElementById('acumuloOut2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOut2').value);
    
    const custoNov2 = isNaN(parseFloat(document.getElementById('custoNov2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoNov2').value);
    const acumuloNov2 = isNaN(parseFloat(document.getElementById('acumuloNov2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloNov2').value);
    
    const custoDez2 = isNaN(parseFloat(document.getElementById('custoDez2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoDez2').value);
    const acumuloDez2 = isNaN(parseFloat(document.getElementById('acumuloDez2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloDez2').value);
    const programaUtilizado2 = document.getElementById('programaUtilizado2').value;
    

    
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
        const custoMedioPorPrograma2=(totalCusto2/totalAcumulo2)*1000

        document.getElementById('totalCusto2').innerHTML = "R$ " + totalCusto2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('totalAcumulo2').innerHTML = "R$ " + totalAcumulo2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('custoMedioPorPrograma2').innerHTML = "R$ " + custoMedioPorPrograma2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById('programa2').innerHTML = programaUtilizado2;

document.getElementById('calculate3').addEventListener('click',function(){

    const custoJan3 = isNaN(parseFloat(document.getElementById('custoJan3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJan3').value);
    const acumuloJan3 = isNaN(parseFloat(document.getElementById('acumuloJan3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJan3').value);
    
    const custoFev3 = isNaN(parseFloat(document.getElementById('custoFev3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoFev3').value);
    const acumuloFev3 = isNaN(parseFloat(document.getElementById('acumuloFev3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloFev3').value);
    
    const custoMar3 = isNaN(parseFloat(document.getElementById('custoMar3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMar3').value);
    const acumuloMar3 = isNaN(parseFloat(document.getElementById('acumuloMar3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMar3').value);
    
    const custoAbr3 = isNaN(parseFloat(document.getElementById('custoAbr3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAbr3').value);
    const acumuloAbr3 = isNaN(parseFloat(document.getElementById('acumuloAbr3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAbr3').value);
    
    const custoMai3 = isNaN(parseFloat(document.getElementById('custoMai3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMai3').value);
    const acumuloMai3 = isNaN(parseFloat(document.getElementById('acumuloMai3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloMai3').value);
    
    const custoJun3 = isNaN(parseFloat(document.getElementById('custoJun3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJun3').value);
    const acumuloJun3 = isNaN(parseFloat(document.getElementById('acumuloJun3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJun3').value);
    
    const custoJul3 = isNaN(parseFloat(document.getElementById('custoJul3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJul3').value);
    const acumuloJul3 = isNaN(parseFloat(document.getElementById('acumuloJul3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloJul3').value);
    
    const custoAgo3 = isNaN(parseFloat(document.getElementById('custoAgo3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAgo3').value);
    const acumuloAgo3 = isNaN(parseFloat(document.getElementById('acumuloAgo3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloAgo3').value);
    
    const custoSet3 = isNaN(parseFloat(document.getElementById('custoSet3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoSet3').value);
    const acumuloSet3 = isNaN(parseFloat(document.getElementById('acumuloSet3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloSet3').value);
    
    const custoOut3 = isNaN(parseFloat(document.getElementById('custoOut3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOut3').value);
    const acumuloOut3 = isNaN(parseFloat(document.getElementById('acumuloOut3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloOut3').value);
    
    const custoNov3 = isNaN(parseFloat(document.getElementById('custoNov3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoNov3').value);
    const acumuloNov3 = isNaN(parseFloat(document.getElementById('acumuloNov3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloNov3').value);
    
    const custoDez3 = isNaN(parseFloat(document.getElementById('custoDez3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoDez3').value);
    const acumuloDez3 = isNaN(parseFloat(document.getElementById('acumuloDez3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('acumuloDez3').value);
    const programaUtilizado3 = document.getElementById('programaUtilizado3').value;
    
    

    
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
            const custoMedioPorPrograma3=(totalCusto3/totalAcumulo3)*1000

            document.getElementById('totalCusto3').innerHTML = "R$ " + totalCusto3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            document.getElementById('totalAcumulo3').innerHTML = "R$ " + totalAcumulo3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            document.getElementById('custoMedioPorPrograma3').innerHTML = "R$ " + custoMedioPorPrograma3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            document.getElementById('programa3').innerHTML = programaUtilizado;
            document.getElementById('programa3').innerHTML = programaUtilizado3;

            document.getElementById('calculate4').addEventListener('click',function(){

          

const quantDePontosTransfSmiles = isNaN(parseFloat(document.getElementById('quantDePontosTransf1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('quantDePontosTransf1').value);
const quantDePontosTransfAzul = isNaN(parseFloat(document.getElementById('quantDePontosTransf2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('quantDePontosTransf2').value);
const quantDePontosTransfLatamPass = isNaN(parseFloat(document.getElementById('quantDePontosTransf3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('quantDePontosTransf3').value);
const quantDePontosTransfIberia = isNaN(parseFloat(document.getElementById('quantDePontosTransf4').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('quantDePontosTransf4').value);
const quantDePontosTransfTapMilesGo = isNaN(parseFloat(document.getElementById('quantDePontosTransf5').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('quantDePontosTransf5').value);
const percentDaPromocao1 = isNaN(parseFloat(document.getElementById('percentDaPromocao1').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('percentDaPromocao1').value);
const percentDaPromocao2 = isNaN(parseFloat(document.getElementById('percentDaPromocao2').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('percentDaPromocao2').value);
const percentDaPromocao3 = isNaN(parseFloat(document.getElementById('percentDaPromocao3').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('percentDaPromocao3').value);
const percentDaPromocao4 = isNaN(parseFloat(document.getElementById('percentDaPromocao4').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('percentDaPromocao4').value);
const percentDaPromocao5 = isNaN(parseFloat(document.getElementById('percentDaPromocao5').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('percentDaPromocao5').value);
const conversorDeTransf = isNaN(parseFloat(document.getElementById('conversorDeTransf').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('conversorDeTransf').value);
const custoOpera11 = isNaN(parseFloat(document.getElementById('custoOpera11').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOpera11').value);
const custoJan21 = isNaN(parseFloat(document.getElementById('custoJan21').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJan21').value);
const custoFev21 = isNaN(parseFloat(document.getElementById('custoFev21').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoFev21').value);
const custoMarco21 = isNaN(parseFloat(document.getElementById('custoMar31').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMar31').value);
const custoAbr21 = isNaN(parseFloat(document.getElementById('custoAbr41').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAbr41').value);
const custoMai21 = isNaN(parseFloat(document.getElementById('custoMai51').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoMai51').value);
const custoJun21 = isNaN(parseFloat(document.getElementById('custoJun61').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJun61').value);
const custoJul21 = isNaN(parseFloat(document.getElementById('custoJul71').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoJul71').value);
const custoAgo21 = isNaN(parseFloat(document.getElementById('custoAgo81').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoAgo81').value);
const custoSet21 = isNaN(parseFloat(document.getElementById('custoSet91').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoSet91').value);
const custoOut21 = isNaN(parseFloat(document.getElementById('custoOut101').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoOut101').value);
const custoNov21 = isNaN(parseFloat(document.getElementById('custoNov111').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoNov111').value);
const custoDez21 = isNaN(parseFloat(document.getElementById('custoDez121').value.replace(/\./g, ""))) ? 0 : parseFloat(document.getElementById('custoDez121').value);


if (
    (quantDePontosTransfSmiles === 0 && quantDePontosTransfAzul === 0 && quantDePontosTransfLatamPass === 0 &&
     quantDePontosTransfIberia === 0 && percentDaPromocao1 === 0 && percentDaPromocao2 === 0 &&
     percentDaPromocao3 === 0 && percentDaPromocao4 === 0 && conversorDeTransf === 0)
    ||
    (quantDePontosTransfSmiles < 0 || quantDePontosTransfAzul < 0 || quantDePontosTransfLatamPass < 0 ||
     quantDePontosTransfIberia < 0 || percentDaPromocao1 < 0 || percentDaPromocao2 < 0 ||
     percentDaPromocao3 < 0 || percentDaPromocao4 < 0 || conversorDeTransf < 0)
) {
    mostrarErro("errorUsoMilhas4", "Todos os valores numéricos válidos devem ser preenchidos.");
    return;
}

            
 
document.getElementById('resultadoacumuloOpera1').innerHTML = "R$ " + totalCusto1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoacumuloOpera12').innerHTML = "R$ " + totalCusto2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoacumuloOpera13').innerHTML = "R$ " + totalCusto3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJan1').innerHTML = "R$ " + custoJan1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJan12').innerHTML = "R$ " + acumuloJan2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJan13').innerHTML = "R$ " + acumuloJan3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoFev1').innerHTML = "R$ " + custoFev1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoFev2').innerHTML = "R$ " + acumuloFev2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoFev3').innerHTML = "R$ " + acumuloFev3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMarco1').innerHTML = "R$ " + custoMar1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMarco2').innerHTML = "R$ " + acumuloMar2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMarco3').innerHTML = "R$ " + acumuloMar3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoAbril1').innerHTML = "R$ " + custoAbr1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Compras Bonificadas
document.getElementById('resultadoAbril2').innerHTML = "R$ " + acumuloAbr2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoAbril3').innerHTML = "R$ " + acumuloAbr3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMai1').innerHTML = "R$ " + custoMai1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMai2').innerHTML = "R$ " + acumuloMai2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoMai3').innerHTML = "R$ " + acumuloMai3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJun1').innerHTML = "R$ " + custoJun1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJun2').innerHTML = "R$ " + acumuloJun2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJun3').innerHTML = "R$ " + acumuloJun3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJul1').innerHTML = "R$ " + custoJul1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJul2').innerHTML = "R$ " + acumuloJul2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoJul3').innerHTML = "R$ " + acumuloJul3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoAgosto1').innerHTML = "R$ " + custoAgo1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Compras de Milhas
document.getElementById('resultadoAgosto2').innerHTML = "R$ " + acumuloAgo2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoAgosto3').innerHTML = "R$ " + acumuloAgo3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoSet1').innerHTML = "R$ " + custoSet1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoSet2').innerHTML = "R$ " + acumuloSet2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoSet3').innerHTML = "R$ " + acumuloSet3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoOut1').innerHTML = "R$ " + custoOut1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoOut2').innerHTML = "R$ " + acumuloOut2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoOut3').innerHTML = "R$ " + acumuloOut3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoNov1').innerHTML = "R$ " + custoNov1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoNov2').innerHTML = "R$ " + acumuloNov2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoNov3').innerHTML = "R$ " + acumuloNov3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoDez1').innerHTML = "R$ " + custoDez1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoDez2').innerHTML = "R$ " + acumuloDez2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('resultadoDez3').innerHTML = "R$ " + acumuloDez3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const custoAnualTodasAplicacoes= custoOpera11+totalCusto1+totalCusto2+totalCusto3
const acumuloAnualTodasAplicacoes=acumuloJan2 + acumuloJan3 +
custoFev1 +   acumuloFev2 + acumuloFev3 +
custoMar1  + acumuloMar2 + acumuloMar3 +
custoAbr1 + acumuloAbr2 + acumuloAbr3 +
custoMai1 +  acumuloMai2 + acumuloMai3 +
custoJun1 + acumuloJun2 + acumuloJun3 +
custoJul1  + acumuloJul2 + acumuloJul3 +
custoAgo1 + acumuloAgo2 + acumuloAgo3 +
custoSet1  + acumuloSet2 + acumuloSet3 +
custoOut1  + acumuloOut2 + acumuloOut3 +
custoNov1 + acumuloNov2 + acumuloNov3 +
custoDez1  + acumuloDez2 + acumuloDez3+custoJan21+custoFev21+custoMarco21+custoAbr21+custoMai21+custoJun21+
custoJul21+
custoAgo21+
custoSet21+custoOut21+custoNov21+custoDez21


document.getElementById('custoAnualTodasAplicacoes').innerHTML = "R$ " + custoAnualTodasAplicacoes.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
document.getElementById('acumuloAnualTodasAplicacoes').innerHTML = "R$ " + acumuloAnualTodasAplicacoes.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
let custoMedioDoMilheiroTodosOsProgramas; // Declara uma única vez no escopo global

if (acumuloAnualTodasAplicacoes === 0) {
    custoMedioDoMilheiroTodosOsProgramas = 0;
    document.getElementById("custoMedioDoMilheiroDoLivelo").innerHTML = "R$ " + custoMedioDoMilheiroTodosOsProgramas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
} else {
    custoMedioDoMilheiroTodosOsProgramas = (custoAnualTodasAplicacoes / acumuloAnualTodasAplicacoes) * 1000;
    document.getElementById("custoMedioDoMilheiroDoLivelo").innerHTML = "R$ " + custoMedioDoMilheiroTodosOsProgramas.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Restante do código usando custoMedioDoMilheiroTodosOsProgramas
const saldoAposTransf = acumuloAnualTodasAplicacoes - quantDePontosTransfSmiles - quantDePontosTransfAzul - quantDePontosTransfLatamPass - quantDePontosTransfIberia - quantDePontosTransfTapMilesGo;
document.getElementById('saldoAposTransf').innerHTML = "R$ " + saldoAposTransf.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const totalDeAcumuloAnual1 = quantDePontosTransfSmiles + (quantDePontosTransfSmiles * (percentDaPromocao1 / 100));
document.getElementById('resultadoTotalDeAcumuloAnual1').innerHTML = "R$ " + totalDeAcumuloAnual1.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

if (quantDePontosTransfSmiles === 0) {
    let calc = 0;
    document.getElementById("custoMedioDoMilheiroSmiles").innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
} else {
    let calc = ((custoMedioDoMilheiroTodosOsProgramas * quantDePontosTransfSmiles) / 1000) / totalDeAcumuloAnual1 * 1000;
    document.getElementById('custoMedioDoMilheiroSmiles').innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const totalDeAcumuloAnual2 = quantDePontosTransfAzul + (quantDePontosTransfAzul * (percentDaPromocao2 / 100));
document.getElementById('resultadoTotalDeAcumuloAnual2').innerHTML = "R$ " + totalDeAcumuloAnual2.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

if (quantDePontosTransfAzul === 0) {
    let calc = 0;
    document.getElementById("custoMedioDoMilheiroAzul").innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
} else {
    let calc = ((custoMedioDoMilheiroTodosOsProgramas * quantDePontosTransfAzul) / 1000) / totalDeAcumuloAnual2 * 1000;
    document.getElementById('custoMedioDoMilheiroAzul').innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const totalDeAcumuloAnual3 = quantDePontosTransfLatamPass + (quantDePontosTransfLatamPass * (percentDaPromocao3 / 100));
document.getElementById('resultadoTotalDeAcumuloAnual3').innerHTML = "R$ " + totalDeAcumuloAnual3.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

if (quantDePontosTransfLatamPass === 0) {
    let calc = 0;
    document.getElementById("custoMedioDoMilheiroLatamPass").innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
} else {
    let calc = ((custoMedioDoMilheiroTodosOsProgramas * quantDePontosTransfLatamPass) / 1000) / totalDeAcumuloAnual3 * 1000;
    document.getElementById('custoMedioDoMilheiroLatamPass').innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

const totalDeAcumuloAnual4 = (quantDePontosTransfIberia / conversorDeTransf) + ((quantDePontosTransfIberia / conversorDeTransf) * (percentDaPromocao4 / 100));
document.getElementById('resultadoTotalDeAcumuloAnual4').innerHTML = "R$ " + totalDeAcumuloAnual4.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

if (quantDePontosTransfIberia === 0) {
    let calc = 0;
    document.getElementById("custoMedioDoMilheiroIberia").innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
} else {
    const calc = ((custoMedioDoMilheiroTodosOsProgramas * quantDePontosTransfIberia) / 1000) / totalDeAcumuloAnual4 * 1000;
    document.getElementById('custoMedioDoMilheiroIberia').innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
const totalDeAcumuloAnual5 = quantDePontosTransfTapMilesGo + (quantDePontosTransfTapMilesGo * (percentDaPromocao5 / 100));
document.getElementById('resultadoTotalDeAcumuloAnual5').innerHTML = "R$ " + totalDeAcumuloAnual5.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

if (quantDePontosTransfTapMilesGo === 0) {
    let calc = 0;
    document.getElementById("custoMedioDoMilheiroTapMilesGo").innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
} else {
    let calc = ((custoMedioDoMilheiroTodosOsProgramas * quantDePontosTransfTapMilesGo) / 1000) / totalDeAcumuloAnual5 * 1000;
    document.getElementById('custoMedioDoMilheiroTapMilesGo').innerHTML = "R$ " + calc.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}



 })})})})

 

