const navElements = {
    navMenu: document.querySelector('.navbarmenu'),
    navIcon: document.querySelector('.fa-solid')
}

function toggleMenu(){
    if(navElements.navMenu.classList.contains('navbarmenu__close')){
        navElements.navMenu.classList.remove('navbarmenu__close')
    } else if (!navElements.navMenu.classList.contains('navbarmenu__close')){
        navElements.navMenu.classList.add('navbarmenu__close')
    }
}

navElements.navIcon.onclick = toggleMenu;