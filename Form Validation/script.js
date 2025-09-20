let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});
function validate() {
    let usernameval = username.value.trim();
    let emailval = email.value.trim();
    let passwordval = password.value.trim();
    let cpasswordval = cpassword.value.trim();
     let successCount = 0; 
    let totalFields = 4;
    if(usernameval=="")
	setError(username,"Enter a valid username"); 
    else{
        setSuccess(username);
        successCount++;
    }
    if(emailval=="")
        setError(email,"Email cannot be blank");
    else if(!validateEmail(emailval))
        setError(email,"Not a valid email");
    else{
        setSuccess(email);
        successCount++;
    }
    if(passwordval=="")
        setError(password,"Password cannot be blank");
    else if(passwordval.length<8)
        setError(password,"Password must be at least 8 characters");
    else{
        setSuccess(password);
        successCount++;
    }
    if(cpasswordval=="")
        setError(cpassword,"Confirm your password");
    else if(cpasswordval!=passwordval)
        setError(cpassword,"Passwords do not match");
    else{
        setSuccess(cpassword);
        successCount++;
    }
    if (successCount === totalFields) {
        alert("🎉 Registration Successful!");
        form.reset(); 
    }
}
function setError(element, message){
    let inputGroup = element.parentElement;
    let errorElement = inputGroup.querySelector(".error")
    errorElement.innerHTML = message;
    inputGroup.classList.add("error");
    inputGroup.classList.remove("success");
}
function setSuccess(element){
    let inputGroup = element.parentElement;	
    inputGroup.classList.add("success");
    let errorElement = inputGroup.querySelector(".error");
    errorElement.innerHTML = "";
    inputGroup.classList.remove("error");
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };