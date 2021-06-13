function handleChange(balance) {
  var spinBtn = document.getElementById('gogogo2');
  var infoText = document.getElementById('spin-info-text');

  if (balance > 0) {
    spinBtn.disabled = false;
    infoText.innerHTML = 'GO SPIN!';
  }
  if (balance > 5000) {
    infoText.innerHTML =
      'NO MORE THAN 5000$ IS ALLOWED TO ENTER  (ENTER LESS MONEY)';
    spinBtn.disabled = true;
  }
}

if (balance == 0) {
  spinBtn.disabled = true;
  infoText.innerHTML = 'ENTER MONEY FROM 0 TO 5000(MAX) TO START';
}
