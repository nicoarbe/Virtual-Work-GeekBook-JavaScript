const a = 2 + 3 + '5';
const b = '2' + 3 + 5;

console.log(a);
console.log(b);

const explanationElement = document.querySelector('.explanation');

const content = `Al escribir en consola 2 + 3 + '5' arroja ${a}, y al escribir '2' + 3 + 5 arroja ${b}, esto es porque todo lo toma como una cadena de caracteres, donde lee de izquierda a derecha, por ello en el primer caso toma una suma y concatena la cadena, en el segundo caso toma todo como una cadena de caracteres.`;

explanationElement.innerHTML = content;