// console.log('Attached')
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber)

    if(phoneNumber==='01604' && pinNumber==='9285'){
        console.log('Logging In');
        document.location.href="/homepage.html";
    }
    else{
        alert('You have inputed wrong Phone or Pin');
    }
});