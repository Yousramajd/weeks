var fishImage = document.getElementById("fish");

var animationPaused = true;

function handleScroll() {
    var scrollDirection = getScrollDirection();
    if (scrollDirection === "down" && animationPaused) {
        fishImage.style.animationPlayState = "running";
        animationPaused = false;
    } else if (scrollDirection === "up" && !animationPaused) {
        fishImage.style.animationPlayState = "paused";
        animationPaused = true;
    }

}

function getScrollDirection() {
    var currentScroll = window.scrollY;

    if (currentScroll > (window.lastScroll || 0)) {
        window.lastScroll = currentScroll;
        return "down";
    } else {
        window.lastScroll = currentScroll;
        return "up";
    }
}

window.onscroll = function () {
    handleScroll();
};

