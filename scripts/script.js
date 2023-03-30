console.log('hello')

const formInputs = document.querySelectorAll('input[type="text"]', 'input[type="email"]');
function saveFormInputsToLocal() {
    // Loop over each form input and save its value to local storage
    formInputs.forEach(input => {
        let inputName = input.name; // Get the name of the input element
        let inputValue = input.value; // Get the current value of the input element
        localStorage.setItem(inputName, inputValue); // Save the input value in local storage
       
    });
}

function loadFormInputToLocal() {
    formInputs.forEach(input => {
        const inputName = input.name;
        let storedValue = localStorage.getItem(inputName);
        if(storedValue){
            input.value = storedValue
        }
    });
}

// Add event listeners to each input field
formInputs.forEach(input => {
    input.addEventListener('input', saveFormInputsToLocal);
});

// Call the function once on page load to save initial values
loadFormInputToLocal();