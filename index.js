const toggleButton = document.getElementsByClassName('hamburger-btn')[0]
const navbarLinks = document.getElementsByClassName ('hamburger-menu')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})