window.onscroll = function () {
    const header = document.querySelector("header");
    const topBtn = document.getElementById("btn");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('active')
        topBtn.classList.add('block');
        topBtn.classList.remove('hidden');
    } else {
        header.classList.remove('active')
        topBtn.classList.add('hidden');
        topBtn.classList.remove('block');
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


document.querySelector('.menu-toggle').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.nav-menu').classList.toggle('hidden')
})


// =============== FAQ accordion ===============
const faqButtons = document.querySelectorAll(".accordion button");

faqButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        let menuContent = button.nextElementSibling;
        let active = document.querySelector(".accordion section.active");

        if (menuContent) {
            if (active) {
                if (button.parentElement.classList.contains("active")) {
                    button.parentElement.classList.remove("active");
                    active.lastElementChild.classList.remove('!max-h-96')
                } else {
                    active.classList.remove("active");
                    active.lastElementChild.classList.remove('!max-h-96')
                    button.parentElement.classList.add("active");
                    menuContent.classList.add('!max-h-96')
                }
            } else {
                button.parentElement.classList.add("active");
                menuContent.classList.add('!max-h-96')
            }
        }
    });
});

setTimeout(() => {
    document.querySelector('#preloader').style.display = 'none'
}, 700);

// =============== scrollReveal ===============
if (window.sr = ScrollReveal()) {
    sr.reveal('.left', {
        duration: 1500,
        distance: '40px',
        origin: 'right'
    });
    sr.reveal('.right', {
        duration: 1500,
        distance: '40px',
        origin: 'left'
    });

    sr.reveal('.first', {
        duration: 1500,
        distance: '30px'
    });
    sr.reveal('.second', {
        duration: 1500,
        distance: '30px',
        delay: 200
    });
    sr.reveal('.third', {
        duration: 1500,
        distance: '30px',
        delay: 400
    });
    sr.reveal('.fourth', {
        duration: 1500,
        distance: '30px',
        delay: 600
    });
    sr.reveal('.fifth', {
        duration: 1500,
        distance: '30px',
        delay: 800
    });
    sr.reveal('.sixth', {
        duration: 1500,
        distance: '30px',
        delay: 1000
    });
}
