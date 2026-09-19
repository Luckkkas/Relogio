function relogio() {
    const agora = new Date();

    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const ponteiroHora = document.querySelector(".hour-hand");
    const ponteiroMinuto = document.querySelector(".minute-hand");
    const ponteiroSecundo = document.querySelector(".second-hand");

    ponteiroHora.style.transform = `translateX(-50%) rotate(${horas % 12 * 30 + minutos * 0.5}deg)`;
    ponteiroMinuto.style.transform = `translateX(-50%) rotate(${minutos * 6}deg)`;
    ponteiroSecundo.style.transform = `translateX(-50%) rotate(${segundos * 6}deg)`;
    
    
}

relogio();

setInterval(relogio, 1000);