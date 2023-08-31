const menuBar = document.querySelector(".menu");
const menuOverlay = document.querySelector(".menu-overlay");

window.addEventListener('keydown', function(event) {
    if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
        event.preventDefault(); 
        window.location.href = 'index.html';
    }
});//按F5回到首頁

window.onscroll = ()=>{
    menuBar.classList.remove("active");
    menuOverlay.classList.remove("active");
};

ScrollReveal({ 
    //reset: true,
    distance:"50px",
    duration:2000,
    delay:200
});
ScrollReveal().reveal(".heading", {origin:"top"});
ScrollReveal().reveal(".dealership-box", {origin:"left"});
ScrollReveal().reveal(".service-box, .product-box", {origin:"bottom"});