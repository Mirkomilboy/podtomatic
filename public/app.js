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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.cssText = "background: #4527b9;";
  } else {
    document.getElementById("nav").style.cssText = "background: none;";
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
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