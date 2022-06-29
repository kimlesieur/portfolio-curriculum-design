
const navToggle = document.querySelector('.mobile-nav-toggle');
const linksList = document.getElementById('header');
const links = document.querySelectorAll('.link');
console.log(links);

navToggle.addEventListener("click", () => {
    linksList.classList.toggle("show-links");
    navToggle.classList.toggle("show-links");
});

links.forEach( link => {
    console.log(link);
    link.addEventListener("click", () => {
        linksList.classList.toggle("show-links");
        navToggle.classList.toggle("show-links");
    });
});




/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
el.addEventListener('scroll', listener)
};

/**
 * Navbar links active state on scroll
 */
let navbarlinks = document.querySelectorAll('#nav-menu .link');

const navbarlinksActive = () => {
    let position = window.scrollY + 300;
    navbarlinks.forEach( navbarlink => {
        const parent = navbarlink.parentNode;
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
            parent.classList.add('active');
        } else {
            navbarlink.classList.remove('active');
            parent.classList.remove('active');
        }
    })
};

window.addEventListener('load', navbarlinksActive);
onscroll(document, navbarlinksActive);



