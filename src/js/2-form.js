let formData = {email: "", message: ""}
const formEl = document.querySelector('.feedback-form');
const inputEl = formEl.elements[0];
const textareaEl = formEl.elements[1];

if (localStorage.getItem('feedback-form-state')) {
    const { email, message } = JSON.parse(localStorage.getItem('feedback-form-state'))
    inputEl.value = email;
    textareaEl.value = message;
}

const onInput = e => {
    formData.email = inputEl.value.trim();
    formData.message = textareaEl.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};
formEl.addEventListener('input', onInput);



const onSubmit = e => {
    e.preventDefault()
    if (!inputEl.value.trim() || !textareaEl.value.trim())
        alert('Fill please all fields')
    else {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formData = { email: "", message: "" };
        formEl.reset();
    }
}

formEl.addEventListener('submit', onSubmit);