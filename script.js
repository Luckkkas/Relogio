const body = document.querySelector('body'),
hourHand = document.querySelector('.hour'),
minuteHand = document.querySelector('.minute'),
secondHand = document.querySelector('.second'),
modeSwitch = document.querySelector('.mode-switch');

 if(localStorage.getItem('mode') === 'Dark Mode') {
    body.classList.add('dark');
    modeSwitch.textContent= 'Light Mode';
 }

 modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    const isDarkMode = body.classList.contains('dark');

    modeSwitch.textContent = isDarkMode ? 'Light Mode' : 
    'Dark Mode';

    localStorage.setItem('mode', isDarkMode ? 'Dark Mode' :
        'Light Mode');
 })

 const updateTime = () => {
    const date = new Date();

    const secToDeg = (date.getSeconds() / 60) * 360;
    const minToDeg = (date.getMinutes() / 60) * 360;
    const hrToDeg = ((date.getHours() % 12) / 12) * 360
    + (date.getMinutes() / 60) * 30;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
 };

 setInterval(updateTime, 1000);

 updateTime();