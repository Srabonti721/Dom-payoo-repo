
document.getElementById("cash-out").addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById("cashout-pin-number").value;
    const convertedpin = parseInt(pin);
    const cashoutAmonut = document.getElementById("cashout-Amount").value;
    const convertedCashoutAmount = parseFloat(cashoutAmonut);
    const mainaBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainaBalance);
    if (convertedpin===1234){
const add = convertedMainBalance -  convertedCashoutAmount;
document.getElementById("main-balance").innerText=add;
    }else{
        alert('enter a valid pin for cashout')
    }
})