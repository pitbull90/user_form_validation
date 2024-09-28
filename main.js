const createAccountForm = document.getElementById('createAccountForm'),
fullname = document.getElementById('fullname'),
email = document.getElementById('email'),
username = document.getElementById('username'),
password = document.getElementById('password'),
repeatPassword = document.getElementById('repeat-password');

createAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ValidateForm();
})

function ValidateForm() {
    if (CheckFullName()) {
        alert('Valid');
    }
}
function CheckFullName() {
    const fullNameValue = fullname.value.trim();
    if (fullNameValue === '') {
        alert('Please Enter Full Name');
        return false;
    } else {
        return true;
    }
    
}
function CheckEmail() {
    
}
function CheckPassword() {
    
}
function CheckReapeatPassword() {
    
}