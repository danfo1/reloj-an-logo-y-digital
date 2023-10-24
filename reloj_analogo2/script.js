
const deg = 6;

const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

setInterval(() => {
    let tiempo = new Date();
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;


    hora.style.transform = `rotate(${(hr + min / 12)}deg)`;
    minuto.style.transform = `rotate(${min}deg)`;
    segundo.style.transform = `rotate(${seg}deg)`;
}, 1000);

const horaDigital = document.querySelector('.hora-digital');


function actualizarHoraDigital() {
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();

    
    const am_pm = horas >= 12 ? 'PM' : 'AM';

    
    let hora_12 = horas % 12 || 12;
    hora_12 = hora_12 < 10 ? '0' + hora_12 : hora_12;
    let minutos_12 = minutos < 10 ? '0' + minutos : minutos;
    let segundos_12 = segundos < 10 ? '0' + segundos : segundos;

    
    const hora_12_str = `${hora_12}:${minutos_12}:${segundos_12} ${am_pm}`;
    horaDigital.textContent = hora_12_str;
}


setInterval(actualizarHoraDigital, 1000);


