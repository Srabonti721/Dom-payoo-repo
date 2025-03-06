
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('Account-Number').value;
    const pin = document.getElementById('Pin').value;
    const convertedpin = parseInt(pin)
    if (accountNumber.length === 11) {
        if (convertedpin === 1234) {
      window.location.href='./main.html'
        } else {
            alert('pin thik nai')
        }
    }
    else {
      alert('need a valid account number');
    }
})