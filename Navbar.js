
        const hamburger = document.getElementById('hamburger');
        const navlinks = document.getElementById('navlinks');

        hamburger.addEventListener('click', () => {
            navlinks.classList.toggle('active');
        });
    
        window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {   // after scrolling 50px
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });