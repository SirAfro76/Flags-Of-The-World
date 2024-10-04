var loginform = document.getElementById('login-form');
var signupform = document.getElementById('signup-form');
var account = document.getElementById('account');
var pwd = document.getElementById('pwd');

function loadscriptconfirmation() {
    console.log('script.js loaded successfully');
}
loadscriptconfirmation();

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        loginform.style.display = "none ";
        signupform.style.display = "none ";
    };
});

// Open Login Window 
function toggle_login() {
    loginform.style.display = "block";
    signupform.style.display = "none";

}

// Open Signup Window
function toggle_signup() {
    signupform.style.display = "block";
    loginform.style.display = "none";
}

// Show Password Function
function showpwd() {
    if (pwd.type === "password") {
        pwd.type = "text";
    } else {
        pwd.type = "password";
    }
}
// Unfinished
function drag(obj) {
    obj.dataTransfer.setData()
}

// Service Worker Registration
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
            console.log("Service Worker Registered Successfully:", registration);
        })
        .catch((error) => {
            console.error(`Service worker registration failed: ${error}`);
        });
} else {
    console.log("Service worker is not supported.");
}

