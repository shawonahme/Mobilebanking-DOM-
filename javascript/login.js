
const loginBtn =   document.getElementById('loginBtn')
loginBtn.addEventListener('click',function(event){

    event.preventDefault();

  const moblieInput =   document.getElementById('moblieInput');
  const pinInput =   document.getElementById('pinInput');

  if(moblieInput.value == '01912843658' && pinInput.value == '1234'){

    window.location.href ='html/home.html';
    moblieInput.value ='';
    pinInput.value ='';
    
  }
else{
  
    moblieInput.value ='';
    pinInput.value ='';
    alert("please enter mobile & pin")
}

})
 