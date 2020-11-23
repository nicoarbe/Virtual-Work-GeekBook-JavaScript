const myPartnername = 'Eliana Sáenz Flórez';
const nameElement = document.querySelector('.name');

const content = `El nombre de mi compañera es ${myPartnername}, y está compuesto por ${myPartnername.length} caracteres.`;

nameElement.innerHTML = content;