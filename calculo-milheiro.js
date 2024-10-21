document.getElementById('calculate').addEventListener('click', function() {
  // Pegando os valores inseridos e substituindo o ponto (.) por nada
  const valorpm = parseFloat(document.getElementById('valorpm').value.replace('.', '').replace(',', '.')) || 0;
  const quantidadepm = parseFloat(document.getElementById('quantidadepm').value.replace('.', '').replace(',', '.')) || 0;

  // Pega o elemento da mensagem de erro
  const errorMessage = document.getElementById('error-message');
  
  // Verifica se algum dos valores é zero ou negativo
  if (valorpm <= 0 || quantidadepm <= 0) {
      errorMessage.style.display = 'block'; // Exibe a mensagem de erro
  } else {
      errorMessage.style.display = 'none';  // Oculta a mensagem de erro

      // Cálculo
      const resultshow = valorpm / quantidadepm * 1000;

      // Exibindo o resultado com formato adequado
      document.getElementById('resultshow').innerHTML = "R$ " + resultshow.toFixed(2).replace('.', ',');
  }
});