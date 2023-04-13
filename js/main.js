// slide vertical
let wrapper = document.querySelector(".wrapper");
let pageSlider = new Swiper(".page", {
  wrapperClass: "page__wrapper",
  slideClass: "page__screen",
  direction: "vertical",
  allowTouchMove: false,
  slideToClickedSlide: false,
  slidesPerView: "auto",
  parallax: "true",
  keyboard: {
    enabled: "true",
    onlyInViewport: true,
    // pageUpDown: true,
  },
  // mousewheel: {
  //   sensitivity: 1,
  // },
  watchOverflow: true,
  speed: 800,
  observer: true,
  observePrevent: true,
  observeSlideChildren: true,
  pagination: {
    el: ".page__pagination",
    type: "bullets",
    clickable: "true",
    bulletClass: "page__bullet",
    bulletActiveClass: "page__bullet_active",
  },
  // scrollbar: {
  //   el: ".page__scroll",
  //   dragClass: "page__drag-scroll",
  //   draggable: true,
  // },
  init: false,
  on: {
    init: function () {
      wrapper.classList.add("_loaded");
    },
  },
});
function setScrollType() {}
pageSlider.init();
// slide vertical

// slide horizontal
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  allowTouchMove: false,
  slideToClickedSlide: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  //   draggable: true,
  //   snapOnRelease: true,
  // },
  slidesPerView: "auto",
  parallax: "true",
  keyboard: {
    enabled: "true",
    onlyInViewport: true,
    // pageUpDown: true,
  },
  simulateTouch: true,
  touchRadio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,
  hashNavigation: {
    watchState: true,
  },
  watchOverflow: true,
  // spaceBetween: 5,
  speed: 800,
});
// slide horizontal

// menu
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});
// menu

//likes (each one) need to FIX!!!
let item1 = document.querySelector(".item1");
let item2 = document.querySelector(".item2");
let item3 = document.querySelector(".item3");
let item4 = document.querySelector(".item4");
//
//1
function someAction() {
  item1.classList.toggle("color");
}
function createLocaoStorage() {
  if (getLocalStorage()) {
    localStorage.removeItem("item1");
  } else {
    localStorage.setItem("item1", "get");
  }
}

function getLocalStorage() {
  return localStorage.getItem("item1");
}

if (getLocalStorage()) {
  someAction();
}

document.querySelector(".item1").addEventListener("click", function () {
  createLocaoStorage();
  someAction();
});
//1
//2
function someAction2() {
  item2.classList.toggle("color");
}

function createLocaoStorage2() {
  if (getLocalStorage2()) {
    localStorage.removeItem("item2");
  } else {
    localStorage.setItem("item2", "get");
  }
}

function getLocalStorage2() {
  return localStorage.getItem("item2");
}

if (getLocalStorage2()) {
  someAction2();
}

document.querySelector(".item2").addEventListener("click", function () {
  createLocaoStorage2();
  someAction2();
});
//2
//3
function someAction3() {
  item3.classList.toggle("color");
}

function createLocaoStorage3() {
  if (getLocalStorage3()) {
    localStorage.removeItem("item3");
  } else {
    localStorage.setItem("item3", "get");
  }
}

function getLocalStorage3() {
  return localStorage.getItem("item3");
}

if (getLocalStorage3()) {
  someAction3();
}

document.querySelector(".item3").addEventListener("click", function () {
  createLocaoStorage3();
  someAction3();
});
//3
//4
function someAction4() {
  item4.classList.toggle("color");
}

function createLocaoStorage4() {
  if (getLocalStorage4()) {
    localStorage.removeItem("item4");
  } else {
    localStorage.setItem("item4", "get");
  }
}

function getLocalStorage4() {
  return localStorage.getItem("item4");
}

if (getLocalStorage4()) {
  someAction4();
}

document.querySelector(".item4").addEventListener("click", function () {
  createLocaoStorage4();
  someAction4();
});
//4
//likes

// animation text
let isInViewport = function (elem) {
  let distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

let animateOnScroll = document.querySelectorAll("._scroll-animation");

window.addEventListener(
  "scroll",
  function (event) {
    animateOnScroll.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("_scrolled");
      }
    });
  },
  false
);
