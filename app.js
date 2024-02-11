const menuToggle = document.querySelector('.toggle')
menuToggle.addEventListener('click', () =>{
    menuToggle.classList.toggle('active')
})

const hamCheckbox = document.getElementById('ham');
const navMenu = document.getElementById('menu');
const navLinks = document.querySelectorAll('nav a');

hamCheckbox.addEventListener('change', function() {
    if (this.checked) {
        navMenu.style.transform = 'translateY(0)';
        navLinks.forEach(link => {
            link.style.opacity = 1;
            link.style.transition = 'ease-in-out .6s';
        });
    } else {
        navMenu.style.transform = 'translateY(-200%)';
        navLinks.forEach(link => {
            link.style.opacity = 0;
            link.style.transition = 'ease-in-out .6s';
        });
    }
});
