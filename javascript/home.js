
//logout function 
document.getElementById('logOut').addEventListener('click',function(){

    window.location.href = 'http://127.0.0.1:5500/index.html'
})
//add money function 
document.getElementById('addMoney').addEventListener('click',function(event){
 event.preventDefault()
 const moneyInput  = document.getElementById('moneyInput');
 const passwordInput = document.getElementById('passwordInput');
 const mainBalance = document.getElementById('mainBalance');
 if(passwordInput.value ==='1234'){

 const newMainBal = parseFloat(mainBalance.innerText);
 const newMoneyInput = parseFloat(moneyInput.value);
 
 mainBalance.innerText  = newMainBal + newMoneyInput;
 moneyInput.value ='';
 passwordInput.value= '';
 }
 else{
    alert('please enter the rigth Pin')
    moneyInput.value ='';
    passwordInput.value= '';
 }



})


//cashout function



document.getElementById('cashOut').addEventListener('click',function(event){
event.preventDefault();

const cashOutMoney = document.getElementById('cashoutmoneyInput');
const passPin = document.getElementById('passwords');
const mainBalance = document.getElementById('mainBalance');
if(passPin.value == '1234'){

    const newcashOut = parseFloat(cashOutMoney.value);
    const newBal = parseFloat(mainBalance.innerText);
    mainBalance.innerText = newBal - newcashOut;
    cashOutMoney.value ='';
    passPin.value ='';
}
else{
alert('please enter the rigth Pin')
}

cashOutMoney.value ='';
passPin.value ='';
})

//toggle freture add here

//cashout toggle
document.getElementById('cashOutBtn').addEventListener('click',function(){
    
    const cashOut = document.getElementById('cashoutId');
    const addMoney = document.getElementById('addMoneyId')

    cashOut.classList.remove("hidden")
    addMoney.classList.add('hidden')

})
//add money toggle
document.getElementById('addMoneyBtn').addEventListener('click',function(){
    
    const cashOut = document.getElementById('cashoutId');
    const addMoney = document.getElementById('addMoneyId')

    cashOut.classList.add("hidden")
    addMoney.classList.remove('hidden')

})