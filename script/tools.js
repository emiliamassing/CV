const menuButton = document.getElementsByClassName('toggleMenu')[0]
const menuLinks = document.getElementsByClassName('menuLinks')[0]

let menuOpen = false;

//Ger menuLinks klassen active när man klickar på knappen vilket öppnar menyn
menuButton.addEventListener('click', () =>{
    menuOpen = !menuOpen;
    if(!menuOpen) menuButton.blur();  //"Tar bort" focus från knappen 
    menuLinks.classList.toggle('active');
    menuButton.classList.toggle('active');
})

//Tar bort active när man klickar på en av länkarna. Gäller alla länkar
document.querySelectorAll('.listItem').forEach(n => n.
    addEventListener('click', () => {
        menuOpen = false;
        menuButton.blur();
        menuButton.classList.remove('active');
        menuLinks.classList.remove('active');
}))