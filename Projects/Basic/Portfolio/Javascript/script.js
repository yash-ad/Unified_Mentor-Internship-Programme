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


//Lets add jquery code functioning for toggling the menu:-
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

});


//Lets tilt the profile picture image using Javascript library tilt.js:-
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});


// typed js effect
var typed = new Typed(".typing-text", {
    strings: ["Frontend developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
});

// Visiting to the profile and its visibility:-
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Yash Dandnaik";
        }
        else {
            document.title = "Come Back To Portfolio"
        }
    });


    /* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });