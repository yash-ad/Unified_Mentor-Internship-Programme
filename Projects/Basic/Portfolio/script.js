//Lets add javascript functioning for toggling menu

const toggleMenu = () => {
    const menu = document.querySelector(".menu-links"); // Select the first element with class "menu-links"
    const icon = document.querySelector(".hamburger-icon"); // Select the first element with class "hamburger-icon"
    menu.classList.toggle("open");
    icon.classList.toggle("open");
};
