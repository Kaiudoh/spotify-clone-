const music1 = new Audio('EnterSandman.mp3')
const music2 = new Audio('Sad.mp3')
const music3 = new Audio('Unforgiven.mp3')
const music4 = new Audio('NothingElse.mp3')
const music5 = new Audio('Dont.mp3')

// Adicionando títulos das músicas
const musicTitles = {
    'EnterSandman.mp3': 'Enter Sandman - Metallica',
    'Sad.mp3': 'Sad But True - Metallica',
    'Unforgiven.mp3': 'The Unforgiven - Metallica',
    'NothingElse.mp3': 'Nothing Else Matters - Metallica',
    'Dont.mp3': "Don't Tread On Me - Metallica"
};

let Play = document.getElementById('song1');
let Play2 = document.getElementById('song2');
let Play3 = document.getElementById('song3');
let Play4 = document.getElementById('song4');
let Play5 = document.getElementById('song5');

let play = document.getElementById('pause')
let voltar = document.getElementById('voltar')
let pular = document.getElementById('pular')
let wave = document.getElementsByClassName('wave')[0];
let titulo = document.querySelector('.titulo');

function updateMusicTitle(music) {
    const musicSrc = music.src.split('/').pop();
    titulo.innerText = musicTitles[musicSrc];
}

Play.addEventListener('click', () => {
    if (music1.paused, music2.paused, music3.paused, music4.paused, music5.paused) {
        music1.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        music2.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        updateMusicTitle(music1);
    }
    else {
        music1.pause()
        wave.classList.remove('action2')
    }
})
Play2.addEventListener('click', () => {
    if (music1.paused, music2.paused, music3.paused, music4.paused, music5.paused) {
        music2.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        music1.pause()
        music3.pause()
        music4.pause()
        music5.pause()
        updateMusicTitle(music2);
    }
    else {
        music2.pause()
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('action2')
    }
})
Play3.addEventListener('click', () => {
    if (music1.paused, music2.paused, music3.paused, music4.paused, music5.paused) {
        music3.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        music1.pause()
        music2.pause()
        music4.pause()
        music5.pause()
        updateMusicTitle(music3);
    }
    else {
        music3.pause()
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('action2')
    }
})
Play4.addEventListener('click', () => {
    if (music1.paused, music2.paused, music3.paused, music4.paused, music5.paused) {
        music4.play();
        play.classList.add('bi-pause-fill')
        play.classList.remove('bi-play-fill')
        wave.classList.add('active2')
        music1.pause()
        music2.pause()
        music3.pause()
        music5.pause()
        updateMusicTitle(music4);
    }
    else {
        music4.pause()
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('action2')
    }
})
Play5.addEventListener('click', () => {
    if (music1.paused, music2.paused, music3.paused, music4.paused, music5.paused) {
        music5.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        music1.pause()
        music2.pause()
        music3.pause()
        music4.pause()
        updateMusicTitle(music5);
    }
    else {
        music5.pause()
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('action2')
    }
})
play.addEventListener('click', () => {
    if (!music1.paused) {
        music1.pause();
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('active2')
    }
    else if (!music2.paused) {
        music2.pause();
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('active2')
    }
    else if (!music3.paused) {
        music3.pause();
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('active2')
    }
    else if (!music4.paused) {
        music4.pause();
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('active2')
    }
    else if (!music5.paused) {
        music5.pause();
        play.classList.add('bi-play-fill')
        play.classList.remove('bi-pause-fill')
        wave.classList.remove('active2')
    }
    else {
        // Se nenhuma música estiver tocando, toca a última que estava tocando
        if (music1.currentTime > 0) {
            music1.play();
            play.classList.remove('bi-play-fill')
            play.classList.add('bi-pause-fill')
            wave.classList.add('active2')
        }
        else if (music2.currentTime > 0) {
            music2.play();
            play.classList.remove('bi-play-fill')
            play.classList.add('bi-pause-fill')
            wave.classList.add('active2')
        }
        else if (music3.currentTime > 0) {
            music3.play();
            play.classList.remove('bi-play-fill')
            play.classList.add('bi-pause-fill')
            wave.classList.add('active2')
        }
        else if (music4.currentTime > 0) {
            music4.play();
            play.classList.remove('bi-play-fill')
            play.classList.add('bi-pause-fill')
            wave.classList.add('active2')
        }
        else if (music5.currentTime > 0) {
            music5.play();
            play.classList.remove('bi-play-fill')
            play.classList.add('bi-pause-fill')
            wave.classList.add('active2')
        }
        else {
            // Se nenhuma música foi tocada ainda, começa com a primeira
            music1.play();
            play.classList.remove('bi-play-fill')
            play.classList.add('bi-pause-fill')
            wave.classList.add('active2')
            updateMusicTitle(music1);
        }
    }
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.querySelector('.currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

function updateTimer(music) {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime / music.duration) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
}

music1.addEventListener('timeupdate', () => updateTimer(music1));
music2.addEventListener('timeupdate', () => updateTimer(music2));
music3.addEventListener('timeupdate', () => updateTimer(music3));
music4.addEventListener('timeupdate', () => updateTimer(music4));
music5.addEventListener('timeupdate', () => updateTimer(music5));

seek.addEventListener('change', () => {
    if (!music1.paused) music1.currentTime = seek.value * music1.duration / 100;
    if (!music2.paused) music2.currentTime = seek.value * music2.duration / 100;
    if (!music3.paused) music3.currentTime = seek.value * music3.duration / 100;
    if (!music4.paused) music4.currentTime = seek.value * music4.duration / 100;
    if (!music5.paused) music5.currentTime = seek.value * music5.duration / 100;
})

// Adicionando funcionalidade para o botão voltar
voltar.addEventListener('click', () => {
    if (!music1.paused) {
        music1.pause();
        music5.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music5);
    }
    else if (!music2.paused) {
        music2.pause();
        music1.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music1);
    }
    else if (!music3.paused) {
        music3.pause();
        music2.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music2);
    }
    else if (!music4.paused) {
        music4.pause();
        music3.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music3);
    }
    else if (!music5.paused) {
        music5.pause();
        music4.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music4);
    }
});

// Adicionando funcionalidade para o botão pular
pular.addEventListener('click', () => {
    if (!music1.paused) {
        music1.pause();
        music2.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music2);
    }
    else if (!music2.paused) {
        music2.pause();
        music3.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music3);
    }
    else if (!music3.paused) {
        music3.pause();
        music4.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music4);
    }
    else if (!music4.paused) {
        music4.pause();
        music5.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music5);
    }
    else if (!music5.paused) {
        music5.pause();
        music1.play();
        play.classList.remove('bi-play-fill')
        play.classList.add('bi-pause-fill')
        wave.classList.add('active2')
        updateMusicTitle(music1);
    }
});

