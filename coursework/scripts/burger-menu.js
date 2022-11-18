const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navigationMenu = document.getElementsByClassName("navigation-menu")[0];

toggleButton.addEventListener('click', () =>{
    navigationMenu.classList.toggle('active');
    toggleButton.classList.toggle('active');
})
