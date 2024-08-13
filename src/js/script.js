function loadscriptconfirmation (){
    console.log('JavaScript script has been successfully loaded.');
    alert('JavaScript script has been successfully loaded.');
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

