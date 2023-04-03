console.log('hello')
//Variabele
const textAreas = document.querySelectorAll('textarea');
const formInputs = document.querySelectorAll('input[type="text"] , input[type="email"]');
let formRadios = document.querySelectorAll('input[type="radio"]');
const testRadioButtons = document.querySelectorAll('input[type="radio"]')
const email = document.getElementById("email");



email.addEventListener("input", (event) => {
   if(email.validity.valueMissing){
       email.setCustomValidity("Ik verwacht het meest creatieve email ooit!");
   } else if (email.validity.typeMismatch) {
        email.setCustomValidity("Dit is nog geen creatieve email");
    } else {
        email.setCustomValidity("");
    }
});

//---------------------------Show the value that the user chose

testRadioButtons.forEach(button => {
    button.addEventListener('change', () => {
        const getRadioName = button.name;
        const getRadioValue = button.value;

        if (button.checked) {
            switch (getRadioName) {
                case 'wafs-lesstof-beoordeling':
                    document.querySelector('.results1').innerHTML = `Je geeft de lesstof een ${getRadioValue}.`
                    break;
                case 'wafs-uitleg-beoordeling':
                    document.querySelector('.results2').innerHTML = `Je geeft de uitleg een ${getRadioValue}.`
                    break;
                case 'wafs-eigen-inzicht':
                    document.querySelector('.results3').innerHTML = `Je geeft je eigen inzicht een ${getRadioValue}.`
                    break;
                default:
                    break;
            }
        }
    });
});


//-------------------------------------------------Feedback voor de gebruiker
textAreaValidation()
function textAreaValidation() {
    const textAreaInputs = document.querySelectorAll('textarea');


    textAreaInputs.forEach(area => {
        area.addEventListener('input', () => {
            let textAreaValues = area.value;
            let span = document.createElement('span');
            area.parentNode.insertBefore(span, area.nextSibling);

            if (textAreaValues !== '') {
                if (!area.dataset.typed) {
                    span.textContent = 'Wat een goeie mening zeg!';
                    
                }
                area.dataset.typed = 'true';
                area.classList.add('valid-data');

            } else {
                span.textContent = ''
                area.dataset.typed = '';
                area.classList.remove('valid-data')
            }
        })

        //    let textAreaNames = area.name;



    })
}

//-----------------------Textarea waarde opslaan in local storage
function textAreaFormInputToLocal() {
    textAreas.forEach(textArea => {
        let setTextAreaValue = textArea.value;
        let setTextAreaName = textArea.name;

        localStorage.setItem(setTextAreaName, setTextAreaValue)
    })


}

function loadTextareaFormInputFromLocal() {
    textAreas.forEach(textArea => {
        let getTextAreaValue = textArea.value;
        let getTextAreaName = textArea.name;

        localStorage.getItem(getTextAreaName, getTextAreaValue)
    })
}

textAreas.forEach(input => {
    input.addEventListener('input', textAreaFormInputToLocal)
})

loadTextareaFormInputFromLocal()

//-----------------------------------------Text Input opslaan in local storage
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
        if (storedValue) {
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




//------------------------------------Radio buttons Opslaan in Local Storage

function saveFormRadiosToLocal() {
    formRadios.forEach(input => {
        let inputName = input.name;
        let inputValue = input.value;
        if (input.checked) {
            localStorage.setItem(inputName, inputValue);
        }
    });
}

function loadFormRadiosFromLocal() {
    formRadios.forEach(input => {
        let inputName = input.name;
        let storedValue = localStorage.getItem(inputName);
        if (storedValue && input.value === storedValue) {
            input.checked = true;
        }
    });
}

formRadios.forEach(input => {
    input.addEventListener('change', saveFormRadiosToLocal);
});

loadFormRadiosFromLocal();


