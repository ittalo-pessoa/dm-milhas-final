document.getElementById('calculate').addEventListener('click', function(){
    const valorpm = parseFloat(document.getElementById('valorpm').value) || 0;
    const quantidadepm = parseFloat(document.getElementById('quantidadepm').value) || 0;

    const resultshow = valorpm / quantidadepm * 1000;
  document.getElementById('resultshow').innerHTML = "R$ " + resultshow.toFixed(2).replace('.', ',');
});