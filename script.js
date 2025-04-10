const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const hours = document.querySelector('.hours');
const digitalClock = document.querySelector('.digital-clock');

let currentSeconds = 0;
let currentMinutes = 0;
let currentHours = 0;

setInterval(() => {
    const date = new Date();
    date.getSeconds() === 0 ? currentSeconds = date.getSeconds() : currentSeconds = date.getSeconds();
    date.getMinutes() === 0 ? currentMinutes = date.getMinutes() : currentMinutes = date.getMinutes();
    date.getHours() === 0 ? currentHours = date.getHours() : currentHours = date.getHours();

    hours.style.transformOrigin = 'bottom';
    hours.style.transform = `rotate(${currentHours * 30}deg)`;
    hours.style.transition = 'transform 1s steep(1)';

    minutes.style.transformOrigin = 'bottom';
    minutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    minutes.style.transition = 'transform 1s steep(1)';

    seconds.style.transformOrigin = 'bottom';
    seconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
    seconds.style.transition = 'transform 1s steep(1)';

    currentHours < 10 ? currentHours = `0${currentHours}` : currentHours = currentHours;
    currentMinutes < 10 ? currentMinutes = `0${currentMinutes}` : currentMinutes = currentMinutes;
    currentSeconds < 10 ? currentSeconds = `0${currentSeconds}` : currentSeconds = currentSeconds;

    digitalClock.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`;

}, 1000);