function validation(){
    const message = document.getElementById('message')
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const password = document.getElementById('password').value;
    const repeatpassword = document.getElementById('repeatpassword').value;
    let regExpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
    message.style.display = "none";

    if(name.length == 0){
      message.innerText = "Please enter your full name";
      message.style.display = "block";
      return false;
    } 
    else if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)==false){
      message.innerText = "Please enter a valid email";
      message.style.display = "block";
      return false;
    }
    else if(phonenumber.trim().length != 10){
      message.innerHTML = "Phone number must be 10 digits.";
      message.style.display = "block";
      return false;
    }
    else if (password.trim().length == 0){
      message.innerHTML = " password cannot be blank";
      message.style.display = "block";
      return false;
    }
    else if (password.length < 6 || length > 20 ){
      message.innerHTML = "Password length cannot be less than 6 characters or more than 20 characters ";
      message.style.display = "block";
      return false;
    }
    else if (repeatpassword.trim().length == 0) {
      message.innerHTML = "confirm password can't be blank";
      message.style.display = "block";
      return false;    
    }
    else if (password != repeatpassword) {
      message.innerHTML = "Passwords doesn't match.";
      message.style.display = "block";
      return false;
    }
    else{
    return true;
    }
  }

  function validatePassword()
  {
    var code = document.getElementById("password");
    var passwordbar = document.getElementById("meter");
    passwordbar.style.display="block";
    let power = document.getElementById("power-point");
    password.oninput = function (){ 
    let point = 0; 
    let value = password.value; 
    let widthPower =  ["1%", "25%", "50%", "75%", "100%"]; 
    let colorPower =  ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"]; 
  
    if (value.length >= 6) { 
        let arrayTest =  
            [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/]; 
        arrayTest.forEach((item) => { 
            if (item.test(value)) { 
                point += 1; 
            } 
        }); 
    } 
    power.style.width = widthPower[point]; 
    power.style.backgroundColor = colorPower[point]; 

    code.addEventListener("keyup", function() {
      confirmpassword(code.value);
    });
};
  }
  function validateReset()
  {
    window.location.href="/signup.html";
  }
