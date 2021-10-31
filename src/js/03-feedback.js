import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let enteredInformation = {};

initForm();

feedbackForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log(`email: ${e.target.elements.email.value}`);
    console.log(`message: ${e.target.elements.message.value}`);
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);

})

feedbackForm.addEventListener('input', throttle(e => {
    enteredInformation[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(enteredInformation));
   }, 500) )


function initForm(){
    let receivedValues = localStorage.getItem(STORAGE_KEY);
    if(receivedValues){
        const parsRecVal = JSON.parse(receivedValues);
        Object.entries(parsRecVal).forEach(([name, value]) => {
            enteredInformation[name] = value;
            feedbackForm.elements[name].value = value;
        })
    }
   
}
