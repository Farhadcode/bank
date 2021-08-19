function getInputValue(inputId){
    const InputField = document.getElementById(inputId);
     const newInputAmount = InputField.value;
     InputField.value = '';
     return newInputAmount;
}

function getUpdatField(updateID , newAmount) {
    const depositTotal = document.getElementById(updateID);
    const previousAmount = depositTotal.innerText;
    const presentTotal =parseFloat (previousAmount) +parseFloat(newAmount) ;
    depositTotal.innerText = presentTotal;
   return depositTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const previousTotalText = balanceTotal.innerText;
    const  previousTotalAmount = parseFloat(previousTotalText);
    return previousTotalAmount;
 }

function updatTotalBalance(newAmount,isAmount) {
      
    const balanceTotal = document.getElementById('balance-total');
    //  const previousTotalAmount = balanceTotal.innerText;

   const previousTotalAmount = getCurrentBalance() ;
    
    if(isAmount == true){
        balanceTotal.innerText   = previousTotalAmount + parseFloat( newAmount);
       
    }
    else{
        balanceTotal.innerText = previousTotalAmount - parseFloat( newAmount);
       
    }
   
}


document.getElementById('depositBtn').addEventListener('click',depositFuntion = ()=>{
  
    const depositAmount = getInputValue('deposit-submit');
    
       if (depositAmount > 0 ) {
        getUpdatField('update-deposit' , depositAmount);
        updatTotalBalance(depositAmount,true);
       }


   
});

document.getElementById('withdrawBtn').addEventListener('click',withdrawFuntion =() =>{

    const withdrawAmount = getInputValue('withdraw-sibmet');
      const currentBalance = getCurrentBalance();
   
    
       if (withdrawAmount>0 && withdrawAmount < currentBalance) {
          getUpdatField('update-withdraw', withdrawAmount);
           updatTotalBalance( withdrawAmount ,false);
       }
       if( withdrawAmount > currentBalance){
           console.log('You Balance not enough');
       }
    
    
});