function calculateTotals() {
    // IDs dos meses para cada semestre
    const firstSemester = ["jan", "feb", "mar", "apr", "may", "jun"];
    const secondSemester = ["jul", "aug", "sep", "oct", "nov", "dec"];

    let totalCost1st = 0, totalPoints1st = 0;
    let totalCost2nd = 0, totalPoints2nd = 0;

    // Calcular os totais do 1º semestre
    firstSemester.forEach(month => {
        let cost = parseFloat(document.getElementById(`cost-${month}`).value) || 0;
        let points = parseFloat(document.getElementById(`points-${month}`).value) || 0;
        totalCost1st += cost;
        totalPoints1st += points;
    });

    // Calcular os totais do 2º semestre
    secondSemester.forEach(month => {
        let cost = parseFloat(document.getElementById(`cost-${month}`).value) || 0;
        let points = parseFloat(document.getElementById(`points-${month}`).value) || 0;
        totalCost2nd += cost;
        totalPoints2nd += points;
    });

    // Exibir os totais
    document.getElementById("total-cost-1st").textContent = totalCost1st.toFixed(2);
    document.getElementById("total-points-1st").textContent = totalPoints1st.toFixed(2);
    document.getElementById("total-cost-2nd").textContent = totalCost2nd.toFixed(2);
    document.getElementById("total-points-2nd").textContent = totalPoints2nd.toFixed(2);
}