const topBtn = document.querySelector('.top-btn');
topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0});
});

window.addEventListener('scroll', debounce(onWindowScoll, 300));

function onWindowScoll() {
    if (window.pageYOffset > 50) {
        topBtn.classList.remove('fade-out');
        topBtn.classList.add('fade-in');
    } else {
        topBtn.classList.remove('fade-in');
        topBtn.classList.add('fade-out');
    }
}

// DO NOT TOUCH
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        window.clearTimeout(timer);
        window.setTimeout(() => fn(...args), delay);
    }
}