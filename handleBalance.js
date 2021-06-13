function handleChange(balance) {
  var gameBalance = balance; // Current balance
  var spinBtn = document.getElementById('gogogo2');
  var infoText = document.getElementById('spin-info-text');

  if (gameBalance > 0) {
    spinBtn.disabled = false;
    infoText.innerHTML = 'GO SPIN!';
  }
  if (gameBalance > 5000) {
    infoText.innerHTML =
      'NO MORE THAN 5000$ IS ALLOWED TO ENTER (PLEASE TRY AGAIN)';
    spinBtn.disabled = true;
  }
}

export { handleChange };
