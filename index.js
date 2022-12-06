window.onscroll = function skicky_function() {sticky_function()};

const navbar = document.getElementById('nav1');

var navbarPosition = navbar.offsetTop;

function sticky_function() {
    if (window.scrollY >= navbarPosition) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.add('sticky');    
    }
}