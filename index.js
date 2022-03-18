const navElements = {
    navMenu: document.querySelector('.navbarmenu'),
    navIcon: document.querySelector('.fa-solid')
}

function toggleMenu(){
    if(navElements.navMenu.classList.contains('navbarmenu__close')){
        navElements.navMenu.classList.remove('navbarmenu__close')
        navElements.navIcon.classList.remove('fa-bars')
        navElements.navIcon.classList.add('fa-xmark')
    } else if (!navElements.navMenu.classList.contains('navbarmenu__close')){
        navElements.navMenu.classList.add('navbarmenu__close')
        navElements.navIcon.classList.add('fa-bars')
        navElements.navIcon.classList.remove('fa-xmark')
    }
}

navElements.navIcon.onclick = toggleMenu;