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
const menuLinks = document.querySelectorAll(".accordion button");
menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        let menuContent = link.nextElementSibling;
        let active = document.querySelector(".accordion section.active");

        if (menuContent) {
            if (active) {
                if (link.parentElement.classList.contains("active")) {
                    link.parentElement.classList.remove("active");
                    active.lastElementChild.classList.remove('!max-h-96')
                } else {
                    active.classList.remove("active");
                    active.lastElementChild.classList.remove('!max-h-96')
                    console.log(active)
                    link.parentElement.classList.add("active");
                    menuContent.classList.add('!max-h-96')
                }
            } else {
                link.parentElement.classList.add("active");
                menuContent.classList.add('!max-h-96')
            }
        }
    });
});