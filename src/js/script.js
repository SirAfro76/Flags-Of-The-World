function loadscriptconfirmation (){
    console.log('Script loaded successfully');
    alert('Script loaded successfully');
}
loadscriptconfirmation();

function togglelogin(){
    const signupform = document.getElementById('signup-form');
    const loginform = document.getElementById('login-form');

    loginform.style.display = "block";
    signupform.style.display = "none";

}

function togglesignup(){
    const signupform = document.getElementById('signup-form');
    const loginform = document.getElementById('login-form');

    signupform.style.display = "block";
    loginform.style.display = "none";
}

