function handleChange(balance) {
  var spinBtn = document.getElementById('gogogo2');
  var infoText = document.getElementById('spin-info-text');

  if (balance > 0) {
    spinBtn.disabled = false; // enable spin button
    infoText.innerHTML = 'GO SPIN!'; // Show prompt for spin the button
  }
  if (balance > 5000) {
    infoText.innerHTML =
      'NO MORE THAN 5000$ IS ALLOWED TO ENTER  (ENTER LESS MONEY)'; // Show prompt for less money
    spinBtn.disabled = true; // disable spin button
  }
}
