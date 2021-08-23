
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
/*
function newUpdateBalance(amount) {
    const dep = getInnerTextValue('update-deposit');
    const wit = getInnerTextValue('update-withdraw');
    const bal = getInnerTextValue('balance-total');
    const newBalance = dep - wit + bal;
    document.getElementById('balance-total').innerText = newBalance;
}
*/


function updateBalance(amount, isAdding) {

    const previousBalance = getInnerTextValue('balance-total')
    //const balance = getInnerTextValue('balance-total')
    //console.log(balance);
    // const depBalance = getInnerTextValue('update-deposit');
    // const witBalance = getInnerTextValue('update-withdraw');
    // const newBalance = balance + (depBalance + amount) - (witBalance - amount);

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
        // newUpdateBalance(amount)
        updateBalance(amount, true)

    }

})


document.getElementById('withdrawBtn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-sibmet');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updataAmonut('update-withdraw', amount)
        //newUpdateBalance(amount)
        updateBalance(amount, false);

    }
})