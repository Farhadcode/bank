
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

    const previous = getInnerTextValue(updateId);
    const total = previous + amount;
    document.getElementById(updateId).innerText = total;

}

function updateBalance(amount, isAdding) {
    // const balanceTag = ;
    // const balanceValue = balanceTag.innerText;
    // parseFloat(balanceValue);
    const previousBalance = getInnerTextValue('balance-total')

    // 2nd brick ar moday thkau kon variable use kora jay na
    //so let use kortay hobay moust be

    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
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