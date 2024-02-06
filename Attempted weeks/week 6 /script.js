var scrollingText = document.getElementById('scrollingText');
var lastKnownScrollPosition = 0;
var ticking = false;

function updateTransform(scrollPos) {
    var newSize = 20 - scrollPos * 0.02;
    scrollingText.style.transform = 'translate(-50%, -50%) scale(' + Math.max(newSize / 20, 0.2) + ')';
}

function onScroll() {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            updateTransform(lastKnownScrollPosition);
            ticking = false;
        });

        ticking = true;
    }
}

document.addEventListener('scroll', onScroll);