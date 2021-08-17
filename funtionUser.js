function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
     const newInputAmount = InputField.value;
     InputField.value = '';
     return newInputAmount;
}

function getUpdat(updateID , newAmount) {
    const depositTotal = document.getElementById(updateID);
    const previousAmount = depositTotal.innerText;
    const presentTotal =parseFloat (previousAmount) +parseFloat(newAmount) ;
    depositTotal.innerText = presentTotal;
   return depositTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const previousTotalAmount = balanceTotal.innerText;
    return previousTotalAmount;
 }

function updatTotalBalance(newAmount,isAmount) {
      
    const balanceTotal = document.getElementById('balance-total');
    //  const previousTotalAmount = balanceTotal.innerText;

   const previousTotalAmount = getCurrentBalance() ;
    
    if(isAmount == true){
        const presentTotalAmount = parseFloat(previousTotalAmount) + parseFloat(newAmount);
        balanceTotal.innerText = presentTotalAmount;
    }
    else{
        const presentTotalAmount = parseFloat(previousTotalAmount) - parseFloat(newAmount);
        balanceTotal.innerText = presentTotalAmount;
    }
  return balanceTotal;

//    function getCurrentBalance() {
//     const balanceTotal = document.getElementById("balance-total");
//     const previousTotalAmount = balanceTotal.innerText;
//     return previousTotalAmount;
//  }
   
}


document.getElementById('depositBtn').addEventListener('click',depositFuntion = ()=>{
  
    const depositAmount = getInputValue('deposit-submit');
    
       if (depositAmount > 0 ) {
        getUpdat('update-deposit' , depositAmount);
        updatTotalBalance(depositAmount,true);
       }


   
});

document.getElementById('withdrawBtn').addEventListener('click',withdrawFuntion =() =>{

    const withdrawAmount = getInputValue('withdraw-sibmet');
    //   const currentBalance = getCurrentBalance();
   
    
      
        if (withdrawAmount > 0) {

          getUpdat('update-withdraw', withdrawAmount);
          updatTotalBalance( withdrawAmount ,false);
       }

    
});