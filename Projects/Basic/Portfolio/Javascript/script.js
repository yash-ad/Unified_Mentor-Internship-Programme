//Lets create a function for required input fields:-

//Firstly lets create variables fetching from html:-
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let subjectError = document.getElementById('subject-error');
let messageError = document.getElementById('message-error');

function validateName() {
let name = document.getElementById('contact-name').value;

if(name.length === 0){
nameError.innerHTML = "*Name is required"
return false;
}

if(!name.match(/^[A-Za-z]*s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Fullname is required"
    return false;
}

else{
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}
};

function validateEmail(){
    //It retrives the value fo the contact-email input field
    let email = document.getElementById('contact-email').value;
//It checks if the empty field is an empty it will show an error.
    if(email.length === 0){
        emailError.innerHTML = "*Email is required";
        return false;
    }
//specific email if email doesnt match the specific regular expression then pattern using a regular expression to check the email is invalid .
  //It should contain alphabet and it may contain `.` or `_` and it can also contain any numeric and thereafter `@` thereafter some aplhabets and then `.` another alphabet it could be two,three or four characters.
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}/)){
        emailError.innerHTML = "Email Invalid";
        return false;
    }

    else{
        emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
         return true;
     }
}

function validateSubject(){
  let subject = document.getElementById('contact-subject').value;
  
  if(subject.length === 0){
    subjectError.innerHTML = "*Subject is required";
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
     
    if(message === 0){
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





// //Lets create a function for an email address:-
// function sendEmail () {
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "yashdandnaik078@gmail.com",
//         Password: "Success@2024",
//         To: 'yashrajdandnaik@gmail.com',
//         From: document.getElementById('email').value,
//         Subject: document.getElementById('subject').value,
//         Body: "Name: " + document.getElementById('name').value +
//             "<br> Email: " + document.getElementById('email').value +
//             "<br> Subject: " + document.getElementById('subject').value +
//             "<br> Message: " + document.getElementById('message').value
//     }).then(
//         message => {
//             alert("Message Sent Successfully");
//             // Clear input fields after successful submission
//             document.getElementById('name').value = '';
//             document.getElementById('email').value = '';
//             document.getElementById('subject').value = '';
//             document.getElementById('message').value = '';
//         }
//     );
// };




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



