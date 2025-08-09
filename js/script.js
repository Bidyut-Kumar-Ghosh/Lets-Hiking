
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

// Toggle navigation menu for mobile
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');
    const bars = document.querySelectorAll('.toggle-button .bar');
    
    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate the bars to form an X
            bars.forEach(bar => {
                bar.classList.toggle('active');
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks && navLinks.contains(event.target);
        const isClickOnToggle = toggleButton && toggleButton.contains(event.target);
        
        if (navLinks && toggleButton && !isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            bars.forEach(bar => {
                bar.classList.remove('active');
            });
        }
    });
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
// Mobile Menu Toggle
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    
    // Animate hamburger to X
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !toggleButton.contains(e.target)) {
        navLinks.classList.remove('active');
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.remove('active');
        });
    }
});

// Close mobile menu when clicking a link
const navLinksAll = document.querySelectorAll('.nav-links a');
navLinksAll.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.classList.remove('active');
        });
    });
});