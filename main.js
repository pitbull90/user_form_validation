const createAccountForm = document.getElementById('createAccountForm'),
fullname = document.getElementById('fullname'),
email = document.getElementById('email'),
username = document.getElementById('username'),
password = document.getElementById('password'),
repeatPassword = document.getElementById('repeat-password'),
terms = document.getElementById('terms');

// Event Listener for when the form is submitted and runs the Validation function
createAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ValidateForm();
})

// Validation function for all the inputs
function ValidateForm() {
    if (CheckFullName() && CheckEmail() && CheckUsername() && CheckUsername() && CheckPassword() &&  CheckReapeatPassword() && Checkterms()) {
        alert('Valid');
    }
}

// Validation for the Full Name input
function CheckFullName() {
    const fullNameValue = fullname.value.trim();
    if (fullNameValue === '') {
        setSuccessErrorMessges(fullname, 'Please Enter Full Name');
        return false;
    } else {
        setSuccessErrorMessges(fullname, '');
        return true;
    }
    
}

function CheckEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setSuccessErrorMessges(email, 'Please enter your email');
        return false;
    } else {
        setSuccessErrorMessges(email, '');
        return true;
    }
}

function CheckUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        setSuccessErrorMessges(username, 'Please enter your username');
        return false;
    } else {
        setSuccessErrorMessges(username, '');
        return true;
    }
}

function CheckPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        setSuccessErrorMessges(password, 'Please enter your a password');
        return false;
    } else {
        setSuccessErrorMessges(password, '');
        return true;
    }
}

function CheckReapeatPassword() {
    const repeatPasswordValue = repeatPassword.value.trim();
    if (repeatPasswordValue === '') {
        setSuccessErrorMessges(repeatPassword, 'Please enter your a password');
        return false;
    } else {
        setSuccessErrorMessges(repeatPassword, '');
        return true;
    }
}

function Checkterms() {
    // const termsValue = terms.value.trim();
    if (!terms.checked) {
        setSuccessErrorMessges(terms, 'Please accept Terms and Condition')
        return false;
        
    } else {
        setSuccessErrorMessges(terms, '');
        return true;
    }
}

const setSuccessErrorMessges = (input, message) => {
    const formControl = input.parentElement;

    if (message === '') {
        formControl.querySelector
    }

    if (message === '') {
        formControl.querySelector('img').setAttribute('src', 'assets/y_icon.png');
        formControl.querySelector('small').innerText = '';
    } else {
        formControl.querySelector('img').setAttribute('src', 'assets/x_icon.png');
        formControl.querySelector('small').innerText = message;
    }
}



