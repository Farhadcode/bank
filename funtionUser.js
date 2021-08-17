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

function updatTotalBalance(newAmount,isAmount) {
    const balanceTotal = document.getElementById('balance-total');
    const previousTotalAmount = balanceTotal.innerText;
    
    if(isAmount == true){
        const presentTotalAmount = parseFloat(previousTotalAmount) + parseFloat(newAmount);
        balanceTotal.innerText = presentTotalAmount;
    }
    else{
        const presentTotalAmount = parseFloat(previousTotalAmount) - parseFloat(newAmount);
        balanceTotal.innerText = presentTotalAmount;
    }
  return balanceTotal;
   
}


document.getElementById('depositBtn').addEventListener('click',depositFuntion = ()=>{
  
    const newDepositAmount = getInputValue('deposit-submit');

    getUpdat('update-deposit' , newDepositAmount);
    updatTotalBalance(newDepositAmount,true);
});

document.getElementById('withdrawBtn').addEventListener('click',withdrawFuntion =() =>{

    const newWithdrawAmount = getInputValue('withdraw-sibmet');
    getUpdat('update-withdraw', newWithdrawAmount);
    updatTotalBalance( newWithdrawAmount ,false);
});