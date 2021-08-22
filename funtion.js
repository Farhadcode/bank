
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    inputField.value = '';
    return value;
}
getInnerTextValue = (fieldId) => {
    const fieldTag = document.getElementById(fieldId);
    const fieldValue = fieldTag.innerText;
    const result = parseFloat(fieldValue);
    return result;
}

function updataAmonut(updateId, amount) {
    //console.log(updateId, amount);
    const deposite = document.getElementById(updateId);
    const depositeValue = deposite.innerText;
    const previous = parseFloat(depositeValue);
    const total = previous + amount;
    deposite.innerText = total;

}

function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceValue = balanceTag.innerText;
    const previousBalance = parseFloat(balanceValue);

    // 2nd brick ar moday thkau kon variable use kora jay na
    //so let use kortay hobay moust be

    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    balanceTag.innerText = newBalance;
}

document.getElementById('depositBtn').addEventListener('click', function () {
    const amount = getInputValue('deposit-submit');
    if (amount > 0) {
        updataAmonut('update-deposit', amount)
        updateBalance(amount, true)

    }

})


document.getElementById('withdrawBtn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-sibmet');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updataAmonut('update-withdraw', amount)
        updateBalance(amount, false);

    }
})