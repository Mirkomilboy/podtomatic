window.onscroll = function () {
    const header = document.querySelector("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
};


document.querySelector('.menu-toggle').addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('.nav-menu').classList.toggle('hidden')
})