"use strict";
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const inputsDiv = document.querySelectorAll('.input');
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function walidateInputs(inputs) {
    inputs.forEach((input, index) => {
        if (input.value.trim() === '') {
            renderError(`${input.name} cannot be empty`, index);
        }
        else if (input.value.trim().length < 3) {
            renderError(`${input.name} must be at least 3 characters`, index);
        }
        else if (input.name === 'Email Address' && !input.value.match(emailRegex)) {
            renderError(`${input.name} must be a valid email`, index);
        }
        else {
            inputs[index].style.border = '1px solid green';
        }
    });
}
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.remove();
    });
}
function clearErrorIcons() {
    const errorsIcons = document.querySelectorAll('.error-icon');
    errorsIcons.forEach(icon => {
        icon.remove();
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    clearErrorIcons();
    walidateInputs(inputs);
});
function renderError(message, index) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerHTML = message;
    const imgError = document.createElement('img');
    imgError.src = '../images/icon-error.svg';
    imgError.className = 'error-icon';
    inputsDiv[index].append(errorDiv, imgError);
    inputs[index].style.border = '1px solid red';
}
function clearInputs() {
    inputs.forEach((input, idx) => {
        input.value = '';
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    walidateInputs(inputs);
    const errors = document.querySelectorAll('.error');
    if (errors.length === 0) {
        clearInputs();
    }
});
