document.getElementById("calculate").addEventListener("click", function () {
    
    const c2 = parseFloat(document.getElementById("c2").value); 
    const c3 = parseFloat(document.getElementById("c3").value); 
    const c4 = parseFloat(document.getElementById("c4").value); 
    const c6 = parseFloat(document.getElementById("c6").value); 
    
    if (isNaN(c2) || isNaN(c3) || isNaN(c4) || isNaN(c6)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }
    const c5 = ((c2*c4)/1000) + c3;
    const c7 = c6-c5; 
    document.getElementById("c5").innerHTML = "R$ " + c5.toFixed(2);
    document.getElementById("c7").innerHTML ="R$" + c7.toFixed(2);
    //colocar mais um if para números negativos
    //variáveis infantis
});;