document.addEventListener("DOMContentLoaded", function () {
    // Create the form element
    const form = document.createElement('form');
    form.setAttribute('id', 'myForm');

    // Create an input field for name
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name: ';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');

    // Create an input field for email
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email: ';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');

    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';

    // Append elements to the form
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);

    // Append the form to the container
    document.getElementById('form-container').appendChild(form);

    // Add event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous error messages and classes
        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(function (error) {
            error.remove();
        });
        nameInput.classList.remove('shake');
        emailInput.classList.remove('shake');

        // Validate the form inputs
        let isValid = true;

        // Check name field
        if (nameInput.value.trim() === '') {
            isValid = false;
            const error = document.createElement('span');
            error.classList.add('error');
            error.textContent = 'Name is required';
            nameInput.parentNode.insertBefore(error, nameInput.nextSibling);
            nameInput.classList.add('shake');
        }

        // Check email field
        if (emailInput.value.trim() === '') {
            isValid = false;
            const error = document.createElement('span');
            error.classList.add('error');
            error.textContent = 'Email is required';
            emailInput.parentNode.insertBefore(error, emailInput.nextSibling);
            emailInput.classList.add('shake');
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
            isValid = false;
            const error = document.createElement('span');
            error.classList.add('error');
            error.textContent = 'Email is not valid';
            emailInput.parentNode.insertBefore(error, emailInput.nextSibling);
            emailInput.classList.add('shake');
        }

        // If the form is valid, submit the data (for now, just log it)
        if (isValid) {
            console.log('Form submitted');
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
        }
    });
});
