document.getElementById('admoney-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = document.getElementById('pin-number').value;
    if (pinNumber === '9285') {
        const addAmount = document.getElementById('add-amount').value;
        const myBalance = document.getElementById('my-balance').innerText;
        const AmountAdded = parseFloat(addAmount);
        const initBalance = parseFloat(myBalance)
        const newBalance = AmountAdded + initBalance;
        console.log(newBalance);
    }
    else{
        alert('Something went wrong');
    }

})