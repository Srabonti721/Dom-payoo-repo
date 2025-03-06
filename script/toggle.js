
document.getElementById("cashout").style.display="none";
document.getElementById("add-mony-card").addEventListener('click',function(){
    document.getElementById("addmony").style.display="block";
    document.getElementById("cashout").style.display="none";
})
document.getElementById("cash-out-card").addEventListener('click',function(){
    document.getElementById("addmony").style.display="none";
    document.getElementById("cashout").style.display="block";
})