var slideIndex = 1;
var slideTotal = document.getElementsByClassName("slide-list-item").length;

showSlide(slideIndex);

function plusSlide(n) {
  changeSlide(slideIndex += n);
}

function changeSlide(n) {
  if (n < 1) {
    slideIndex = leng;
  } else {
    if (n > slideTotal) {
      slideIndex = 1;
    } else {
      slideIndex = n;
    }
  }
  showDots(slideIndex);
  showArrow(slideIndex);
  showSlide(slideIndex);
}

function showArrow(n) {
  var arrow_next = document.getElementById("arrow_next");
  var arrow_previous = document.getElementById("arrow_previous");
  if (n == 1) {
    arrow_previous.classList.add("slide__arrow--hidden");
  } else {
    arrow_previous.classList.remove("slide__arrow--hidden");
  }
  if (n == slideTotal) {
    arrow_next.classList.add("slide__arrow--hidden");
  } else {
    arrow_next.classList.remove("slide__arrow--hidden");
  }
}

function showDots(n) {
  var dots = document.getElementsByClassName("slide-dots__item");
  for (var i = 0; i < dots.length; i++) {
    if (n - 1 == i) {
      dots[i].innerHTML = '<img src="images/ic_dot_active.png" alt="">';
    } else {
      dots[i].innerHTML = '<img src="images/ic_dot.png" alt="">';
    }
  }
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide-list-item");
  for (var i=0; i < slides.length; i++) {
    slides[i].classList.remove("slide-list-item--active");
  }
  slides[n-1].classList.add("slide-list-item--active");
 }

var pageIndex = 1;

function plusPage(n) {
  changePage(pageIndex += n);
}

function changePage(n) {
  var pages = document.getElementsByClassName("paging-number__item");

  if (n < 1) {
    pageIndex = pages.length;
  } else {
    if (n > pages.length) {
      pageIndex = 1;
    } else {
      pageIndex = n;
    }
  }
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove("paging-number__item--active");
  }
  pages[pageIndex-1].classList.add("paging-number__item--active");
  showPageArrow(pageIndex);
}

function showPageArrow(n) {
  pageIndex =  n;
  if (n == 1) {
    arrow_previous.classList.add("paging__arrow--hidden");
  } else {
    arrow_previous.classList.remove("paging__arrow--hidden");
  }
  if (n == 6) {
    arrow_next.classList.add("paging__arrow--hidden");
  } else {
    arrow_next.classList.remove("paging__arrow--hidden");
  }
}

function openMenu(element) {
  id = element.id;
  child = document.getElementById(id + '_child');
  arrow = document.getElementById(id + '_arrow');
  var active = "filter-menu-item__child--active";
  if (child.classList.contains(active)) {
    child.classList.remove(active);
    arrow.classList = "fas fa-angle-right";
  } else {
    child.classList.add(active);
    arrow.classList = "fas fa-angle-down";
  }
}
