
let level = 1;
let score = 0;
let timer = 0;

const container = document.querySelector('.container');
const counter = document.querySelector('.counter');
const startAgainBtn = document.querySelector('.start-again')
const panel = document.querySelector('.panel')

startAgainBtn.addEventListener('click', function(){
    panel.classList.remove('open');
    start();
});


function addDropKey() {
    const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const count = level;
    for (let i = 0; i < count; i++) {
        const rnd = Math.random();
        const index = Math.round(rnd * 25);
        const key = list[index];
        const wrapper = document.createElement('div');
        wrapper.classList.add('key-block');
        wrapper.classList.add('move');
        const left = Math.round(Math.random() * (window.innerWidth - 40));
        wrapper.style.left = left + 'px';
        wrapper.style.top = 0;
        const div = document.createElement('div')
        div.textContent = key;
        wrapper.appendChild(div)
        container.appendChild(wrapper);
    }
    counter.textContent = score;
}

function explosion() {
    const audio = document.createElement('audio')
    audio.addEventListener('ended', function () {
        document.body.removeChild(audio)
    })
    audio.src = 'explosion.wav';
    document.body.appendChild(audio)
    audio.play();
}

function start() {
    timer = setInterval(addDropKey, 1000);
    window.addEventListener('keydown', function (e) {
        const key = e.key;
        const keyDivList = [...document.querySelectorAll('.key-block')];
        const matchedKeyDiv = keyDivList.find(div => {
            return key.toLowerCase() === div.textContent.toLowerCase();
        });
        if (matchedKeyDiv) {
            setTimeout(() => {
                container.removeChild(matchedKeyDiv)
            }, 200);
            matchedKeyDiv.classList.add('explosion')
            score = score + 1;
            explosion();
            if (score % 20 === 0) {
                level = level + 1;
            }
        }
    })
    window.addEventListener('animationend', function (e) {
        container.innerHTML = '';
        clearInterval(timer);
        panel.classList.add('open')
    })
}

start();
