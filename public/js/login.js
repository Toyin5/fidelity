//login_form.html functionality 
function toggleForms() {
    var registrationForm = document.querySelector(".form-container:not(.login-form)");
    var loginForm = document.querySelector(".form-container.login-form");
    registrationForm.classList.toggle("login-form");
    loginForm.classList.toggle("login-form");
}
  
// validation code for registration form 

function registerUser() {
    var registerName = document.getElementById("fullName").value
    var registerUser = document.getElementById("userName").value
    var registerEmail = document.getElementById("Email").value
    var registerPassword = document.getElementById("Password").value
    
    var newUser = {
        name: registerName,
        username: registerUser,
        email: registerEmail,
        password: registerPassword
    }
    
    for(i = 0; i < objPeople.length; i++) {
        if(registerUser == objPeople[i].username) {
            alert("Username already exist, please choose another")
            return
        }else if (registerPassword.length < 8) {
            alert("that password is too short, include 8 or more characters")
            return
        }
    }

    objPeople.push(newUser)
    console.log(objPeople)
}

//login functionality
function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    //loop through all the user object and confirm if the username and passwords are correct
    for (i = 0; i = objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username = " is logged in!!!")
            return
        }
        else {
            alert("User does not exist")
        }
    }
}