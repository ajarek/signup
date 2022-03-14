const inputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>
const form = document.querySelector('form') as HTMLFormElement
const inputsDiv = document.querySelectorAll('.input') as NodeListOf<HTMLDivElement>
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
function walidateInputs(inputs: NodeListOf<HTMLInputElement>): void {
    inputs.forEach((input,index) => {
        if (input.value.trim() === '') {
             renderError(`${input.name} cannot be empty`,index);       
        }
        else if (input.value.trim().length < 3) {
            renderError(`${input.name} must be at least 3 characters`,index);
        }
        else if(input.name === 'Email Address' && !input.value.match(emailRegex)) {
            renderError(`${input.name} must be a valid email`,index);
        }
        else {
            inputs[index].style.border = '1px solid green';
        }
    });
}

function clearErrors(): void {
    const errors = document.querySelectorAll('.error') as NodeListOf<HTMLElement>;
    errors.forEach(error => {
        error.remove();
    });
}
function clearErrorIcons(): void {
    const errorsIcons = document.querySelectorAll('.error-icon') as NodeListOf<HTMLElement>;
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
   

function renderError(message: string,index:number): void {
    const errorDiv = document.createElement('div')
    errorDiv.className = 'error'
    errorDiv.innerHTML = message
   const imgError = document.createElement('img')
    imgError.src = '../images/icon-error.svg'
    imgError.className = 'error-icon'
    inputsDiv[index].append(errorDiv,imgError)
   inputs[index].style.border = '1px solid red'
}
function clearInputs() {
    inputs.forEach((input,idx) => {
      input.value= ''
      
    })
}

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    walidateInputs(inputs)
    const errors = document.querySelectorAll('.error')
    if (errors.length === 0) {
        clearInputs()
    }
       
})