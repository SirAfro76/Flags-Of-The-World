var loginform = document.getElementById('login-form');
var signupform = document.getElementById('signup-form');
var account = document.getElementById('account');
var pwd = document.getElementById('pwd');

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered with scope: ', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed: ', error);
        });
    });
  }
  

function loadscriptconfirmation() {
    console.log('script.js loaded successfully');
} loadscriptconfirmation();

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

function showpwd() {
    if (pwd.type === "password") {
        pwd.type = "text";
    } else {
        pwd.type ="password";
    }
}

function drag(obj) {
    obj.dataTransfer.setData()
}