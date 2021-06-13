function handleBalance(balance) {
  var spinBtn = document.getElementById('gogogo2');
  var infoText = document.getElementById('spin-info-text');

  if (balance <= 0) {
    spinBtn.disabled = true;
    infoText.innerHTML = 'Please, insert money to start.';
  }
  if (balance > 0) {
    spinBtn.disabled = false;
    infoText.innerHTML = 'GO SPIN!';
  
}
