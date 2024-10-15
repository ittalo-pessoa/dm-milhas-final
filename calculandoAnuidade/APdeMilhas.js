// Função para validar se um número é maior que um valor mínimo
function validarInput(input, min, max = Infinity) {
    const value = Number(input.value);
    if (value < min || value > max || isNaN(value)) {
        input.value = ""; // Limpa o campo em caso de valor inválido
        input.style.border = "2px solid red"; // Destaque visual
        return false;
    }
    input.style.border = "1px solid #ccc"; // Remove destaque se o valor for válido
    return true;
}

// Função para realizar os cálculos com base nos inputs
function calcularValores(n1, n2, n3, n4, n5, n6, n7) {
    const s = n1 * n2;
    const s2 = s / n3;
    const decimal = s2.toFixed(2);
    const s3 = decimal * n4;
    const decimal2 = s3.toFixed(2);
    const s4 = s3 + ((n5 / 100) * s3);
    const s5 = (0.001 * n6) * s4;
    const s6 = s5 - n7;

    return {
        s: s.toFixed(2),
        decimal: decimal,
        decimal2: decimal2,
        s4: s4.toFixed(2),
        s5: s5.toFixed(2),
        s6: s6.toFixed(2)
    };
}

// Função principal que controla a execução
function total() {
    // Coleta dos elementos de entrada
    const tn1 = document.getElementById('tex1');
    const tn2 = document.getElementById('tex2');
    const tn3 = document.getElementById('tex3');
    const tn4 = document.getElementById('tex4');
    const tn5 = document.getElementById('tex5');
    const tn6 = document.getElementById('tex6');
    const tn7 = document.getElementById('tex7');

    // Validações
    const validInputs = [
        validarInput(tn1, 0),
        validarInput(tn2, 0, 12), // Limita n2 entre 0 e 12
        validarInput(tn3, 0),
        validarInput(tn4, 0),
        validarInput(tn5, 0),
        validarInput(tn6, 0),
        validarInput(tn7, 0)
    ];

    // Se algum input for inválido, a função é interrompida
    if (validInputs.includes(false)) {
        return;
    }

    // Se todas as entradas forem válidas, realiza os cálculos
    const n1 = Number(tn1.value);
    const n2 = Number(tn2.value);
    const n3 = Number(tn3.value);
    const n4 = Number(tn4.value);
    const n5 = Number(tn5.value);
    const n6 = Number(tn6.value);
    const n7 = Number(tn7.value);

    const resultados = calcularValores(n1, n2, n3, n4, n5, n6, n7);

    // Atualiza os resultados na página
    document.getElementById('res1').innerHTML = resultados.s;
    document.getElementById('res2').innerHTML = resultados.decimal;
    document.getElementById('res3').innerHTML = resultados.decimal2;
    document.getElementById('res4').innerHTML = resultados.s4;
    document.getElementById('res5').innerHTML = resultados.s5;
    document.getElementById('res6').innerHTML = resultados.s6;

    // Verifica se o lucro (s6) é positivo ou negativo e altera a cor da borda
    const res6Element = document.getElementById('res6');
    if (resultados.s6 > 0) {
        res6Element.style.border = "2px solid green";  // Lucro positivo: verde
    } else {
        res6Element.style.border = "2px solid red";  // Prejuízo: vermelho
    }
}
