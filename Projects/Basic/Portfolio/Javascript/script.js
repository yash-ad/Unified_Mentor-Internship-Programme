
//Lets create a function for an email address:-
const validateForm
 = () =>{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "yashrajdandnaik@gmail.com",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
     
}




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



