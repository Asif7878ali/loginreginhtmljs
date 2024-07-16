document.getElementById('submitBtn').addEventListener('click', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    const formData = {
        Name: name,
        Email: email,
        Password: password
    };

    // Validate form data
    const isValid = validateFormData(formData);

    // If form data is valid, send it to the server
    if (isValid) {
        sendFormData(formData);
    }
});

const validateFormData = (formData) => {
    let isValid = true;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validate name
    if (formData.Name === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }
    if (formData.Email === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    }
    if (formData.Password === '') {
        passwordError.textContent = 'Password is required';
        isValid = false;
    }

    return isValid;
};

const sendFormData = (formData) => {
    console.log(formData);
};