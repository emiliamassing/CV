const menuButton = document.getElementsByClassName('toggleMenu')[0]
const menuLinks = document.getElementsByClassName('menuLinks')[0]

//Ger menuLinks klassen active när man klickar på knappen vilket öppnar menyn
menuButton.addEventListener('click', () =>{
    menuLinks.classList.toggle('active')
})

//Tar bort active när man klickar på en av länkarna. Gäller alla länkar
document.querySelectorAll('.listItem').forEach(n => n.
    addEventListener('click', () => {
        menuButton.classList.remove('active');
        menuLinks.classList.remove('active');
    }))