
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('Account-Number').value;
    const pin = document.getElementById('Pin').value;
    const convertedpin = parseInt(pin)
    if (accountNumber.length === 11) {
        if (convertedpin === 1234) {
            console.log('pin thik ase');
        } else {
            console.log('pin thik nai')
        }
    }
    else {
        console.log('need a valid account number');
    }
})