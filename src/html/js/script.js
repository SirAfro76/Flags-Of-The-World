function loadscriptconfirmation() {
    console.log('script.js loaded successfully');
    alert('script.js loaded successfully');
}

let loginform;
let signupform;

function ignite() {
    loginform = document.getElementById('login-form');
    signupform = document.getElementById('signup-form');
}
ignite();

loadscriptconfirmation();

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        loginform.style.display = "none ";
        signupform.style.display = "none ";
    };
});


function togglelogin() {
    loginform.style.display = "block";
    signupform.style.display = "none";

}

function togglesignup() {
    signupform.style.display = "block";
    loginform.style.display = "none";
}
