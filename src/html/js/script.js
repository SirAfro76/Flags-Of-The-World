function loadscriptconfirmation() {
    alert('script.js loaded successfully');
    console.log('script.js loaded successfully');
} loadscriptconfirmation();

let loginform;
let signupform;

function ignite() {
    loginform = document.getElementById('login-form');
    signupform = document.getElementById('signup-form');
    account = document.getElementById('account');
} ignite();

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        loginform.style.display = "none ";
        signupform.style.display = "none ";
    };
});

function toggle_login() {
    loginform.style.display = "block";
    signupform.style.display = "none";

}

function toggle_signup() {
    signupform.style.display = "block";
    loginform.style.display = "none";
}

function toggle_account() {
    alert('account button clicked');
}
