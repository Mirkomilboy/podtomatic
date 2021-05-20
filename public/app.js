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



// =============== accordion ===============
const menuLinks = document.querySelectorAll(".accordion button");
menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    let menuContent = link.nextElementSibling;
    let active = document.querySelector(".accordion section.active");

    if (menuContent) {
      if (active) {
        if (link.parentElement.classList.contains("active")) {
          link.parentElement.classList.remove("active");
          active.lastElementChild.style.height = "0";
        } else {
          active.classList.remove("active");
          active.lastElementChild.style.height = "0";
          link.parentElement.classList.add("active");
          menuContent.style.height = menuContent.scrollHeight + "px";
        }
      } else {
        link.parentElement.classList.add("active");
        menuContent.style.height = menuContent.scrollHeight + "px";
      }
    }
  });
});

// =============== back to bop link ===============
const topBtn = document.getElementById("btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.classList.add('block');
    topBtn.classList.remove('hidden');
  } else {
    topBtn.classList.add('hidden');
    topBtn.classList.remove('block');
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// =============== scrollReveal ===============
if (window.sr = ScrollReveal()) {
  sr.reveal('.left', {
    duration: 2000,
    distance: '30px',
    origin: 'right'
  });
  sr.reveal('.right', {
    duration: 2000,
    distance: '30px',
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
