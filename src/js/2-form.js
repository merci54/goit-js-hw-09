const form = document.querySelector('.feedback-form');
const emailElement = form.elements.email;
const messageElement = form.elements.message;

const formStorageKey = "feedback-form-state";

let formData = {
    email: "",
    message: ""
}



const populateInputs = () => {
    const data = JSON.parse(localStorage.getItem(formStorageKey));

    if (data) {
        emailElement.value = data.email.trim() || "";
        messageElement.value = data.message.trim() || "";

    }
}
populateInputs()



const handleInput = e => {

    formData.email = emailElement.value.trim();
    formData.message = messageElement.value.trim();

    localStorage.setItem(formStorageKey, JSON.stringify(formData));


}

const handleSubmit = e => {
    e.preventDefault();
    if (!e.target.elements.email.value || !e.target.elements.message.value) {
        alert("Fill please all fields");
        return

    }
    console.log({
        email: e.target.elements.email.value.trim(),
        message: e.target.elements.message.value.trim()
    });

    form.reset();
    localStorage.removeItem(formStorageKey);
    formData = {
        email: "",
        message: ""
    }


}
form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit)

