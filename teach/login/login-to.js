

const search = new URLSearchParams(location.search);
const username = search.get('username');
const password = search.get('password');
const success = loginCheck(username, password);
if (success) {
    const successDiv = document.querySelector('.success');
    successDiv.style.display = 'block';
} else {
    const failedDiv = document.querySelector('.failed');
    failedDiv.style.display = 'block';
}