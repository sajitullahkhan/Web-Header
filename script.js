let mouseMove = e => {
    let p = e.clientX / window.innerWidth * 100;
    right.style.width = `${p}%`;
}

let head = document.getElementById('head');

head.addEventListener('mouseenter', () => {
    document.onmousemove = e => mouseMove(e);

});
head.addEventListener('mouseleave', () => {
    document.onmousemove = null;

});



