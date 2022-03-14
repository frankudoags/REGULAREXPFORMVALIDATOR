const names = document.getElementById('name'),
        zip = document.getElementById('zip'),
        email = document.getElementById('email'),
        phone = document.getElementById('phone');


        names.addEventListener('blur',validateName);
        zip.addEventListener('blur',validateZip);
        email.addEventListener('blur',validateEmail);
        phone.addEventListener('blur',validatePhone);

function validateName() {
const re = /^[a-zA-Z]{2,20}$/i;

if(!re.test(names.value)){
    names.classList.add('is-invalid');
}else {
    names.classList.remove('is-invalid');
}
}

function validateEmail() {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    }else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const re = /^\(?\d{3,5}\)?[-. ]?\d{3,5}[-. ]?\d{4}$/i;

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else {
        phone.classList.remove('is-invalid');
    }
}
 function validateZip() {
    const re = /^[0-9]{3,7}(-[0-9]{4})?$/i;

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    }else {
        zip.classList.remove('is-invalid');
    }
 }