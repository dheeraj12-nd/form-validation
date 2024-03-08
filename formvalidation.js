function formValidation() {
    var firstname = document.myform.firstname.value.trim();
    var lastname = document.myform.lastname.value.trim();
    var email = document.myform.email.value.trim();
    var phone = document.myform.phone.value.trim();
    var message = document.myform.message.value.trim();

    // Validate First Name
    if (firstname === "") {
        alert("First Name can't be blank");
        return false;
    }

    // Validate Last Name
    if (lastname === "") {
        alert("Last Name can't be blank");
        return false;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid Email address");
        return false;
    }

    // Validate Phone Number
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid Phone Number. Please enter a 10-digit number");
        return false;
    }

    // Validate Message
    if (message === "") {
        alert("Message can't be blank");
        return false;
    }

    // If all fields pass validation, return true to submit the form
    return true;
}
