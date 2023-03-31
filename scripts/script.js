console.log('hello')
//Variabele
const textAreas = document.querySelectorAll('textarea');


const formInputs = document.querySelectorAll('input[type="text"] , input[type="email"]');
let formRadios = document.querySelectorAll('input[type="radio"]');

// console.log(textAreas.target.value)
textAreaValidation()


function textAreaValidation() {
    const textAreaInputs = document.querySelectorAll('textarea');
    
    textAreaInputs.forEach(area => {
        area.addEventListener('input', () =>{
            let textAreaValues = area.value;  

            if (textAreaValues !== '') {
                area.classList.add('valid-data')
            } else {
                area.classList.remove('valid-data')
            }
        } )
     
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

function loadTextareaFormInputFromLocal(){
    textAreas.forEach(textArea => {
        let getTextAreaValue = textArea.value;
        let getTextAreaName = textArea.name;

        localStorage.getItem(getTextAreaName, getTextAreaValue)
    })
}

textAreas.forEach(input =>{
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


