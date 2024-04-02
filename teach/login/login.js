

const form = document.querySelector('form');
const errorMessageDiv = document.querySelector('.error-message');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const usernameInput = document.querySelector('#user')
    const passwordInput = document.querySelector('#pwd')
    const username = usernameInput.value;
    const password = passwordInput.value;
    const succeed = loginCheck(username, password);
    if (succeed) {
        form.style.display = 'none';
        const loginInSucceedDiv = document.querySelector('.login-in-succeed');
        loginInSucceedDiv.style.display = 'block';
        const loginUserSpan = document.querySelector('.login-user');
        loginUserSpan.textContent = username
    } else {

        errorMessageDiv.style.display = 'block';
    }
})

const userInput = document.querySelector('#user');
const pwdInput = document.querySelector('#pwd');

function onInputFocus() {
    errorMessageDiv.style.display = 'none'
}
userInput.addEventListener('focus', onInputFocus)
pwdInput.addEventListener('focus', onInputFocus)