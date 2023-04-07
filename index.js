const form = document.getElementById('form');
const username = document.getElementById('firstName');
const username2 = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
// const password2 = document.getElementById('password2');


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const usernameValue2 = username2.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    // const password2Value = password2.value.trim();
    // name check
    if(usernameValue === '') {
        setError(username, 'Username is required')
    }else {
        setSuccess(username);
    }

    // name2 check
    if(usernameValue2 === '') {
        setError(username2, 'Username is required')
    }else {
        setSuccess(username2);
    }
    // mail check
    if(emailValue === '') {
        setError(email, 'Email is required');
    }else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    }else {
        setSuccess(email);
    }
    // password check
    if (passwordValue === ''){
        setError(password, 'Password is required');
    }else if(passwordValue.length < 8){
        setError(password, 'Password must be at least 8 characters.');
    }else{
        setSuccess(password);
    }
    // password confirmation
    // if(password2Value === ''){
    //     setError(password2, 'Please confirm your password');
    // }else if (password2Value !== passwordValue){
    //     setError(password2, 'Password doesnt match');
    // }else {
    //     setSuccess(password2);
    // }

}



