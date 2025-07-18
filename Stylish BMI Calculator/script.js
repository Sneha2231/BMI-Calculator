function calculateBMI() {
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const bmiResult = document.getElementById('bmiResult');
  const conditionText = document.getElementById('conditionText');

  if (!height || !weight || height <= 0 || weight <= 0) {
    bmiResult.textContent = '--';
    conditionText.textContent = 'Please enter valid numbers!';
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  bmiResult.textContent = `Your BMI: ${bmi.toFixed(2)}`;

  if (bmi < 18.5) {
    conditionText.textContent = 'Status: Underweight';
  } else if (bmi < 24.9) {
    conditionText.textContent = 'Status: Normal weight';
  } else if (bmi < 29.9) {
    conditionText.textContent = 'Status: Overweight';
  } else {
    conditionText.textContent = 'Status: Obese';
  }
}