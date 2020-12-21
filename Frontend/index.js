const mail = document.getElementById('mail');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const err = document.getElementById('error');

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneno = /^\d{10}$/;

form.addEventListener('submit',(e)=>{
    let message = [];
    
    if(!mail.value.match(mailformat)){
        message.push('Please enter a valid mail');
    }

    if(password.value.length<8 || password.value.length>20){
        message.push('The password length should be in between 8 and 20');
    }
    if(phone.value.length!=10){
        message.push('The length of phone no. should be 10');
    }
    if(!phone.value.match(phoneno)){
        message.push('Please enter a valid phone number');
    }

    if(message.length>0){
        e.preventDefault();
        swal({
            title: "Opps!",
             text: message[0],
             icon: "warning",
        });
        //err.innerText = message.join(', ')
        
    }
})