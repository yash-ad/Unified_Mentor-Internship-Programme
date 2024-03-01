// Variable declarations for error messages
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let subjectError = document.getElementById('subject-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

// Function to validate name input
function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        nameError.innerHTML = "*Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Fullname is required";
        return false;
    } else {
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

// Function to validate email input
function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = "*Email is required";
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    } else {
        emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

// Function to validate subject input
function validateSubject() {
    let subject = document.getElementById('contact-subject').value;

    if (subject.length === 0) {
        subjectError.innerHTML = "*Subject is required";
        return false;
    } else {
        subjectError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

// Function to validate message input
function validateMessage() {
    let message = document.getElementById('contact-message').value;
    let requiredCharacters = 30;
    let remainingCharacters = requiredCharacters - message.length;

    if (message == 0) {
        messageError.innerHTML = "*Message is required";
        return false;
    }
    
    if (remainingCharacters > 0) {
        messageError.innerHTML = remainingCharacters + ' more characters are required';
        return false;
    }
    
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

// Function to validate the entire form
function validateForm() {
    if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "*To submit it, please fix the error.";
        setTimeout(() => {
            submitError.style.display = "none";
        }, 3000);
        return false;
    } else {
        clearForm();
        setTimeout(() => {
            alert("Form submitted successfully");
            document.getElementById('myForm').submit();
        }, 0);
        return true;
    }
}

// Function to clear the form
function clearForm() {
    document.getElementById('myForm').reset();
    let checkIcons = document.querySelectorAll('.fa-solid.fa-circle-check');
    checkIcons.forEach(icon => {
        if (icon.parentNode) {
            icon.parentNode.removeChild(icon);
        }
    });
}

// Toggle menu functionality using jQuery
$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

// Tilt the profile picture image using VanillaTilt
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// Typed.js effect
var typed = new Typed(".typing-text", {
    strings: ["Frontend developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
});

// Change document title based on visibility
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Yash Dandnaik";
    } else {
        document.title = "Come Back To Portfolio";
    }
});

// Scroll reveal animation
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// Scroll reveal animations for various sections
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
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });
srtop.reveal('.work .box', { interval: 200 });
srtop.reveal('#contact .contact-form', { delay: 400 });
srtop.reveal('#contact .contact-info-container', { delay: 300 });

// Function to add 'active' class to the navigation link corresponding to the current section
function highlightActiveNavLink() {
    var navLinks = document.querySelectorAll('.navbar ul li a');

    document.querySelectorAll('section').forEach(function(section) {
      var top = section.offsetTop - 50;
      var bottom = top + section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        navLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });
        
        var correspondingNavLink = document.querySelector('.navbar ul li a[href="#' + section.id + '"]');
        if (correspondingNavLink) {
          correspondingNavLink.classList.add('active');
        }
      }
    });
}

// Add event listener for scrolling
window.addEventListener('scroll', highlightActiveNavLink);

// Call the function initially to highlight the active navigation link on page load
highlightActiveNavLink();


// Function to send an email:-

function sendEmail(){
let name = document.getElementById('contact-name').value;
let email = document.getElementById('contact-email').value;
let subject = document.getElementById('contact-subject').value;
let message = document.getElementById('contact-message').value;
let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Subject : ${subject} <br>  Message : ${message} <br>`;
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "yashrajdandnaik@gmail.com",
    Password : "91D7322AB6349247A97244EAFCBB92EA6CFF",
    To : 'yashdandnaik078@gmail.com',
    From : email,
    Subject :subject,
    Body :finalmessage
}).then(
  message => alert(message)
);


}