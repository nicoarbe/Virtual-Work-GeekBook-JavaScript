let anhosVividos = document.querySelector('.age').innerHTML;
const diasBisiesto = parseInt(anhosVividos) / 4;
const diasAnho = 365;
const horasDia = 24;
const horasVividas = (parseInt(anhosVividos) * diasAnho + diasBisiesto) * horasDia;

console.log(`He vivido ${horasVividas} horas en toda mi vida`);