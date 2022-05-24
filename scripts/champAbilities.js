function removeLetters() {
    if(!flag) return;
    let letters = document.querySelectorAll("p");
    let container = document.querySelector(".letters");
    letters.forEach(element => {
        container.removeChild(element);
    });
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    setTimeout(removeLetters,5000);
}
function playAnimation(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    let p = document.createElement('p');
    p.className = "text";
    p.textContent =String.fromCharCode(e.keyCode);
    let container = document.querySelector(".letters");
    container.appendChild(p);
}
const keys = Array.from(document.querySelectorAll('.ability'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playAnimation);
