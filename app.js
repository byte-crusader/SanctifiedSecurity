const menuToggle = document.querySelector('.toggle');
const hamCheckbox = document.getElementById('ham');
const navMenu = document.getElementById('menu');
const navLinks = document.querySelectorAll('nav a');


menuToggle.addEventListener('click', () =>{
    if (!menu.classList.contains("active")) {
        menu.classList.add("active");
        navMenu.style.transform = 'translateY(0)';
        menuToggle.querySelector('span:nth-child(1)').style.width = '40px';
        menuToggle.querySelector('span:nth-child(1)').style.transform = 'translateY(0px) rotate(45deg)';
        menuToggle.querySelector('span:nth-child(2)').style.width = '40px';
        menuToggle.querySelector('span:nth-child(2)').style.transform = 'translateY(0px) rotate(315deg)';
        menuToggle.querySelector('span:nth-child(3)').style.transform = 'translateX(60px)';
        navLinks.forEach(link => {
        link.style.opacity = 1;
        link.style.transition = 'ease-in-out .6s';
        });
      } else {
        menu.classList.remove("active");
        navMenu.style.transform = 'translateY(-200%)';
        menuToggle.querySelector('span:nth-child(1)').style.width = '';
        menuToggle.querySelector('span:nth-child(1)').style.transform = '';
        menuToggle.querySelector('span:nth-child(2)').style.width = '';
        menuToggle.querySelector('span:nth-child(2)').style.transform = '';
        menuToggle.querySelector('span:nth-child(3)').style.transform = '';
        navLinks.forEach(link => {
        link.style.opacity = 0;
        link.style.transition = 'ease-in-out .6s';
        });
      }
})

