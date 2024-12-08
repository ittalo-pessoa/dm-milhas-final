// Função para pegar elementos do DOM por ID
function getElementsById(ids) {
    return ids.map(id => document.getElementById(id));
}

// Função para validar entradas e garantir que sejam positivas
function validarEntradas(inputs, results) {
    let valido = true;

    inputs.forEach(input => {
        if (Number(input.value) < 0 || input.value === "") {
            // Marca os campos de saída com bordas vermelhas para indicar erro
            results.forEach(result => {
                result.innerHTML = "Digite todos os valores válidos!";
            });
            
            valido = false;
        } else {
           a=0
        }
    });

    if (valido) {
        // Remove bordas de erro dos campos de saída se as entradas forem válidas
        a=1
    }

    return valido;
}

// Função para impedir a entrada de letras ou caracteres especiais
function impedirLetras(input) {
    input.value = input.value.replace(/[^0-9.]/g, ''); // Permite apenas números e pontos
}

// Função para vincular o evento de impedir letras aos campos de entrada
function vincularEventosDeEntrada(ids) {
    ids.forEach(id => {
        const input = document.getElementById(id);
        input.oninput = function() {
            impedirLetras(this); // Chama a função para impedir a entrada de letras
        };
    });
}

// Função para realizar o cálculo genérico e exibir com vírgula
function calcularValores(n1, n2, n3, n5, results) {
    const s = n1 / n3;
    const decimal = s.toFixed(2).replace('.', ',');
    const s2 = 0.02 * s;
    const decimal2 = s2.toFixed(2).replace('.', ',');
    const s3 = ((n1 * n2) / 1000) / s2;
    const decimal3 = s3.toFixed(2).replace('.', ',');
    const s4 = (((s3 / n5) - 1) * (-1)) * 100;
    const decimal4 = s4.toFixed(2).replace('.', ',');

    // Atualiza os resultados e garante que as bordas sejam padrão
    results[0].innerHTML = `${decimal}`;
    results[1].innerHTML = `${decimal2}`;
    results[2].innerHTML = `€ ${decimal3}`;
    results[3].innerHTML = `${decimal4} %`;

    results.forEach(result => result.style.border = "1px solid #ccc");
}

// Função principal para inicializar os cálculos
function inicializarCalculo(inputIds, resultIds) {
    const inputs = getElementsById(inputIds);
    const results = getElementsById(resultIds);
    if (validarEntradas(inputs, results)) {
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

// Vinculando a função impedirLetras aos inputs relevantes
vincularEventosDeEntrada(['lec1', 'lec2', 'lec3', 'lec4', 'lec5']);
vincularEventosDeEntrada(['sm1', 'sm2', 'sm3', 'sm4', 'sm5']);
vincularEventosDeEntrada(['azul1', 'azul2', 'azul3', 'azul4', 'azul5']);
vincularEventosDeEntrada(['latam1', 'latam2', 'latam3', 'latam4', 'latam5']);
