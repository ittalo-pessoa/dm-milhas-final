document.getElementById('calculate').addEventListener('click', function() {xc 
  const valorpm = parseFloat(document.getElementById('valorpm').value.replace('.', '').replace(',', '.')) || 0;
  const quantidadepm = parseFloat(document.getElementById('quantidadepm').value.replace('.', '').replace(',', '.')) || 0;
  const errorMessage = document.getElementById('error-message');
  if (valorpm <= 0 || quantidadepm <= 0) {
      errorMessage.style.display = 'block';
  } else {
      errorMessage.style.display = 'none';
      const resultshow = valorpm / quantidadepm * 1000;
      document.getElementById('resultshow').innerHTML = "R$ " + resultshow.toFixed(2).replace('.', ',');
  }
});