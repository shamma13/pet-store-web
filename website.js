const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const errorElement = document.getElementById('error');

form.addEventListener('submit', e => {
    let messages = []
    if (email.value === '' || email.value == null) {
        messages.push('email is required')
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }
    

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value != passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};







function checkForm(form) {
//     if (form.inputfield.value == "") {
//         alert("Error: input is empty!");
//         form.inputfield.focus();
//         return false;
//     }
      
//       var re = /^[\w ]+$/;

//       if(!re.test(form.inputfield.value)) {
//         alert("Error: Input contains invalid characters!");
//         form.inputfield.focus();
//         return false;
//       }

      if(!form.checkboxfield.checked) {
        alert("The checkbox IS NOT checked");
        form.checkboxfield.focus();
        return false;
      }
  
      return true;
}

// function validation() {
//     var form = document.getElementById("ownerEmail");
//     var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//     if (ownerEmail.match(pattern))
//     {
//         form.classList.add("valid");
//         form.classList.remove("invalid");
//         text.innerHTML = "Your Email Address in Valid.";
//         text.style.color = "#00ff00";
//     }
//     else {
//         form.classList.remove("valid");
//         form.classList.add("invalid");
//         text.innerHTML = "Please Enter Valid Email Address";
//         text.style.color = "#ff0000";
//     }

//     if (email == "") {
//         form.classList.add("valid");
//         form.classList.remove("invalid");
//         text.innerHTML = "Your Email Address is invalid"
//         text.style.color = "#00ff00";
//     }
// }