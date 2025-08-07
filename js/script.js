
// Navbar scroll effect with throttling
let lastScroll = 0;
const scrollThreshold = 50;
let ticking = false;

function updateNavbar(scrollPos) {
    const navbar = document.querySelector('.navbar');
    if (scrollPos > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', function() {
    lastScroll = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateNavbar(lastScroll);
            ticking = false;
        });
        
        ticking = true;
    }
});

var slideIndex = 1;
showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active2";
  }
  // sticky navigation bar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})