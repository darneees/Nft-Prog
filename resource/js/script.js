// button to scroll to top of page

let myButton = document.getElementById("scrollTop");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// loader for page

setTimeout(function () {
    $('#loader').fadeToggle();
}, 2000);


ScrollReveal().reveal('.sell-cards', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.title', {
    delay: 400,
    distance: '50px',
    origin: 'left',
    duration: 700,
    reset: true
});

ScrollReveal().reveal('.hot', {
    delay: 600,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.user', {
    delay: 600,
    distance: '50px',
    origin: 'left',
    duration: 800,
    reset: true
});

ScrollReveal().reveal('.footer-content', {
    delay: 400,
    distance: '50px',
    origin: 'right',
    duration: 700,
    reset: true
});