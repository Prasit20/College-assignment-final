const menuBtn = document.getElementById('menuOpen');
const closeBtn = document.getElementById('menuClose');
let navOverlayBg = document.querySelector('.carNavOverlayBg');

menuBtn.onclick = function() {
    navOverlayBg.style.display = 'block';
    navOverlayBg.style.transition = 'all 0.5s ease-in-out';
}
closeBtn.onclick = function() {
    navOverlayBg.style.display = 'none';
    navOverlayBg.style.transition = 'all 0.5s ease-in-out';
}