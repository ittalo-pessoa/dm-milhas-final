const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Função para gerar inputs e colunas para os meses
function gerarTabela() {
    const primeiraParte = document.getElementById('primeira-parte');
    const segundaParte = document.getElementById('segunda-parte');

    meses.slice(0, 6).forEach((mes, index) => {
        primeiraParte.innerHTML += `
            <tr>
                <td class="mes-col">${mes}</td>
                <td><input type="number" class="form-control" id="custo-${index}" min="0"></td>
                <td><input type="number" class="form-control" id="pontos-${index}" min="0"></td>
            </tr>
        `;
    });

    meses.slice(6, 12).forEach((mes, index) => {
        segundaParte.innerHTML += `
            <tr>
                <td class="mes-col">${mes}</td>
                <td><input type="number" class="form-control" id="custo-${index + 6}" min="0"></td>
                <td><input type="number" class="form-control" id="pontos-${index + 6}" min="0"></td>
            </tr>
        `;
    });
}

function calcularTotal() {
    let totalCusto = 0;
    let totalPontos = 0;

    for (let i = 0; i < 12; i++) {
        const custoInput = document.getElementById(`custo-${i}`);
        const pontosInput = document.getElementById(`pontos-${i}`);

        let custo = parseFloat(custoInput.value) || 0;
        let pontos = parseFloat(pontosInput.value) || 0;

        // Verificação de valores negativos
        if (custo < 0 || pontos < 0) {
            if (custo < 0) {
                custoInput.classList.add('erro');
                custoInput.value = '';
            } else {
                custoInput.classList.remove('erro');
                custoInput.classList.add('correto');
            }

            if (pontos < 0) {
                pontosInput.classList.add('erro');
                pontosInput.value = '';
            } else {
                pontosInput.classList.remove('erro');
                pontosInput.classList.add('correto');
            }

            continue; // Não soma valores negativos
        } else {
            custoInput.classList.remove('erro');
            pontosInput.classList.remove('erro');
            custoInput.classList.add('correto');
            pontosInput.classList.add('correto');
        }

        totalCusto += custo;
        totalPontos += pontos;
    }

    document.getElementById('total-custo').innerText = totalCusto;
    document.getElementById('total-pontos').innerText = totalPontos;
}

// Gera a tabela ao carregar a página
gerarTabela();