console.log('hello')
// Variabele
const inputEmail = document.getElementById("email");
const inputVoornaam = document.getElementById("voornaam");
const inputAchternaam = document.getElementById("achternaam");
const inputStudentNummer = document.getElementById("studentennumer");

console.log(inputEmail,inputVoornaam, inputAchternaam,inputStudentNummer)

if(inputEmail) {
    inputEmail.addEventListener('input', (e)=>{
        localStorage.setItem("email", inputEmail.value);
    })

    inputEmail.value = localStorage.getItem("email")
}

if(inputVoornaam) {
    inputVoornaam.addEventListener('input', (e)=>{
        localStorage.setItem("voornaam", inputVoornaam.value);
    })

    inputVoornaam.value = localStorage.getItem("voornaam")
}

if(inputAchternaam) {
    inputAchternaam.addEventListener('input', (e)=>{
        localStorage.setItem("achternaam", inputAchternaam.value);
    })

    inputAchternaam.value = localStorage.getItem("achternaam")
}

if(inputStudentNummer) {
    inputStudentNummer.addEventListener('input', (e)=>{
        localStorage.setItem("studentennummer", inputStudentNummer.value);
    })

    inputStudentNummer.value = localStorage.getItem("email")
}

// const formInputs = document.querySelectorAll('input[type="text"]', 'input[type="email"]');
// function saveFormInputsToLocal() {
//     // Loop over each form input and save its value to local storage
//     formInputs.forEach(input => {
//         const inputName = input.name; // Get the name of the input element
//         const inputValue = input.value; // Get the current value of the input element
//         localStorage.setItem(inputName, inputValue); // Save the input value in local storage
//     });
// }

// // Add event listeners to each input field
// formInputs.forEach(input => {
//     input.addEventListener('input', saveFormInputsToLocal);
// });

// // Call the function once on page load to save initial values
// saveFormInputsToLocal();