function handleChange(balance) {
  var gameBalance = balance; // Current balance
  var spinBtn = document.getElementById('gogogo2');
  var infoText = document.getElementById('spin-info-text');

<<<<<<< HEAD
  if (gameBalance > 0) {
    spinBtn.disabled = false;
    infoText.innerHTML = 'GO SPIN!';
=======
  if (balance > 0) {
    spinBtn.disabled = false; // enable spin button
    infoText.innerHTML = 'GO SPIN!'; // Show prompt for spin the button
>>>>>>> temp
  }
  if (gameBalance > 5000) {
    infoText.innerHTML =
<<<<<<< HEAD
      'NO MORE THAN 5000$ IS ALLOWED TO ENTER (PLEASE TRY AGAIN)';
    spinBtn.disabled = true;
=======
      'NO MORE THAN 5000$ IS ALLOWED TO ENTER  (ENTER LESS MONEY)'; // Show prompt for less money
    spinBtn.disabled = true; // disable spin button
>>>>>>> temp
  }
}

export { handleChange };
