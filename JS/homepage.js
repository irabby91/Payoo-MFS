// document.getElementById('admoney-btn').addEventListener('click', function (event) {
//     event.preventDefault();
//     const pinNumber = document.getElementById('pin-number').value;
//     if (pinNumber === '9285') {
//         const addAmount = document.getElementById('add-amount').value;
//         const myBalance = document.getElementById('my-balance').innerText;
//         const AmountAdded = parseFloat(addAmount);
//         const initBalance = parseFloat(myBalance)
//         const newBalance = AmountAdded + initBalance;
//         document.getElementById('my-balance').innerText = newBalance;
//         // console.log(newBalance);
//     }
//     else {
//         alert('Something went wrong');
//     }

// });

document.getElementById('Cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const pinNumber = document.getElementById('pin-number').value;
    if (pinNumber === '9285') {
        const cashOut = document.getElementById('cashOut-amount').value;
        const myBalance = document.getElementById('my-balance').innerText;
        const Amountouted = parseFloat(cashOut);
        const initBalance = parseFloat(myBalance)
        const newBalance = initBalance - Amountouted;
        document.getElementById('my-balance').innerText = newBalance;
    }


})