// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

// Function to toggle the menu visibility
function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("responsive");
}

// TECH CATEGORIES REDIRECTION //
function redirectToBestUI() {
    // Redirect to the bestui.html page
    window.location.href = 'components/bestui.html';
}

function redirectToSusFut() {
    // Redirect to the bestui.html page
    window.location.href = 'components/techsustain.html';
}

function redirectToLearnedu() {
    // Redirect to the bestui.html page
    window.location.href = 'components/techlearn.html';
}

function redirectToTechimple() {
    // Redirect to the bestui.html page
    window.location.href = 'components/successfultech.html';
}

function redirectToFintech() {
    // Redirect to the bestui.html page
    window.location.href = 'components/financialtech.html';
}




// FOOD CATEGORIES REDIRECTION //
function redirectToFoodevolve() {
    // Redirect to the bestui.html page
    window.location.href = 'components/foodevolve.html';
}

function redirectToHealthyplan() {
    // Redirect to the bestui.html page
    window.location.href = 'components/healthyplan.html';
}





// SLIDESHOW FUNCTIONALITY //
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Automatic slideshow
let slideInterval = setInterval(function() {
  plusSlides(1); // Call plusSlides with an argument to move to the next slide
}, 2000);

// Pause the slideshow when hovering over the container
let slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', function() {
  clearInterval(slideInterval);
});

// Resume the slideshow when mouse leaves the container
slideshowContainer.addEventListener('mouseleave', function() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 4000);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}