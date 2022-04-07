const navBar = document.querySelector ('.navbar-fixed');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    const visibility = navBar.getAttribute('data-visible');

    if (visibility === 'false') {
        navBar.setAttribute('data-visible', true)
        menuToggle.setAttribute('aria-expanded', true)
    }   else if (visibility ==='true') {
        navBar.setAttribute('data-visible', false)
        menuToggle.setAttribute('aria-expanded', false)
    }
});