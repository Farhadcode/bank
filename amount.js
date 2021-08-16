
document.getElementById('depositBtn').addEventListener('click',depositFuntion = ()=>{

    const depositInput = document.getElementById('deposit-submit');
    const newDepositAmount = depositInput.value;
   
    // console.log(depositAmount);

    const depositTotal = document.getElementById('update-deposit');
    const previousDepositAmount = depositTotal.innerText;
    const presentDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount) ;
    depositTotal.innerText = presentDepositTotal;

    //update Balance
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceTotal = balanceTotal.innerText;
     const presentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
     balanceTotal.innerText = presentBalanceTotal;
    // clear deposite input field
    depositInput.value = '';
})

document.getElementById('withdrawBtn').addEventListener('click',withdrawFuntion =() =>{
    const withdrawInput = document.getElementById('withdraw-sibmet');
    const newWithdrawAmount = withdrawInput.value;
    
    const withdrawTotal = document.getElementById('update-withdraw');
     
    const previousWithdrawAmount = withdrawTotal.innerText;
    const presentWthdrawAmount = parseFloat(previousWithdrawAmount) +
    parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = presentWthdrawAmount;

    //total Balance update
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceTotal = balanceTotal.innerText;
     const presentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
     balanceTotal.innerText = presentBalanceTotal;



    withdrawInput.value = ""
})