// let menuList = document.getElementById("nav_links");
// menuList.style.maxHeight = "0px";

// function toggleMenu() {
//     if (menuList.style.maxHeight === "0px") {
//         menuList.style.maxHeight = "300px";
//     } else {
//         menuList.style.maxHeight = "0px";
//     }
// }

function toggleMenu() {
    const navLinks = document.getElementById('nav_links');
    navLinks.classList.toggle('active');
}



// ...existing code...

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};




let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {
        // Scrolling up
        header.classList.remove('hide');
    } else {
        // Scrolling down
        header.classList.add('hide');
    }
    lastScrollY = window.scrollY;
});

