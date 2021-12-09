
// Defining API Messages
const AN_ERROR_OCCURED_MESSAGE = 'An Error occured';
const EMAIL_ALREADY_EXIST_MESSAGE = 'Exception: Email is already registered';
const EMAIL_SUCCESSUFULLY_SAVED_MESSAGE = '';

const EMAIL_ALREADY_MESSAGE = "<span>The email you entered already exists</span>";
const FILL_FORM_MESSAGE = "<span>Please enter a valid email</span>";
const SUCCESS_MESSAGE = "<span>Successfully  sent <br>We're going to contact you in a while</span>";


const SUBSCRIPTION_API = 'https://ktech-web-api.herokuapp.com/newsletter/create/';
const forms = document.querySelectorAll('form');

forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitButton = e.target.children[1];
        sendFormData(e.target, submitButton);
    });
})

const sendFormData = (form, button) => {
    const initialContent = button.innerHTML;
    const formData = new FormData(form);
    const email = formData.get('email').trim();
    form.reset();
    console.log(email);
    if (email.length !=0) {
        /// Change the button status to a loader
        let isLoading = true;
        switchButtonToLoader(button, isLoading);
        axios.post(SUBSCRIPTION_API, { email })
            .then((response) => {
                const { data } = response;
                isLoading = false;
                /// Change back the button content to the initial content
                switchButtonToLoader(button, isLoading, initialContent);
                checkResponse(data, form);
                console.log(data);
            })
            .catch((error) => {
                console.log(AN_ERROR_OCCURED_MESSAGE);
                console.log(error);
            })
    }
    else {
        let nextSubl=form.nextElementSibling;
        nextSubl.classList.remove('disabled');
        nextSubl.classList.add('enabled');
        nextSubl.innerHTML = FILL_FORM_MESSAGE;
        form.nextElementSibling.classList.add('warning');
        setTimeout(() => {
            // Hide the messsage box
            nextSubl.classList.remove("warning");
            nextSubl.classList.add('disabled');
            nextSubl.classList.remove('enabled');
            nextSubl.style.opacity="0";
        }, 7000);
    }
}
const checkResponse = (data, form) => {
    let nextSiblingElement = form.nextElementSibling;
    nextSiblingElement.classList.remove('disabled');
    let classAdd;
    if (data.message == EMAIL_ALREADY_EXIST_MESSAGE && data.email==undefined) {
        /// Tell that the email already exists
        nextSiblingElement.innerHTML = EMAIL_ALREADY_MESSAGE;
        classAdd="warning";
    }
    // else if (data.message != '' && data.message!=EMAIL_ALREADY_EXIST_MESSAGE) {
    //     // Be sure to see all the required fields 
    //     nextSiblingElement.innerHTML = FILL_FORM_MESSAGE;
    //     classAdd="warning";
    // }
    else {
        nextSiblingElement.innerHTML = SUCCESS_MESSAGE;
        classAdd="success";
    }
    nextSiblingElement.classList.add(classAdd);
    nextSiblingElement.style.opacity="1"; // Reset opacity
    setTimeout(() => {
        // Hide the messsage box
        nextSiblingElement.classList.remove(classAdd);
        nextSiblingElement.classList.add('disabled');
        nextSiblingElement.style.opacity="0";
    }, 7000);
}

const switchButtonToLoader = (button, isLoading, buttonInitialContent) => {
    let content;
    if (isLoading) {
        content = "<i class=\"fa fa-refresh fa-spin fa-3x fa-fw\" style=\"font-size: 1.9rem;\"></i><span class=\"sr-only\">Loading...</span>";
    }
    else {
        content = buttonInitialContent;
    }
    button.innerHTML = content;
}