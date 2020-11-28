const dogFirstyear = 15;
const dogSecondyear = dogFirstyear + 9;
const dogThirdyear = dogSecondyear + 5;
let dogAge = 8;

if (dogAge === 1) {
    console.log(`La edad de tu perro equivale a ${dogFirstyear} años de un humano.`);
  } else if (dogAge === 2) {
    console.log(`La edad de tu perro equivale a ${dogSecondyear} años de un humano.`);
  } else if (dogAge === 3) {
    console.log(`La edad de tu perro equivale a ${dogThirdyear} años de un humano.`);
  } else if (dogAge >= 4) {
    console.log(`La edad de tu perro equivale a ${(dogAge - 3) * 5 + dogThirdyear} años de un humano.`);
  } else {
    console.log('No tengo idea de cuál es la edad de tu perro.');
  }