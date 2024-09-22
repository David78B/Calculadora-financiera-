// Función para calcular porcentaje
function calculatePercentage() {
  const amount = parseFloat(document.getElementById('amount').value);
  const percentage = parseFloat(document.getElementById('percentage').value);
  
  if (isNaN(amount) || isNaN(percentage)) {
    document.getElementById('percentage-result').textContent = "Por favor, ingresa valores válidos.";
    return;
  }

  const result = (amount * percentage) / 100;
  document.getElementById('percentage-result').textContent = `El ${percentage}% de ${amount} es: ${result}`;
}

// Función para calcular interés compuesto
function calculateCompoundInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100;
  const years = parseFloat(document.getElementById('years').value);
  const compounds = parseFloat(document.getElementById('compounds').value);

  if (isNaN(principal) || isNaN(rate) || isNaN(years) || isNaN(compounds)) {
    document.getElementById('compound-result').textContent = "Por favor, ingresa valores válidos.";
    return;
  }

  const compoundInterest = principal * Math.pow((1 + rate / compounds), compounds * years);
  const finalAmount = compoundInterest.toFixed(2);
  
  document.getElementById('compound-result').textContent = `El monto final después de ${years} años es: $${finalAmount}`;
}
