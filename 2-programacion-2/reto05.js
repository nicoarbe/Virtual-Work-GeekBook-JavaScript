let anhosVividos = 41;
const diasBisiesto = anhosVividos / 4;
const diasAnho = 365;
const horasDia = 24;
const horasVividas = (anhosVividos * diasAnho + diasBisiesto) * horasDia;

console.log('He vivido ' + horasVividas + ' horas en toda mi vida');