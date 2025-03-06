
document.getElementById('add-mony').addEventListener('click',function(event){
    event.preventDefault();
// const accountNumber = document.getElementById('Account-Number').value;
// const convertedAccountNumber = parseInt(accountNumber);
// console.log(typeof convertedAccountNumber)
const amount = document.getElementById('Amount').value;
const convertedAmountNumber = parseFloat(amount);
// console.log(typeof convertedAmountNumber)
const pinNumber = document.getElementById('pin-number').value;
const convertedPinNumber = parseInt(pinNumber)
// console.log(typeof convertedPinNumber);
const mainBalance = document.getElementById('main-balance').innerText;
const convertedMainBalance = parseFloat(mainBalance);
// console.log(typeof convertedMainBalance);
if(convertedPinNumber===1234){
    // console.log('kaj hose');
    const sum = convertedMainBalance + convertedAmountNumber;
    document.getElementById('main-balance').innerText = sum;
    
}else{
    alert('pin numer thik nai. pin thik koro');
    
}

})