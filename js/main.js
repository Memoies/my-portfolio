document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var homeSection = document.getElementById("home");

    // Function to check if the user has scrolled to the "home" section
    function checkScroll() {
        var scrollPosition = window.scrollY;
        var homeSectionTop = homeSection.offsetTop;
        var homeSectionHeight = homeSection.offsetHeight;
        if (scrollPosition >= homeSectionTop && scrollPosition <= (homeSectionTop + homeSectionHeight / 2)) {
            navbar.classList.add("hide-navbar"); // Add class to hide navbar
        } else {
            navbar.classList.remove("hide-navbar"); // Remove class to show navbar
        }
    }

    // Check scroll position on page load and scroll events
    checkScroll();
    window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarNav = document.querySelector(".navbar-nav");

    // Function to check if the navbar toggler button is visible
    function isNavbarTogglerVisible() {
        return window.getComputedStyle(navbarToggler).display !== "none";
    }

    // Close navbar when a link is clicked
    navbarNav.addEventListener("click", function (event) {
        if (event.target.tagName === "A" && isNavbarTogglerVisible()) {
            navbarToggler.click(); // Simulate a click on the toggler button
        }
    });

    // Add 'mobile' class to navbar links if toggler is visible
    function updateNavbarLinks() {
        if (isNavbarTogglerVisible()) {
            navbarNav.classList.add("mobile");
        } else {
            navbarNav.classList.remove("mobile");
        }
    }

    // Update navbar links on page load and resize
    updateNavbarLinks();
    window.addEventListener("resize", updateNavbarLinks);
});
