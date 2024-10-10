// Função para pegar elementos do DOM por ID
function getElementsById(ids) {
    return ids.map(id => document.getElementById(id));
}

// Função para validar entradas e garantir que sejam positivas
function validarEntradas(inputs) {
    let valido = true;
    inputs.forEach(input => {
        if (Number(input.value) < 0 || input.value === "") {
            input.value = ""; // Limpa campo se for inválido
            input.style.border = "2px solid red"; // Adiciona borda vermelha para destacar
            valido = false;
        } else {
            input.style.border = "1px solid #ccc"; // Mantém borda padrão
        }
    });
    return valido;
}

// Função para realizar o cálculo genérico
function calcularValores(n1, n2, n3, n5, results) {
    const s = n1 / n3;
    const decimal = s.toFixed(2);
    const s2 = 0.02 * decimal;
    const decimal2 = s2.toFixed(2);
    const s3 = ((n1 * n2) / 1000) / decimal2;
    const decimal3 = s3.toFixed(2);
    const s4 = (((decimal3 / n5) - 1) * (-1)) * 100;
    const decimal4 = s4.toFixed(2);

    results[0].innerHTML = `${decimal}`;
    results[1].innerHTML = `${decimal2}`;
    results[2].innerHTML = `€ ${decimal3}`;
    results[3].innerHTML = `${decimal4} %`;
}

// Função principal para inicializar os cálculos
function inicializarCalculo(inputIds, resultIds) {
    const inputs = getElementsById(inputIds);
    const results = getElementsById(resultIds);
    if (validarEntradas(inputs)) {
        const [n1, n2, n3, , n5] = inputs.map(input => Number(input.value));
        calcularValores(n1, n2, n3, n5, results);
    }
}

// Funções específicas para cada grupo de inputs
function total() {
    inicializarCalculo(
        ['lec1', 'lec2', 'lec3', 'lec4', 'lec5'],
        ['res1', 'res2', 'res3', 'res4']
    );
}

function smile() {
    inicializarCalculo(
        ['sm1', 'sm2', 'sm3', 'sm4', 'sm5'],
        ['res5', 'res6', 'res7', 'res8']
    );
}

function azulFidelidade() {
    inicializarCalculo(
        ['azul1', 'azul2', 'azul3', 'azul4', 'azul5'],
        ['res9', 'res10', 'res11', 'res12']
    );
}

function latam() {
    inicializarCalculo(
        ['latam1', 'latam2', 'latam3', 'latam4', 'latam5'],
        ['res13', 'res14', 'res15', 'res16']
    );
}
