const menuButton = document.getElementsByClassName('toggleMenu')[0]
const menuLinks = document.getElementsByClassName('menuLinks')[0]

menuButton.addEventListener('click', () =>{
    menuLinks.classList.toggle('active')
})