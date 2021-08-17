
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

    // const depositInput = document.getElementById('deposit-submit');
    // const newDepositAmount = depositInput.value;
   
    // console.log(depositAmount);

     const newDepositAmount = getInputValue('deposit-submit');

    // get current deposit

    // const depositTotal = document.getElementById('update-deposit');
    // const previousDepositAmount = depositTotal.innerText;
    // const presentDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount) ;
    // depositTotal.innerText = presentDepositTotal;

     getUpdat('update-deposit' , newDepositAmount);

    //update Balance
    //  const balanceTotal = document.getElementById('balance-total');
    //  const previousBalanceTotal = balanceTotal.innerText;
     updatTotalBalance(newDepositAmount,true);

    //  const presentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    //  balanceTotal.innerText = presentBalanceTotal;

    // clear deposite input field
    // depositInput.value = '';
})

document.getElementById('withdrawBtn').addEventListener('click',withdrawFuntion =() =>{
    // const withdrawInput = document.getElementById('withdraw-sibmet');
    // const newWithdrawAmount = withdrawInput.value;

      const newWithdrawAmount = getInputValue('withdraw-sibmet');

     
    
    // const withdrawTotal = document.getElementById('update-withdraw');
     
    // const previousWithdrawAmount = withdrawTotal.innerText;
    // const presentWthdrawAmount = parseFloat(previousWithdrawAmount) +
    // parseFloat(newWithdrawAmount);
    // withdrawTotal.innerText = presentWthdrawAmount;

    getUpdat('update-withdraw', newWithdrawAmount);

    //total Balance update
    //  const balanceTotal = document.getElementById('balance-total');
    //  const previousBalanceTotal = balanceTotal.innerText;
    //  const presentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    //  balanceTotal.innerText = presentBalanceTotal;

     updatTotalBalance( newWithdrawAmount ,false);



    // withdrawInput.value = ""
})