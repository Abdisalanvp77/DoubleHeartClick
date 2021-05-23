const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');
const textEl = document.getElementById('text');

const text = `Double click on the image to love it`;
let idx = 1;
let speed = 300 / 2;
let clickTime = 0;
let timesClicked = 0;

setTimeout(writeText, 5000);

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}


loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const y = e.clientY;
    const x = e.clientX;
    const offsetLeft = e.target.offsetLeft;
    const offsetTop = e.target.offsetTop;

    const xInside = x - offsetLeft;
    const yInside = y - offsetTop;

    heart.style.top = `${yInside}px`;
    heart.style.left =`${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked;
    
    setTimeout(() => heart.remove(), 1000);
}

