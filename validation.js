function validateForm() {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();

    var errorMessage = "";

    // Empty fields check
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessage += "All fields must be filled out.<br>";
    }

    // Email validity check
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessage += "Invalid email format.<br>";
    }

    // Password match check
    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match.<br>";
    }

    var errorContainer = document.getElementById('error-message');
    errorContainer.innerHTML = errorMessage;

    // Return false to prevent form submission if there are errors
    return errorMessage === "";
}
