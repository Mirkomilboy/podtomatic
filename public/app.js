// =============== navigation ===============
const mobileBtn = document.querySelector(".toggle-button");
mobileBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const mobileContent = document.querySelector(".mobile-content");
  if (mobileContent.classList.contains("hidden")) {
    mobileContent.classList.add("block");
    mobileContent.classList.remove("hidden");
  } else if (mobileContent.classList.contains("block")) {
    mobileContent.classList.add("hidden");
    mobileContent.classList.remove("block");
  }
  if (mobileContent.classList.contains("block")) {
    mobileContent.style.maxHeight = mobileContent.scrollHeight + "px";
  } else {
    mobileContent.style.maxHeight = "0";
  }
});

// =============== changing bg of nav on scroll ===============
// window.onscroll = function() {scrollFunctionNav()};

// function scrollFunctionNav() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("nav").style.cssText = "background: #4527b9;";
//   } else {
//     document.getElementById("nav").style.cssText = "background: none;";
//   }
// }

window.onscroll = function() {scrollFunctionNav()};

function scrollFunctionNav() {
  // console.log('working');
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("contact").style.cssText = "background: #fff;";
    document.querySelector(".text").style.cssText = "color: #000;";
    // if (document.querySelector('.logo').classList.contains('block')) {
    //   document.querySelector('.logo').classList.remove('block');
    //   document.querySelector('.logoBlack').classList.add('block');
    // } else if (document.querySelector('.logo').classList.contains('hidden')) {
    //   document.querySelector('.logo').classList.remove('hidden');
    //   document.querySelector('.logoBlack').classList.remove('block');
    // }
  } else {
    document.getElementById("contact").style.cssText = "background: none;";
    document.querySelector(".text").style.cssText = "color: #fff;";
  }
}

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
window.onscroll = function() {scrollFunction()};

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
