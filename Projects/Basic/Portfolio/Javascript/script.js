//Lets create a function for required input fields:-

//Firstly lets create variables fetching from html:-
//Variable declarations:-(To display error)
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let subjectError = document.getElementById('subject-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

//Function declarations:-
function validateName(){
    let name = document.getElementById('contact-name').value;

    if(name.length === 0){
nameError.innerHTML = "*Name is required";
return false;
    }

if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Fullname is required"
    return false;
}
    
    else{
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
};



 function validateEmail(){
    let email = document.getElementById('contact-email').value; //It will store the value, written in the input of variable called `email` 

    if(email.length === 0){
        emailError.innerHTML = "*Email is required";
        return false;
            };
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ //It should contain alphabet and it may contain `.` or `_` and it can also contain any numeric and thereafter `@` thereafter some aplhabets and then `.` another alphabet it could be two,three or four characters.
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    else{
       emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
 };

function validateSubject(){
let subject = document.getElementById('contact-subject').value;

if(subject.length === 0){
    subjectError.innerHTML = "*Subject is required"
    return false;
}
else{
 subjectError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
     return true;
 }
}

 function validateMessage(){
let message = document.getElementById('contact-message').value;
let requiredCharacters = 30; //30 characters is required.
let remainingCharacters = requiredCharacters - message.length; //left (remaining) characters while user typing - message (How much characters is left)
 
if(message == 0){
    messageError.innerHTML = "*Message is required"
    return false;
 }
if(remainingCharacters > 0){
    messageError.innerHTML = remainingCharacters + ' more characters are required';
    return false;
}
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

 }

 function validateForm(){
    if(!validateName()  || !validateEmail() || !validateSubject || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "*To submit it, please fix the error."
        setTimeout(()=>{
            submitError.style.display = "none";
        },3000)
        return false;
}
else {
    clearForm(); // Assuming you have a clearForm() function
        setTimeout(() => {
            alert("Form submitted successfully");
            document.getElementById('myForm').submit(); // Assuming your form has the ID 'myForm'
        }, 0);
        return true;
}
};


function clearForm(){
    document.getElementById('myForm').reset(); // Assuming your form has the ID 'myForm'
    let checkIcons = document.querySelectorAll('.fa-solid.fa-circle-check');
    
   checkIcons.forEach((icon)=>{
icon.parentNode.removeChild(icon)
   })
};


//Lets add javascript functioning for toggling the menu:-
const toggleMenu = () => {
    const menu = document.querySelector(".menu-links"); // Select the first element with class "menu-links"
    const icon = document.querySelector(".hamburger-icon"); // Select the first element with class "hamburger-icon"
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};


//Lets tilt the profile picture image using Javascript library tilt.js
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Frontend developer"],
    loop: true,
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 500,
});
